class Pizza {
    #sauce = 'traditional';//private
    #size;
    crust = 'original';//Public

    constructor (/* pizzaType,  */pizzaSize) {
        //Naming convention for private properties (_name)
        /* this._size = pizzaSize;
        this._crust = 'original'; */
        //this.size = pizzaSize;
        this.#size = pizzaSize;
        //this.crust = 'original';
        //this.pizzaType = pizzaType;
        //this.toppings = [];
    }

    //Properties:
    get Crust() {
        return this.crust;
    }
    set Crust(crust) {
        this.crust = crust;
    }
    /* get Toppings() {
        return this.toppings;
    }
    set Toppings(topping) {
        this.toppings.push(topping);
    } */

    /* bake () {
        console.log(`Baking a ${this.size} ${this.crust} ${this.pizzaType} pizza`);
    } */
    hereYouGo() {
        console.log(`Here ir your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}

const myPizzaX = new Pizza('large');
//myPizzaX.hereYouGo();
//console.log(myPizzaX.Crust);OK cause is public
//console.log(myPizzaX.sauce);Undefined cause is private

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = 'The Works';
    }

    slice () {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const myPizza = new Pizza('pepperoni', 'small');
//myPizza.pizzaType = 'supreme';We dont want this
//console.log(myPizza.pizzaType);We dont want this

/* myPizza.Crust = 'thin';
console.log(myPizza.Crust);
myPizza.bake();
myPizza.Toppings = 'sausage';
myPizza.Toppings = 'pineapple';
console.log(myPizza.toppings); */

const mySpecialPizza = new SpecialtyPizza('medium');
//mySpecialPizza.slice();

//Factory function (real private properties)
function pizzaFactory(pSize) {
    const crust = 'original';
    const size = pSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} pizza`)
    }
}

const myPizza2 = pizzaFactory('small');
//myPizza2.bake();

