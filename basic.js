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

function outputGroceryList(groceryList) {
    var buyDiv = document.getElementById('buy');
    groceryList.forEach(function(item) {
        var listItem = document.createElement('li');
        var textnode = document.createTextNode(item.name + ': $' + item.price.toFixed(2));
        listItem.appendChild(textnode);
        buyDiv.appendChild(listItem);
    })
}
outputGroceryList(groceryList);

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
    var textnode = document.createTextNode('Total: $' + totalPrice.toFixed(2));
    totalDiv.appendChild(textnode);
}

outputFinalTotal(groceryList);
