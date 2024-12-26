import { test, expect } from '@playwright/test';
const components = require('../fixtures/pages');
import { faker } from '@faker-js/faker';
test('TC-01 Creating a New Quote', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('/');
  let firstName = faker.name.firstName();
  console.log(firstName);
  const createNewQuote = new components.newOrder(page);
  const createNewLineItem = new components.newLineItem(page);
  await createNewQuote.clickingOnNewQuote();
  await createNewQuote.enterQuoteDetails();
  await expect(page.locator('li#quote-tabs_details a')).toHaveClass(/active/);
  await createNewLineItem.clickingLineItemsTab();
  await expect(page).toHaveURL(/line-items/);
  await expect(page.getByRole('button', { name: 'Toggle Dropdown' }), {
    message: 'Validating dropdown is visible ',
  }).toBeVisible();
  await createNewLineItem.clickingNewLineItembutton();
  await createNewLineItem.selectProductItem();
  await test.step('Validating the quantity tab should be disabled', async () => {
    await expect(page.locator('#quantityInput')).toBeDisabled();
  });
  await test.step("Validating the value in Quantity tab should be '1' ", async () => {
    await expect(page.locator('#quantityInput')).toHaveValue('1');
  });
  await createNewLineItem.productConfigure();
  await test.step('Validating the Line Items page should be open', async () => {
    await expect(
      page.locator('#breadcrumbs').getByText('Line Items')
    ).toBeVisible();
  });
  await test.step("Validating the '-' button to be disabled", async () => {
    await expect(page.getByTitle('Decrement')).toBeDisabled();
  });
  await test.step("Validating the value of quantity option should be '1' ", async () => {
    await expect(page.getByTitle('Must be a positive number')).toHaveValue('1');
  });
  await test.step("Validating the '+' button not to be disabled", async () => {
    await expect(page.getByTitle('Increment')).toBeEnabled();
  });
  await test.step("Clicking on '+' button", async () => {
    await page.getByTitle('Increment').click();
    await page.waitForTimeout(1000);
  });
  await test.step("Validating the '-' button not to be disabled", async () => {
    await expect(page.getByTitle('Decrement')).not.toBeDisabled();
  });
  await test.step("Validating the value of quantity option should be '2' ", async () => {
    await expect(page.getByTitle('Must be a positive number')).toHaveValue('2');
  });
});
