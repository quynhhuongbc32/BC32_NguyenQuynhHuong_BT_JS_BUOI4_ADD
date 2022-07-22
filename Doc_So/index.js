document.getElementById("speak").onclick = function(){
    // Đầu vào
    var number = document.getElementById("number").value * 1;

    // Xử lí
    var hangtram = Math.floor(number / 100);
    var hangchuc = Math.floor(number % 100 / 10);
    var donvi = Math.floor(number % 10);
    var sotram = "";
    var sochuc = "";
    var sodonvi ="";
    switch (hangtram){
        case 1: {
            sotram = "Một";
        };break;
        case 2: {
            sotram = "Hai";
        };break;
        case 3: {
            sotram = "Ba";
        };break;
        case 4: {
            sotram = "Bốn";
        };break;
        case 5: {
            sotram = "Năm";
        };break;
        case 6: {
            goitram = "Sáu";
        };break;
        case 7: {
            sotram = "Bảy";
        };break;
        case 8: {
            sotram = "Tám";
        };break;
        case 9: {
            sotram = "Chín";
        };break;
    }
    switch (hangchuc){
        case 1: {
            sochuc = "một";
        };break;
        case 2: {
            sochuc = "hai";
        };break;
        case 3: {
            sochuc = "ba";
        };break;
        case 4: {
            sochuc = "bốn";
        };break;
        case 5: {
            sochuc = "năm";
        };break;
        case 6: {
            sochuc = "sáu";
        };break;
        case 7: {
            sochuc = "bảy";
        };break;
        case 8: {
            sochuc = "tám";
        };break;
        case 9: {
            sochuc = "chín";
        };break;
    }
    switch (donvi){
        case 1: {
            sodonvi = "mốt";
        };break;
        case 2: {
            sodonvi = "hai";
        };break;
        case 3: {
            sodonvi = "ba";
        };break;
        case 4: {
            sodonvi = "bốn";
        };break;
        case 5: {
            sodonvi = "năm";
        };break;
        case 6: {
            sodonvi = "sáu";
        };break;
        case 7: {
            sodonvi = "bảy";
        };break;
        case 8: {
            sodonvi = "tám";
        };break;
        case 9: {
            sodonvi = "chín";
        };break;
    }

    // Đầu ra 
    document.getElementById("showInfoTotal").innerHTML = sotram + " trăm " + sochuc + " mươi " + sodonvi;
}