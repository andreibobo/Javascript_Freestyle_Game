card_faces = [ "css3-logo.png", "html5-logo.png", "jquery-logo.png", "js-logo.png", "nodejs-logo.png", "photoshop-logo.png", "php-logo_1.png",
          "python-logo.png", "rails-logo.png", "sass-logo.png", "sublime-logo.png", "wordpress-logo.png"]

mask = "github-logo.png"
index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const cards = document.querySelectorAll('.memory-card');

function renderTable() {
    document.getElementById("memory-game").innerHTML = ''
    for(let i = 0; i < 12; i++) {
        
        var card = document.createElement("div");  
        var card_face = document.createElement("img");
        var card_mask = document.createElement("img");

        // $(".memory-card").toggleClass("flip");
        card.addEventListener('click', function (event) {
            myToogleClass(event.target.parentElement, 'flip');
        });

        card_face.setAttribute("src", './Img/' + card_faces[i]);
        card_mask.setAttribute("src", './Img/' + mask);
        card.appendChild(card_face);
        card.appendChild(card_mask);

        card.className = "memory-card";
        card_face.className = "front-face";
        card_mask.className = "back-face";

        document.getElementById("memory-game").appendChild(card);
    }
}

(function getRandomIndex(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
 })();

function myToogleClass(ele, class1) {
    var classes = ele.className;
    var regex = new RegExp('\\b' + class1 + '\\b');
    var hasOne = classes.match(regex);
    class1 = class1.replace(/\s+/g, '').replace('%',' ');
    if (hasOne)
        ele.className = classes.replace(regex, '');
    else
        ele.className = classes + class1;
    console.log('className : ' + ele.className);
}


cards.forEach(card => card.addEventListener('click', flipCard));