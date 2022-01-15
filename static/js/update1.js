var bulkp = parseInt(document.getElementById('bulkp').value)
var sellingp = parseInt(document.getElementById('sellingp').value)
var totalp = parseInt(document.getElementById('totalp').value)
var availablep = parseInt(document.getElementById('availablep').value)
var current_profit = parseInt(document.getElementById('current_profit').value)

var ratio
var r_s
var total_profit
console.log(bulkp)
console.log(sellingp)
console.log(totalp)
console.log(availablep)


document.getElementById('click').addEventListener('click', function() {
    ratio =  bulkp / totalp
    r_s = sellingp - ratio
    total_profit = r_s * 30
    sold = parseInt(document.getElementById('totalp').value) - parseInt(document.getElementById('availablep').value)
    sold_selling =  sold *  parseInt(document.getElementById('sellingp').value)
    sold_cost =  sold *  ratio
    current_profit =  sold_selling -  sold_cost
    int_current_profit = Math.ceil(current_profit)
    document.getElementById('current_profit').value = int_current_profit
    console.log(int_current_profit)


})


document.getElementById('bulk').addEventListener('click', function() {
    document.getElementById('bulkp').disabled = false;

});