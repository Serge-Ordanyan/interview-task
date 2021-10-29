let loca = document.querySelector('#loca-loca');
navigator.geolocation.getCurrentPosition(onSuccess,onError);

function onSuccess(position){
    let {latitude,longitude} = position.coords;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=3bb41cdcc9fd4511898852facba8a6f7`)
    .then(response => response.json())
    .then(response =>{
        let allDetails = response.results[0].components;
        let {country} = allDetails;
        if(country !== 'Россия'){
            country = 'Страны СНГ'
        }
        loca.innerHTML = `Акция происходит только на территории ${country}`
    }).catch(()=>{
        loca.innerHTML = `Something went wrong`
    })
}


function onError(err){
    if(err.code === 1){
        loca.innerHTML = "You denied the request"
    }else if(err.code === 2){
        loca.innerHTML = 'Location is unavialable'
    }else{
        loca.innerHTML = "something went wrong"
    }
}