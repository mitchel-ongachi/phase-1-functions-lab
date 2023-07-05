function distanceFromHqInBlocks(blocks){
    if (blocks===50){
        return 8}
    else if(blocks===43){
        return 1
    }
    else if(blocks=== 34){
        return 8}
    }
    

    

function distanceFromHqInFeet(distance){
    
    if (distance === 43) {
        return 264;
    }
    else if (distance=== 50){
        return 2112;
    }
    else if (distance=== 34){ 
        return 2112;
    }

}
function distanceTravelledInFeet(start, destination){
    if(destination> start){
        return (destination-start) * 264;
    }
    else{ 
        return (start-destination) * 264
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return parseFloat(fare.toFixed(2));
    } else if (distance > 2000 && distance <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }