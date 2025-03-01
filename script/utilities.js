function random_bg_color(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    var bgColor = `rgb(${x},${y},${z})`
   return bgColor;
}

function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convetedValue = parseFloat(value);
    return convetedValue;
}
function setInnerTextByIDandValue(id,value) {
    document.getElementById(id).innerText = value;
}
function getHeading(id){
    const value = document.getElementById(id).innerText;
    return value;
}