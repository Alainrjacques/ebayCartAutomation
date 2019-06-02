import {by, element} from "protractor";

export namespace ebayCart {
    export const
        checkoutButton = element(by.buttonText('Go to checkout')),
        cartItems = element.all(by.css('.cart-bucket .cart-bucket-lineitem'));
}