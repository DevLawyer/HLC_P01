/*
Javascript file for vscode.html web page.
*/

function openNav() {
    /*
    Function to open side bar if it's close.
    */
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("container").style.marginLeft = "260px";
    document.getElementById("title").style.marginLeft = "260px";
}

function closeNav() {
    /*
    Function to close side bar if it's open.
    */
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("container").style.marginLeft= "10px";
    document.getElementById("title").style.marginLeft= "10px";
}