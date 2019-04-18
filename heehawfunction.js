function heeHaw($max)
{
    if (typeof($max) === 'number')
    {
        if ($max <= 0) //if negative or 0
        {
            for (let i = 1; i >= $max; i--)
            {
                printHeeHaw(i);
            }
        }
        else //if positive
        {
            for (let i = 1; i <= $max; i++)
            {
                printHeeHaw(i);
            }
        }
    }
    else
    {
        console.log("Error: Invalid input type. Input must be a number.");
    }
}

function printHeeHaw($number)
{
    if ($number % 3 === 0 && $number % 5 === 0)
    {
        console.log("Hee Haw");
    }
    else if ($number % 3 === 0)
    {
        console.log("Hee");
    }
    else if ($number % 5 === 0)
    {
        console.log("Haw");
    }
    else
    {
        console.log($number.toString());
    }
}

heeHaw(5);
//heeHaw('six');
//heeHaw(-5);