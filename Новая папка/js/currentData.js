let data = document.querySelector('#current-time');
let currentdate = new Date();
data.innerHTML = currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() 