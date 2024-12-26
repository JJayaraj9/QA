import { test, expect } from "@playwright/test";
import { use } from "../playwright.config";

// async function globalTeardown({ page }) {
     
// }

async function removeAllTestUserSessions(config) {
    await clearSession(adminAuthKeys)
  }
  
  async function globalTeardown(config) {
    await removeAllTestUserSessions(config)
  }
  export default globalTeardown;