document.getElementById("print").addEventListener("click", function()
{
    //text
    let text = document.getElementById("text").value;

    //color
    let color = document.getElementById("color").value;
    
    //picture
    let picture;

    if(document.getElementById("rose").checked)
    {
        picture = "src='blomma.jpg'"
    }
    else if(document.getElementById("tree").checked)
    {
        picture = "src='landskap.jpg'"
    }
    else if(document.getElementById("cat").checked)
    {
        picture = "src='djur.jpg'"
    }

    //print
    document.getElementById("card").innerHTML = "<p style='color:" + color + "'>" + text + "</p>" +
                                                "<img " + picture + " style='width: 200px;'>"

});



