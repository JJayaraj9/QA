exports.newQuote = class newQuote {
  constructor(page) {
    this.page = page;
    this.newquote = page.getByText("New Quote");
    this.quoteName = page.getByLabel("Quote Name");
    this.projectName = page.locator("#react-select-2-input");
    this.selectFirstProject = page.locator("#react-select-2-option-0");
    this.selectClientButton = page.getByRole("button", {
      name: "Select a client",
    });
    this.searchClient = page.getByPlaceholder(
      "Search by client name or number"
    );
    this.selectClient = page.locator("input[type='radio']").first();
    this.createButton = page.getByRole("button", { name: "Create" });
  }
  async clickingOnNewQuote() {
    await this.newquote.click();
  }
  async enterQuoteDetails() {
    let date = new Date();
    let qutName = `${"test" + date.getMilliseconds()}`;
    let proName = `${"test" + date.getHours()}`;
    await this.quoteName.fill(qutName);
    await this.projectName.fill(proName);
    await this.selectFirstProject.click();
    await this.selectClientButton.click();
    await this.searchClient.fill("Test client");
    await this.selectClient.click();
    await this.createButton.click();
  }
};
