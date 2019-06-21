const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const weekdaysTarget = document.querySelector('#clock .weekdays');
weekdays.forEach(day => {
	const daySpan = document.createElement('span');
	daySpan.innerText = day;
	weekdaysTarget.append(daySpan);
});

// weekdaysTarget.innerHTML = weekdays.map(day => {
// 	return `<span>${day}</span>`;
// }).join('');

// weekdays.forEach(day => {
// 	const span = document.createElement('span');
// 	const text = document.createTextNode(day);
// 	span.appendChild(text);
// 	weekdaysTarget.appendChild(span);
// });
