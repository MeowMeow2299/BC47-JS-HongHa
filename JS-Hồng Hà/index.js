/** Bài 1
Đầu vào: số ngày làm


Bước 1: tạo số ngày làm việc và số tiền
Bước 2: lấy dữ liệu từ người dùng nhập số ngày làm việc và số tiền
Bước 3: só tiền * số ngày làm việc của nhân viên
Bước 4: in ra kết quả


Đầu ra: lương của nhân viên

*/

function ngayLuong() {
  var tienLuong = document.getElementById("txt-tien-luong").value * 1;
  var soNgay = document.getElementById("txt-so-ngay").value * 1;
  var luongNhanVien = tienLuong * soNgay;
  document.getElementById(
    "result"
  ).innerText = `Số tiền lương của bạn: ${new Intl.NumberFormat("vn-VN").format(
    luongNhanVien
  )} VNĐ`;
}

/** Bài 2
Đầu vào: nhập 5 số bất kì


Bước 1: tạo hàm cho 5 biến
Bước 2: lấy dữ liệu người dùng nhập
Bước 3: cộng tổng của 5 số lại
Bước 4: sau đó chia cho 5


Đầu ra: giá trị trung bình của tổng 5 số người dùng nhập

*/

function trungBinhTong() {
  var numBer1 = document.getElementById("txt-n1").value * 1;
  var numBer2 = document.getElementById("txt-n2").value * 1;
  var numBer3 = document.getElementById("txt-n3").value * 1;
  var numBer4 = document.getElementById("txt-n4").value * 1;
  var numBer5 = document.getElementById("txt-n5").value * 1;

  var trungbinhTong = (numBer1 + numBer2 + numBer3 + numBer4 + numBer5) / 5;

  document.getElementById(
    "result2"
  ).innerText = `Trung bình tổng: ${new Intl.NumberFormat("vn-VN").format(
    trungbinhTong
  )}`;
}

/** Bài 3
Đầu vào: nhập số tiền USD bất kì


Bước 1: tạo định mức 1 USD bằng 23.500vnđ
Bước 2: lấy dữ liệu người dùng nhập
Bước 3: dữ liệu tiền USD * vnđ cho ra kết quả


Đầu ra: tính ra tiền Việt Nam đồng

*/

function quyDoi() {
  const tienVn = 23500;
  new Intl.NumberFormat("vn-VN").format(tienVn);
  var tienDo = document.getElementById("tienDo").value * 1;

  var doiTien = tienDo * tienVn;

  document.getElementById(
    "result3"
  ).innerText = `Tiền quy đổi của bạn là: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(doiTien)} VNĐ`;
}

/** Bài 4
Đầu vào: chiều dài và chiều rộng


Bước 1: tạo biến chiều dài và chiều rộng
Bước 2: lấy dữ liệu của người dùng nhập chiều dài và chiều rộng
Bước 3: tính diện tích hình chữ nhật
Bước 4: tính chu vi hình chữ nhật


Đầu ra: diện tích và chu vi của hình chữ nhật

*/

function tinhDtCv() {
  var chieuDai = document.getElementById("txt-chieu-dai").value * 1;
  var chieuRong = document.getElementById("txt-chieu-rong").value * 1;

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;

  document.getElementById(
    "result4"
  ).innerText = `Diện tích: ${new Intl.NumberFormat("vn-VN").format(
    dienTich
  )}, Chu vi: ${new Intl.NumberFormat("vn-VN").format(chuVi)}`;
}

/** Bài 5
Đầu vào: nhập 1 số có 2 chữ số


Bước 1: láy dữ liệu người dùng nhập 2 chữ số
Bước 2: tính số hàng đơn vị
Bước 3: tính số hàng chục
Bước 4: cộng số hàng đơn vị và hàng chục


Đầu ra: tổng 2 chữ số đã nhập

*/

function tongHaiSo() {
  var chuSo = document.getElementById("txt-chu-so").value * 1;

  var tongHaiSo = (chuSo % 10) + Math.floor(chuSo / 10);

  document.getElementById("result5").innerText = `Tổng hai số: ${tongHaiSo}`;
}
