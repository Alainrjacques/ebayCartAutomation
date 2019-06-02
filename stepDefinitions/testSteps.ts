import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import {browser, ExpectedConditions} from "protractor";
import {ebayHeader} from "../pages/globalHeader";
import {ebayCategories} from "../pages/allCategories";
import {ebayItemList} from "../pages/list";
import {ebayItemPage} from "../pages/itemPage";
import {ebayItemAddedDialog} from "../pages/itemAddedDialog";
import {ebayCart} from "../pages/cart";
import {expect} from 'chai';

// reference: https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
setDefaultTimeout(300000);

//TODO break file into different pages once bigger

Given(/^I navigate to ebay$/, async function() {
    await browser.get(browser.baseUrl);
});

When(/^I search using the global search$/, async function() {
    await browser.wait(ExpectedConditions.visibilityOf(ebayHeader.searchButton), 5000, "Unable to find search button");
    await ebayHeader.searchButton.click();
});

When(/^I select the first link in the first category$/, async function() {
    await browser.wait(ExpectedConditions.visibilityOf(ebayCategories.subCat.first()), 4000, "Unable to find categories");
    await ebayCategories.getCategoryLink().first().click();
});

When(/^I view item number (\d)$/, async function(itemNumber: string) {
    await browser.wait(ExpectedConditions.visibilityOf(ebayItemList.items.first()), 10000, "Unable to find item list");
    await ebayItemList.itemLinks.get(Number(itemNumber)-1).click();
});

When(/^I add the item to my cart$/, async function() {
    await browser.wait(ExpectedConditions.visibilityOf(ebayItemPage.cartLink), 4000, "Unable to find cart button");
    await ebayItemPage.cartLink.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(ebayItemAddedDialog.closeButton), 10000, "Unable to find confirmation dialog");
});

When(/^I close the confirmation dialog$/, async function() {
    await browser.sleep(2000); //wait for dialog resize
    await ebayItemAddedDialog.closeButton.click();
    await browser.wait(ExpectedConditions.invisibilityOf(ebayItemAddedDialog.closeButton), 10000, "Unable to close confirmation dialog");
    await browser.sleep(5000); //wait for refresh, there is probably a better way to do
});

When(/^I view my cart$/, async function() {
    await ebayHeader.cartButton.click();
    await browser.wait(ExpectedConditions.visibilityOf(ebayCart.checkoutButton), 10000, "Unable to find checkout button on cart page");
});

Then(/^There are (\d) items in the cart$/, async function(itemNumber: string) {
    expect(await ebayCart.cartItems.count()).to.equal(Number(itemNumber));
});

When(/^I remove an item from my cart$/, async function() {
    const count = await ebayCart.cartItems.count();
    await ebayCart.cartItems.first().$('[data-test-id="cart-remove-item"]').click();
    await browser.wait(async () => {return await ebayCart.cartItems.count() < count}, 10000, "failed waiting for item to remove from cart");
});
