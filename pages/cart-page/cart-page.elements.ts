import { Page } from "@playwright/test";

export class CartPageElements{
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    removeButton(productName: string) {
        return this.page.locator(`//div[.="${productName}"]// ancestor::div[@class="cart_item_label"]`)
    }

    get button() {
        return{
            continueShopping: this.page.locator('//a[.="Continue Shopping"]'),
            checkout: this.page.locator('a[href*="checkout"]'),
        }
    }
}