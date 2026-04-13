



function orderPizza(callBack) {
    setTimeout(() => {
        const pizza = '🍕';
        callBack(pizza);
    }, 2000)
};

function pizzaReady(pizza) {
    console.log('Eat the ${pizza}');
};

// The pizzaReady argument is the call back function.
orderPizza(pizzaReady);
console.log('Call Kia');
