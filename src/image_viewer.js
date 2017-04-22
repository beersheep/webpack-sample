const imageViewer = () => {
  let img = document.createElement('img');
  img.src = 'http://lorempixel.com/400/400';
  document.body.appendChild(img);
}

export default imageViewer;
