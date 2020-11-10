function TotalCost(x,y){
     x = parseInt(document.getElementById('Ice').value);//input Id 
     y = parseFloat(document.getElementById('Cost').value);
     var result =document.getElementById('out')
     result.value = x*y;
     //alert("The total is " + result); //to diplay a message before diplaying the answer
}

