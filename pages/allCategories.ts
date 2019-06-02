import {by, element} from "protractor";

export namespace ebayCategories {
    export const
        subCat = element.all(by.className('sub-cats'));

    export function getCategoryLink(catNumber: number = 0) {
        return subCat.get(catNumber).$$('a');
    }

}