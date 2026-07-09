import { test, expect } from '@playwright/test'


test('verify test handling in iframe', async({ page }) => {

    await page.goto('https://letcode.in/frame')

    const frame = page.frameLocator('#firstFr')

    const nameInput = await frame.locator('[name="fname"]')

    await nameInput.fill('George')

    await expect(nameInput).toHaveValue('George')
})