import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://steveechan.github.io/mywebclass-simulation/');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('img', { name: 'doesnt work' }).nth(2).click();
  await page.getByRole('img', { name: 'doesnt work' }).nth(1).click();
  await page.getByRole('img', { name: 'doesnt work' }).first().click();
  await page.getByRole('link', { name: 'Content Template' }).click();
  await page.getByRole('link', { name: 'Section 2' }).click();
  await page.getByRole('link', { name: 'Section 4' }).click();
  await page.getByText('Section 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor').click();
  await page.locator('#section4 > p:nth-child(4)').dblclick();
  await page.locator('#section4 > p:nth-child(5)').click({
    clickCount: 3
  });
  await page.locator('#section4 > p:nth-child(5)').dblclick();
  await page.locator('#section4 > p:nth-child(5)').click();
  await page.locator('#section4 > p:nth-child(3)').click({
    clickCount: 8
  });
  await page.locator('#section4 > p:nth-child(5)').click({
    clickCount: 7
  });
  await page.getByText('Section 4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor').click();
  await page.locator('#section4 > p').first().click();
});
