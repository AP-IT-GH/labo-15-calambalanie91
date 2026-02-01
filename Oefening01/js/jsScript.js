
const spaghetti = {
  name: "Carbonara",
  description: "Finger licking good!",
  serves: 4,
  ingredients: [
    { name: "pancetta", amount: "300g", priceInCents: 100 },
    { name: "Eieren", amount: "5", priceInCents: 220 },
    { name: "Spaghetti", amount: "500g", priceInCents: 200 },
  ],
};
let totalPriceInCents = 0;
for (let ingredients of spaghetti.ingredients) {
  totalPriceInCents += ingredients.priceInCents;
  console.log("tussentotaal: ", totalPriceInCents);
}

console.log(
  `De kostprijs van de ingrediënten van ${spaghetti.name} is ${totalPriceInCents}`
);
