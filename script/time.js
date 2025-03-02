const time = document.getElementById('time');
console.log(time.innerText)
const d = new Date();
const monthNames = ['January','February','March','April','May' , 'June','July','August','September','October','November','December'];
const dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let year = d.getFullYear();
let month=monthNames[d.getMonth()];
let day = dayNames[d.getDay()];
let date = d.getDate();
const x = (`${day}  ${month}  ${date}  ${year}`)
time.innerText=x;