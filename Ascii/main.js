const kelsea = document.getElementById('kelsea');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const uploadFile = document.getElementById('file-upload')

let img = new Image();
let fileName = '';

/* Upload file to canvas */
uploadFile.addEventListener('change', (e) => {
    //Recieve file
    const file = document.getElementById('file-upload').files[0]

    const reader = new FileReader();

    if(file) {
        fileName = file.name;

        reader.readAsDataURL(file);
    }
    reader.addEventListener('load', () => {
        img = new Image();

        img.src = reader.result;

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0,0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }
        imageSize();
    }, false)
})

/* Returns the image size */
const imageSize = () => Caman('#canvas', function () {
    const width = this.imageWidth();
    const height = this.imageHeight();
    // this.brightness(30).render();
    console.log('Image size (h,w): ' + height + 'px by ' + width + 'px');
});

/* Return a rgb for each pixel in image */
const imageTuple = () => Caman('#kelsea-img', kelsea, function () {
    const pixels = this.originalVisiblePixels();
    console.log(pixels)
});

/* Execute function to return the image size */
// imageSize();
// imageTuple();