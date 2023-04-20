hexo.extend.helper.register('getPosts', function () {
  const self = this;
  const { page } = self;
  return page.posts;
});

hexo.extend.helper.register('getAuthor', function (author, fallback) {
  if (!author) return fallback;
  if (typeof author === 'string') return author;
  if (typeof author.name === 'string') return author.name;
  if (typeof author.nick === 'string') return author.nick;
  if (typeof author.nickname === 'string') return author.nickname;
});

hexo.extend.helper.register(
  'getPostByLabel',
  /**
   * hexo get post by key with name
   * @param {'tags'|'categories'} by
   * @param {string[]} filternames
   * @returns {Record<string, string>[]}
   */
  function (by, filternames) {
    const hexo = this;
    /**
     * @type {any[]}
     */
    const data = hexo.site[by].data;
    const map = filternames
      .map((filtername) => {
        const filter = data.filter(({ name }) => String(name).toLowerCase() == filtername.toLowerCase());
        return filter.map((group) => {
          return group.posts.map(
            /**
             * @param {import('hexo').Post.Data} post
             */
            function ({ title, permalink, thumbnail, photos }) {
              // get title and permalink
              // for more keys, you can look at https://github.com/dimaslanjaka/nodejs-package-types/blob/ec9b509d81eefdfada79f1658ac02118936a1e5a/index.d.ts#L757-L762
              return { title, permalink, thumbnail, photos };
            }
          );
        });
      })
      // flattern all multidimensional arrays
      // to get array of hexo post object
      .flat(2);
    // dump
    // console.log(map);
    // return an JSON string
    // return JSON.stringify(map, null, 2);
    // return an Array
    return map;
  }
);

/**
 * Returns a JSON stringified version of the value, safe for inclusion in an
 * inline <script> tag. The optional argument 'spaces' can be used for
 * pretty-printing.
 *
 * Output is NOT safe for inclusion in HTML! If that's what you need, use the
 * built-in 'dump' filter instead.
 *
 * @example
 * {{ data | json_stringify }}
 */
hexo.extend.helper.register('json_stringify', function (value, spaces) {
  const nunjucks = require('nunjucks');
  if (value instanceof nunjucks.runtime.SafeString) {
    value = value.toString();
  }
  const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c');
  return nunjucks.runtime.markSafe(jsonString);
});

hexo.extend.helper.register('object_keys', function (obj) {
  return Object.keys(obj);
});
