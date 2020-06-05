var memeCount = 1;
var memeJPG = "https://theconversation.com/explainer-what-are-memes-20789";
var memeImages = ["https://theconversation.com/explainer-what-are-memes-20789", "https://thepsychologist.bps.org.uk/sites/thepsychologist.bps.org.uk/files/img_9685.jpg"]

// adds a meme to to memeContainer
function addmeme() {
    if(memeCount == 9) { // resets at 9 meme
        resetmeme();
        return;
    }

    document.getElementById("memeRow").insertAdjacentHTML('beforeend', `
        <div class="col-xs-4">
            <img src="` + memeJPG + `" class="mx-auto d-block rounded-circle img-fluid meme">
        </div>
    `);
    memeCount++;
}

function resetmeme() {
    document.getElementById("memeRow").innerHTML = ``;
    memeJPG = memeImages[0];
    memeCount = 0;

    addmeme();
}

// switches to an alternative meme image
function switchmeme() {
    if(memeJPG == memeImages[0]) { // if currently set to default memes
        memJPG = mememages[1];
    } else { // if set to alt meme
       memeJPG = memeImages[0];
    }

    // clears memes and refills with alt meme
    document.getElementById("memeRow").innerHTML = ``;
    for(var i = 1; i <= memeCount; i++) {
        addmeme();
        memeCount--;
    }
}
