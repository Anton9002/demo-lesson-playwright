import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly userNameInput: Locator
  readonly phoneInput: Locator
  readonly commentInput: Locator
  readonly createOrderButton: Locator
  readonly successMessage: Locator
  readonly costumerNameError: Locator
  readonly phoneError: Locator
  readonly logoutButton: Locator
  readonly searchOrderButton: Locator
  readonly searchOrderInput: Locator
  readonly orderNotFoundText: Locator
  readonly orderNotFoundImage: Locator
  readonly orderStatusButton: Locator
  readonly orderStatusOpen: Locator
  readonly orderNameDetails: Locator
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.userNameInput = page.getByTestId('username-input')
    this.phoneInput = page.getByTestId('phone-input')
    this.commentInput = page.getByTestId('comment-input')
    this.createOrderButton = page.getByTestId('createOrder-button')
    this.successMessage = page.getByTestId('orderSuccessfullyCreated-popup')
    this.costumerNameError = page.getByTestId('username-input-error')
    this.phoneError = page.getByTestId('phone-input-error')
    this.logoutButton = page.getByTestId('logout-button')
    this.searchOrderButton = page.getByTestId('searchOrder-submitButton')
    this.searchOrderInput = page.getByTestId('searchOrder-input')
    this.orderNotFoundText = page.getByTestId('orderNotFound-title')
    this.orderNotFoundImage = page.getByTestId('orderNotFound-image')
    this.orderStatusButton = page.getByTestId('openStatusPopup-button')
    this.orderStatusOpen = page.getByTestId('status-item-0')
    this.orderNameDetails = page.getByTestId('order-item-0')
  }
}
