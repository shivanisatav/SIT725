const { expect } = require("chai");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { cardList, clickMe, submitForm, addCards } = require("../public/js/scripts");

describe("Web App Functions", () => {
  let window, document, $, dom;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html><html><body>
        <div id="card-section"></div>
        <input id="first_name" value="John" />
        <input id="last_name" value="Doe" />
        <input id="password" value="12345" />
        <input id="email" value="john@example.com" />
      </body></html>`,
      { runScripts: "dangerously", resources: "usable" }
    );

    window = dom.window;
    document = window.document;
    $ = require("jquery")(window); 
  });

  it("should return a thank you message", () => {
    const msg = clickMe();
    expect(msg).to.equal(
      "Thanks for your interest. Stay tuned for more tech updates!"
    );
  });

  it("should collect form data correctly", () => {
    const formData = submitForm($);
    expect(formData).to.deep.equal({
      first_name: "John",
      last_name: "Doe",
      password: "12345",
      email: "john@example.com",
    });
  });

  it("should add the correct number of cards to the Modal", () => {
    addCards($, cardList); 
    const cards = $("#card-section .card");
    expect(cards.length).to.equal(2);
  });

  it("should contain expected card titles", () => {
    addCards($, cardList); 
    const titles = $("#card-section .card-title")
      .map((_, el) => $(el).text().trim())
      .get();

    expect(titles[0]).to.include("Smartwatch");
    expect(titles[1]).to.include("VR Headset");
  });
});
