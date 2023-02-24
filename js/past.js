let pastEvents = "";
let cardContainer = document.getElementById("card");

for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);
    if (eventDate < currentDate) {
        pastEvents += createCard(event);
    }
}
cardContainer.innerHTML = pastEvents;