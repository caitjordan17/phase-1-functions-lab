function distanceFromHqInBlocks(pickUpLocation){
    const headquarters = 42;
    if (pickUpLocation > headquarters){
        return (pickUpLocation - headquarters);
    } else if (pickUpLocation < headquarters){
        return (headquarters - pickUpLocation);
    }
}

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
  }

function distanceTravelledInFeet(pickUpLocation, dropOffLocation){
    return distanceFromHqInFeet(dropOffLocation) - distanceFromHqInFeet(pickUpLocation);
}

function calculatesFarePrice(pickUpLocation, dropOffLocation){
    let feet = distanceTravelledInFeet(pickUpLocation, dropOffLocation)
    if (feet > 2500){
        return 'cannot travel that far';
    }
    else if (feet > 2000){
        return 25;
    }
    else if (feet > 400){
        return (feet - 400) * 0.02;
    }
    else if (feet < 400){
        return 0;
    }
}