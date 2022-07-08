function TimeConversion (n){
         
            seconds = Math.floor((n/ 1000) % 60)
            minutes = Math.floor((n / (1000 * 60)) % 60)
            hours = Math.floor((n / (1000 * 60 * 60)) % 24);

            
              if (n<=60000){
                  if(seconds==0){
                      return "1 minute"
                  }
                  else {
                      return `${seconds} seconds`
                  }
              }
             if (n<3600000  && n>60000 ){
                if(seconds==0){
                    return `${minutes} minutes`
                }
                 return `${minutes} minute ${seconds} seconds`
             }
             else{

                if (minutes==0 && seconds==0){
                  return `${hours} hours`
                }
            return `${ hours} hours ${minutes} minute ${seconds} seconds`}
         

     }
     module.exports=TimeConversion;

    //  console.log(time(36000))