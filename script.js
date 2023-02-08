var errorCounter=0;
var rightCounter = 0;
var righttext = [];
var text =[];




document.onkeydown = function(e){
    if ((e.keyCode == 32)||(e.keyCode == 222)||(e.keyCode == 191)) e.preventDefault();
};


document.querySelector('#button').onclick = function () {
  init()
    text = document.querySelector('textarea').value.split("")     
    righttext = [];
    errorCounter=0;
    let error = document.querySelector('.error');
    error.innerHTML = `<h1>Помилки = ${errorCounter} </h1>`    
    let parag = document.querySelector('p');
    parag.innerHTML = `<div class="r">${righttext.join('')}|</div>|${text.join('')}`;
    rightCounter = text.length;    
    let right = document.querySelector('.right');
    right.innerHTML = `<h1>К-сть симв. = ${rightCounter} </h1>`
    pressKey (text[0],false)
}





document.body.addEventListener('keydown', function (e) {
  let parag = document.querySelector('p');


  
    
    key = e.key;      
    pressKey (key, true) 
    if (rightCounter==1){
      sps= sec/text.length
      alert(`Ваша швидкість = ${((righttext.length+1)/(min+sec/60)).toFixed(1)}   Точність = ${100-((100/(righttext.length+1))*(errorCounter)).toFixed(1)} %  `)
      location.reload();
    }
    else if (key==text[0]){
      
        rightCounter--;        
        let right = document.querySelector('.right');
        right.innerHTML = `<h1>К-сть симв. = ${rightCounter} </h1>`
        righttext.push(text[0])
        text.shift() 
        pressKey (text[0],false)                
        parag.innerHTML = `<div class="r">${righttext.join('')}|</div>|${text.join('')}`;        
    }    
    else {
          if ((key=='Shift')||(key=='Alt')||(key=='Control')||(key=='CapsLock')||(key=='Tab')||(key=='Escape')||(key=='Enter')){
           
          }else{          
              errorCounter++;  
              let error = document.querySelector('.error');      
              error.innerHTML = `<h1>Помилки = ${errorCounter} </h1>`
          }
      }

        



});

document.body.addEventListener('keyup', function (e) {  
  pressKey (text[0],false)  
});












