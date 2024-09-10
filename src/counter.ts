export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

interface Item {
  name: string;
  price: number;
}

let shoppingCart: Item[] = [];

function addedItem(name: string, price: number): string {
  const newItem: Item = { name, price };
  shoppingCart.push(newItem);
  return `Item ${name} has been added to the cart with a price of ${price}.`;
}

function calculateTotalCost(cart: Item[]): number {
  return cart.reduce((total, item) => total + item.price, 0);
}

console.log(addedItem("example one", 0.5)); 
console.log(addedItem("example two", 1)); 
console.log(addedItem("example three", 1.5 )); 

const totalCost = calculateTotalCost(shoppingCart);
console.log(`Total cost: ${totalCost}`); 

//so the result you can see from the console)
