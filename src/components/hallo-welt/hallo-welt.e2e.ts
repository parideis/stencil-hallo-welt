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

    const paragraph = await page.find("hallo-welt >>> p");
    expect(paragraph).toEqualText("Hallo Anna");
  });

  it("can find the given child component", async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<hallo-welt name='Anna'><h1>Willkommen</h1>hallo-welt>"
    );
    const child = await page.find("hallo-welt > h1");
    expect(child).toEqualHtml(`<h1>Willkommen</h1>`);
  });

  it("can find the given name and child component", async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<hallo-welt name='Anna'><h1>Willkommen</h1>hallo-welt>"
    );

    const paragraph = await page.find("hallo-welt >>> p");
    expect(paragraph).toEqualText("Hallo Anna");

    const child = await page.find("hallo-welt > h1");
    expect(child).toEqualHtml(`<h1>Willkommen</h1>`);
  });
});
