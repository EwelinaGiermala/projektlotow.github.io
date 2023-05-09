const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const labels = document.querySelectorAll(".form-check-label");
let h = 10;
let p = 100;
for (const label of [...labels]) {
	label.innerText = urlParams.get("departure") + "-> " + urlParams.get("arrival");
	const hour = document.createElement("h3");
	hour.innerText = h + ":30 " + "->" + h + ":40";
	h+=3;
	label.appendChild(hour);
	const date = document.createElement("p");
	date.innerText = urlParams.get("dateDeparture") + " -> " + urlParams.get("dateArrival");
	label.appendChild(date);
	const price = document.createElement("div");
	price.innerText = p + " zł";
	p += 83;
	label.appendChild(price);
	const passengersNum = document.createElement("h5");
	passengersNum.innerText = "Liczba pasażerów:" + urlParams.get("passengers1");
	label.appendChild(passengersNum);
	const selectLuggage = document.createElement("p");
	selectLuggage.innerText = "Wybrano bagaż:" + urlParams.get("luggage");
	label.appendChild(selectLuggage);
}

