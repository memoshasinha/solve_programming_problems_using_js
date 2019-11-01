var mySqrt = function (x) {
    // if ((x == 1)||(x == 0)) return x;
   
    // else{
        
    //     let n1 = x/2 , n2 = x/2;
    //     do {
    //         n1 = n2;
            
    //         n2 = (n1 + x/n1)/2;
            
    //     } while(n1 > n2);
    //     return Math.floor(n1);
    // }
    let i=0;
    let sum=0;
    while(i < 60){
        if( i % 2 ===0 && i %3 ===0 ){
            sum+= i;
        }
        i++;
    }
    console.log(sum);
};
console.log(mySqrt(8));