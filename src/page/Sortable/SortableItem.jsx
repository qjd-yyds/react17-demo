import propTypes from 'prop-types';

const Gif = ({ gif }) => {
  return (
    <img
      src={gif}
      alt={gif}
      onClick={() => {
        console.log('你点击到我了');
      }}
    />
  );
};

Gif.propTypes = {
  gif: propTypes.string.isRequired
};

export default Gif;
