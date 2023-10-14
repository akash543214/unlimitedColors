
    const timer = document.getElementById('timer');
   const start =  document.getElementById('start');
    const end = document.getElementById('end');
    let startInterval;
    function randomColor()
{
    const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
   return `rgb(${randomR}, ${randomG}, ${randomB})`;
  
}

        start.addEventListener('click',(e)=>{
            
           clearInterval(startInterval);

            
            function startTimer() {
                let cl = randomColor();
                timer.textContent = cl;
               document.body.style.backgroundColor = cl;
               console.log(startInterval);
            }
            
           startInterval =  setInterval(startTimer, 1000);
         
        })   

        end.addEventListener('click',(e)=>{
            clearInterval(startInterval);
          
        })
         
      