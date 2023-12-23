// Currying

function volume(length){
    return function(height){
        return function(width){
            console.log(height*width*length);
        }
    }
}

volume(3)(6)(2)