/*
    Ngày: 08/06/2018
    Người tạo: Nguyễn Bình Minh
    Dự án: Tính tiền taxi
    Version: 1.0
*/
var uberX_0_1 = 8000;
var uberX_1_20 = 12000;
var uberX_21 = 10000;
var uberX_cho = 2000;

var uberSUV_0_1 = 9000;
var uberSUV_1_20 = 14000;
var uberSUV_21 = 12000;
var uberSUV_cho = 3000;

var uberBlack_0_1 = 10000;
var uberBlack_1_20 = 16000;
var uberBlack_21 = 14000;
var uberBlack_cho = 4000;

// Hàm tính tiền UBER bằng số km người dùng nhập vào
// function tinhTien(){//Hàm không có giá trị trả về
//     // Gọi hàm kiemTraLoaiXe
//     var loaiXe = kiemTraLoaiXe(); //Callback function (gọi 1 hàm trong 1 hàm)
//     console.log(loaiXe);
//     // Lấy số km người dùng nhập vào
//     var soKM = document.getElementById('txtSoKM').value;
//     soKM = parseFloat(soKM);
//     // Lấy thời gian chờ người dùng nhập vào
//     var thoiGianCho = document.getElementById('txtThoiGianCho').value;
//     thoiGianCho = parseFloat(thoiGianCho);
//     console.log(thoiGianCho);
//     // Hàm tính tiền taxi
//     var tongTien;
//     var giaKM_1;
//     var giaKM_20;
//     var giaKM_21;
//     var giaCho;
//     switch (loaiXe) {
//         case 'uberX':
//             giaKM_1 = 8000;
//             giaKM_20 = 12000;
//             giaKM_21 = 10000;
//             giaCho = 2000;
//             break;
//         case 'uberSUV':
//             giaKM_1 = 9000;
//             giaKM_20 = 14000;
//             giaKM_21 = 12000;
//             giaCho = 3000;
//             break;
//         case 'uberBlack':
//             giaKM_1 = 10000;
//             giaKM_20 = 16000;
//             giaKM_21 = 14000;
//             giaCho = 4000;
//             break;
//         default:
//             break;
//     }
//     // Tính tổng tiền
//     if (soKM <= 1) {
//         tongTien = soKM * giaKM_1 + thoiGianCho * 2000;
//     }
//     else if(soKM > 1 && soKM <= 20){
//         tongTien = 1 * giaKM_1 + (soKM - 1) * giaKM_20 + thoiGianCho * giaKM_21;
//     }
//     else if(soKM >= 21){
//         tongTien = 1 * giaKM_1 + 19 * giaKM_20 + (soKM - 20) * giaKM_21 + thoiGianCho * giaCho;
//     }
//     // DOM tới divThanhTien để hiện thị ra
//     var divThanhTien = document.getElementById('divThanhTien');
//     divThanhTien.style.display = "block";
//     // DOM tới thẻ span xuatTien để hiển thị tổng tiền
//     var spanXuatTien = document.getElementById('xuatTien');
//     spanXuatTien.innerHTML = tongTien;

// }
// END Hàm tính tiền UBER bằng số km người dùng nhập vào

// Hàm kiểm tra loại xe UBER người dùng chọn
function kiemTraLoaiXe() {//Hàm có giá trị trả về
    var uberXStatus = document.getElementById('uberX').checked;
    var uberSUVStatus = document.getElementById('uberSUV').checked;
    var uberBlackStatus = document.getElementById('uberBlack').checked;
    if(uberXStatus){
        return 'uberX';
    }
    else if(uberSUVStatus){
        return 'uberSUV';
    }
    else if(uberBlack){
        return 'uberBlack';
    }

}
// END Hàm kiểm tra loại xe UBER người dùng chọn

