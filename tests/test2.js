import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://steveechan.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('img', { name: 'doesnt work' }).nth(1).click();
  await page.getByRole('img', { name: 'doesnt work' }).nth(2).dblclick();
  await page.getByRole('link', { name: 'Learn' }).nth(2).click();
});
