document.getElementById('add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById("amount").value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        // console.log(typeof mainBalance);


        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            console.log("Pin incorrect");
        }
    })