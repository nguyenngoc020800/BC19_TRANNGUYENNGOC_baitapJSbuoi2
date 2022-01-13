// bai tap sắp xếp số theo thứ tự tăng dần
// block 1: nhập vào ba số nguyên
// block 2: 
// b1: tạo biến cho các số được nhập vào là a,b,c
// b2: sử dụng câu lệnh prompt để yêu cầu người dùng nhập vào và sử dụng Number để ép kiếu a,b,c về giá trị Number
// b3: tạo biến cho tổng của 3 số là total và gán giá trị bằng công thức total= a + b +c
// b4: tạo biến cho giá trị lớn nhất của a,b,c là maxNumber và gán giá trị bằng công thức  maxNumber = Math.max(a,b,c);
// b5: tạo biến cho giá trị nhỏ nhất của a,b,c là minNumber và gán giá trị bằng công thức  minNumber = Math.min(a,b,c);
// b6: tạo biến cho số có giá trị lớn thứ 2 là midNumber và sử dụng công thức  midNumber =total - (maxNumber + minNumber); để tìm ra số có giá trị lớn thứ 2
// b7: sử dụng câu lệnh để xuất các số đã nhập theo thứ tự tăng dần 
// console.log('sắp xếp theo thứ tự tăng dần',minNumber,midNumber,maxNumber)
// block3: xuất 3 số nguyên đã nhập theo thứ tự tăng dần
const a = Number(prompt('nhập số thứ nhất',0));
const b = Number(prompt('nhập số thứ 2',0));
const c = Number(prompt('nhập số thứ 3',0));
const total = a + b + c;
const maxNumber = Math.max(a,b,c);
const minNumber = Math.min(a,b,c);
const midNumber =total - (maxNumber + minNumber);
console.log('sắp xếp theo thứ tự tăng dần',minNumber,midNumber,maxNumber)
