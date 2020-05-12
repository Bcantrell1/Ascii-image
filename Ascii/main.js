const kelsea = document.getElementById('kelsea');

/* Returns the image size */
const imageSize = () => Caman('#kelsea-img', kelsea, function () {
    const width = this.imageWidth();
    const height = this.imageHeight();
    console.log('Image size (h,w): ' + height + 'px by ' + width + 'px');
});

/* Return a rgb for each pixel in image */
const imageTuple = () => Caman('#kelsea-img', kelsea, function () {
        const pixels = this.getPixel(x,y); 
        console.log('imageTuple ran' + pixels);
    })
    


/* Execute function to return the image size */
// imageSize();


imageTuple();