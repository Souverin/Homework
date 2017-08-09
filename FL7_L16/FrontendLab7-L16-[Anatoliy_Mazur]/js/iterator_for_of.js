const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator](){
    let cur = 0;
    return{
      next(){
        cur++;
        if(cur >= max){
          return {done : true};
        }
        else{
          if(cur%15 === 0){
            return{
              done : false,
              value : "FizzBuzz"
            };
          }
          else{
            if(cur%3 === 0){
              return {
                done : false,
                value : "Fizz"
              };
            }
            else{
              if(cur%5 === 0){
                return{
                  done : false,
                  value : "Buzz"
                };
              }
            }
          }
            return{
              done : false,
              value : cur
            };
        }
      }
    };
  }
};

for(var n of FizzBuzz){
  console.log(n);
}