let productCount = 60;
    let downloadTimer = setInterval(function(){
   
        productCount--;
    
        localStorage.setItem("time", JSON.stringify(productCount));
    
        document.querySelector('.left_count').textContent =localStorage.getItem("time") ;
    
        console.log(localStorage.getItem("time") )
    
        if(productCount <= 7)
       
        clearInterval(downloadTimer);
    
    },10000);


    