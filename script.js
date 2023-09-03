var numberToFind = 0;
var attemps = 0;

function refresh(){
   attemps = 0;
   numberToFind = parseInt(Math.random() * 100);

    console.log(numberToFind)


}

function verifyNumber(){
    var bet = document.getElementById('bet').value;

    if (bet > 100 || bet < 1)
    {
        alert('Invalid bet!');
        return;

    }

    if (bet > numberToFind){

        attemps++;
        alert('🚨 Wrong! The number is smaller');

    }
    else if (bet < numberToFind){
        attemps++;
        alert('🚨 Wrong! The number is bigger');

    }
    else{
        alert('😎 You are right!! You had '+attemps+' errors!');
        refresh();
    }


}

refresh();