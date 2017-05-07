import small from '../assets/small.jpg';
import large from '../assets/large.jpg';

const imageViewer = () => {
  let smallImage = document.createElement('img');
  smallImage.src = small;
  document.body.appendChild(smallImage);

  let largeImage = document.createElement('img');
  largeImage.src = large;
  document.body.appendChild(largeImage);
}

export default imageViewer;