function pressKey (char, d) {

    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');    

    switch (char.toUpperCase()) {
          case "1":
            key = document.querySelector('[data-key*="' + '49' + '"]');
          break;
          case "2":
            key = document.querySelector('[data-key*="' + '50' + '"]');
          break;
          case "3":
            key = document.querySelector('[data-key*="' + '51' + '"]');
          break;
          case "4":
            key = document.querySelector('[data-key*="' + '52' + '"]');
          break;
          case "5":
            key = document.querySelector('[data-key*="' + '53' + '"]');
          break;
          case "6":
            key = document.querySelector('[data-key*="' + '54' + '"]');
          break;
          case "7":
            key = document.querySelector('[data-key*="' + '55' + '"]');
          break;
          case "8":
            key = document.querySelector('[data-key*="' + '56' + '"]');
          break;
          case "9":
            key = document.querySelector('[data-key*="' + '57' + '"]');
          break;
          case "0":
            key = document.querySelector('[data-key*="' + '48' + '"]');
          break;  
          case "-":
            key = document.querySelector('[data-key*="' + '173' + '"]');
          break; 
          case "=":
            key = document.querySelector('[data-key*="' + '61' + '"]');
          break; 

          case "!":
            key = document.querySelector('[data-key*="' + '49' + '"]');
          break;
          case "@":
            key = document.querySelector('[data-key*="' + '50' + '"]');
          break;
          case "#":
            key = document.querySelector('[data-key*="' + '51' + '"]');
          break;
          case "$":
            key = document.querySelector('[data-key*="' + '52' + '"]');
          break;
          case "%":
            key = document.querySelector('[data-key*="' + '53' + '"]');
          break;
          case "^":
            key = document.querySelector('[data-key*="' + '54' + '"]');
          break;
          case "&":
            key = document.querySelector('[data-key*="' + '55' + '"]');
          break;
          case "*":
            key = document.querySelector('[data-key*="' + '56' + '"]');
          break;
          case "(":
            key = document.querySelector('[data-key*="' + '57' + '"]');
          break;
          case ")":
            key = document.querySelector('[data-key*="' + '48' + '"]');
          break;  
          case "_":
            key = document.querySelector('[data-key*="' + '173' + '"]');
          break; 
          case "+":
            key = document.querySelector('[data-key*="' + '61' + '"]');
          break; 

          





        
        case "Й":
            key = document.querySelector('[data-char*="' + 'Q' + '"]');
          break;
        case "Ц":
            key = document.querySelector('[data-char*="' + 'W' + '"]');
          break;
        case "У":
            key = document.querySelector('[data-char*="' + 'E' + '"]');
          break;           
        case "К":
            key = document.querySelector('[data-char*="' + 'R' + '"]');
          break; 
        case "Е":
            key = document.querySelector('[data-char*="' + 'T' + '"]');
          break;
        case "Н":
            key = document.querySelector('[data-char*="' + 'Y' + '"]');
          break;
        case "Г":
            key = document.querySelector('[data-char*="' + 'U' + '"]');
          break;
        case "Ш":
            key = document.querySelector('[data-char*="' + 'I' + '"]');
          break;
        case "Щ":
            key = document.querySelector('[data-char*="' + 'O' + '"]');
          break; 
        case "З":
            key = document.querySelector('[data-char*="' + 'P' + '"]');
          break; 
          case "Х":
            key = document.querySelector('[data-char*="' + '[' + '"]');
          break;         
          case "Ї":
            key = document.querySelector('[data-char*="' + ']' + '"]');
          break;        
          case "Ф":
            key = document.querySelector('[data-char*="' + 'A' + '"]');
          break;
        case "І":
            key = document.querySelector('[data-char*="' + 'S' + '"]');
          break;
        case "В":
            key = document.querySelector('[data-char*="' + 'D' + '"]');
          break;           
        case "А":
            key = document.querySelector('[data-char*="' + 'F' + '"]');
          break; 
        case "П":
            key = document.querySelector('[data-char*="' + 'G' + '"]');
          break;
        case "Р":
            key = document.querySelector('[data-char*="' + 'H' + '"]');
          break;
        case "О":
            key = document.querySelector('[data-char*="' + 'J' + '"]');
          break;
        case "Л":
            key = document.querySelector('[data-char*="' + 'K' + '"]');
          break;
        case "Д":
            key = document.querySelector('[data-char*="' + 'L' + '"]');
          break; 
        case "Ж":
            key = document.querySelector('[data-key*="' + '59' + '"]');
          break; 
          case ";":
            key = document.querySelector('[data-key*="' + '59' + '"]');
          break; 

          case "Є":
            key = document.querySelector('[data-key*="' + '222' + '"]');
          break;

          case "\\":
            key = document.querySelector('[data-key*="' + '220' + '"]');
          break;          
          case "Я":
            key = document.querySelector('[data-char*="' + 'Z' + '"]');
          break;
        case "Ч":
            key = document.querySelector('[data-char*="' + 'X' + '"]');
          break;
        case "С":
            key = document.querySelector('[data-char*="' + 'C' + '"]');
          break;           
        case "М":
            key = document.querySelector('[data-char*="' + 'V' + '"]');
          break; 
        case "И":
            key = document.querySelector('[data-char*="' + 'B' + '"]');
          break;
        case "Т":
            key = document.querySelector('[data-char*="' + 'N' + '"]');
          break;
        case "Ь":
            key = document.querySelector('[data-char*="' + 'M' + '"]');
          break;
        case "Б":
            key = document.querySelector('[data-key*="' + '188' + '"]');
          break;
          case "Ю":
            key = document.querySelector('[data-key*="' + '190' + '"]');
            break;
            
            //укр раскладка
            case ",":
              key = document.querySelector('[data-key*="' + '191' + '"]');
            break;
            case "'":
              key = document.querySelector('[data-key*="' + '192' + '"]');
            break;
            case '"':
              key = document.querySelector('[data-key*="' + '50' + '"]');
            break;
          case ".":
            key = document.querySelector('[data-key*="' + '191' + '"]');
          break; 

         
          
      }

      console.log(char)
    key.setAttribute('data-pressed', 'on');

    if (d){
        setTimeout(function () {
            key.removeAttribute('data-pressed');
        }, 200);
    }
}

var h1 = document.querySelector('h1');
var originalQueue = h1.innerHTML;
var queue = h1.innerHTML;

function next () {
  var c = queue[0];
  queue = queue.slice(1);
  h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
  pressKey(c,true);
  if (queue.length) {
      setTimeout(next, Math.random() * 200 + 50);
  }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);

function size () {
  var size = keyboard.parentNode.clientWidth / 90;
  keyboard.style.fontSize = size + 'px';
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
  size();
});
size();



function init(){
    sec = 0;
    min = 0;
    setInterval(tick, 1000);
}

function tick(){
    sec++;
    if (sec==60){
      min++
      sec=0
    }
    document.getElementById("timer").innerHTML = `<h1>Час = ${min}: ${sec} </h1>`  
    document.querySelector(".sps").innerHTML = `<h1>С/хв = ${((righttext.length+1)/(min+sec/60)).toFixed(1)}</h1>`    
}






const butons = document.querySelectorAll('.btn')
const blocBtn =document.querySelector('.activebloc')
const root = document.querySelector(":root"); 
const body = document.querySelector("body");
butons.forEach(element => element.onclick = function(){
  butons.forEach(e => e.classList.remove('active'))
  element.classList.toggle('active')  
  left = ['30px', '80px', '130px']
  theme= ['white','blac','cids']
  root.style.setProperty("--left-btn", `${left[element.id-1]}`);

  body.className = '';
  body.classList.add(theme[element.id-1]);
  
})



















var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.0008;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);