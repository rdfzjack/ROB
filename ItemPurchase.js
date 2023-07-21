// Get the elements
const balanceElement = document.getElementById('balance');
const finishButton = document.getElementById('finishButton');

// Initialize the balance
let balance = 2000;

// Function to handle item purchase
function buyItem(item) {
  // Check if the item is already bought
  if (!item.classList.contains('bought')) {
    // Get the item text and price
    const itemText = item.textContent;
    const price = parseInt(itemText.match(/\$(\d+)/)[1]);

    // Check if the balance is enough to buy the item
    if (balance >= price) {
      // Deduct the price from the balance
      balance -= price;

      // Update the balance element
      balanceElement.textContent = balance;

      // Mark the item as bought
      item.classList.add('bought');

      // Store the bought item locally (you can use localStorage or sessionStorage)
      // Example using localStorage:
      localStorage.setItem(itemText, 'bought');
    } else {
      alert('Insufficient balance!');
    }
  }
}

// Add click event listener to the finish button
finishButton.addEventListener('click', function() {
  // Redirect to the next page
  window.location.href = 'next-page.html';
});
