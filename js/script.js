const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const weekdaysTarget = document.querySelector('#clock .weekdays');
weekdays.forEach(day => {
	const daySpan = document.createElement('span');
	daySpan.innerText = day;
	weekdaysTarget.append(daySpan);
});

function setTime(){
	var currentTimeArray = moment().format("HH:mm:ss").split("")
	// currentTimeArray = ["2", "0", ":", "0", "5", ":", "0", "8"]
	currentTimeArray.forEach(function (item, index) {
		var word = convertNumToWord(item)
		if(!word){
			return
		}
		document.querySelectorAll(".digits div")[index].className = word
	})
}

function convertNumToWord(num) {
	var array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
	return  array[num]
}



setInterval(setTime, 1000)
