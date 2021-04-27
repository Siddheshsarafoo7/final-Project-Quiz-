function onSubmit(){
    const xhhtp = new XMLHttpRequest();
    const add = document.getElementById("API").value;
    xhttp.open("POST", "virtserver.swaggerhub.com/Siddheshsarafoo7/quiz/1.0.0", true);
               xhhtp.send();
    if((API!="")
    {
    
        xhttp.onreadystatechange = function (){
            if(this.readyState== 4 && this.status == 200){
                document.getElementId("API").innerHTML=(this.responseText);
            
            }
        
        };
    
    }
    else{
            document.getElementById("API").innerHTML=("No API available")
    }

}


