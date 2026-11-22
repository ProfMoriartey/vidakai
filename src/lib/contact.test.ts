// Run with: pnpm test
import assert from "node:assert/strict";
import { test } from "node:test";
import { contactEmailHtml, contactSchema, escapeHtml, isRateLimited } from "./contact.ts";

void test("escapes HTML in every field", () => {
  const html = contactEmailHtml({
    name: "<b>x</b>",
    email: "a@b.co",
    message: `<img src=x onerror="alert(1)">\nline two`,
  });
  assert.ok(!html.includes("<img"));
  assert.ok(!html.includes("<b>x"));
  assert.ok(html.includes("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;<br>line two"));
  assert.equal(escapeHtml(`'&`), "&#39;&amp;");
});

void test("validates name, email and message", () => {
  assert.equal(contactSchema.safeParse({ name: "Ali", email: "ali@example.com", message: "I need a site for my cafe." }).success, true);
  assert.equal(contactSchema.safeParse({ name: " ", email: "ali@example.com", message: "I need a site for my cafe." }).success, false);
  assert.equal(contactSchema.safeParse({ name: "Ali", email: "nope", message: "I need a site for my cafe." }).success, false);
  assert.equal(contactSchema.safeParse({ name: "Ali", email: "ali@example.com", message: "hi" }).success, false);
});

void test("rejects a filled honeypot", () => {
  assert.equal(
    contactSchema.safeParse({ name: "Ali", email: "ali@example.com", message: "I need a site for my cafe.", company: "spam" }).success,
    false,
  );
});

void test("rate limits after five tries in ten minutes", () => {
  const t = 1_000_000;
  for (let i = 0; i < 5; i++) assert.equal(isRateLimited("ip-1", t + i), false);
  assert.equal(isRateLimited("ip-1", t + 10), true);
  assert.equal(isRateLimited("ip-2", t + 10), false);
  assert.equal(isRateLimited("ip-1", t + 11 * 60_000), false);
});
