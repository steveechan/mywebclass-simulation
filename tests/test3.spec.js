import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://steveechan.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('img', { name: 'doesnt work' }).nth(1).click();
  await page.getByRole('heading', { name: 'Section 2' }).click();
  await page.locator('p:nth-child(3)').first().click({
    clickCount: 3
  });
  await page.getByText('Section 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor').click();
  await page.locator('p:nth-child(6)').first().click();
  await page.locator('p:nth-child(6)').first().click();
});
