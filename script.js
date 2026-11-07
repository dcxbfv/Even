function Even(){
    let number = document.getElementById("Number").value;
    number = number === "" ? NaN : +number;

    if (typeof number != "number" || !Number.isFinite(number)){
        document.getElementById("result").textContent = "Please Enter a Valid Number"
    }else if (number % 2 === 0){
        document.getElementById("result").textContent = "Your Number Is Even";
    }else {
        document.getElementById("result").textContent = "Your Number Is Odd"
    }
}