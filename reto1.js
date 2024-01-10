console.log('Mensaje 1');

setTimeout(function () {
    console.log('Mensaje 2');

    setTimeout(function(){
        console.log('Mensaje 3');
    },1000)
},3000);



