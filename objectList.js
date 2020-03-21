let objectNames = ["fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni", "fresh", "iniemamocni"];

let selectedObj = 0;

function clickedOnList(clickedId) {
    alert(clickedId);
}

document.getElementById("objectList").innerHTML = "<div style='position: fixed; background-color: violet; width: inherit; padding-top: 5px; padding-bottom: 5px; text-align: start;'>Object list</div>";
document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<br><br>";

for(let i=0; i< objectNames.length; i++) {
    let objectButton = document.createElement("BUTTON");   // Create a <button> element
    objectButton.innerHTML = objectNames[i];                   // Insert text
    objectButton.id = "list" + i;
    objectButton.onclick = "clickedOnList(this.id)";
    objectButton.style = "background-color: #EBEBEB; border-width: 0px; border-bottom-width: 1px; width: 220px;"
    document.getElementById("objectList").appendChild(objectButton);  //thats cool it should display
    //document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<input id='⚠⚠⚠⚠❗❗❗' type='button' style='width: inherit; border-width: 1px; border-color: gray; background-color: #333333; color: white; height: 35px;' value=''>";

    document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<br>";
}

let objectListUpdate = setInterval(function() {
     
                
    document.getElementById("objectList").innerHTML = "<div style='position: fixed; background-color: violet; width: inherit; padding-top: 5px; padding-bottom: 5px; text-align: start;'>Object list</div>";
    document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<br><br>";
                
    for(let i=0; i< objectNames.length; i++) {
        let objectButton = document.createElement("BUTTON");   // Create a <button> element
        objectButton.innerHTML = objectNames[i];                   // Insert text
        objectButton.id = "list" + i;
        objectButton.onclick = "clickedOnList(this.id)";
        objectButton.style = "background-color: #EBEBEB; border-width: 0px; border-bottom-width: 1px; width: 220px;"
        document.getElementById("objectList").appendChild(objectButton);  //thats cool it should display
        //document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<input id='⚠⚠⚠⚠❗❗❗' type='button' style='width: inherit; border-width: 1px; border-color: gray; background-color: #333333; color: white; height: 35px;' value=''>";

        document.getElementById("objectList").innerHTML = document.getElementById("objectList").innerHTML + "<br>";
    }
}, 1000);
