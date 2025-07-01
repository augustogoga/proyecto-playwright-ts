import { Page } from "@playwright/test"

export class CheckoutPageElements{
    private page:Page

    constructor(page){
        this.page = page
    }

    get inputs(){
        return{
            firstName: this.page.locator('#first-name'),
            lastName: this.page.locator('#last-name'),
            postalCode: this.page.locator('#postal-code')
        }
    }

    get buttons(){
        return{
            cancel: this.page.locator('.cart_cancel_link'),
            continue: this.page.locator('.cart_button')
        }
    }
}