document.getElementById('add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);

        const amount = document.getElementById("amount").value;
        const convertedAmount = parseFloat(amount);
        console.log(convertedAmount, convertedPin);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance)

        if (amount && pin) {
            if (convertedPin === 1234) {
                const sum = convertedMainBalance + convertedAmount;
                document.getElementById("main-balance").innerText = sum;
            }
            else{
                alert("Enter valid pin")
            }
        } else {
            alert("Enter your amount")
        }
    })