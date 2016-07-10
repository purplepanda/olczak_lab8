var groceryList = [{
    name: 'cherries',
    price: 4.99,
}, {
    name: 'lettuce',
    price: 3.80,
}, {
    name: 'tomatoes',
    price: 2.56,
}, {
    name: 'cereal',
    price: 4.25,
}];

// functions

function outputGroceryList(groceryList) {
    var buyDiv = document.getElementById('buy');
    buyDiv.innerHTML = ''; // clears out div
    groceryList.forEach(function(item) {
        var listItem = document.createElement('li');
        var itemName = item.name;
        var itemPrice = item.price;
        var textnode = document.createTextNode(itemName + ': $' + itemPrice);
        listItem.appendChild(textnode);
        buyDiv.appendChild(listItem);
    })
}

function getFinalTotal(groceryList) {
    var totalPrice = 0;
    groceryList.forEach(function(item) {
        totalPrice += item.price;
    })
    return totalPrice;
}

function outputFinalTotal(groceryList) {
    var totalDiv = document.getElementById('total');
    var totalPrice = getFinalTotal(groceryList);
    var totalPriceString = 'Total: $' + totalPrice.toFixed(2);
    totalDiv.innerHTML = totalPriceString;
}

// on document load:
outputGroceryList(groceryList);
outputFinalTotal(groceryList);

// setup form event listener
var groceryForm = document.getElementById('list');
groceryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var itemName = document.getElementById('groceryNameField').value;
    var itemPrice = parseFloat(document.getElementById('groceryPriceField').value);
    var groceryItem = { // create new grocery object
        name: itemName,
        price: itemPrice
    };
    groceryList.push(groceryItem); // add new item to grocery list
    outputGroceryList(groceryList); // update grocery list in document
    outputFinalTotal(groceryList); // update total price

})