// In hóa đơn
function inHoaDon(){
    // Lấy giá trị số km từ người dùng nhập vào
    var soKM = document.getElementById('txtSoKM').value;
    soKM = parseFloat(soKM);
    // Lấy giá trị thời gian chờ từ người dùng nhập vào
    var tgcho = document.getElementById('txtThoiGianCho').value;
    tgcho = parseFloat(tgcho);
    // Tạo biến loại giá
    var giaKM_1;
    var giaKM_1_20;
    var giaKM_21;
    var giaTgCho;

    var soKM_1;
    var soKM_1_20;
    var soKM_21;

    var tongTien_1;
    var tongTien_1_20;
    var tongTien_21;
    var tongTien_cho;

    var tongTien;
    // Kiểm tra loại xe người dùng chọn
    var loaiXe = kiemTraLoaiXe();
    switch (loaiXe){
        case 'uberX':
            giaKM_1 = uberX_0_1;
            giaKM_1_20 = uberX_1_20;
            giaKM_21 = uberX_21;
            giaTgCho = uberX_cho;
        break;
        case 'uberSUV':
            giaKM_1 = uberSUV_0_1;
            giaKM_1_20 = uberSUV_1_20;
            giaKM_21 = uberSUV_21;
            giaTgCho = uberSUV_cho;
        break;
        case 'uberBlack':
            giaKM_1 = uberBlack_0_1;
            giaKM_1_20 = uberBlack_1_20;
            giaKM_21 = uberBlack_21;
            giaTgCho = uberBlack_cho;
        break;
    }
    if(soKM <= 1){
        // Số km đi được các giai đoạn
        soKM_1 = 1;
        // Tổng tiền đi được các giai đoạn
        tongTien_1 = soKM_1 * giaKM_1;
        tongTien_cho = tgcho * giaTgCho;
        // Tổng cộng tiền
        tongTien = tongTien_1 + tongTien_cho;
        // Tạo biến số dòng của table
        var row_1 = ["Từ 0 -> 1",soKM_1,giaKM_1,tongTien_1];
        var row_2 = ["Thời gian chờ",tgcho,giaTgCho,tongTien_cho];
        var rows = [row_1,row_2];
        // Gọi hàm tạo table động
        taoTableDong(rows);
    }
    else if(soKM > 1 && soKM <= 20){
        // Số km đi được các giai đoạn
        soKM_1 = 1;
        soKM_1_20 = soKM - soKM_1;
        // Tổng tiền đi được các giai đoạn
        tongTien_1 = soKM_1 * giaKM_1;
        tongTien_1_20 = soKM_1_20 * giaKM_1_20;
        tongTien_cho = tgcho * giaTgCho;
        // Tổng cộng tiền
        tongTien = tongTien_1 + tongTien_1_20 + tongTien_cho;
        // Tạo biến số dòng của table
        var row_1 = ["Từ 0 -> 1",soKM_1,giaKM_1,tongTien_1];
        var row_2 = ["Từ 1 -> 20",soKM_1_20,giaKM_1_20,tongTien_1_20];
        var row_3 = ["Thời gian chờ",tgcho,giaTgCho,tongTien_cho];
        var rows = [row_1,row_2,row_3];
        // Gọi hàm tạo table động
        taoTableDong(rows);
    }
    else if(soKM >= 21){
        // Số km đi được các giai đoạn
        soKM_1 = 1;
        soKM_1_20 = 19;
        soKM_21 = soKM - soKM_1 - soKM_1_20;
        // Tổng tiền đi được các giai đoạn
        tongTien_1 = soKM_1 * giaKM_1;
        tongTien_1_20 = soKM_1_20 * giaKM_1_20;
        tongTien_21 = soKM_21 * giaKM_21;
        tongTien_cho = tgcho * giaTgCho;
        // Tổng cộng tiền
        tongTien = tongTien_1 + tongTien_1_20 + tongTien_21 + tongTien_cho;
        // Tạo biến số dòng của talbe
        var row_1 = ["Từ 0 -> 1",soKM_1,giaKM_1,tongTien_1];
        var row_2 = ["Từ 1 -> 20",soKM_1_20,giaKM_1_20,tongTien_1_20];
        var row_3 = ["Trên 21",soKM_21,giaKM_21,tongTien_21];
        var row_4 = ["Thời gian chờ",tgcho,giaTgCho,tongTien_cho];
        var rows = [row_1,row_2,row_3,row_4];
        // Gọi hàm tạo table động
        taoTableDong(rows);
    }
}

// Hàm tạo table động
function taoTableDong(rowArray){
    var tBody = document.getElementById('tbBody');
    tBody.innerHTML = null; //Để mỗi khi click ko thêm liên tiếp vào
    for(var i = 0; i < rowArray.length; i++){
        // Tạo thẻ tr
        var tagTr = document.createElement('tr');
        // Tạo các thẻ td
        var tagTd_ChiTiet = document.createElement('td');
        tagTd_ChiTiet.innerHTML = rowArray[i][0];
        var tagTd_SuDung = document.createElement('td');
        tagTd_SuDung.innerHTML = rowArray[i][1];
        var tagTd_DonGia = document.createElement('td');
        tagTd_DonGia.innerHTML = rowArray[i][2];
        var tagTd_ThanhTien = document.createElement('td');
        tagTd_ThanhTien.innerHTML = rowArray[i][3];

        // Đưa thẻ td vào trong thẻ tr
        tagTr.appendChild(tagTd_ChiTiet);
        tagTr.appendChild(tagTd_SuDung);
        tagTr.appendChild(tagTd_DonGia);
        tagTr.appendChild(tagTd_ThanhTien);

        // Đưa thẻ tr vào HTML
        tBody.appendChild(tagTr);
    }
}

