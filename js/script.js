function textChange() {
    document.getElementById('tc').innerHTML = 'My World';
}
function textRechange() {
    document.getElementById('tc').innerHTML = 'Hello World';
}
function textBig() {
    document.getElementById('typo').style.fontSize = '30px';
}
function textSmall() {
    document.getElementById('typo').style.fontSize = '16px';
}
function textPaint1() {
    document.getElementById('decoration').style.color = 'red';
    document.getElementById('decoration').style.fontSize = '30px';
}
function textPaint2() {
    document.getElementById('decoration').style.color = 'green';
    document.getElementById('decoration').style.fontSize = '25px';
}



function myFunction() {
    window.alert('Please log in');
}
function clickHappy() {
    document.getElementById('emoji').src = 'image/happy.png';
}
function clickSad() {
    document.getElementById('emoji').src = 'image/sad.png';
}
function clickCry() {
    document.getElementById('emoji').src = 'image/cry.png';
}
function clickAngry() {
    document.getElementById('emoji').src = 'image/angry.png';
}
function clickLove() {
    document.getElementById('emoji').src = 'image/love.png';
}




function stop() {
    document.getElementById('stop').style.display = 'block';
    document.getElementById('rotate').style.display = 'none';
}
function rotate() {
    document.getElementById('rotate').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
}

function getNumbers() {
    let theNumber = 0;
    for (theNumber; theNumber <= 100; theNumber++) {
        if (theNumber % 2 !== 0) {
            document.getElementById('numbers').innerHTML = `The even number is: ${theNumber}`;
            //console.log(`The odd number is: ${theNumber}`);
        }
    }
}
function MessagePopUp() {
    let message = prompt('Enter the odd number:');
    if (message % 2 !== 0) {
        document.getElementById('showMessage').innerHTML = 'You entered the odd number, Thank you\!';
    } else {
        message = prompt('You entered the even number, please try again\!');
        document.getElementById('showMessage').innerHTML = 'You entered the even number, please try again\!';
    }
};



//======================jq========================for testing
/*$(document).ready(function(){
    $('#jsbtn').click(function(){
        alert('welcome');
    });
});*/
$(document).ready(function () {
    $('.jqbtn').on('click', function () {
        alert('welcome to our page');
    });
});