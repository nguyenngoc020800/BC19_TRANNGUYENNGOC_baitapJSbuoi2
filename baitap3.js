// bài tập kiểm tra có bao nhiêu số chẵn và bao nhiêu số lẻ:
// block1: nhập vào 3 số nguyên
// block2:
// b1: tạo biến cho các số nhập người dùng nhập vào và gán giá trị với lệnh prompt và ép kiểu dữ liệu cho biến bằng lệnh Number 
// b2: chia lấy phần dư các số nguyên được nhập vào cho 2 và gán ngược lại cho các biến số
// b3: tạo biến cho số lượng số chẵn và số lẻ là soChan và soLe và gán giá trị là 0
// b4: sử dụng câu lệnh điều kiện if và xét với trường hợp các biến số sau khi chia lấy dư cho 2 có kết quả bằng 0 thì soChan tăng lên 1, ngược lại nếu khác 0 thì soLe tăng lên 1
// b5: xuất ra màn hình số lượng sỗ chẵn và sỗ lẻ kiểm tra được
// block3: xuất ra màn hình số lượng số chẵn và số lẻ sau khi kiểm tra
let a = Number(prompt('nhập số thứ nhất:',0));
let b = Number(prompt('nhập số thứ 2:',0));
let c = Number(prompt('nhập số thứ 3:',0));
a = a%2;
b = b%2;
c = c%2;
let soChan = 0;
let soLe = 0;
if(!a){
    soChan += 1;
}else{
    soLe += 1;
}
if(!b){
    soChan += 1;
}else{
    soLe += 1;
}
if(!c){
    soChan += 1;
}else{
    soLe += 1;
}
console.log('có',soChan,'số chẵn và',soLe,'số lẻ')