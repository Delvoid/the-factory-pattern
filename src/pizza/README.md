# Pizza Ordering System with Factory Pattern

## Concept

The Pizza Ordering System demonstrates the usage of the **Factory Pattern** to create different types of pizzas. By employing a Pizza Factory, we abstract away the creation logic of various pizza types and provide a unified interface to create pizzas.

## Usefulness

- **Extensibility:** Easily introduce new pizza types without modifying the existing code.
- **Abstracted Creation:** The client code that orders pizzas is decoupled from the logic that creates them. This ensures that if the creation logic changes, the client code remains unaffected.
- **Consistent Interface:** Use a consistent interface to interact with different pizza types, making the client code straightforward and predictable.

## Getting Started

### Pizza Types

The system currently supports the following pizza types:

- **Margherita:** A classic pizza with tomato sauce and cheese.
- **Pepperoni:** Topped with pepperoni slices.
- **Vegan:** Made with plant-based ingredients.

### Usage

Here's a basic usage guide for ordering pizzas in the system:

```typescript
import { PizzaTypes, createPizza } from "./pizza";

const orderPizza = (type: PizzaTypes): void => {
  console.log(`\nOrdering a ${type} pizza`);
  const pizza = createPizza(type);

  console.log(pizza.prepare());
  console.log(pizza.bake());
  console.log(pizza.box());

  console.log(`Enjoy your ${pizza.name} pizza!\n`);
};

// Order different types of pizzas
orderPizza("margherita");
orderPizza("pepperoni");
orderPizza("vegan");
```

### Adding New Pizza Types

To add new pizza types:

1. **Define the Creation Logic:** Add a new function that returns a `Pizza` object with the respective properties and methods.

   Example:

   ```typescript
   const createHawaiianPizza = (): Pizza => ({
     name: "hawaiian",
     prepare: () => "Preparing Hawaiian Pizza",
     bake: () => "Baking Hawaiian Pizza",
     box: () => "Boxing Hawaiian Pizza",
   });
   ```

2. **Update the Factory:** Extend the `createPizza` function to handle the new type.

   Example:

   ```typescript
   export const createPizza = (type: PizzaTypes): Pizza => {
     switch (type) {
       //...existing cases...
       case "hawaiian":
         return createHawaiianPizza();
       default:
         throw new Error(`Pizza ${type} not found`);
     }
   };
   ```

## Future Improvements

- **Customization:** Enhance the system to handle custom pizza orders with various toppings.
- **Order Management:** Integrate an order management system to handle pizza orders, tracking, and delivery.
- **User Interface:** Implement a UI to facilitate user interaction for pizza ordering.

## Contributing

Feel free to submit issues or pull requests if you have suggestions, corrections, or improvements to the Pizza Ordering System.

