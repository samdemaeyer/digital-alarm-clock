const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const weekdaysTarget = document.querySelector('#clock .weekdays');
weekdays.forEach(day => {
	const daySpan = document.createElement('span');
	daySpan.innerText = day;
	weekdaysTarget.append(daySpan);
});

function setTime(){
	var currentTime = moment().format("HH:mm:ss")
	currentTime.split("").forEach(function(num, index){
		var numArrays = ["zero","one","two","three","four","five","six","seven","eight","nine"]
		var currentNum = numArrays[num]
		if (!currentNum){
			return;
		}
		document.querySelectorAll(".digits div")[index].className = currentNum
	})
}

setInterval(function(){
	setTime()
},1000)
