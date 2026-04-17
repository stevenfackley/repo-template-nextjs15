import { expect, test } from "@playwright/test";

test("healthz returns ok", async ({ request }) => {
  const res = await request.get("/healthz");
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.status).toBe("ok");
});

test("root page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
