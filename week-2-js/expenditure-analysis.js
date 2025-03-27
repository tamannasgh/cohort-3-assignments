function calculateTotalSpentByCategory(transactions) {
  const categorySpentMapping = {};
  transactions.forEach(transaction => {
    if(categorySpentMapping[transaction.category]) {
      categorySpentMapping[transaction.category] += transaction.price;
    } else {
      categorySpentMapping[transaction.category] = transaction.price;
    }
  });

  const result = [];
  for(category in categorySpentMapping) {
    result.push({category, totalSpent: categorySpentMapping[category]});
  }
  return result;
}

const transactions = [
  {id: 1, description: 'Groceries', category: 'groceries', price: 50},
  {id: 2, description: 'Transportation', category: 'transportation', price: 100},
  {id: 3, description: 'Rent', category: 'rent', price: 1500},
  {id: 4, description: 'Groceries', category: 'groceries', price: 100},
  {id: 5, description: 'Transportation', category: 'transportation', price: 200},
];

console.log(calculateTotalSpentByCategory(transactions));