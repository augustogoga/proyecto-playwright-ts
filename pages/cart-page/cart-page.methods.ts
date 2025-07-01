import { Page } from "@playwright/test";
import { CartPageElements } from "./cart-page.elements";

export class CartPageMethods{
    private page: Page
    private cartPageElements: CartPageElements

    constructor(page){
        this.page = page
        this.cartPageElements = new CartPageElements(page)
    }

    async clickOnContinueShoppingButton(){
        await this.cartPageElements.button.continueShopping.click()
    }

    async clickOnCheckoutButton(){
        await this.cartPageElements.button.checkout.click()
    }

    async clickOnRemoveButton(productsName: string){
        this.cartPageElements.removeButton(productsName).click()
    }

}