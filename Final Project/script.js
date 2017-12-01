
	//While loop slideshow index page
	var galleryIndex = 1;
	displayDiv(galleryIndex);

	function addDiv(n) {
		displayDiv(galleryIndex += n);
	}

	function displayDiv(n) {

		var i;
		//var x is an array of images
        var x = document.getElementsByClassName("images");
        //x.length counts the number of images in the array
        if (n > x.length) {galleryIndex = 1}
        	//n is defined above in the function addDiv(n) declaration. The function above is called upon in the HTML tags that implement 
            //the "back" and "forth clicks in the "onclick" attribute. There are only 2 valeus for "n" : "-1" and "+1" or just "1"
            if (n < 1) {galleryIndex = x.length}
                var i = 0
                while (i < x.length) {
                	//The while loop makes all images in array invisible by setting the display property to "none". It is looping through 
                    //every image in the array. x.length is the number of elements in the array, and the last line in the loop (i+=1) increments 
                    //the position in the array. As soon as i equals the array length, it exits the array. Array elements start at 0, which is 
                    //why i starts at 0. The var x is an array of images, x.length counts the number of images in the array. After the loop is 
                    //done making the images invisible, the instruction outside the loop x[galleryIndex-1].style.display = "block";) makes the next 
                    //image visible by using display = "block".
                    x[i].style.display = "none";
                    i += 1;
                }
                x[galleryIndex-1].style.display = "block";
    }