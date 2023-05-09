import { MyBdd } from "../bdd";

MyBdd.test("run google", async (page) => {
  await page.goto(
    "https://www.google.com/search?q=localhost%3A99082%2Fopal&oq=localhost%3A99082%2Fopal&aqs=chrome..69i57j69i58.5196j0j2&sourceid=chrome&ie=UTF-8"
  );
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Reject all" }).click();
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("bob");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
});
