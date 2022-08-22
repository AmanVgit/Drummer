// detecting click press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var keyy = this.innerHTML;
        makesound(keyy);
        chnge(keyy);
    });
}

// detecting keyboard press

document.addEventListener("keydown", function (event) {

    makesound(event.key);
    chnge(event.key);

});

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds\\tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds\\tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds\\tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds\\tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds\\kick-bass.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds\\crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds\\snare.mp3");
            audio.play();
            break;
        default:
            alert("press only w a s d j k l ");
    }
}

function chnge(currkey) {
    var activekey = document.querySelector("." + currkey);
    activekey.classList.add("pressed");

    setTimeout(function () {
        activekey.classList.remove("pressed");
    }, 100);

}

