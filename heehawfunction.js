function heeHaw($max)
{
    console.log($max + ' ' + typeof($max));
    if (typeof($max) === 'number') //Number.isInteger($max)
    {
        for (let i = 1; i <= $max; i++)
        {
            if (i % 3 === 0 && i % 5 === 0)
            {
                console.log("Hee Haw");
            }
            else if (i % 3 === 0)
            {
                console.log("Hee");
            }
            else if (i % 5 === 0)
            {
                console.log("Haw");
            }
            else
            {
                console.log(i.toString());
            }
        }
    }
    else
    {
        console.log("Error: Invalid input type. Input must be a number.");
    }
}

//heeHaw(5);
//heeHaw('six');
heeHaw(-5);