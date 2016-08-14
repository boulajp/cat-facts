var colors = ['red', 'blue', 'cyan', 'green', 'orange', 'purple', 'brown'];

function redoStuff() {
    setFact();
    setImage();
    removeColorClasses();
    setColorClasses();
}

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
    var color = colors[Math.floor(Math.random()*colors.length)];

    document.getElementById('title').className += ' ' + color + '-text';
    document.getElementById('download-button').className += ' ' + color;
    document.getElementsByTagName('body')[0].className += ' ' + color;
}

function setImage() {
    document.getElementById('image').src = 'http://thecatapi.com/api/images/get?format=src&type=gif&' + (new Date()).getTime();
}

function setFact() {
    $.get('https://cat-facts-api.herokuapp.com/api/facts?number=1', function(response) {
        var data = JSON.parse(response);
        if(data.success) {
            document.getElementById('fact').innerHTML = data.facts[0];
        }
    });
}

setFact();
setImage();
setLightenClasses();
setColorClasses();
