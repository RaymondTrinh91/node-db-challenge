module.exports = {
    convertBool
}

function intToBool(int){
    return int === 1 ? true : false 
}

function convertBool(obj){
    const result = {
        ...obj,
        completed: intToBool(obj.completed)
    }

    return result
}