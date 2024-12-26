import { chromium } from "@playwright/test";
import { use } from "../playwright.config";

async function globalSetup(config) {
  const baseURL = use.baseURL;
  const userName = use.adminUserName;
  const password = use.adminPassword;
  console.log(baseURL);
  console.log(userName);
  console.log(password);
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  // await page.setViewportSize({
  //   width: 1500, 
  //   height: 950,
  // });
  await page.goto(baseURL);
  await page.locator("#username").fill(`${userName}`);
  await page.getByText("Next").click();
  await page.locator("#password").fill(`${password}`);
  await page.getByText("Sign In").click();
  await page.context().storageState({ path: storageState });
  await browser.close();
}
export default globalSetup;
