var pg1, pg2, pg1input, pg2input, pg1but, pg2but;

pg1 = document.getElementById('pg1').style.width
pg2 = document.getElementById('pg2').style.width

if (pg1 == '100%' ) {
    console.log(pg1);
    document.getElementById('pg1input').value = 1000
    document.getElementById('pg1but').disabled = false
} else {
    console.log(pg1);
    document.getElementById('pg1but').disabled = true
};

if (pg2 == '100%' ) {
    console.log(pg2);
    document.getElementById('pg2input').value = 3000
    document.getElementById('pg2but').disabled = false
} else {
    console.log(pg2);
    document.getElementById('pg2but').disabled = true
};

document.getElementById('pg1but').addEventListener('click', function() {
    document.getElementById('pg1input').value = 1000
    pg2 = document.getElementById('pg2').style.width = 0
})

document.getElementById('pg2but').addEventListener('click', function() {
    console.log("clicked")
    document.getElementById('pg2but').disabled = true
    document.getElementById('pg2input').value = 3000

})

document.getElementById('rule').addEventListener('click', function() {
    document.getElementById('content').style.visibility = 'visible';
})

document.getElementById('times').addEventListener('click', function() {
    document.getElementById('content').style.visibility = 'collapse';
})

