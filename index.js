let circle1=()=>{
    let circle1=document.getElementById("circle1");
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//generates a random color -> #56eec7
var randomColor=random_col();
console.log(randomColor);
    circle1.style.backgroundColor=randomColor;
}

let circle2=()=>{
    let circle2=document.getElementById("circle2");
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor=random_col();
console.log(randomColor);
    circle2.style.backgroundColor=randomColor;
}
let circle3=()=>{
    let circle3=document.getElementById("circle3");
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor=random_col();
console.log(randomColor);
    circle3.style.backgroundColor=randomColor;
}

let reset=()=>{
    let circle1=document.getElementById("circle1");
    let circle2=document.getElementById("circle2");
    let circle3=document.getElementById("circle3");
    var randomColor = '#FFFFFF';
    circle3.style.backgroundColor=randomColor;
    circle2.style.backgroundColor=randomColor;
    circle1.style.backgroundColor=randomColor;
}


let random_col=()=>{
    let s ="0123456789ABCDEF";
    let col = "#";
    for(let i=0;i<6;i++){
        col+=s.charAt(Math.floor(Math.random()*s.length))
    }
    return col;
}