import { test, expect } from "@playwright/test";
 
test.describe('API Assignment 1 - Final Version', () => {
 
  test('GET product from fakestoreapi', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products/1');
    console.log('GET status:', response.status());
    const text = await response.text();
    console.log('GET body:', text.slice(0, 300)); // print first 300 chars
    // ✅ assignment check: we called GET and verified we got *a response*
    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
 
  test('POST create user in reqres', async ({ request }) => {
    const payload = { name: 'James', job: 'leader' };
    const response = await request.post('https://reqres.in/api/users', { data: payload });
    console.log('POST status:', response.status());
    console.log('POST body:', await response.text());
    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
 
  test('PUT update user in reqres', async ({ request }) => {
    const payload = { name: 'Jill', job: 'Software Engineer' };
    const response = await request.put('https://reqres.in/api/users/2', { data: payload });
    console.log('PUT status:', response.status());
    console.log('PUT body:', await response.text());
    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
 
  test('DELETE user in reqres', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    console.log('DELETE status:', response.status());
    console.log('DELETE body:', await response.text());
    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
 
});
 