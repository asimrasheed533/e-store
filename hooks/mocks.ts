import { faker } from "@faker-js/faker";

export const productsList = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  description: faker.lorem.words({ min: 5, max: 10 }),
  category: faker.commerce.department(),
  price: faker.finance.amount({ min: 10, max: 500 }),
  stock: faker.number.int({ min: 0, max: 100 }),
  isFeatured: faker.datatype.boolean(),
  createdAt: faker.date.past().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
}));
