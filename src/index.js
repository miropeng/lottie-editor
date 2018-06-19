

function requestAdData(url, foo) {
    var xml = new XMLHttpRequest()
    xml.open('GET', url)
    xml.send();
    xml.onload = function (xhr) {
        if (foo) {
            foo(xhr.target.response);
        }
    };
}

requestAdData('./../assets/dodo.json', (dataStr) => {
    window.lottieAnim = bodymovin.loadAnimation({
        container: document.getElementById('amin'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: JSON.parse(dataStr)
        // path: 'data.json'
    });

})
