import {by, element} from "protractor";

export namespace ebayHeader {
    export const
        searchButton = element(by.id('gh-btn')),
        cartButton = element(by.id('gh-cart')),
        searchInput = element(by.id('gh-ac'));
}