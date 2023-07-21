// Define the item list with their prices
const itemList = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 },
    // Add more items here
  ];
  
  // Initialize the purchased items array
  let purchasedItems = [];
  
  // Function to purchase an item
  function purchaseItem(index) {
    const item = itemList[index];
    const balanceElement = document.getElementById('balance');
    let balance = parseInt(balanceElement.innerText);
  
    if (balance >= item.price) {
      balance -= item.price;
      balanceElement.innerText = balance;
  
      // Mark the item as bought
      item.bought = true;
      purchasedItems.push(item);
  
    } else {
      alert('Insufficient funds!');
    }
  }
  
  // Function to finish shopping and go to the next page
  function finishShopping() {
    // Store the purchased items locally (e.g., in localStorage)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
  
    // Go to the next page
    window.location.href = 'next-page.html';
  }
  