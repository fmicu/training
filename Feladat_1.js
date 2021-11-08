function chess(length,width){
    let resultStr='';
    for(let j=0;j<width;j++){
      if(j%2==0){
        for(let i=0;i<length;i++){
      
  if(i%2==0){
    resultStr+='%'
  }
  else{
    resultStr+=' '
  }
  
        
        }
        resultStr+='\n'
    } 
    else{ 
            for(let i=0;i<length;i++){
      
  if(i%2==0){
    resultStr+=' '
  }
  else{
    resultStr+='%'
  }
  
        
        }
        resultStr+='\n'
    } 
    
  
    } 
       return console.log(resultStr)
    }
   
    
   
  
  chess(8,8);