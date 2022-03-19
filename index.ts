// NON Arrow function version
const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map(function (pizza) {
  return pizza.name.toUpperCase();
});

// Arrow function version
const mappedArrowPizzas = pizzas.map(pizza => {pizza.name.toUpperCase();
});

const pizza = {
    name: 'Balzing Inferno',
    getName: 
}

console.log("mappedPizzas", mappedPizzas);
console.log("mappedPizzas", mappedArrowPizzas);
