
let selector = document.querySelector("#selector");
let selectorButton = document.querySelector("selectorButton");
let info = document.querySelector("#info");
let infoText = document.querySelector("#infoText");
let dice = document.querySelectorAll(".dice");
let diceText1 = document.querySelector("#diceText1");
let diceText2 = document.querySelector("#diceText2");
let roll = document.querySelector("#roll");
let timer = document.querySelector("#timer");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");
let diceNum = document.querySelector("#diceNum");
let times = document.querySelector("#times");
let persentage = document.querySelector("#persentage");
let tr = document.querySelector("#tr");
let turnTime = Number(selector.value);
let diceResult = 0;
let rolls = 0;
let counterTime = 0;
let startTimer;
// SOUNDS
const timeFinished = new Howl({
	src: ['public/src/time.wav']
});
const fiveSecs = new Howl({
	src: ['public/src/Tick Tock.mp3']
});
const go = new Howl({
	src: ['public/src/go.wav']
});



//COUNTER
selector.addEventListener("change", function(){
	turnTime = Number(selector.value);
})

function countDown() {
	timer.innerHTML  = counterTime;
	counterTime--;
	if(counterTime > 0){
		startTimer = setTimeout(countDown,1000);
	// } else if(counterTime = 5){
	// 	fiveSecs.play();
	} else {
		counterTime = turnTime;
		startTimer = setTimeout(countDown,1000);
		timeFinished.play();
	}
}

// sounds();

// const sounds = () => {
// 	if(timer.innerHTML = 1){
// 		timeFinished.play();
// 	} else if(counterTime = 5){
// 		fiveSecs.play();
// 	}
// };

// ROLLING
roll.addEventListener("click", function(){
	go.play();
	diceText1.textContent = rolling();
	diceText2.textContent = rolling();
	rolls += 1;
	diceResult = Number(diceText1.textContent) + Number(diceText2.textContent);
	if(counterTime > 0 ){
		counterTime = turnTime;
		clearTimeout(startTimer);
		countDown();
	} else {
		counterTime = turnTime;
		countDown();
	}
});

const rolling = () => {
	var random = Math.floor(Math.random() * 6 + 1);
	return random;
}

// PAUSE
let counting = 2;
pause.addEventListener("click", function(){
	console.log("1" + counting)
	if(counting != 1){
		counting = 1;
		pause.innerHTML = "resume";
		clearTimeout(startTimer);
	} else {
		counting = 2;
		pause.innerHTML = "pause";
		countDown()
	}
	console.log("2" + counting)

});

// RESET
reset.addEventListener("click", function(){
	counterTime = turnTime;
	timer.innerHTML  = counterTime;
});

// Create Table
for(let i = 2; i <= 12; i++){
	tr.append("<td id='diceNum'>" + i + "</td>" +
	"<td id='times'>" +  + "</td>" + 
	"<td id='persentage'>" +  + "</td>"
	)
}