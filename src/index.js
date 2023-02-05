
const refs = {
    text:document.querySelector('.text'),
    start:document.querySelector('.js-start'),
    stop:document.querySelector('.js-stop'),
    isActive: true,
}

refs.start.addEventListener('click', startHandler);
refs.stop.addEventListener('click', stopHandler);

function startHandler(){
    if(refs.isActive === false){
        console.log('no');
        return
    }
    
    const time = Date.now();

    intervalId = setInterval(() =>{
        refs.isActive = false;

        let currentTime = Date.now();
        let total = currentTime - time;
        updateClockface(total);
        
    },1000)
}

function stopHandler(){
    clearInterval(intervalId);
    refs.isActive = true;
}

function updateClockface(time) {
    /**
     * Копипаста со стека 💩
     */
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
    refs.text.textContent = `${hours}:${mins}:${secs}`;
  }

  function pad(value) {
  return String(value).padStart(2, '0');
}

// const date = new Date('Februar 14, 2023');

// console.log(date);