for (let i = 10; i >= 0; i--) {
    
    if(i % 2 == 0 && i != 0 ){
        console.log(`${i} *tic*`);
        
    } else if(i % 2 !== 0){
        console.log(`${i} *tac*`);
        
    } else {
        console.log(`${i} *BOOM*`);
        
    }
    
    
 }

 