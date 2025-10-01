// var typed = new Typed (".text",{
//     strings:['Frontend Developer','IT Teacher','Cricket'],
//     typeSpeed : 100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// });
var typed = new Typed("#kt_typedjs_example_1", {
    strings: ["First sentence.", "Second sentence.", "Third sentense", "And some longer sentence"],
    typeSpeed: 30,
    // backSpeed:100,
    //  backDelay:1000,
    // loop:true
});
var navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}




var options = {
    strings: ["Hello, world!", "Welcome to the Typed.js demo.", "Enjoy the animation!"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};

var typed = new Typed("#typed-output", options);
