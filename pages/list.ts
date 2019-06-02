import {by, element} from "protractor";

export namespace ebayItemList {
    export const
        items = element.all(by.className('s-item')),
        itemLinks = element.all(by.className('s-item__title'));
}