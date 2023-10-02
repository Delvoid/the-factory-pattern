import { PizzaTypes, createPizza } from './pizza';

const orderPizza = (type: PizzaTypes): void => {
  console.log(`\nOrdering a ${type} pizza`);

  const pizza = createPizza(type);

  console.log(pizza.prepare());
  console.log(pizza.bake());
  console.log(pizza.box());

  console.log(`Enjoy your ${pizza.name} pizza!\n`);
};

orderPizza('margherita');
orderPizza('pepperoni');
orderPizza('vegan');
