import { Page } from '@playwright/test'

export async function existingOrderMock(page: Page) {
  const order = {
    status: 'OPEN',
    courierId: null,
    customerName: 'Anton',
    customerPhone: '55667799',
    comment: 'keep near door',
    id: 24000,
  }

  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      body: JSON.stringify(order),
    })
  })
}

export async function notExistingOrderMock(page: Page) {
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({})
  })
}

export async function serverErrorOrderMock(page: Page) {
  await page.route('**/orders/*', async (route) => {
    await route.fulfill({
      status: 500,
    })
  })
}

export async function createOrderMock(page: Page) {
  const newOrder = {
    status: 'OPEN',
    courierId: null,
    customerName: 'random user',
    customerPhone: '1234567890',
    comment: 'random comment',
    id: 99999,
  }

  await page.route('**/orders', async (route) => {
    await route.fulfill({
      status: 201,
      body: JSON.stringify(newOrder),
    })
  })
}
