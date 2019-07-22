
var romanToInt = function(roman) {
    let obj ={
        'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000
      };
        let ar=new Array(...Object.keys(obj));
        let res=obj[roman[roman.length-1]];
        for(let i=roman.length-2;i>=0;i--){
            if(ar.indexOf(roman[i])<ar.indexOf(roman[i+1]))
                res-=obj[roman[i]];
            else
                res+=obj[roman[i]];
        }
          return res;

};
module.exports = romanToInt;