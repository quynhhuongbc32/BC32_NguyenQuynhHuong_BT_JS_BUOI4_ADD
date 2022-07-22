// yesterday
// Đầu vào
var ngay = +document.getElementById("ngay").value;
var thang = +document.getElementById("thang").value;
var nam = +document.getElementById("nam").value;

document.getElementById("yesterday").onclick = function () {
  // Đầu vào
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;
  // Xử lí
  var ngayqua = 0;
  var thangqua = 0;
  var namqua = 0;
  var error = "";
  if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    if (ngay === 1) {
      if (thang === 8) {
        ngayqua = 31;
        thangqua = --thang;
        namqua = nam;
      } else if (thang === 3) {
        ngayqua = 28;
        thangqua = --thang;
        namqua = nam;
      } else if (thang === 1) {
        ngayqua = 31;
        thangqua = 12;
        namqua = --nam;
      } else {
        ngayqua = 30;
        thangqua = --thang;
        namqua = nam;
      }
    } else if (ngay <= 31) {
      ngayqua = --ngay;
      thangqua = thang;
      namqua = nam;
    } else {
      error = "Tháng này chỉ có trên 31 ngày";
    }
  } else if (thang === 2) {
    if (ngay === 1) {
      ngayqua = 31;
      thangqua = --thang;
      namqua = nam;
    } else if (ngay <= 28) {
      ngayqua = --ngay;
      thangqua = thang;
      namqua = nam;
    } else {
      error = "Tháng 2 chỉ có 28 ngày";
    }
  } else if(thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    if (ngay === 1) {
      ngayqua = 30;
      thangqua = --thang;
      namqua = nam;
    } else if (ngay <= 30) {
      ngayqua = --ngay;
      thangqua = thang;
      namqua = nam;
    } else {
      error = "Tháng này chỉ có 30 ngày";
    }
  }
  else{
    error = "1 năm chỉ có 12 tháng";
  }
  var result = "";
  if (ngayqua > 0 ){
    result = ngayqua + " / " + thangqua + " / " + namqua + error;
  }
  else{
    result = error;
  }
//   Đầu ra
document.getElementById("showInfoTotal").innerHTML = result;
};

//tomorrơ
document.getElementById("tomorrow").onclick = function () {
  // Đầu vào
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;
  // Xử lí
  var ngaysau = 0;
  var thangsau = 0;
  var namsau = 0;
  var error = "";

  if (thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12){
        if(ngay === 31){
            if(thang === 12){
                ngaysau = 1;
                thangsau = 1;
                namsau = ++nam;
            }
            else{
                ngaysau = 1;
                thangsau = ++thang;
                namsau = nam;
            }        
        }else if( ngay <= 30){
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        }else {
            error = "Tháng này không có trên 31 ngày"
        }
    }else if (thang === 2){
        if (ngay === 28){
            ngaysau = 1;
            thangsau = ++thang;
            namsau = nam;
        }
        else if (ngay < 28){
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        }
        else{
            error = "Tháng 2 chỉ có 28 ngày"
        }
    }
    else{
        if(ngay === 30){
            ngaysau = 1;
            thangsau = ++thang;
            namsau = nam;
        }
        else if (ngay < 30){
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        }
        else{
            error = "Tháng này không có trên 30 ngày"
        }
    }
    var result = "";
  if (tomorrow > 0 ){
    result = ngayqua + " / " + thangqua + " / " + namqua + error;
  }
  else{
    result = error;
  }
    // Đầu ra
    document.getElementById("showInfoTotal").innerHTML = ngaysau + " / " + thangsau + " / " + namsau;

};