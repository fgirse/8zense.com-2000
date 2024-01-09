// player.js
import ReactPlayer from 'react-player';

export default function ReactPlayerAsVideo(props) {
  let {  src, poster,  ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return <ReactPlayer url={src} config={config} {...rest} />;
}