function get_first_matrix(){
    let aes1=[[],[],[]]
    
    let a=1
  
    for (var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            aes1[i][j]=Number(document.getElementById(a).value)
            a++
        }
    }
  
    return aes1
    
  }
  
  function get_second_matrix(){
      let aes2=[[],[],[]]
      let a=10
  
      for (var i=0;i<3;i++){
          for(var j=0;j<3;j++){
              aes2[i][j]=Number(document.getElementById(a).value)
              a++
          }
      }
  
  return aes2
  }
  
  function result_matrix(aes3){
      let a=19
      
      
      for (var i=0;i<3;i++){
          for(var j=0;j<3;j++){
              document.getElementById(a).innerText=aes3[i][j]
              a++
          }
      }
    
  
  }
  
  function add(){
      let aes1=get_first_matrix()
      let aes2=get_second_matrix()
      let aes3=[[],[],[]]  
      let b=aes1.length
      let c=aes1[0].length
      for (var i=0;i<b;i++){
          for(var j=0;j<c;j++){
            aes3[i][j]=aes1[i][j]+aes2[i][j]
          }
      }
      
      result_matrix(aes3)
      
  }
  
  function sub(){
      let aes1=get_first_matrix()
      let aes2=get_second_matrix()
      let aes3=[[],[],[]]  
      let b=aes1.length
      let c=aes1[0].length
      for (var i=0;i<b;i++){
          for(var j=0;j<c;j++){
            aes3[i][j]=aes1[i][j]-aes2[i][j]
          }
      }
      
      result_matrix(aes3)
      
  }
  
  function mul(){
      let aes1=get_first_matrix()
      let aes2=get_second_matrix()
      let aes3=[[],[],[]]  
      let b=aes1.length
      let c=aes1[0].length
      for (var i=0;i<b;i++){
          for(var j=0;j<c;j++){
            aes3[i][j]=aes1[i][j]*aes2[i][j]
          }
      }
      
      result_matrix(aes3)
      
  }
  
  function divide(){
      let aes1=get_first_matrix()
      let aes2=get_second_matrix()
      let aes3=[[],[],[]]  
      let b=aes1.length
      let c=aes1[0].length
      for (var i=0;i<b;i++){
          for(var j=0;j<c;j++){
            aes3[i][j]=aes1[i][j]/aes2[i][j]
          }
      }
      
      result_matrix(aes3)
      
  }
  
  function reset(){
      let a=19
      
      
      for (var i=0;i<3;i++){
          for(var j=0;j<3;j++){
              document.getElementById(a).innerText=""
              a++
          }
      }
    
  }
  