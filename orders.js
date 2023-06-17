async function getorders(){
const response = await fetch("http://localhost:8080/Orders");
const jsonData = await response.json();
console.log(jsonData); 
document.getElementById('neworders').innerHTML=jsonData.Orders
document.getElementById('bouncerate').innerHTML=jsonData.bounce+'<sup style="font-size: 20px">%</sup'
document.getElementById('registrations').innerHTML=jsonData.user
document.getElementById('uniquevisitors').innerHTML=jsonData.visitor
}

function Orders(){
    getorders()

}
window.onload=Orders