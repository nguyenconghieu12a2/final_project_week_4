function upDate(element){
    //    In this function you should 
    //    1) change the url for the background image of the div with the id = "image" 
    //    to the source file of the preview image
    var previewPicSrc = element.src;
    var previewPicAlt = element.alt;
    var galleryImage = document.getElementById('image');
    //    2) Change the text  of the div with the id = "image" 
    //    to the alt text of the preview image 
    galleryImage.innerHTML = previewPicAlt;
    galleryImage.style.backgroundImage = "url('" + previewPicSrc + "')";
     
       }
   
       function unDo(){
    //    In this function you should 
    //    1) Update the url for the background image of the div with the id = "image" 
    //    back to the orginal-image.  You can use the css code to see what that original URL was
    var galleryImage = document.getElementById('image');
    //    2) Change the text  of the div with the id = "image" 
    //    back to the original text.  You can use the html code to see what that original text was
    galleryImage.innerHTML = "Hover over an image below to display here.";
    galleryImage.style.backgroundImage = "none";
       }

       function addTabFocus() {
        var thumbnails = document.getElementsByClassName("preview");

        for (var i = 0; i < thumbnails.length; i++) {
            thumbnails[i].setAttribute("tabindex", i); // Set tabindex for each thumbnail
            thumbnails[i].addEventListener("focus", function() {
                upDate(this); // Call upDate function when thumbnail is focused
            });
            thumbnails[i].addEventListener("blur", function() {
                unDo(); // Call unDo function when thumbnail loses focus
            });
    }
    }
    