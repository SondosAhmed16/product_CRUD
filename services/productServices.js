import { faker } from "@faker-js/faker/locale/af_ZA";

let _id = 0;
let product = [];

for (let i = 0; i < 24; i++) {
  product.push({
    id: ++_id,
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ min: 50, max: 5000 })),
    stock: faker.number.int({ min: 0, max: 50 }),
  });
}

export const findAll = () => product;
export const findById = (id) => product.find((prod) => prod.id === id);

export const create = ({ name, price, stock }) => {
  const item = {
    id: ++_id,
    name,
    price: parseFloat(price),
    stock: parseInt(stock),
  };
  product.push(item);
  return item;
};

export const update = (id, { name, price, stock }) => {
  const idx = product.findIndex((prod) => prod.id === id);
  if (idx === -1) return null;
  product[idx] = {
    id,
    name,
    price: parseFloat(price),
    stock: parseInt(stock),
  };
  return product[idx];
};

export const remove = (id) => {
  product = product.filter((prod) => prod.id !== id);
};
