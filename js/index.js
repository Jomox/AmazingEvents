let htmlEvents = "";
let cardContainer = document.getElementById("card");

for (let event of data.events) {
    htmlEvents += createCard(event);
    // let currentDate = new Date(data.currentDate);
    // let eventDate = new Date(event.date);
    // console.log(currentDate);
    // console.log(eventDate);
    // if (eventDate < currentDate) {
    //     console.log('pasado');
    // } else {
    //     console.log('futuro')
}
//     htmlEvents += `<div class="card">
//     <img src="${event.image}" alt="">
//     <h3>${event.name}</h3>
//     <p>${event.description}</p>
// </div>`;
//

//console.log(htmlEvents);
cardContainer.innerHTML = htmlEvents;