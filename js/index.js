var colors = ['red', 'blue', 'cyan', 'green', 'orange', 'purple', 'brown'];
var hasRun = false;
var queuedImage = new Image();

function removeColorClasses() {
    var title = document.getElementById('title');
    var downloadButton = document.getElementById('download-button');
    var body = document.getElementsByTagName('body')[0];

    title.className = title.className.substring(0, title.className.lastIndexOf(' '));
    downloadButton.className = downloadButton.className.substring(0, downloadButton.className.lastIndexOf(' '));
    body.className = body.className.substring(0, body.className.lastIndexOf(' '));
}

function setLightenClasses() {
    document.getElementById('title').className += ' text-lighten-3';
    document.getElementById('download-button').className += ' lighten-3';
    document.getElementsByTagName('body')[0].className += ' lighten-1';
}

function setColorClasses() {
    var color = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('title').className += ' ' + color + '-text';
    document.getElementById('download-button').className += ' ' + color;
    document.getElementsByTagName('body')[0].className += ' ' + color;
}

function setFact() {
  document.getElementById('fact').innerHTML = catFacts[Math.floor(Math.random() * catFacts.length)]
}

function fadeInImage() {
    Materialize.fadeInImage('#image');
}

function removeHiddenClass() {
    document.getElementsByTagName('body')[0].removeAttribute('hidden');
}

function doStuff() {
    var image = document.getElementById('image');

    image.onload = function() {
        fadeInImage();
        setFact();
        if (!hasRun) {
            hasRun = true;
            removeHiddenClass();
        }
        else {
            removeColorClasses();
        }
        setLightenClasses();
        setColorClasses();

    };

    if (!image.src) {
        image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&' + (new Date()).getTime();
        queuedImage.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&' + ((new Date()).getTime() + 1) ;
    }
    else {
        image.src = queuedImage.src;
        queuedImage.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&' + (new Date()).getTime();
    }

}

doStuff();