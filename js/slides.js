//NAV SLIDE CHANGE START

const htmlHeight = document.querySelector('html');
const myNav = document.querySelector('nav');
const myArray = document.querySelectorAll('nav a');
const logo = document.querySelectorAll('nav .logo')[0];
const burger = document.querySelectorAll('nav .line');


let scrolled = () => {
    let dec = scrollY; // / (htmlHeight.scrollHeight - innerHeight);
    return Math.floor(dec); // *100
}


addEventListener('scroll', () => {
    myNav.style.setProperty('background', scrolled() > 0 ? "white" : "transparent");
    myNav.style.setProperty('color', scrolled() > 0 ? "#584b42" : "#f1f0d1");
    myNav.style.setProperty('margin-top', scrolled() > 0 ? "0" : "2%");
    myNav.style.transition = "ease-out 0.3s";
    logo.style.setProperty('background-image', scrolled() > 0 ? "url('../images/Cafe-logo-dark.png')" : "url('../images/Cafe-logo.png')");

    if (scrolled() > 0) {
        for (var i = 0; i < myArray.length; i++) {
            myArray[i].style.setProperty('color', '#584b42');
        }
    } else  {
        for (var i = 0; i < (myArray.length - 1) ; i++) {
            myArray[i].style.setProperty('color', '#f1f0d1');
        }
    }


    if (scrolled() > 0) {
        for (var j = 0; j < burger.length; j++) {
            burger[j].style.backgroundColor = '#584b42';
        }
    } else {
        for (var k = 0; k < (myArray.length - 1) ; k++) {
            burger[k].style.backgroundColor = '#f1f0d1';
        }
    }
});

//NAV SLIDE END

//COFFEE BEANS SLIDER START

var slide = document.querySelectorAll(".slide");

var slideIndex = 0;

function plusOne(){
    slide[slideIndex].style.display = "none";
    if (slideIndex > 2) {
        slideIndex = 0
    } else {
        slideIndex++;
    }
    slide[slideIndex].style.display = "block";
    console.log(slideIndex);
}

function minusOne(){
    slide[slideIndex].style.display = "none";
    if (slideIndex < 1) {
        slideIndex = 3
    } else {
        slideIndex--;
    }
    slide[slideIndex].style.display = "block";
    console.log(slideIndex);
}

//COFFEE BEANS SLIDER END

//MENU CHANGE START

function changeFood() {

    //First row
    var title = ["Sandwich", "Soup", "Desert"]
    var food = ["Fish", "Beef", "Salmon", "Pita", "Chicken", "Veggy","Fish", "Beef", "Salmon", "Pita", "Chicken", "Veggy","Fish", "Beef", "Salmon", "Pita", "Chicken"];

    var listLength = document.querySelectorAll('.collumn ul li').length;
    var titleLength = document.querySelectorAll('.collumn h3').length;

    for (var i = 0; i < listLength; i++ ) {
        document.querySelectorAll('.collumn ul li')[i].innerHTML = food[i];
    }

    for (var i = 0; i < titleLength; i++ ) {
        document.querySelectorAll('.collumn h3')[i].innerHTML = title[i];
    }

    document.querySelectorAll('.collumn')[1].style.backgroundImage = "url('../images/sandwich.jpg')";
    document.querySelectorAll('.collumn')[2].style.backgroundImage = "url('../images/soup.jpg')";
    document.querySelectorAll('.collumn')[5].style.backgroundImage = "url('../images/dessert.jpg')";

    document.querySelectorAll('#menu .drink-food-btn-container a')[0].style.backgroundColor = "#f0e3c4";
    document.querySelectorAll('#menu .drink-food-btn-container a')[1].style.backgroundColor = "#f1f0d1";
}
function changeDrinks() {
    //First row
    var title = ["Coffee", "Teas", "Milkshakes"]
    var food = ["Flat White", "Latte", "Cappucino","Long Black", "Espresso", "Macchiato", "English Breakfast","Earl Grey", "Sencha green", "Peppermint", "Camomille", "Berry", "Vanilla","Chocolate", "Caramel", "Strawberry", "Banana"];

    var listLength = document.querySelectorAll('.collumn ul li').length;
    var titleLength = document.querySelectorAll('.collumn h3').length;

    for (var i = 0; i < listLength; i++ ) {
        document.querySelectorAll('.collumn ul li')[i].innerHTML = food[i];
    }

    for (var i = 0; i < titleLength; i++ ) {
        document.querySelectorAll('.collumn h3')[i].innerHTML = title[i];
    }

    document.querySelectorAll('.collumn')[1].style.backgroundImage = "url('../images/coffee-menu.jpg')";
    document.querySelectorAll('.collumn')[2].style.backgroundImage = "url('../images/teas-menu.jpg')";
    document.querySelectorAll('.collumn')[5].style.backgroundImage = "url('../images/milkshakes-menu.jpg')";

    document.querySelectorAll('#menu .drink-food-btn-container a')[0].style.backgroundColor = "#f1f0d1";
    document.querySelectorAll('#menu .drink-food-btn-container a')[1].style.backgroundColor = "#f0e3c4";
}

//MENU SLIDE out
var j = 0;
var lines = document.querySelectorAll('nav .line');
function slideOut() {
    if (j===0) {
        document.querySelector('nav ul').style.transform = 'translateX(0)';
        for (var i = 0; i < lines.length; i++ ) {
            lines[i].style.backgroundColor = '#584b42';
        }
        for (var k = 0; k < myArray.length; k++) {
            myArray[k].style.setProperty('color', '#584b42');
        }
        j++;
        return j;
    } else if (j !== 0) {
        document.querySelector('nav ul').style.transform = 'translateX(100%)';
        for (var i = 0; i < lines.length; i++ ) {
            lines[i].style.backgroundColor = '#f1f0d1';
        }
        j--;
        return j;
    }
}
