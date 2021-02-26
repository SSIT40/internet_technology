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