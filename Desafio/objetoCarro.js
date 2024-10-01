class typeCar {
    model;
    color;
    kmL;

    constructor(model, color, kmL) {
        this.model = model;
        this.color = color;
        this.kmL = kmL;
    }  
    kmTrip(distanceKm, priceGasoline){
        return (distanceKm * this.kmL) * priceGasoline;
    }
}

//new Mercedes 
const mercedesSuv = new typeCar('Mercedes Benz', 'Black', 1 / 10);

//new Bmw
const BmwGti = new typeCar('Bmw Gti', 'White', 1 / 9);

//value by Trip Mercedes
const kmByTripMercedesSuv = mercedesSuv.kmTrip(89, 1.65);

//value by trip Bmw Gti
const kmByTripBmwGti = (BmwGti.kmTrip(89, 1.65));

//call information mercedesSuv
console.log(mercedesSuv);

//call information value by trip
console.log(kmByTripMercedesSuv);

//call information Bmw Gti
console.log(BmwGti);

//call information value by trip
console.log(kmByTripBmwGti);

