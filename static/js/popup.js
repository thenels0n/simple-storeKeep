var green
var violet
var red

green = document.getElementById('green')
violet = document.getElementById('violet')
red = document.getElementById('red')
var balance = document.getElementById('balance').textContent
var cancel = document.getElementById('cancel')

var num = document.getElementById('number')

var refresh;

refresh = document.getElementById('refresh').textContent;
function myFunction() {
  setInterval('hi', 1000000);
};

setInterval(function(){ if (refresh == '00:59') {
    console.log('good')
    document.getElementById('green').disabled = true;
    document.getElementById('green').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('violet').disabled = true;
    document.getElementById('violet').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('red').disabled = true;
    document.getElementById('red').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('0').disabled = true;
    document.getElementById('0').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('1').disabled = true;
    document.getElementById('1').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('2').disabled = true;
    document.getElementById('2').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('3').disabled = true;
    document.getElementById('3').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('4').disabled = true;
    document.getElementById('4').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('5').disabled = true;
    document.getElementById('5').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('6').disabled = true;
    document.getElementById('6').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('7').disabled = true;
    document.getElementById('7').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('8').disabled = true;
    document.getElementById('8').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('9').disabled = true;
    document.getElementById('9').style.backgroundColor = 'rgb(138, 134, 134)';
    document.getElementById('pop').style.visibility = 'hidden';
    document.getElementById('pop1').style.visibility = 'hidden';
    document.getElementById('pop2').style.visibility = 'hidden';
    document.getElementById('pop3').style.visibility = 'hidden';



    }
}, 1000);



function checkCountdown(){
    var refresh;
    refresh = document.getElementById('refresh').textContent;
    if (refresh == '00:59') {
    document.getElementById('green').disabled = true
    violet.disabled = true
    red.disabled = true
     document.getElementById('left').style.visibility = 'hidden';
    }
};

document.getElementById('green').addEventListener('click', function() {
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'visible';
    document.getElementById('confirm1').style.backgroundColor = '#32CD32';
    document.getElementById('buttoncolor1').style.backgroundColor = '#32CD32';
    document.getElementById('buttoncolor1').textContent = 'Join Green';
    document.getElementById('times11').style.color = '#32CD32';
    console.log(document.getElementById('refresh').textContent)
    if (balance < 50){
        document.getElementById('pop1').style.visibility = 'hidden';
    };


})

document.getElementById('violet').addEventListener('click', function() {
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'collapse';
    document.getElementById('pop2').style.visibility = 'visible';
    document.getElementById('confirm2').style.backgroundColor = '#8A2BE2';
    document.getElementById('buttoncolor2').style.backgroundColor = '#8A2BE2';
    document.getElementById('buttoncolor2').textContent = 'Join Violet';
    document.getElementById('times12').style.color = '#8A2BE2';
    if (balance < 50){
        document.getElementById('pop2').style.visibility = 'hidden';
    };

})

document.getElementById('red').addEventListener('click', function() {
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'visible';
    document.getElementById('confirm3').style.backgroundColor = 'red';
    document.getElementById('buttoncolor3').style.backgroundColor = 'red';
    document.getElementById('buttoncolor3').textContent = 'Join Red';
    document.getElementById('times13').style.color = 'red';
    if (balance < 50){
        document.getElementById('pop3').style.visibility = 'hidden';
    }

})

document.getElementById('rule').addEventListener('click', function() {
    document.getElementById('content').style.visibility = 'visible';
})

document.getElementById('times').addEventListener('click', function() {
    document.getElementById('content').style.visibility = 'collapse';
})

document.getElementById('times11').addEventListener('click', function() {
    document.getElementById('pop1').style.visibility = 'collapse';
})

document.getElementById('times12').addEventListener('click', function() {
    document.getElementById('pop2').style.visibility = 'collapse';
})

document.getElementById('times13').addEventListener('click', function() {
    document.getElementById('pop3').style.visibility = 'collapse';
})

document.getElementById('times1').addEventListener('click', function() {
    document.getElementById('pop').style.visibility = 'collapse';
})


var num_num = document.getElementById('num_num').value;

document.getElementById('0').addEventListener('click', function() {
    console.log('0')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 0';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 0;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('1').addEventListener('click', function() {
    console.log('1')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 1';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 1;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('2').addEventListener('click', function() {
    console.log('2')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 2';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 2;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('3').addEventListener('click', function() {
    console.log('3')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 3';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 3;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('4').addEventListener('click', function() {
    console.log('4')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 4';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 4;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('5').addEventListener('click', function() {
    console.log('5')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 5';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 5;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('6').addEventListener('click', function() {
    console.log('6')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 6';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 6;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('7').addEventListener('click', function() {
    console.log('7')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 7';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 7;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('8').addEventListener('click', function() {
    console.log('8')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 8';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 8;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})

document.getElementById('9').addEventListener('click', function() {
    console.log('9')
    document.getElementById('pop2').style.visibility = 'collapse';
    document.getElementById('pop1').style.visibility = 'collapse';
    document.getElementById('pop3').style.visibility = 'collapse';
    document.getElementById('pop').style.visibility = 'visible';
    document.getElementById('confirm').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').style.backgroundColor = '#4169E1';
    document.getElementById('buttoncolor').textContent = 'Select 9';
    document.getElementById('times1').style.color = '#4169E1';
    num_num = document.getElementById('num_num').value = 9;

    if (balance < 50){
        document.getElementById('pop').style.visibility = 'hidden';
    }

})



