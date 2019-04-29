/**
 // Attach an event handler to the button
 var btn = document.getElementById("go");
 btn.onclick = heeHaw;

 function heeHaw()
 {
        // Get the input
        var num = document.getElementById("number").value;
        num = parseInt(num);

        // Validate input
        if(isNaN(num) || num <= 0) {
            output.innerHTML = "<p>Please enter a valid number.</p>";
            return;
        }

        // Get the output div
        var output = document.getElementById("result");

        // Loop through numbers and display appropriate output
        var text = "";
        for(var i = 1; i <= num; i++) {

            if (i % 5 === 0 && i % 3 === 0) {
                text = "Hee Haw!";
            } else if (i % 3 === 0) {
                text = "Hee!";
            } else if (i % 5 === 0) {
                text = "Haw!";
            } else {
                text = i;
            }
            output.innerHTML += "<p>" + text + "</p>";
        }
    }
 */

const max = 100;

for (let i = 1; i <= max; i++)
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