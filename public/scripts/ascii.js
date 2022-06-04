const canvas = document.getElementById('canvas');
const fileInput = document.getElementById('get-file');
const context = canvas.getContext('2d');

fileInput.onchange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const image = new Image();

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
    };

    image.src = e.target.result;
    };
    
  reader.readAsDataURL(file);
};
