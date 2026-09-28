var elements = document.querySelectorAll('div.styledCell[title]');
var matchingElements = [];
var jsonArrayList = [];


elements.forEach(el => {
    var title = el.getAttribute('title');
    if (title !== null && title !== '' && title.startsWith('{"events') && title.includes('{{$EventStringExpected}}')) {
        matchingElements.push(el);
    }
});

for(let eachElement of matchingElements) {
    let eachJson = eachElement.textContent;
    jsonArrayList.push(eachJson);
}

