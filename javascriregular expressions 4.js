function pen(name,color,price){
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new pen("market","Blue","$3;
console.log(pen1);


pen.prototype.showprice = function(){
    console.log('price of ${this.name} is ${this.price}');

}

pen1.showprice();

class pen{
    constructor(name,color.price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showprice(){
        console.log('price of ${this.name}is ${this.price}');

    }
}
const pen1 = new pen("marker,""Blue","$3");
pen1.showprice();