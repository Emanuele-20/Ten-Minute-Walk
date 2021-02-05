function walk(directions){
    if (directions.length !== 10 ){
        return false
    } else if (((directions.filter(word => word ==="n").length) == (directions.filter(word => word ==="s").length)) && ((directions.filter(word => word ==="w").length) == (directions.filter(word => word ==="e").length))){
        return true
    } else if (((directions.filter(word => word ==="n").length) !== (directions.filter(word => word ==="s").length)) || ((directions.filter(word => word ==="w").length) !== (directions.filter(word => word ==="e").length))){
        return false
    }
}

module.exports = walk;