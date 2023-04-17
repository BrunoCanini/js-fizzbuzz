for (let i = 1; i <= 100; i++) {

    console.log(i);

    let n = (i % 3)==0;
    let m = (i % 5)==0;

    if(n){
        console.log("fizz")
    } else if (m){
        console.log("buzz")
    } else if ( n && m){
        console.log ("fizz buzz")
    }
}