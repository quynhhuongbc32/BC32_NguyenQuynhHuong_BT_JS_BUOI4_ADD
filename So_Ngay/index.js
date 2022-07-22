document.getElementById("input").onclick = function() {
    // Đầu vào
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;

    // Xử lí
    var day = 0;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        day = 31;
    }
    else if (month === 2){
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            day = 29; 
        }
        else{
            day = 28;
        }   
    }
    else  if (month === 4 || month === 6 || month === 9 || month === 11 ) {
        day = 30;
    }
    else {
        error = "Một năm chỉ có 12 tháng";
    }
    
    var result = "";
    if (month > 13 ) {
        result = error;
    }
    else {
        result = "Tháng " + month + " năm " + year + " có " + day + " ngày ";
    }

    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}