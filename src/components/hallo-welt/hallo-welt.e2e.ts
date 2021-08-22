import { newE2EPage } from "@stencil/core/testing";

describe("hallo-welt", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<hallo-welt></hallo-welt>");

    const element = await page.find("hallo-welt");
    expect(element).toHaveClass("hydrated");
  });

  it("can greet with the given name", async () => {
    const page = await newE2EPage();
    await page.setContent("<hallo-welt name='Anna'></hallo-welt>");

    const element = await page.find("hallo-welt >>> p");
    expect(element).toEqualText("Hallo Anna");
  });
});
