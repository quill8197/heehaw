const max = 100;

for (let i = 1; i < max; i++)
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
}