var harambeCount = 1;
var harambeJPG = "harambe.jpg";
var harambeImages = ["harambe.jpg", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F05%2Fharambe_gorilla-1200x800.jpg"]

// adds a harambe to to harambeContainer
function addHarambe() {
    if(harambeCount == 9) { // resets at 9 harambe
        resetHarambe();
        return;
    }

    document.getElementById("harambeRow").insertAdjacentHTML('beforeend', `
        <div class="col-xs-4">
            <img src="` + harambeJPG + `" class="mx-auto d-block rounded-circle img-fluid harambe">
        </div>
    `);
    harambeCount++;
}

function resetHarambe() {
    document.getElementById("harambeRow").innerHTML = ``;
    harambeJPG = harambeImages[0];
    harambeCount = 0;

    addHarambe();
}

// switches to an alternative harambe image
function switchHarambe() {
    if(harambeJPG == harambeImages[0]) { // if currently set to default harambe
        harambeJPG = harambeImages[1];
    } else { // if set to alt harambe
        harambeJPG = harambeImages[0];
    }

    // clears harambes and refills with alt harambes
    document.getElementById("harambeRow").innerHTML = ``;
    for(var i = 1; i <= harambeCount; i++) {
        addHarambe();
        harambeCount--;
    }
}