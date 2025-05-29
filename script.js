function register(){
    let x
    let name=prompt("Register Your Name For The GK Quiz")
    document.getElementById('p').innerHTML="Hello "+ name + "," + " Welcome To Tech Learner;your name is now registered"
}
function wrong(){
    alert("Your answer is incorrect,try again.")
}
function right(){
    alert("Well done. You chose the correct answer!")
}
