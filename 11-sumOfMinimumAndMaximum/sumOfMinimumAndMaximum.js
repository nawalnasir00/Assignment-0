function sumOfMinimumAndMaximum(array) {
    var sum = array[0],
        min = array[0],
        max = array[0];
        
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }

    return [min + max];
}

console.log(sumOfMinimumAndMaximum([2,4,5,6,23]));
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
