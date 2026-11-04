import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { faker } from '@faker-js/faker/locale/en'
import { PASSWORD, USERNAME } from '../../config/env-data'

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  await loginPage.open()
})

test('signIn button disabled when incorrect data inserted', async ({}) => {
  await loginPage.usernameField.fill(faker.lorem.word(2))
  await loginPage.passwordField.fill(faker.lorem.word(7))
  await expect(loginPage.signInButton).toBeDisabled()
})

test('error message displayed when incorrect credentials used', async ({}) => {
  // implement test
})

test('login with correct credentials and verify order creation page', async ({}) => {
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)
  await expect(orderCreationPage.statusButton).toBeVisible()
  await expect(orderCreationPage.userNameInput).toBeVisible()
  await expect(orderCreationPage.phoneInput).toBeVisible()
  await expect(orderCreationPage.commentInput).toBeVisible()
  await expect(orderCreationPage.createOrderButton).toBeVisible()
  await expect(orderCreationPage.successMessage).toBeVisible()
  // verify at least few elements on the order creation page
})

test('login and create order', async ({}) => {
  // implement test
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.userNameInput.fill('random user')
  await orderCreationPage.phoneInput.fill('1234567890')
  await orderCreationPage.commentInput.fill('random comment')
  await orderCreationPage.createOrderButton.click()

  await expect(orderCreationPage.successMessage).toBeVisible()
})

test('check errors on order creation', async ({}) => {
  // implement test
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.userNameInput.fill('r')
  await orderCreationPage.phoneInput.fill('12345')
  await orderCreationPage.commentInput.fill('random comment')

  await expect(orderCreationPage.createOrderButton).toBeDisabled()

  await expect(orderCreationPage.costumerNameError).toBeVisible()
  await expect(orderCreationPage.phoneError).toBeVisible()
})

test('logout from order page', async ({}) => {
  // implement test
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)

  await orderCreationPage.logoutButton.click()

  await expect(loginPage.signInButton).toBeVisible()
  await expect(loginPage.page.url()).toContain('signin')
  await expect(orderCreationPage.logoutButton).not.toBeVisible()
})

test('order not found page', async ({}) => {
  // implement test
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)

  await orderCreationPage.statusButton.click()
  await orderCreationPage.searchOrderInput.fill('25000')
  await orderCreationPage.searchOrderButton.click()

  await expect(orderCreationPage.orderNotFoundText).toBeVisible()
  await expect(orderCreationPage.orderNotFoundImage).toBeVisible()
})

test('order found page', async ({}) => {
  // implement test
  const orderCreationPage = await loginPage.signIn(USERNAME, PASSWORD)

  await orderCreationPage.statusButton.click()
  await orderCreationPage.searchOrderInput.fill('20622')
  await orderCreationPage.searchOrderButton.click()

  await expect(orderCreationPage.orderStatusOpen).toBeVisible()
  await expect(orderCreationPage.orderNameDetails).toBeVisible()
})

//20622
