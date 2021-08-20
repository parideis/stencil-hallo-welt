import { newE2EPage } from "@stencil/core/testing";

describe("testing-compo", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<hallo-welt></hallo-welt>");

    const element = await page.find("hallo-welt");
    expect(element).toHaveClass("hydrated");
  });
});
