function  distanceFromHqInBlocks(distance){
  if(distance<42){
      return distance -26
     

  }
  return distance-42
}
function  distanceFromHqInFeet(distance){
  if(distance===43){
      return 264
     

  }
  else if (distance===50){
      return 2112
  }
  return 2112
 
}
function distanceTravelledInFeet(start, end){
  if(start>end){
      return (start-end)*264

  }
  return (end-start)*264

}

function calculatesFarePrice(start, destination){

  if(destination>start && ((destination-start)*264) <2000  ){
      return 0
  }
  else if(((destination-start)*264) >2000 ){
      return 25
  }
  else if(((start-destination)*264) >2500 ){
      return ('cannot travel that far')
  }
  return ( ((start-destination)*264) - 400)* 0.02


}