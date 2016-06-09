(function() {

    var modal = document.getElementById('myModal'),
        close = document.getElementsByClassName('close')[0];
        content = document.getElementsByClassName('modal-content')[0];

    var bradley = document.getElementById('bradley'),
        sam = document.getElementById('sam'),
        mattia = document.getElementById('mattia'),
        jakub = document.getElementById('jakub');

    function createModal (imageSrc, biography) {
        //create the biographical modal text
        var bio = document.createElement('p');
        var description = document.createTextNode(biography);
        bio.className = 'bioText';
        bio.appendChild(description);
        //create the biographical modal image
        var image = document.createElement('img');
        image.src = imageSrc;
        image.className = "bioImages";
        //append both to the modal-content div
        content.appendChild(image);
        content.appendChild(bio);
        //adds a links section
        //content.innerHTML += '<p>You can find me on github, linkedin and twitter</p>'
        //change the modals opacity and zIndex so it appears on screen
        modal.style.opacity = '1';
        modal.style.zIndex = '1';
    }

    bradley.addEventListener('click', function() {
        createModal("resources/bradley.jpg", 'Bradley graduated with an MA in literature in 2013. When not coding he loves writing and travelling. Hes especially fascinated with the comics medium and hopes to one day use his web-development skills to build novel hyper-comics on the web and using mobile location-based technologies.');
    });
    sam.addEventListener('click', function() {
        createModal("resources/sam.png", 'Sam is learning JavaScript with Founders and Coders and attempting to teach himself Python and C. He is becoming increasingly interested in data science and machine learning, though his current pet project is a website for making and sharing semiotic squares. Sam also moonlights as an expert on Renaissance alchemy and natural magic.');
    });
    mattia.addEventListener('click', function() {
        createModal("resources/mattia.jpg", 'After sinking 2 startups its due time for me to actually learn to code. I am doing it here in London at Founders and Coders, hope the name will bring me luck. When not coding for the web I like to learn about functional programming, machine learning and lately the blockchain. Non geeky interests include watching documentaries, riding a bike and planning the next trip.');
    });
    jakub.addEventListener('click', function() {
        createModal("resources/jakub.jpg", 'This is Jakub\'s bio and he is not a red panda. He does however aspire to become Batman one day and take justice into his own hands. He is learning HTML, CSS and JavaScript with the Founders and Coders lot. Hopefully, he will not die before his time comes.');
    });

    close.onclick = function() {
        content.removeChild(content.lastChild);
        content.removeChild(content.lastChild);
        modal.style.opacity = '0';
        modal.style.zIndex = '-99';
    }
    window.onclick = function() {
        if (event.target == modal) {
            content.removeChild(content.lastChild);
            content.removeChild(content.lastChild);
            modal.style.zIndex = '-99';
            modal.style.opacity = '0';
        }
    }

})();

/*  -- original event functions in case we need a back-up --

  bradley.onclick = function() {
    var bio = document.createElement('p');
        bio.className = "bioText";
    var description = document.createTextNode('Bradley graduated with an MA in literature in 2013. When not coding he loves writing and travelling. Hes especially fascinated with the comics medium and hopes to one day use his web-development skills to build novel hyper-comics on the web and using mobile location-based technologies.');
    bio.appendChild(description);

    var bradImage = document.createElement('img');
        bradImage.src = "resources/bradley.jpg";
        bradImage.className = "bioImages";

    content.appendChild(bradImage);
    content.appendChild(bio);
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
}

sam.onclick = function() {
    var bio = document.createElement('p');
        bio.className = "bioText";
    var description = document.createTextNode('Sam is learning JavaScript with Founders and Coders and attempting to teach himself Python and C. He is becoming increasingly interested in data science and machine learning, though his current pet project is a website for making and sharing semiotic squares. Sam also moonlights as an expert on Renaissance alchemy and natural magic.');
    bio.appendChild(description);

    var samImage = document.createElement('img');
        samImage.src = "resources/sam.png";
        samImage.className = "bioImages";

    content.appendChild(samImage);
    content.appendChild(bio);
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
}

mattia.onclick = function() {
    var bio = document.createElement('p');
        bio.className = "bioText";
    var description = document.createTextNode('After sinking 2 startups its due time for me to actually learn to code. I am doing it here in London at Founders and Coders, hope the name will bring me luck. When not coding for the web I like to learn about functional programming, machine learning and lately the blockchain. Non geeky interests include watching documentaries, riding a bike and planning the next trip.');
    bio.appendChild(description);

    var mattiaImage = document.createElement('img');
        mattiaImage.src = "resources/mattia.jpg";
        mattiaImage.className = "bioImages";

    content.appendChild(mattiaImage);
    content.appendChild(bio);
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
}

jakub.onclick = function() {
    var bio = document.createElement('p');
        bio.className = "bioText";
    var description = document.createTextNode('This is Jakubs bio. He is not a red panda.');
    bio.appendChild(description);

    var jakubImage = document.createElement('img');
        jakubImage.src = "resources/jakub.jpg";
        jakubImage.className = "bioImages";

    content.appendChild(jakubImage);
    content.appendChild(bio);
    modal.style.opacity = '1';
    modal.style.zIndex = '1';
} */
