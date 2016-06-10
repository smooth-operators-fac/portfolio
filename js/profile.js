(function() {

    var modal = document.getElementById('myModal'),
        close = document.getElementsByClassName('close')[0];
        content = document.getElementsByClassName('modal-content')[0];

    var bradley = document.getElementById('bradley'),
        sam = document.getElementById('sam'),
        mattia = document.getElementById('mattia'),
        jakub = document.getElementById('jakub');

    var bioDiv = [[bradley, "resources/bradley.jpg", 'Bradley graduated with an MA in literature in 2013. When not coding he loves writing and travelling. Hes especially fascinated with the comics medium and hopes to one day use his web-development skills to build novel hyper-comics on the web and using mobile location-based technologies.'],
                  [sam, "resources/sam.png", 'Sam is learning JavaScript with Founders and Coders and attempting to teach himself Python and C. He is becoming increasingly interested in data science and machine learning, though his current pet project is a website for making and sharing semiotic squares. Sam also moonlights as an expert on Renaissance alchemy and natural magic.'],
                  [mattia, "resources/mattia.jpg", 'After sinking 2 startups its due time for me to actually learn to code. I am doing it here in London at Founders and Coders, hope the name will bring me luck. When not coding for the web I like to learn about functional programming, machine learning and lately the blockchain. Non geeky interests include watching documentaries, riding a bike and planning the next trip.'],
                  [jakub, "resources/jakub.jpg", 'This is Jakub\'s bio and he is not a red panda. He does however aspire to become Batman one day and take justice into his own hands. He is learning HTML, CSS and JavaScript with the Founders and Coders lot. Hopefully, he will not die before his time comes.']];

    function createBio (biography) {
        var bio = document.createElement('p');
        var description = document.createTextNode(biography);
        bio.className = 'bioText';
        bio.appendChild(description);
        return bio;
    }
    function createImage(imageSrc) {
        var image = document.createElement('img');
        image.src = imageSrc;
        image.className = 'bioImages';
        return image;
    }
    function appendToModal(img, bio) {
        content.appendChild(img);
        content.appendChild(bio);
    }
    function showModal() {
        modal.style.opacity = '1';
        modal.style.zIndex = '1';
    }

    function createModal (imageSrc, biography) {
        var bio = createBio(biography);
        var img = createImage(imageSrc);
        appendToModal(img, bio);
        showModal();
    }
    function attachEvent (name, imageSrc, biography) {
        name.addEventListener('click', function() {
            createModal(imageSrc, biography);
        });
    }

    bioDiv.forEach(function(a) {
       attachEvent(a[0],a[1],a[2]);
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
            modal.style.opacity = '0';
            modal.style.zIndex = '-99';
        }
    }

})();
