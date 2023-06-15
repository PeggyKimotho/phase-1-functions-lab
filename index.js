// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    
    if (pickupLocation < 42) {
        return 42 - pickupLocation;
    } else {
        return pickupLocation - 42;
    }
}
    
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(pickupLocation) {
    let block = distanceFromHqInBlocks(pickupLocation);
    return block * 264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
    
    if (destination > start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}
distanceTravelledInFeet(50, 60)

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000){
    return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(43, 44)