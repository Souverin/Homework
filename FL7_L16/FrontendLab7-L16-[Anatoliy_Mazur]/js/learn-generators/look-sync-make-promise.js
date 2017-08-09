function askFoo () {
      return new Promise(function (resolve, reject) {
        resolve('foo');
      });
}

    function run (generator) {
      var it = generator();
      function go(result){
        return result.value.then(function (value){ return go(it.next(value));},
          function(e){return go(it.throw(e));})
      }
      go(it.next());
    }

    run(function* () {
      try{
        var foo = yield askFoo();
        console.log(foo);
      } catch(e){
        console.log(e);
      }
    });