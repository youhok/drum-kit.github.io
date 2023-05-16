// this code for click

//tom1
// const myDiv1 = document.getElementById('myDiv1');
// const soundUrl = 'sounds/tom-1.mp3';
// let originalColor = myDiv1.style.borderColor;


// myDiv1.addEventListener('click', function() {
//     const audio = new Audio(soundUrl);
//     audio.play();
//     myDiv1.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       myDiv1.style.borderColor = originalColor;
//     });
//   });


// //tom2
//   const mydiv2 = document.getElementById('mydiv2');
//   const sound1 = 'sounds/tom-2.mp3';

//   mydiv2.addEventListener('click', function() {
//       const audio = new Audio(sound1);
//       audio.play();
//       mydiv2.style.borderColor = "#ffb703"
//       setTimeout(function () {
//         mydiv2.style.borderColor = originalColor;
//       });
//     });

// //tom3

// const mydiv3 = document.getElementById('mydiv3');
// const sound2 = 'sounds/tom-3.mp3';

// mydiv3.addEventListener('click', function() {
//     const audio = new Audio(sound2);
//     audio.play();
//     mydiv3.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv3.style.borderColor = originalColor;
//     });
//   });

// //tom4
// const mydiv4 = document.getElementById('mydiv4');
// const sound3 = 'sounds/tom-4.mp3';

// mydiv4.addEventListener('click', function() {
//     const audio = new Audio(sound3);
//     audio.play();
//     mydiv4.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv4.style.borderColor = originalColor;
//     });
//   });

// //   snare

// const mydiv5 = document.getElementById('mydiv5');
// const sound4 = 'sounds/snare.mp3';

// mydiv5.addEventListener('click', function() {
//     const audio = new Audio(sound4);
//     audio.play();
//     mydiv5.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv5.style.borderColor = originalColor;
//     });
//   });


// //crash

// const mydiv6 = document.getElementById('mydiv6');
// const sound5 = 'sounds/crash.mp3';

// mydiv6.addEventListener('click', function() {
//     const audio = new Audio(sound5);
//     audio.play();
//     mydiv6.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv6.style.borderColor = originalColor;
//     });
//   });

// //   kick

// const mydiv7 = document.getElementById('mydiv7');
// const sound6 = 'sounds/kick-bass.mp3';

// mydiv7.addEventListener('click', function() {
//     const audio = new Audio(sound6);
//     audio.play();
//     mydiv7.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv7.style.borderColor = originalColor;
//     });
//   });


// // Keyboard sound

// document.addEventListener('keydown', function(event) {
//   if(event.keyCode == 65) {
//     const audio = new Audio(soundUrl);
//     audio.play();
//     myDiv1.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       myDiv1.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 83) {
//     const audio = new Audio(sound1);
//     audio.play();
//     mydiv2.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv2.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 68) {
//     const audio = new Audio(sound2);
//     audio.play();
//     mydiv3.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv3.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 70) {
//     const audio = new Audio(sound3);
//     audio.play();
//     mydiv4.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv4.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 74) {
//     const audio = new Audio(sound4);
//     audio.play();
//     mydiv5.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv5.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 75) {
//     const audio = new Audio(sound5);
//     audio.play();
//     mydiv6.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv6.style.borderColor = originalColor;
//     });
//   }
//   else if(event.keyCode == 76) {
//     const audio = new Audio(sound6);
//     audio.play();
//     mydiv7.style.borderColor = "#ffb703"
//     setTimeout(function () {
//       mydiv7.style.borderColor = originalColor;
//     });
//   }

// });


let keyWords = document.querySelectorAll(".box");
let sounds = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
// click on element
for (let i = 0; i < keyWords.length; i++) {
  let keyElement =  keyWords[i]; 
  let key = keyWords[i].classList[0];
  keyElement.addEventListener("click", function () {
    playSound(key);
    borederActive(keyElement);
  });
}
//even keyborad keypress
document.addEventListener("keypress", function (e) {
  let key = e.key;
  let keyElement = document.querySelector(`.${key}`);
  console.log( keyElement)
  playSound(key);
  borederActive(keyElement);
});

function playSound(key){
  switch (key) {
    case 'a':
      const tom1 = `sounds/${sounds[0]}.mp3`;
      var audio = new Audio(tom1);
      break;
    case 's':
      const tom2 = `sounds/${sounds[1]}.mp3`;
      var audio = new Audio(tom2);
      break;
    case 'd':
      const tom3 = `sounds/${sounds[2]}.mp3`;
      var audio = new Audio(tom3);
      break;
    case 'f':
      const tom4 = `sounds/${sounds[3]}.mp3`;
      var audio = new Audio(tom4);
      break;
    case 'j':
      const snare = `sounds/${sounds[4]}.mp3`;
      var audio = new Audio(snare);
      break;
    case 'k':
      const crash = `sounds/${sounds[5]}.mp3`;
      var audio = new Audio(crash);
      break;
    case 'l':
      const kickBass = `sounds/${sounds[6]}.mp3`;
      var audio = new Audio(kickBass);
      break;
    default:
      alert('Oops, key not found.')
      break;
  }
  audio.play();
}

function borederActive (keyElement){
  keyElement.classList.add("box-boder-pressed");
  setTimeout(function () {
    keyElement.classList.remove("box-boder-pressed");
  }, 100);
}


