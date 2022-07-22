document.getElementById("search").onclick = function() {
    // Đầu vào
    var tensv1 = document.getElementById("tensv1").value;
    var tensv2 = document.getElementById("tensv2").value;
    var tensv3 = document.getElementById("tensv3").value;

    var toadoXsv1 = document.getElementById("toadoXsv1").value * 1;
    var toadoXsv2 = document.getElementById("toadoXsv2").value * 1;
    var toadoXsv3 = document.getElementById("toadoXsv3").value * 1;
    var toadoXtr = document.getElementById("toadoXtr").value * 1;

    var toadoYsv1 = document.getElementById("toadoYsv1").value * 1;
    var toadoYsv2 = document.getElementById("toadoYsv2").value * 1;
    var toadoYsv3 = document.getElementById("toadoYsv3").value * 1;
    var toadoYtr = document.getElementById("toadoYtr").value * 1;
    
    // Xứ lí
    var long1 = Math.sqrt(toadoXsv1 * toadoXsv1 + toadoYsv1 * toadoYsv1);
    var long2 = Math.sqrt(toadoXsv2 * toadoXsv2 + toadoYsv2 * toadoYsv2);
    var long3 = Math.sqrt(toadoXsv3 * toadoXsv3 + toadoYsv3 * toadoYsv3);
    var long4 = Math.sqrt(toadoXtr * toadoXtr + toadoYtr * toadoYtr);

    var distanceSv1 = Math.abs(long4 - long1);
    var distanceSv2 = Math.abs(long4 - long2);
    var distanceSv3 = Math.abs(long4 - long3);
    var result = "";
    if(distanceSv1 > distanceSv2 && distanceSv1 > distanceSv3) {
        result = tensv1;
    }
    else if(distanceSv2 > distanceSv1 && distanceSv2 > distanceSv3) {
        result = tensv2;
    }else{
        result = tensv3;
    }

    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = "Sinh viên xa trường nhất là : " + result;
}