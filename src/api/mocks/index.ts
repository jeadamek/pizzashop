import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueOrdersAmountMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueOrdersAmountMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  getProfileMock,
  updateProfileMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getPopularProductsMock,
  getMonthOrdersAmountMock,
  getManagedRestaurantMock,
  getMonthRevenueOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getDailyRevenueOrdersAmountMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
