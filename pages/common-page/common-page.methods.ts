import {Page} from 'playwright'
import { CommonPageElements } from './common-page.elements'

export class CommonPageMethods{
    private page: Page
    private commonPageElements: CommonPageElements

    constructor(page: Page){
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
    }

    async navigateToTheApplication(){
        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }
    
    async openMenu(){
        await this.commonPageElements.buttons.openMenu.click()
    }

    async clickOnAllItemsOption(){
        await this.commonPageElements.leftMenu.allItems.click()
    }

    async clickOnAboutOption(){
        await this.commonPageElements.leftMenu.about.click()
    }

    async clickOnLogOutOption(){
        await this.commonPageElements.leftMenu.logout.click()
    }

       async clickOnResetAppStateOption(){
        await this.commonPageElements.leftMenu.resetAppState.click()
    }
}