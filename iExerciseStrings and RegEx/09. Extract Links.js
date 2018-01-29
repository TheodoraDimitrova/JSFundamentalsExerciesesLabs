function extractsLinks(input) {
    let pattern=/www\.[A-za-z0-9\-]+(\.[a-z]+)+/gi;


    for (let sentence of input) {
        let match = null;
        let index = 0;
        while(match = pattern.exec(sentence)) {
            console.log(match[index]);
        }

    }

}
extractsLinks(["Join WebStars now for free, at www.web-stars.com",
    "You can also support our partners:",
    "Internet - www.internet.com",
    "WebSpiders - www.webspiders101.com",
    "Sentinel - www.sentinel.-ko"
]);