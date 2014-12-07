function prepareEventHandlers() {
	form1 = document.getElementById("frmSupport"),
        errorMsg = document.getElementById("errorMsg"),
        emailField = document.getElementById("email");
}

function windowResize() {
   var contentWidth = document.getElementById("top-inner").offsetWidth;
   var contentHeight = document.getElementById("#YourImageOrContent").offsetHeight;
   window.resizeTo(contentWidth,contentHeight);
}

window.onload = function() {

    prepareEventHandlers();

}


/*********************************************
* For the contact.html page                  *
*********************************************/

// Handling the form submit event

        form1.onsubmit = function(event) {
            var e = event || false,
                elms = form1.elements;

            e.preventDefault();
            //prevent a form from sumbitting if no email.
            if (elms.email.value === '') {
                errorMsg.innerHTML = "NOOOOOO!";
                e.stopPropagation();
                return false;
            } else {
                //reset and allow form submission:
                errorMsg.innerHTML = "";
                console.log(this);
                return this.submit();
            }
        };

  //onfocus and onblur event handler illustration

    emailField.onfocus = function() {
        if (emailField.value == "your email") {
            emailField.value = "";
        }
    };

    emailField.onblur = function() {
        if (emailField.value === "") {
            errorMsg.innerHTML = "OOPS!";
        } else {
            errorMsg.innerHTML = "";
        }
    };      


/**********************************************
 *  For the products.html page                *											  
 *********************************************/                                            

// This tokenizes the image element that has the id "mainImage"
var myImage = document.getElementById("mainImage");
var imageArray = ["images/angel-professional-shampoo", "images/angel-pro-line.jpg", "images/angel-pro-spray.jpeg", "images/angel-pro-orangehairmask.jpg", "images/angel-pro-brazilnut.jpg", "images/angel-pro-thickifier.jpg", "images/angel-pro-oils.jpg", "images/angel-pro-stylegel.jpg", "images/angel-pro-decolor.jpg"];
var imageIndex = 0;

// This iterates through the products page images in the array defined above ;)
function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// This starts the image switch interval
var intervalHandle = setInterval(changeImage, 6000);