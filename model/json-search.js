let json = [
    {
        "name": "Jane Doe",
        "sex": "f",
        "born": 1876,
        "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Jane Ramirez",
        "sex": "f",
        "born": 1997,
        "died": 2027,
        "father": "Rodriguez Ramirez",
        "mother": "Gale Ramirez"
    },
    {
        "name": "Robert Alvarez",
        "sex": "m",
        "born": 1482,
        "died": 1528,
        "father": "Edwardo Alvarez",
        "mother": "Julia Alvarez"
    },
    {
        "name": "Donavan Jenkins Jr",
        "sex": "m",
        "born": 2001,
        "died": 2083,
        "father": "Donavan Jenkins",
        "mother": "Crystal Jenkins"
    },
    {
        "name": "Penelope Karls",
        "sex": "f",
        "born": 1982,
        "died": 2003,
        "father": "Philip Karls",
        "mother": "McKenzie Jacobs"
    }
];

function findName(name)
{
    let search = document.getElementById('search');
    return name === search;
}

function printJson()
{
    let output = document.getElementById("output");

    if (json.some(findName))
    {
        for (let i = 0; i < json.length; i++)
        {
            output.innerHTML =
                "<p>Name: " + json[i].name +
                "<br>Sex: " + json[i].sex +
                "<br>Born: "+ json[i].born +
                "<br>Died: "+ json[i].died +
                "<br>Father: "+ json[i].father +
                "<br>Mother: "+ json[i].mother +
                "</p><br>";
        }
    }
    else
    {
        output.innerHTML = "No person found";
    }
}

printJson();