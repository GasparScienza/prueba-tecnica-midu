import { URL2, URL_LOCALHOST } from '../src/const'
// @ts-check
import { test, expect } from '@playwright/test';

test('app shows random fact', async ({ page }) => {
  await page.goto(URL_LOCALHOST)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log('Consola',{textContent, imageSrc})
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com')).toBeTruthy()
});

