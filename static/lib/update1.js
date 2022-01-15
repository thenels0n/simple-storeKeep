document.getElementById('addAvailable').addEventListener('click', function() {
    var current = parseInt(document.getElementById('availablep').textContent);
    var each =  1;
    sum = current += 1;
    document.getElementById('availablep').textContent = sum;
    console.log('clicked', sum);

    var bulkp = parseInt(document.getElementById('bulkp').textContent)
    var sellingp = parseInt(document.getElementById('sellingp').textContent)
    var totalp = parseInt(document.getElementById('totalp').textContent)
    var availablep = parseInt(document.getElementById('availablep').textContent)
    var current_profit = parseInt(document.getElementById('current_profit').textContent)

    var ratio
    var r_s

    ratio =  bulkp / totalp
    r_s = sellingp - ratio
    total_profit = r_s * 30
    sold = totalp - availablep
    sold_selling =  sold *  sellingp
    sold_cost =  sold *  ratio
    current_profit =  sold_selling -  sold_cost
    int_current_profit = Math.ceil(current_profit)
    document.getElementById('current_profit').textContent = int_current_profit
    console.log(int_current_profit)

})

document.getElementById('removeAvailable').addEventListener('click', function() {
    var current = parseInt(document.getElementById('availablep').textContent);
    var each =  1;
    sum = current -= 1;
    document.getElementById('availablep').textContent = sum;
    if (sum < '0'){
        document.getElementById('availablep').textContent = "0";
    }
    console.log('clicked', sum);

    var bulkp = parseInt(document.getElementById('bulkp').textContent)
    var sellingp = parseInt(document.getElementById('sellingp').textContent)
    var totalp = parseInt(document.getElementById('totalp').textContent)
    var availablep = parseInt(document.getElementById('availablep').textContent)
    var current_profit = parseInt(document.getElementById('current_profit').textContent)

    var ratio
    var r_s

    ratio =  bulkp / totalp
    r_s = sellingp - ratio
    total_profit = r_s * 30
    sold = totalp - availablep
    sold_selling =  sold *  sellingp
    sold_cost =  sold *  ratio
    current_profit =  sold_selling -  sold_cost
    int_current_profit = Math.ceil(current_profit)
    document.getElementById('current_profit').textContent = int_current_profit
    console.log(int_current_profit)

})



document.getElementById('addtot').addEventListener('click', function() {
    var current = parseInt(document.getElementById('totalp').textContent);
    var each =  1;
    sum = current += 1;
    document.getElementById('totalp').textContent = sum;
    console.log('clicked', sum);

    

})

document.getElementById('removetot').addEventListener('click', function() {
    var current = parseInt(document.getElementById('totalp').textContent);
    var each =  1;
    sum = current -= 1;
    document.getElementById('totalp').textContent = sum;
    if (sum < '0'){
        document.getElementById('totalp').textContent = "0";
    }
    console.log('clicked', sum);

})