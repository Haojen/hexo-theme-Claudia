Promise.all(
  [
    'https://backend.webmanajemen.com/tlon/quiz.php?show',
    'https://crossorigin.me/http://backend.webmanajemen.com/tlon/quiz.txt',
    'https://api.codetabs.com/v1/proxy?quest=http://backend.webmanajemen.com/tlon/quiz.txt'
  ].map(function (url) {
    return fetch(url)
      .then(function (response) {
        return response.text();
      })
      .catch((_e) => {
        return '';
      });
  })
).then((quiz) => {
  const split = quiz
    .map((str) => str.split(/\r?\n/gm).map((s) => s.trim()))
    .flat(2)
    .filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  // console.log(split);

  const searchEl = document.getElementById('quizTerm');
  const onlyO = document.getElementById('showOnly');

  const doSearch = function (e) {
    if (e instanceof Event) e.preventDefault();

    /**
     * @type {string}
     */
    const search = searchEl.value.trim();

    // return empty
    if (search.length === 0) {
      createLi(split);
      return;
    }

    /**
     * @type {string[]}
     */
    const result = [];

    // find start with
    const startWith = split.filter((str) =>
      new RegExp('^' + search.toLowerCase(), 'gi').test(str.toLowerCase())
    );
    result.push(...startWith);
    // console.log(startWith);
    // find wildcard
    var rx = new RegExp('"([^"]*' + search.toLowerCase() + '[^"]*)"', 'gi');
    const test1 = split.filter((str) => rx.test(str.toLowerCase()));
    result.push(...test1);
    var reg = new RegExp('^\\s?' + search.toLowerCase(), 'gi');
    const test2 = split.filter((str) => reg.test(str.toLowerCase()));
    result.push(...test2);
    // find includes
    const includes = split.filter((str) =>
      str.toLowerCase().includes(search.toLowerCase())
    );
    result.push(...includes);
    //console.log({ startWith, test1, test2, includes });

    let filteredResult = result.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });

    if (onlyO.checked) {
      filteredResult = filteredResult.filter((str) => str.endsWith('(O)'));
    }
    createLi(filteredResult);
  };

  doSearch();

  searchEl.addEventListener('input', doSearch);
  onlyO.addEventListener('change', doSearch);

  document.getElementById('nosubmit').addEventListener('submit', doSearch);
  document.getElementById('addQuiz').addEventListener('submit', function (e) {
    e.preventDefault();
    // const form = document.querySelector('form');
    const formData = new FormData(this);
    const payload = JSON.stringify(formDataToObject(formData));
    fetch(this.action, {
      method: this.method,
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
});

/**
 *
 * @param {string[]} listData
 */
function createLi(listData) {
  const qresult = document.getElementById('qresult');
  // emptying existing inner
  qresult.innerHTML = '';

  // Make a container element for the list
  let listContainer = document.createElement('div');

  // Make the list
  let listElement = document.createElement('ul');

  // Make the list item
  let listItem = document.createElement('li');

  // Add it to the page
  qresult.appendChild(listContainer);
  listContainer.appendChild(listElement);

  // Set up a loop that goes through the items in listItems one at a time
  let numberOfListItems = listData.length;

  for (let i = 0; i < numberOfListItems; ++i) {
    // Add the item text

    // Use this if the array elements contain HTML
    // listItem.innerHTML = listData[i];
    // If not, use the line below

    // Use this if the array elements are text only
    listItem.textContent = listData[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);

    // Reset the list item
    listItem = document.createElement('li');
  }
}

function formDataToObject(formData) {
  let object = {};

  const debug = (message) => {
    console.log(message);
  };

  /**
   * Parses FormData key xxx`[x][x][x]` fields into array
   */
  const parseKey = (key) => {
    const subKeyIdx = key.indexOf('[');

    if (subKeyIdx !== -1) {
      const keys = [key.substring(0, subKeyIdx)];
      key = key.substring(subKeyIdx);

      for (const match of key.matchAll(/\[(?<key>.*?)]/gm)) {
        keys.push(match.groups.key);
      }
      return keys;
    } else {
      return [key];
    }
  };

  /**
   * Recursively iterates over keys and assigns key/values to object
   */
  const assign = (keys, value, object) => {
    const key = keys.shift();
    debug(key);
    debug(keys);

    // When last key in the iterations
    if (key === '' || key === undefined) {
      return object.push(value);
    }

    if (Reflect.has(object, key)) {
      debug('hasKey ' + key);
      // If key has been found, but final pass - convert the value to array
      if (keys.length === 0) {
        if (!Array.isArray(object[key])) {
          debug('isArray ' + object[key]);
          object[key] = [object[key], value];
          return;
        }
      }
      // Recurse again with found object
      return assign(keys, value, object[key]);
    }

    // Create empty object for key, if next key is '' do array instead, otherwise set value
    if (keys.length >= 1) {
      debug(`undefined '${key}' key: remaining ${keys.length}`);
      object[key] = keys[0] === '' ? [] : {};
      return assign(keys, value, object[key]);
    } else {
      debug('set value: ' + value);
      object[key] = value;
    }
  };

  for (const pair of formData.entries()) {
    assign(parseKey(pair[0]), pair[1], object);
  }

  return object;
}
