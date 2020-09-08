global.fetch = require('node-fetch');
import Unsplash, { toJson } from 'unsplash-js';
export default function getImage(accessKey) {
  const unsplash = new Unsplash({
    accessKey,
  });
  return unsplash.photos
    .getRandomPhoto({ query: 'outer space' })
    .then(toJson)
    .then((json) => {
      console.log(json);
      return json.urls.raw;
    })
    .catch((e) => console.error(e));
}
