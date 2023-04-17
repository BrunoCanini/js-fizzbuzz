for (let i = 1; i <= 100; i++) {

    let multiTre = (i % 3)==0;
    let multiCin = (i % 5)==0;
    
    if(multiTre && multiCin ){
        console.log ("fizz-buzz")
        console.log("fizz")
    } else if (multiCin ){
        console.log("buzz")
    } else if (multiTre){
        console.log("fizz")
    } else{
        console.log(i);
    }
}