// caller layout/widget/widget-search.pug

/**
 * @type {HTMLCollection}
 */
var searchDatabase = [];
var searchInputEl = document.getElementById('searchInput');
var searchButtonEl = document.getElementById('searchButton');
var searchResultEl = document.getElementById('searchContent');

if (searchInputEl) {
  searchInputEl.oninput = function (evt) {
    var searchValue = evt.srcElement.value;
    var haveSearchValue = Boolean(searchValue.trim());
    if (!haveSearchValue) {
      searchResultEl.style.height = 0;
      searchResultEl.innerHTML = null;
      return;
    }

    var searchResults = searching(searchValue);

    if (searchResults.length > 0) {
      renderSearchResults(searchResults);
    }
  };
}

function renderSearchResults(results) {
  searchResultEl.innerHTML = null;
  var fragment = document.createDocumentFragment();

  results.forEach(function (item) {
    var link = document.createElement('a');
    var title = document.createElement('h5');
    var content = document.createElement('p');

    title.className = 'mb-1';
    title.innerText = item.title;
    content.innerText = item.content;

    link.href = item.link;
    link.appendChild(title);
    link.appendChild(content);
    link.className = 'p-4 is-block';

    fragment.appendChild(link);
  });

  searchResultEl.appendChild(fragment);
  searchResultEl.style.height = 'auto';
}

function searching(inputText) {
  var inputTexts = inputText.split(' ');
  var searchResults = [];
  inputTexts.forEach(function (searchKey) {
    var haveSearchValue = Boolean(searchKey.trim());
    if (!haveSearchValue) return;

    var key = searchKey.toLowerCase();

    for (var entry of searchDatabase) {
      if (!entry) {
        continue;
      }
      var title = entry.getElementsByTagName('title')[0].textContent;
      var link =
        'https://google.com/search?q=site:www.webmanajemen.com+' + inputText;
      let linkElement = entry.getElementsByTagName('link');
      let urlElement = entry.getElementsByTagName('url');
      const hyperlinkEl =
        urlElement || linkElement || entry.querySelector('url');
      if (isNodeList(hyperlinkEl)) {
        link =
          hyperlinkEl[0].getAttribute('href') || hyperlinkEl[0].textContent;
      } else {
        link = hyperlinkEl.textContent;
      }
      // remove double slashes
      link = link.replace(/^\/{2,}/, '/');
      // console.log({ title, link });

      const contentEl = entry.getElementsByTagName('content');
      var contentWithTags = isNodeList(contentEl)
        ? entry.getElementsByTagName('content')[0].textContent
        : entry.getElementsByTagName('content').textContent;
      var rawContent = contentWithTags
        .trim()
        .replace(/<[^>]+>/g, '')
        .toLowerCase();

      var LENGTH = 80;
      var finalContent = '';
      var contentLength = rawContent.length;
      var searchResultIdx = rawContent.indexOf(key);

      var startIdx = searchResultIdx - 20,
        endIdx = startIdx + LENGTH;

      if (startIdx < 0) {
        startIdx = 0;
        endIdx = 100;
      }

      endIdx > contentLength && (endIdx = contentLength);

      finalContent = rawContent.substring(startIdx, endIdx);

      if (title.indexOf(key) > -1 || searchResultIdx > -1) {
        searchResults.push({
          link: link,
          title: title,
          content: finalContent
        });
      }
    }
  });
  return searchResults;
}

function fetchDatabase() {
  if (searchDatabase.length > 0) return;

  return fetch(window.location.href + '/search.xml')
    .then((res) => res.text())
    .then((res) => {
      var domparser = new DOMParser();
      var doc = domparser.parseFromString(res, 'application/xml');
      searchDatabase = doc.getElementsByTagName('search')[0].children;
    })
    .catch((e) => {
      console.error('cannot fetch search result', e);
    });
}

if (searchInputEl) {
  searchButtonEl.onclick = fetchDatabase;

  fetchDatabase().finally(() => {
    searching('quiz');
  });
}

function isNodeList(nodes) {
  var stringRepr = Object.prototype.toString.call(nodes);

  return (
    typeof nodes === 'object' &&
    /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
    typeof nodes.length === 'number' &&
    (nodes.length === 0 ||
      (typeof nodes[0] === 'object' && nodes[0].nodeType > 0))
  );
}
