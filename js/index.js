let htmlEvents = "";
let cardContainer = document.getElementById("card");

for (let event of data.events) {
    htmlEvents += createCard(event);

}

cardContainer.innerHTML = htmlEvents;
////////////////////////////////////////////////////////////////////////////////////
let htmlEventsCheck = "";
let checkContainer = document.getElementById("check-id");

for (let eventCheckbox of data.events) {
    htmlEventsCheck = createCheckboxes(eventCheckbox);
}

checkContainer.innerHTML = htmlEventsCheck;

////////////////////////////////////////////////////////////////////////////////////
let searchField = document.getElementById("search");
document.getElementById("container-search").onsubmit = (e) => {
    e.preventDefault();

    let textoBusqueda = searchField.value.toLowerCase();
    let searchingResult;

    for (let frase of data.events) {
        if (frase.name.toLowerCase().includes(textoBusqueda) || frase.description.toLowerCase().includes(textoBusqueda)) {
            searchingResult.push(frase);
        }
    }

}