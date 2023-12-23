const video = document.getElementById('liveStream');

fetch('/livestream')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    video.src = url;
  });

video.play();
