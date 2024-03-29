/*
Javascript file for git.html web page.
*/

function openNav() {
    /*
    Function to open side bar if it's close.
    */
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("container").style.marginLeft = "360px";
    document.getElementById("title").style.marginLeft = "360px";
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

function openSection(id) {
    var colp = document.getElementById(id);

    if(colp.offsetHeight == 40) {
        colp.style.height = "100%";
    } else {
        colp.style.height = "20px";
    }
}

function opentable() {
    var tab = document.getElementById("commandsTable");

    if(tab.style.display == 'none') {
        document.getElementById("buttonCloseTable").innerText = "Close Table";
        document.getElementById("docLink").style.display = "block";
        tab.style.display = "table";
    } else {
        document.getElementById("buttonCloseTable").innerText = "Open Table";
        document.getElementById("docLink").style.display = "none";
        tab.style.display = "none";
    }
}