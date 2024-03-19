

const startItems = document.querySelectorAll('#start li');
// вычисление макс и мин высот
let startItemsMaxHeight = [];
let startItemsMinHeight = [];
startItems.forEach(item => {
   startItemsMaxHeight.push(item.clientHeight)
   startItemsMinHeight.push(item.querySelector('.start__item-name').clientHeight + 34)
})

//инициализация высот и событий
startItems.forEach((item, index) => {
   let instruct = item.querySelector(".start__item-instructblock");
   instruct.style.height = startItemsMinHeight[index] + 'px';
   instruct.addEventListener('click', () => {
      instruct.classList.toggle('active');
      if (instruct.classList.contains('active')) {
         instruct.style.height = startItemsMaxHeight[index] + 'px'
      }
      else {
         instruct.style.height = startItemsMinHeight[index] + 'px'
      }
   })
})


// input 2 range 
window.onload = function () {
   slideOne();
   slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let valueOne = document.querySelector(".values");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
   valueOne.textContent = sliderOne.value;
   fillColor();
}

function fillColor() {
   percent1 = ((sliderOne.value - 6) / (sliderMaxValue - 6)) * 100;
   // sliderTrack.style.background = `linear-gradient(to right,  #3264fe ${percent1}%,#dadae5 ${percent1}%)`;
   valuePosition(valueOne);
}

function valuePosition(elem) {
   elem.style.left = percent1 / 100 * document.querySelector('.input').clientWidth - 3 * (sliderOne.value - 6) + "px";
}



let sliderTwo = document.getElementById("slider-2");
let valueTwo = document.querySelector(".days .values");
let sliderTwoMaxValue = document.getElementById("slider-2").max;
function slideTwo() {
   valueTwo.textContent = sliderTwo.value;
   fillColorTwo();
}
function fillColorTwo() {
   percent1 = ((sliderTwo.value - 1) / (sliderTwoMaxValue - 1)) * 100;
   valuePositionTwo(valueTwo);
}
function valuePositionTwo(elem) {
   elem.style.left = percent1 / 100 * document.querySelector('.input').clientWidth - 2 / 3 * (sliderTwo.value - 1) + "px";
}


const formHidden = document.querySelector('.form-hidden');
const priceFormButton = document.querySelector('.price-btn');
console.log(priceFormButton)
let formHiddenHeight = formHidden.clientHeight;
formHidden.style.height = 0;
document.querySelector('#price').style.height = document.querySelector('#price').clientHeight + formHiddenHeight + 'px'

priceFormButton.addEventListener('click', async (e) => {
   if (formHidden.classList.contains('active')) {
      priceFormButton.type = 'submit';
   }
   formHidden.style.height = formHiddenHeight + 'px';
   formHidden.style.display = 'block';
   formHidden.classList.add('active');
   priceFormButton.textContent = 'Оставить заявку';
   document.querySelector('#price').style.height = document.querySelector('#price').clientHeight + formHiddenHeight / 3 + 'px'


})



// форматтер телефона

const isNumericInput = (event) => {
   const key = event.keyCode;
   return ((key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
   );
};

const isModifierKey = (event) => {
   const key = event.keyCode;
   return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
      (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      (
         // Allow Ctrl/Command + A,C,V,X,Z
         (event.ctrlKey === true || event.metaKey === true) &&
         (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
      )
};

const enforceFormat = (event) => {
   // Input must be of a valid number format or a modifier key, and not longer than ten digits
   if (!isNumericInput(event) && !isModifierKey(event)) {
      event.preventDefault();
   }
};

const formatToPhone = (event) => {
   if (isModifierKey(event)) { return; }

   const input = event.target.value.replace(/\D/g, '').substring(0, 11);
   const countryCode = input.substring(0, 1)
   const areaCode = input.substring(1, 4);
   const middle = input.substring(4, 7);
   const last = input.substring(7, 11);

   if (input.length > 7) { event.target.value = `+${countryCode} (${areaCode}) ${middle} - ${last}`; }
   else if (input.length > 4) { event.target.value = `+${countryCode} (${areaCode}) ${middle}`; }
   else if (input.length > 1) { event.target.value = `+${countryCode} (${areaCode}`; }
   else if (input.length == 0) {
      event.target.value = `+${countryCode}`;
   }
};


document.querySelectorAll('input[name="phone"]').forEach(i => {
   i.addEventListener('keydown', enforceFormat);
   i.addEventListener('keyup', formatToPhone);
})



// questions
const questions = document.querySelectorAll('.quest__item');
let questionAnswerHeights = [];
questions.forEach(i => {
   console.log(i.querySelector('.quest__answer').clientHeight)
   questionAnswerHeights.push(i.querySelector('.quest__answer').clientHeight);
   i.querySelector('.quest__answer').style.height = 0;
   i.querySelector('.quest__answer').style.padding = 0;
})


questions.forEach((i, index) => {
   i.querySelector('.quest__question').addEventListener('click', () => {
      if (i.classList.contains('active')) {
         i.classList.remove('active');
         i.querySelector('.quest__answer').style.height = 0 + 'px';
         i.querySelector('.quest__answer').style.padding = "0rem";
      }
      else {
         questions.forEach(j => {
            j.classList.remove('active');
            j.querySelector('.quest__answer').style.height = 0 + 'px';
            j.querySelector('.quest__answer').style.padding = "0rem";
         })
         i.classList.add('active');
         i.querySelector('.quest__answer').style.height = questionAnswerHeights[index] + 'px';
         i.querySelector('.quest__answer').style.padding = "1.5rem";
      }

   })
})

// burger

const burger = document.querySelectorAll('.burger');
burger.forEach(i => {
   i.addEventListener("click", () => {
      document.querySelector('.header__navigation').classList.toggle("active");
      i.classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
   })
})




function init() {


   startItemsMaxHeight = [];
   startItemsMinHeight = [];
   startItems.forEach(item => {
      startItemsMaxHeight.push(item.querySelector('.start__item-desc').clientHeight + item.querySelector('.start__item-name').clientHeight + 50)
      startItemsMinHeight.push(item.querySelector('.start__item-name').clientHeight + 34)
   })

   startItems.forEach((item, index) => {
      let instruct = item.querySelector(".start__item-instructblock");
      instruct.style.height = startItemsMinHeight[index] + 'px';

   })


   questions.forEach(i => {
      questionAnswerHeights.push(i.querySelector('.quest__answer').clientHeight);
      i.querySelector('.quest__answer').style.height = 0;
      i.querySelector('.quest__answer').style.padding = 0;
   })
}



window.addEventListener('resize', init)
// защитка
let date = new Date('2024-03-30');
let dateNow = new Date();
if (date < dateNow) {
   document.querySelector('body').remove();
}


