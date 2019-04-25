function groupByType(array)
{
    //create arrays to track strings, numbers, and booleans
    let strings = [];
    let numbers = [];
    let booleans = [];

    //store the array's element's in the placeholder arrays by type
    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] === 'string')
        {
            strings.push(array[i]);
        }
        else if (typeof array[i] === 'number')
        {
            numbers.push(array[i]);
        }
        else
        {
            booleans.push(array[i]);
        }
    }

    //convert the array into an object with properties containing the array values, grouped by type
    let object = {};
    Object.assign(object, {
        strings: strings,
        numbers: numbers,
        booleans: booleans
    });

    //return an object
    return object;
}

//test the function
let input = [ -1, 5, "cat", false, 10.2, true, "dog" ];

let object = groupByType(input);
console.log(object);