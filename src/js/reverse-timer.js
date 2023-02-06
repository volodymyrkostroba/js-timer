const refs = {
    days:document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[ data-value="hours"]'),
    mins:document.querySelector('[data-value="mins"]'),
    secs:document.querySelector('[data-value="secs"]'),
}

function timer(){
    const date = new Date('Februar 14, 2023');
    console.log(date);

    intervalId = setInterval(() =>{
        const currentDate = Date.now();
        const deltaTime = date - currentDate;

        refs.days.textContent = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        refs.hours.textContent = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        refs.mins.textContent = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        refs.secs.textContent = Math.floor((deltaTime % (1000 * 60)) / 1000);
    },1000)
}

timer();