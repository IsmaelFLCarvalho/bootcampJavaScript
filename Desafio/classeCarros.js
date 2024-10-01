class modelCar{
    model;
    kmL;
}

//value gasoline
let gasolinePrice = 1.62;

//model golf Gti
const golfGti = new modelCar();
golfGti.model = 'Golf Gti';
golfGti.kmL = 11;

//model Mercedes Suv
const mercedesSuv = new modelCar();
mercedesSuv.model = 'Mercedes SUV';
mercedesSuv.kmL = 10;

// distance trap
travelDistanceInKm = 80;

//function for each car
function avaregeCar(car){
    let calculationKmL = (travelDistanceInKm / car.kmL)* gasolinePrice;

    console.log(`The model ${car.model} with this trap spent: €${calculationKmL.toFixed(2)}`);
}
//Call function with desired car
avaregeCar(golfGti);
avaregeCar(mercedesSuv);
