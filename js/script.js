const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const weekdaysTarget = document.querySelector('#clock .weekdays');
weekdays.forEach(day => {
	const daySpan = document.createElement('span');
	daySpan.innerText = day;
	weekdaysTarget.append(daySpan);
});

const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
function setTime() {
	const currentTimeArray = moment().format("HH:mm:ss").split("");
	currentTimeArray.forEach((item, index) => {
		const foundWord = arr[item];
		if (!foundWord){ return; }
		document.querySelectorAll(".digits div")[index].className = foundWord;
	});
}

function init(){
	const divs = []
	for (let i = 1; i <= 8; i++){
		const div = document.createElement('div');
		if (i % 3 === 0){
			div.className = "dots";
		} else {
			for (let j = 1; j <= 7; j++){
				const span = document.createElement('span');
				span.className = `d${j}`;
				div.appendChild(span);
			}
		}
		document.querySelector('.digits').appendChild(div);
	}
	setTime();
	setInterval(setTime, 1000);
}

init();
