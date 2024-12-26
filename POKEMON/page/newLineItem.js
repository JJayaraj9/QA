exports.newLineItem = class NewLineItem {
  constructor(page) {
    this.page = page;
    this.lineItemsTab = page.getByRole("tab", { name: "Line Items" });
    this.newLineItemButton = page.getByRole("link", { name: "New Line Item" });
    this.selectProductLine = page.getByRole("img", {
      name: "DW Exterior Doors",
    });
    this.selectProduct = page.getByRole("img").first();
    this.selectDoorCategory = page
      .locator("div.question-answer-image-inner")
      .first();
    this.selectDoorConfiguration = page
      .locator(
        'div[data-pdm-question-text="Door Configuration"] div.question-answer-image'
      )
      .first();
    this.sizeSwingButton = page.getByRole("button", { name: "Size/Swing" });
    this.selectMasonitePerformanceDoorSystem = page
      .locator(
        'div[data-pdm-question-text="Masonite Performance Door System"] div.question-answer-image-inner'
      )
      .first();
    this.selectDoorWidth = page.locator(".wts-react-select__input-container");
    this.selectDoorWidthOption = page.locator("#react-select-2-option-0");
    this.selectDoorHeight = page
      .locator('div[data-pdm-question-text="Door Height"] input')
      .first();
    this.selectDoorHeightOption = page
      .locator(
        'div[data-pdm-question-text="Unit Swing"] div.question-answer-image-inner'
      )
      .first();
    this.familyStyleGlassButton = page.getByRole("button", {
      name: "Family/Style/Glass",
    });
    this.selectFamily = page
      .locator('div[data-pdm-question-text="Family"] img')
      .first();
    this.selectSubFamily = page
      .locator(
        'div[data-pdm-question-text="Sub Family"] div.question-answer-image-inner'
      )
      .first();
    this.selectLiteCutOut = page
      .locator(
        'div[data-pdm-answer-text="Cut Out With Glass"] div.question-answer-image-inner'
      )
      .first();
    this.selectDoorStyle = page
      .locator(
        'div[data-pdm-answer-text="1 Panel Hollister 3/4 Lite"] div.question-answer-image-inner'
      )
      .first();
    this.selectGlassCategory = page
      .locator('div[data-pdm-answer-text="Clear"] input')
      .first();
    this.selectGlassDesign = page
      .locator(
        'div[data-pdm-question-text="Glass Design"] div.question-answer-image'
      )
      .first();
    this.selectGlassLowEOptions = page
      .locator('div[data-pdm-question-text="Glass Low-E Options"] input')
      .first();
    this.selectBoreSillHingeButton = page.getByRole("button", {
      name: "Bore/Sill/Hinge",
    });
    this.selectHingeFinish = page
      .locator(
        'div[data-pdm-question-text="Hinge Finish"] div.question-answer-image'
      )
      .first();
    this.selectFrameUnitFinishButtton = page.getByRole("button", {
      name: "Frame/Unit Finish",
    });
    this.addtoQuoteButton = page.getByRole("button", { name: "Add to Quote" });
  }
  async clickingLineItemsTab() {
    await this.lineItemsTab.click();
  }
  async clickingNewLineItembutton() {
    await this.newLineItemButton.click();
  }
  async selectProductItem() {
    await this.selectProductLine.click();
    await this.selectProduct.click();
  }
  async productConfigure() {
    await this.selectDoorCategory.click();
    await this.selectDoorConfiguration.click();
    await this.sizeSwingButton.click();
    await this.selectMasonitePerformanceDoorSystem.click();
    await this.selectDoorWidth.click();
    await this.selectDoorWidthOption.click();
    await this.selectDoorHeight.click();
    await this.selectDoorHeightOption.click();
    await this.familyStyleGlassButton.click();
    await this.selectFamily.click();
    await this.selectSubFamily.click();
    await this.selectLiteCutOut.click();
    await this.selectDoorStyle.click();
    await this.selectGlassCategory.click();
    await this.selectGlassDesign.click();
    await this.selectGlassLowEOptions.click();
    await this.selectBoreSillHingeButton.click();
    await this.selectHingeFinish.click();
    await this.selectFrameUnitFinishButtton.click();
    await this.addtoQuoteButton.click();
  }
};
