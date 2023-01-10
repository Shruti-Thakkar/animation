let x = 1;
while (x <= 12){
    let plane = document.createElement('div');
    plane.className = `plane plane-${x}`;
    plane.style.transform = `rotateY(${x *15}deg)`;
    document.querySelector('.sphere-wrapper').appendChild(plane);
    for (y = 1; y <= 36; y++){
        let spoke = document.createElement('div');
        spoke.className = `spoke spoke-${y}`;
        spoke.innerHTML =`<div class="dot" 
        style="background-color:${
        y % 2 === 0 ?'#e63c44' : '#0808ef' 
        }; animation: pulsate .5s infinite ${aDelay(y)}s alternate
        both"></div>`;
        spoke.style.transform = `rotateZ(${y}0deg)`;
        document.querySelector(`.plane-${x}`).appendChild(spoke);
    }
      x++;
}
function aDelay(t){
    switch(t){
        case 1:
        case 35: 
            return 0.05;
        case 2:
        case 34: 
            return 0.1;
        case 3:
        case 33: 
            return 0.15;
        case 4:
        case 32: 
            return 0.25;
        case 5:
        case 31: 
            return 0.50;
        case 6:
        case 30: 
            return 0.75;
        case 7:
        case 29: 
            return 0.85;
        case 8:
        case 25: 
            return 0.95;
        case 9:
        case 35: 
            return 0.98;
         case 8:
        case 25: 
            return 0.95;
        case 9:
        case 35: 
            return 0;
        default:
            return 1;  
          }
}