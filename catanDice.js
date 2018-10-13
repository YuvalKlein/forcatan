let selector = document.querySelector("#selector");
let selectorButton = document.querySelector("#selectorButton");
let info = document.querySelector("#info");
let infoText = document.querySelector("#infoText");
let dice = document.querySelectorAll(".dice");
let diceText1 = document.querySelector("#diceText1");
let diceText2 = document.querySelector("#diceText2");
let roll = document.querySelector("#roll");
let timer = document.querySelector("#timer");
let reset = document.querySelector("#reset");
let diceNum = document.querySelector("#diceNum");
let times = document.querySelector("#times");
let persentage = document.querySelector("#persentage");
let tr = document.querySelector("#tr");
let counterTime = selector.value;


//COUNTER
// selectorButton.addEventListener("click", function(){
// 	countDown();
// })

// function countDown(secs, elem) {
// 	counterTime--;
// 	counter = setTimeout(countDown(counterTime, timer),1000);
// }

// STATISTICS
for(let i = 2; i <= 12; i++){
	tr.append("<td id='diceNum'>" + i + "</td>" +
	"<td id='times'>" +  + "</td>" + 
	"<td id='persentage'>" +  + "</td>"
	)
}

// ROLLING
roll.addEventListener("click", function(){
	diceText1.textContent = rolling();
	diceText2.textContent = rolling();
	result = Number(diceText1.textContent) + Number(diceText2.textContent);
	return result
})

function rolling(){
	var random = Math.floor(Math.random() * 6 + 1);
	return random;
}
