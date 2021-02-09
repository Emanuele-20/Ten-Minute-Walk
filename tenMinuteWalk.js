function isTenMinuteWalk(directions){

    const timesOfNorth = (directions.filter(word => word ==="n")).length
    const timeOfSouth = (directions.filter(word => word ==="s")).length
    const timeOfWest = (directions.filter(word => word ==="w")).length
    const timeOfEast = (directions.filter(word => word ==="e")).length

    if (directions.length !== 10 ){
        return false
    } else if ((timesOfNorth == timeOfSouth) && (timeOfWest == timeOfEast)){
        return true
    } else {
        (timesOfNorth !== timeOfSouth) || (timeOfWest !== timeOfEast);
        return false
    }
}

module.exports = isTenMinuteWalk;