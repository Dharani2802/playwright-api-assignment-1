import { test, expect } from "@playwright/test";
 
test.describe("API Assignment 2 - Final Version", () => {
  test("GET request example - Users from JSONPlaceholder", async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    console.log("Status Code:", response.status());
    const responseBody = await response.json();
    console.log(responseBody);
 
    expect(response.status()).toBe(200);
    expect(responseBody.length).toBeGreaterThan(0);
  });
});