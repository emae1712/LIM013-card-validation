const validator = {
  isvalid: function(a){
     
      //invirtiendo array (creamos variable para reducir nombre)
      let inverso= Array.from(a).reverse();       
      let total=0;
      for(var i = 0; i < inverso.length; i++) {
        if ((i % 2) !=0){
          total+= inverso[i]*2%10+ parseInt(inverso[i]*2/10) ;
        }else{
          total+=parseInt(inverso[i],10);
          }
      }

      //condición para que la suma sea múltiplo de 10
      if(total%10===0 && total != 0){ 
        return true;
      }else{
        return false;
        }
    //return a*2;*/
  },

  maskify: function (b){
    let number = "";

      if (b.length<=4){
        number+= b.slice(-4);
      }else{
        number+= b.slice(0,-4).replace(/[a-zA-Z0-9]/g,"#") + b.slice(-4);
        }
    return number;
  }
}

export default validator;
