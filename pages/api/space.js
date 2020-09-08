import getImage from '../../src/getImage';

export default (req, res) => {
  return getImage(process.env.API_KEY).then(res.send);
};
