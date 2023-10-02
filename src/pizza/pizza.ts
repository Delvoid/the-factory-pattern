export type PizzaTypes = 'margherita' | 'pepperoni' | 'vegan';
type Pizza = {
  name: PizzaTypes;
  prepare: () => string;
  bake: () => string;
  box: () => string;
};

const createMargheritaPizza = (): Pizza => ({
  name: 'margherita',
  prepare: () => 'Preparing Margherita Pizza',
  bake: () => 'Baking Margherita Pizza',
  box: () => 'Boxing Margherita Pizza',
});

const createPepperoniPizza = (): Pizza => ({
  name: 'pepperoni',
  prepare: () => 'Preparing Pepperoni Pizza',
  bake: () => 'Baking Pepperoni Pizza',
  box: () => 'Boxing Pepperoni Pizza',
});

const createVeganPizza = (): Pizza => ({
  name: 'vegan',
  prepare: () => 'Preparing Vegan Pizza',
  bake: () => 'Baking Vegan Pizza',
  box: () => 'Boxing Vegan Pizza',
});

export const createPizza = (type: PizzaTypes): Pizza => {
  switch (type) {
    case 'margherita':
      return createMargheritaPizza();
    case 'pepperoni':
      return createPepperoniPizza();
    case 'vegan':
      return createVeganPizza();
    default:
      throw new Error(`Pizza ${type} not found`);
  }
};
