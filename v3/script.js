/*
1:
    Skriv JavaScript-kod som via en prompt läser in en temperatur i celcius samt beräknar motsvarande
    temperatur i fahrenheit (googla formeln) och skriver ut den i en alert.
*/
//let tempC = prompt("Temperature in C? ");
//let tempF = tempC * 1.8 + 32;
//alert(tempF);


/*
2:
Utöka koden för 1 så att om celsiustemperaturen inte ligger inom intervallet -50 till 50 så ska i stället
ett felmeddelande "fel celcius" skrivas ut i alerten.
*/
//let tempC = prompt("Temperature in C? ");
//if(tempC > 50 || tempC < -50)
//{
//    alert("Temperature ERROR...");
//}
//else
//{
//    let tempF = tempC * 1.8 + 32;
//    alert(tempF);
//}


/*
3:
    Utöka koden för 2 så att användaren kan mata in flera temperaturer så att du använder en upprepning.
    När upprepningen slutar ska medeltemperaturen skrivas ut i en alert.
*/

/*                                          Fungerar int e till 100%
let tempC = prompt("Temperature in C? ");
let tempF;

let tempTot = parseInt(tempC);
let tempavg = 0;
let tempCount = 0;


while(tempC != null)
{


    if(tempC > 50 || tempC < -50)
    {
        alert("Temperature ERROR...");
    }
    else
    {    
        tempTot += tempC;//parseint(tempC);
        tempF = tempC * 1.8 + 32;

        alert(tempF);
        alert(tempTot);

        tempCount++;
    }

    tempC = prompt("Temperature in C? ");
}

tempavg = tempTot / tempCount;

alert(tempavg);
*/


/*
4.
    Ha en funktion för att beräkna fahrenheittemperaturen. Funktionen tar celciustemperaturen som
    parameter och returnerar fahrenheittemperauren.
*/

/*
let tempC = prompt("Temperature in C? ");
//let tempF;

let tempTot = parseInt(tempC);
let tempavg = 0;
let tempCount = 0;


while(tempC != null)
{


    if(tempC > 50 || tempC < -50)
    {
        alert("Temperature ERROR...");
    }
    else
    {    
        tempTot += tempC;//parseint(tempC);
        //tempF = tempC * 1.8 + 32;

        //avgTemp(tempC);

        alert(avgTemp(tempC));
        tempCount++;
    }

    tempC = prompt("Temperature in C? ");
}

tempavg = tempTot / tempCount;

alert(tempavg);

function avgTemp(tempC) 
{
    
    let tempF = tempC * 1.8 + 32;
    return tempF;

}
*/

/*
5:
    Spara alla inmatade temperaturer i en array. 
    Först när all inmatning är klar skrivs fahrenheittemperaturerna ut.
*/

let tempC = prompt("Temperature in C? ");
let tempCarr = []; 


let tempTot = parseInt(tempC);
let tempavg = 0;
let tempCount = 0;


while(tempC != null)
{


    if(tempC > 50 || tempC < -50)
    {
        alert("Temperature ERROR...");
    }
    else
    { 
        tempCarr.push(tempC);
        tempCount++;
    }

    tempC = prompt("Temperature in C? ");
}

alert(Tempfunc(tempC));

for (let i=0;i<tempCarr.length;i++) 
{
    alert(Tempfunc(tempCarr[i]));
    tempTot += tempCarr[i];
}

tempavg = tempTot / tempCount;
alert(tempavg);


function Tempfunc(tempC) 
{
    let tempF = tempC * 1.8 + 32;
    
    return tempF;
}