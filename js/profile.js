(function() {

var modal = document.getElementById('myModal'),
    close = document.getElementsByClassName('close')[0];
    content = document.getElementsByClassName('modal-content')[0];

var bradley = document.getElementById('bradley'),
    sam = document.getElementById('sam'),
    mattia = document.getElementById('mattia'),
    jakub = document.getElementById('jakub');

bradley.onclick = function() {
    var bio = document.createElement('p');
    var description = document.createTextNode('Bradley graduated with an MA in literature in 2013. When not coding he loves writing and travelling. Hes especially fascinated with the comics medium and hopes to one day use his web-development skills to build novel hyper-comics on the web and using mobile location-based technologies.');
        description.className = "bioText";
    bio.appendChild(description);

    var bradImage = document.createElement('img');
        bradImage.src = "resources/bradley.jpg";
        bradImage.className = "bioImages";

    content.appendChild(bradImage);
    content.appendChild(bio);
    modal.style.display = 'block';
}

sam.onclick = function() {
    var bio = document.createElement('p');
    var description = document.createTextNode('Sam is learning JavaScript with Founders and Coders and attempting to teach himself Python and C. He is becoming increasingly interested in data science and machine learning, though his current pet project is a website for making and sharing semiotic squares. Sam also moonlights as an expert on Renaissance alchemy and natural magic.');
        description.className = "bioText";
    bio.appendChild(description);

    var samImage = document.createElement('img');
        samImage.src = "resources/sam.png";
        samImage.className = "bioImages";

    content.appendChild(samImage);
    content.appendChild(bio);
    modal.style.display = 'block';
}

mattia.onclick = function() {
    var bio = document.createElement('p');
    var description = document.createTextNode('After sinking 2 startup its due time for me to actually learn to code. I am doing it here in London at Founders and Coders, hope the name will bring me luck. When not coding for the web I like to learn about functional programming, machine learning and lately the blockchain. Non geeky interests include watching documentaries, riding a bike and planning the next trip.');
        description.className = "bioText";
    bio.appendChild(description);

    var mattiaImage = document.createElement('img');
        mattiaImage.src = "resources/mattia.jpg";
        mattiaImage.className = "bioImages";

    content.appendChild(mattiaImage);
    content.appendChild(bio);
    modal.style.display = 'block';
}

jakub.onclick = function() {
    var bio = document.createElement('p');
    var description = document.createTextNode('This is Jakubs bio. He is not a red panda.');
        description.className = "bioText";
    bio.appendChild(description);

    var jakubImage = document.createElement('img');
        jakubImage.src = "resources/jakub.jpg";
        jakubImage.className = "bioImages";

    content.appendChild(jakubImage);
    content.appendChild(bio);
    modal.style.display = 'block';
}

close.onclick = function() {
    content.removeChild(content.lastChild);
    content.removeChild(content.lastChild);
    modal.style.display = 'none';
}
window.onclick = function() {
    if (event.target == modal) {
        content.removeChild(content.lastChild);
        content.removeChild(content.lastChild);
        modal.style.display = 'none';
    }
}

})();
