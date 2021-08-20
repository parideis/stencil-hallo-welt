import { newSpecPage } from "@stencil/core/testing";
import { HalloWelt } from "./hallo-welt";

describe("testing-compo", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [HalloWelt],
      html: `<hallo-welt></hallo-welt>`,
    });
    expect(page.root).toEqualHtml(`
      <hallo-welt>
        <mock:shadow-root>
          <slot></slot>
          <p>
            Hallo
          </p>
        </mock:shadow-root>
      </hallo-welt>
    `);
  });

  it("uses the given prop", async () => {
    const page = await newSpecPage({
      components: [HalloWelt],
      html: `<hallo-welt name="Anna"></hallo-welt>`,
    });
    expect(page.root).toEqualHtml(`
      <hallo-welt name="Anna">
        <mock:shadow-root>
          <slot></slot>
          <p>
            Hallo&nbsp;Anna
          </p>
        </mock:shadow-root>
      </hallo-welt>
    `);
  });

  it("uses the given slot", async () => {
    const page = await newSpecPage({
      components: [HalloWelt],
      html: `<hallo-welt><h1>Willkommen</h1></hallo-welt>`,
    });
    expect(page.root).toEqualHtml(`
      <hallo-welt>
        <mock:shadow-root>
          <slot></slot>
          <p>
            Hallo
          </p>
        </mock:shadow-root>
        <h1>Willkommen</h1>
      </hallo-welt>
    `);
  });

  it("uses the given prop and slot ", async () => {
    const page = await newSpecPage({
      components: [HalloWelt],
      html: `<hallo-welt name="Anna"><h1>Willkommen</h1></hallo-welt>`,
    });
    expect(page.root).toEqualHtml(`
      <hallo-welt name="Anna">
        <mock:shadow-root>
          <slot></slot>
          <p>
            Hallo&nbsp;Anna
          </p>
        </mock:shadow-root>
        <h1>Willkommen</h1>
      </hallo-welt>
    `);
  });
});
