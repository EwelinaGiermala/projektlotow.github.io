//  START DIGITAL CLOCK
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');
const time = setInterval(function time () {
let dateToday = new Date();
let hr = dateToday.getHours();
let min = dateToday.getMinutes();
let sec = dateToday.getSeconds();
if(hr < 10) {
    hr = '0' + hr;
}
if(min < 10) {
    min = '0' + min;
}
if(sec < 10) {
    sec = '0' + sec;
}
hour.textContent = hr;
minute.textContent = min;
seconds.textContent = sec;
},1000);
//  END DIGITAL CLOCK
// START BOOKING TICKETS
const departure=document.querySelector("#inputGroupSelect01").value;
const arrival=document.querySelector("#inputGroupSelect02").value;
const dateDeparture=document.querySelector("#departure").value;
const dateReturn=document.querySelector("#return").value;
const btnSearch=document.querySelector("#btn-search");
btnSearch.addEventListener("click",function(){
	const departure=document.querySelector("#inputGroupSelect01").value;
	const arrival=document.querySelector("#inputGroupSelect02").value;
	const dateDeparture=document.querySelector("#departure").value;
	const dateArrival=document.querySelector("#return").value;
	const dD=parseInt(dateDeparture.substring(8,10));
	const dR=parseInt(dateArrival.substring(8,10));
	if(departure==="departurePlace")
	{
		alert("Wybierz właściwe miejsce wylotu");
	}
	else if(arrival==="arrivalPlace")
	{
		alert("Wybierz właściwe miejsce przylotu");
	} else {
		window.location.href = "rezerwuj-loty.html?departure="+departure+"&arrival="+arrival+"&dateDeparture="+dateDeparture+"&dateArrival="+dateArrival+"&luggage="+luggage;
	}
});
// END BOOKING TICKETS








