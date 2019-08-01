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
setTime();
setInterval(setTime, 1000);
