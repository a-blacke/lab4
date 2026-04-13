let pizza;
function orderPizza() {
    console.log('Order pizza');
    setTimeout(() => {
        pizza = '🍕';
        console.log('${pizza} is ready');
    }, 2000);
    console.log('Pizza was ordered');
}

orderPizza();
console.log('Eat ${pizza}');