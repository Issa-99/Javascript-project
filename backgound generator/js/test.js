
//select the element 
const generateButton = document.getElementById('01');
const copyButton = document.getElementById('02');
var myH1 = document.getElementById('00');
const myBody  = document.getElementById('007'); 
let hex1 = "";
let hex2 = "";


//function that generate the color code in hexadeciamle to  

function generate(){

    const hexNumber = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    hex1 = "";
    hex2 = "";
    var myH1 = document.getElementById('00');
    
    for(let i = 0; i <6; i++){

        hex1 =  hex1 +  hexNumber[Math.floor(Math.random()*hexNumber.length)];
        hex2 =  hex2  +  hexNumber[Math.floor(Math.random()*hexNumber.length)] 
    }
    

    document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;

// insert the the hexadeciamle color code that was generate in the H1 balise 
    myH1.innerHTML =`Back-ground:linear-gradient(45deg, #${hex1}, #${hex2})`
    }


    
// function to copy the color code


function copy(){
    const gradient = `background: linear-gradient(45deg, #${hex1}, #${hex2})`
    navigator.clipboard.writeText(gradient)
  }

// copy event 
copyButton.addEventListener('click',copy);

// the fuction to apply when the event happen 

generateButton.addEventListener('click',generate);



//console.log("hex1" ," ", hex1);
    //console.log("hex2"," ",hex2)