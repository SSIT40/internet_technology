let volvo = 0;
let totcar = 0;

document.getElementById("reg").addEventListener("click", function()
{
    let regnr = document.getElementById("regnr").value;

    let brand;

    //let node = document.createElement("LI");

    var container;

    if(document.getElementById("volvo").checked)
    {
        brand = "Volvo";
    }
    else if(document.getElementById("other").checked)
    {
        brand = document.getElementById("brand").value;
    }

    let color = document.getElementById("color").value;

    //let textnode = document.createTextNode(regnr + brand);

    //node.appendChild(textnode);

    if(brand == "Volvo")
    {
        volvo++;
        totcar++;
        if(color == "red")
        {
            document.getElementById("rv").innerHTML = "<p style='color:" + color + "'>" 
                                                        + regnr + " " + brand + "</p>" + 
                                                            document.getElementById("rv").innerHTML;
        }
        else if(color != "red")
        {
            document.getElementById("ov").innerHTML = "<p style='color:" + color + "'>" 
                                                        + regnr + " " + brand + "</p>" + 
                                                            document.getElementById("ov").innerHTML;
        }
    }

    else if(brand != "Volvo")
    {
        totcar++;
        if(color == "red")
        {
            document.getElementById("ro").innerHTML = "<p style='color:" + color + "'>" 
                                                            + regnr + " " + brand + "</p>" + 
                                                                document.getElementById("ro").innerHTML;
        }
        else if(color != "red")
        {
            document.getElementById("oo").innerHTML = "<p style='color:" + color + "'>" 
                                                                + regnr + " " + brand + "</p>" + 
                                                                    document.getElementById("oo").innerHTML;
        }
    }

    let procent =  (volvo / totcar)*100;

    document.getElementById("procent").innerHTML = "<p>procentuella andrelen volvon: " + procent + "</p>";

});