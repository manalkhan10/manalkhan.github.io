var harambeCount = 1;
var harambeJPG = `
    <div class="col-xs-4">
        <img src="harambe.jpg" class="mx-auto d-block rounded-circle img-fluid harambe">
    </div>
`;

// adds a harambe to to harambeContainer
function addHarambe() {
    if(harambeCount == 9) { // resets at 9 harambe
        resetHarambe();
        return;
    }

    document.getElementById("harambeRow").insertAdjacentHTML('beforeend', harambeJPG);
    harambeCount++;
}

function resetHarambe() {
    document.getElementById("harambeRow").innerHTML = harambeJPG;
    harambeCount = 1;
}