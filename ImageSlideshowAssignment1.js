// Create a previous image variable node in order to retrieve from HTML image element id.
var previousImage = document.getElementById("previous");
// Create a image variable node in order to retrieve from HTML image element id.
var image = document.getElementById("image");
// Create a next image variable node in order to retrieve from HTML image element id.
var nextImage = document.getElementById("next");

// Create an images variable to store all photograph images indices programmatically within bracket.
var images = [];

// Set images list, as individual image index variable in order to store them into the variable index array bracket.
images[0] = "c:/Users/sarai/Documents/Pictures/roberto-nickson-641645-unsplash.jpg";
images[1] = "c:/Users/sarai/Documents/Pictures/adro-rocker-1357814-unsplash.jpg";
images[2] = "c:/Users/sarai/Documents/Pictures/matteo-vistocco-497491-unsplash.jpg";
images[3] = "c:/Users/sarai/Documents/Pictures/stephan-henning-1259794-unsplash.jpg";
images[4] = "c:/Users/sarai/Documents/Pictures/andrik-langfield-1239155-unsplash.jpg";
images[5] = "c:/Users/sarai/Documents/Pictures/marek-szturc-1294053-unsplash.jpg";
images[6] = "c:/Users/sarai/Documents/Pictures/wolfgang-hasselmann-1243102-unsplash.jpg";
images[7] = "c:/Users/sarai/Documents/Pictures/dusan-smetana-1383068-unsplash.jpg";
images[8] = "c:/Users/sarai/Documents/Pictures/mitsuo-hirata-1384730-unsplash.jpg";
images[9] = "c:/Users/sarai/Documents/Pictures/dominik-lange-41372-unsplash.jpg";
images[10] = "c:/Users/sarai/Documents/Pictures/deseri-rice-1231505-unsplash.jpg";
images[11] = "c:/Users/sarai/Documents/Pictures/valery-rapovets-1310340-unsplash.jpg";
images[12] = "c:/Users/sarai/Documents/Pictures/mindaugas-petrutis-77526-unsplash.jpg";
images[13] = "c:/Users/sarai/Documents/Pictures/kevin-mueller-1510963-unsplash.jpg";
images[14] = "c:/Users/sarai/Documents/Pictures/zdenek-machacek-1400825-unsplash.jpg";
images[14] = "c:/Users/sarai/Documents/Pictures/kevin-mueller-1524322-unsplash.jpg";
images[15] = "c:/Users/sarai/Documents/Pictures/tadeusz-lakota-1400337-unsplash.jpg";
images[16] = "c:/Users/sarai/Documents/Pictures/nathalie-spehner-1236233-unsplash.jpg";
images[17] = "c:/Users/sarai/Documents/Pictures/mckayla-crump-669332-unsplash.jpg";
images[18] = "c:/Users/sarai/Documents/Pictures/mckayla-crump-669332-unsplash.jpg";
images[17] = "c:/Users/sarai/Documents/Pictures/ryan-walton-367436-unsplash.jpg";
images[18] = "c:/Users/sarai/Documents/Pictures/sam-carter-191161-unsplash.jpg";
images[19] = "c:/Users/sarai/Documents/Pictures/smit-patel-344842-unsplash.jpg";
images[20] = "c:/Users/sarai/Documents/Pictures/alaina-mclearnon-1241419-unsplash.jpg";
images[21] = "c:/Users/sarai/Documents/Pictures/kalaca-studio-1645512-unsplash.jpg";  

// Create image index variable in order to start image indices counter from zero (0).
var imageIndex = 0;

// Add function in order to retrieve HTML onclick name (previousFunction) to store users interactive previous images click button activities.
    function previousFunction() {
    // set image to highest index when moving past 0
    if(imageIndex == 0){
        imageIndex = images.length - 1;

    }
    else{
        imageIndex--;
    }

// Add the source attribute with the value of "images" stored array that are triggered from individual index image counter.
    image.setAttribute("src", images[imageIndex]);
    }
    
// Add function in order to retrieve HTML onclick name (nextFunction) to store users interactive next images click button activities.        
    function nextFunction() {
        if(imageIndex === images.length - 1){
            imageIndex = 0;
        }
        else{
            imageIndex++;
        }

// Add the source attribute with the value of "images" stored array that are triggered from individual index image counter.
    image.setAttribute("src", images[imageIndex]);        
    }

