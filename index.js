// Code your solution in this file!
const blockDistanceInFeets = 264;
const hqStreetAdress = 42;
function distanceFromHqInBlocks(start, hqStreetAdress){
    max = Math.max(start , hqStreetAdress);
    min = Math.min(start , hqStreetAdress);
    numberOfBlockFromHq = max - min;
    return numberOfBlockFromHq
}console.log(distanceFromHqInBlocks(start, hqStreetAdress));

function distanceFromHqInFeet(){
    distanceInFeet = numberOfBlockFromHq * blockDistanceInFeets ;
    return distanceInFeet
}console.log(distanceFromHqInFeet());

function distanceTravelledInFeet(start , destination){
    max = Math.max(start , destination);
    min = Math.min(start , destination);
    numberOfFeetTravelled = (max - min) * blockDistanceInFeets ;
    return numberOfFeetTravelled
}console.log(distanceTravelledInFeet(start , destination));

function calculatesFarePrice(){
      let dist = numberOfFeetTravelled ;
  let price = 0;
  const setPrice = 25;
  if (dist<= 400){
    price = 0;
    return price;
  }else if (dist > 400){
    price = (dist - 400)*2;
    return price;
  }else if (dist > 2000){
    price = setPrice;
    return price;
  }else if (dist > 2500){
    return 'cannot travel that far'
  }
}console.log(calculatesFarePrice());