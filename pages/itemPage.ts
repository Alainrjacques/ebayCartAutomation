import {by, element} from "protractor";

export namespace ebayItemPage {
    export const
        cartLink = element(by.partialLinkText('Add to cart'));
}