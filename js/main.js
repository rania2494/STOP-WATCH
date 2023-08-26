let hr = document.querySelector('#hr'),
   min = document.querySelector('#min'),
   sec = document.querySelector('#sec'),
   csec = document.querySelector('#csec'),
   pause = document.querySelector('#pause'),
   play = document.querySelector('#play'),
   repeate = document.querySelector('#repeate'),
   startInterval = '';


function Repeate() {
   hr.innerHTML = '00';
   min.innerHTML = '00';
   sec.innerHTML = '00';
   csec.innerHTML = '00';
}


function Stop() {
   clearInterval(startInterval);
}
function csecCount() {
   let csecN = Number(csec.innerHTML)
   if (csecN < 9) {
      csec.innerHTML = '0' + (csecN + 1)
   } else if (csecN < 99) {
      csec.innerHTML = (csecN + 1)
   } else if (csecN = 99) {
      csec.innerHTML = '00'
      secCount();
   }
}
function secCount() {
   let secN = Number(sec.innerHTML)
   if (secN < 9) {
      sec.innerHTML = '0' + (secN + 1)

   } else if (secN < 59) {
      sec.innerHTML = (secN + 1)
   } else if (secN = 59) {
      sec.innerHTML = '00'
      minCount()
   }
}

function minCount() {
   let minN = Number(min.innerHTML)
   if (minN < 9) {
      min.innerHTML = '0' + (minN + 1)

   } else if (minN < 59) {
      min.innerHTML = (minN + 1)
   } else if (minN = 59) {
      min.innerHTML = '00'
      hrCount()
   }
}
function hrCount() {
   let hrN = Number(hr.innerHTML)
   if (hrN < 9) {
      hr.innerHTML = '0' + (hrN + 1)

   } else if (hrN < 23) {
      hr.innerHTML = (hrN + 1)
   } else if (hrN = 23) {
      hr.innerHTML = '00'
   }
}
play.addEventListener('click', () => {
   startInterval = setInterval(csecCount, 10);
   pause.classList.remove('disabled')
   play.classList.add('disabled')
})
pause.addEventListener('click', () => {
   Stop()
   play.classList.remove('disabled')
   pause.classList.add('disabled')
})


repeate.addEventListener('click', () => {
   Repeate();
   Stop()
   play.classList.remove('disabled')
   pause.classList.add('disabled')
}
)
