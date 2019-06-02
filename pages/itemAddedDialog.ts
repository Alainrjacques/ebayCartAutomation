import {by, element} from "protractor";

export namespace ebayItemAddedDialog {
    export const
        itemAddedHeader = element(by.className('vi-overlayTitleBar')),
        closeButton = element(by.css('.vi_oly_clz_cntr'));
}