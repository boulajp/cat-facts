(function() {
    var colors = ['red', 'blue', 'cyan', 'green', 'orange'];
    var color = colors[Math.floor(Math.random()*colors.length)];

    document.getElementById('title').className += ' ' + color + '-text' + ' text-lighten-3';
    document.getElementById('download-button').className += ' ' + color + ' lighten-3';
    document.getElementsByTagName('body')[0].className += ' ' + color + ' lighten-1';
})();

(function fetchFactAndSetHTML() {
    $.get('http://localhost:3000/api/facts?number=1', function(response) {
        var data = JSON.parse(response);
        if(data.success) {
            document.getElementById('fact').innerHTML = data.facts[0];
        }
    });
})();