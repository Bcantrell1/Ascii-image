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

    if (file) {
        fileName = file.name;

        reader.readAsDataURL(file);
    }
    reader.addEventListener('load', () => {
        img = new Image();

        img.src = reader.result;

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        }
        imageTuple();
    }, false)
    // imageSize();

})

/* Returns the image size */
const imageSize = () => Caman('#canvas', img, function () {
    const width = canvas.width;
    const height = canvas.height;
    // this.brightness(30).render();
    console.log('Image size (h,w): ' + height + 'px by ' + width + 'px');
});

/* Return a rgb for each pixel in image */
const imageTuple = () => Caman('#canvas', img, function () {
    /* vanilla javascript version of originalVisiblePixels() */
    // const rgb = []
    // const imageX = 0;
    // const imageY = 0; 
    // const imageWidth = canvas.width;
    // const imageHeight = canvas.height;
    // const imageData = ctx.getImageData(imageX, imageY, imageWidth, imageHeight);
    // const data = imageData.data;
    // console.log(data);

    const multiDimArray = [];
    /* Caman version of getting pixel data */
    const pixels = this.originalVisiblePixels();
    const chunk = 3;
    //loop through each 3 items in pixels for rgb colors
    for (let i = 0, j = pixels.length; i < j; i += chunk) {
        let temp = [];
        temp = pixels.slice(i, i + chunk);
        multiDimArray.push(temp)
    }
    //pring array
    // console.log(multiDimArray);

    let finalArray = []
    //loop through multiDimArray to find brightness of rgb colors.
    multiDimArray.forEach(
      function(element){
          let r =  element[0] * 0.2126;
           let g = element[1] * 0.7152;
           let b = element[2] * 0.0722;
        let lightness = r+g+b;
        finalArray.push(Math.round(lightness));
      }  
    );
    console.log(finalArray);
});