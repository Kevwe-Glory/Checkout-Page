const products = [
    { name: 'Product 1', shippingCost: 5 },
    { name: 'Product 2', shippingCost: 3 }
];

const productElements = document.querySelectorAll('.product');

productElements.forEach((productElement, index) => {
    const decreaseButton = productElement.querySelector('.decrease');
    const increaseButton = productElement.querySelector('.increase');
    const quantityCount = productElement.querySelector('.quantity-count');
    const shippingCost = productElement.querySelector('.shipping-cost');
    const total = productElement.querySelector('.total');

    let quantity = 1;

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
        quantity--;
        updateQuantityAndTotal();
    }
});

    increaseButton.addEventListener('click', () => {
        quantity++;
        updateQuantityAndTotal();
});

    function updateQuantityAndTotal() {
      quantityCount.textContent = quantity;
      const productShippingCost = products[index].shippingCost;
      shippingCost.textContent = `$${productShippingCost.toFixed(2)}`;
      const productTotal = quantity * productShippingCost;
      total.textContent = `$${productTotal.toFixed(2)}`;
    }
  });
  
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
  
    // You can do something with the collected information here
  });
  