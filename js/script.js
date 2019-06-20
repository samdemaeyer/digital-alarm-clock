const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const weekdaysTarget = document.querySelector('#clock .weekdays');
weekdays.forEach(day => {
	const daySpan = document.createElement('span');
	daySpan.innerText = day;
	weekdaysTarget.append(daySpan);
});
