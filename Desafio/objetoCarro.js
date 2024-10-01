class typeCar {
    model;
    color;
    kmL;

    constructor(model, color, kmL) {
        this.model = model;
        this.color = color;
        this.kmL = kmL;
    }  
}


const mercedesSuv = new typeCar('Mercedes Benz', 'Black', 1 / 10);
console.log(mercedesSuv);
