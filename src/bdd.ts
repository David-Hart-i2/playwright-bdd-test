import { test, Page } from "@playwright/test";
export class MyBdd {
  public static describe(name: string, func: () => void) {
    return test.describe(name, func);
  }
  public static before(func: () => void) {
    return test.beforeAll(func);
  }

  public static test(name: string, func: (args: Page) => Promise<void>) {
    return test(name, (page) => func(page.page));
  }
}
