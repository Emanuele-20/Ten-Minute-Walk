function walk(directions){

    const timesOfNorth = directions.filter(word => word ==="n")
    const timeOfSouth = directions.filter(word => word ==="s")
    const timeOfWest = directions.filter(word => word ==="w")
    const timeOfEast = directions.filter(word => word ==="e")

    if (directions.length !== 10 ){
        return false
    } else if ((timesOfNorth.length == timeOfSouth.length) && (timeOfWest.length == timeOfEast.length)){
        return true
    } else if ((timesOfNorth.length !== timeOfSouth.length) || (timeOfWest.length !== timeOfEast.length)){
        return false
    }
}

module.exports = walk;