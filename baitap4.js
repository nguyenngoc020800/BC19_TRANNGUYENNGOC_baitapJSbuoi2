// bài tập kiểm tra tam giác 
// block1: nhập vào số do 3 cạnh của tam giác
// block2:
// b1: tạo biến cho 3 cạnh của tam giác và sử dụng lệnh prompt để yêu cầu người dùng nhập vào và Number để ép kiểu dữ liệu các cạnh về dụng Number
// b2: sử dụng lệnh if và điều kiện để xét loại tam giác: nếu tam giác có 2 cạnh bằng nhau và khác cạnh còn lại thì xuất ra màn hình 'đây là tam giác cân', nếu tam giác có 3 cạnh bằng nhau thì xuất ra màn hình câu lệnh'đây là tam giác đêu', nếu tam giác có các cạnh thỏa mãn định lý pytago và không cso 2 cạnh bên bằng nhau thì xuất ra màn hình câu lệnh'đây là tam giác vuông', nếu tam giác có 2 cạnh bên bằng nhau và thỏa mãn định lý pytago thì xuất ra màn hình câu lệnh 'đây là tam giác vuông cân', với các trường hợp còn lại xuất ra màn hình 'đây là tam giác bình thường '
// block3: xuất ra màn hình loại tam giác xác định được

const ab = Number(prompt('nhập độ dài cạnh AB:',0));
const ac = Number(prompt('nhập độ dài cạnh AC:',0));
const bc = Number(prompt('nhập độ dài cạnh BC:',0));
if(ab===ac && ab!==bc && Math.pow(bc,2)!==Math.pow(ab,2) + Math.pow(ac,2)){
    console.log("đây là tam giác cân")
    alert('đây là tam giác cân');
}else if(ab===bc && ab!==ac && Math.pow(ac,2)!==Math.pow(bc,2) + Math.pow(ab,2)){
    console.log("đây là tam giác cân")
    alert('đây là tam giác cân')
}else if(ac===bc && ac!==ab && Math.pow(ab,2)!==Math.pow(bc,2) + Math.pow(ac,2)){
    console.log("đây là tam giác cân")
    alert('đây là tam giác cân')
}else if(ab===ac && ab===bc){
    console.log('đây là tam giác đều')
    alert('đây là tam giác đều')
}else if(Math.pow(ab,2)===Math.pow(bc,2) + Math.pow(ac,2) && bc!==ac){
    console.log('đây là tam giác vuông')
    alert('đây là tam giác vuông')
}else if(Math.pow(bc,2)===Math.pow(ab,2) + Math.pow(ac,2) && ab!==ac){
    console.log('đây là tam giác vuông')
    alert('đây là tam giác vuông')
}else if(Math.pow(ac,2)===Math.pow(bc,2) + Math.pow(ab,2) && bc===ab){
    console.log('đây là tam giác vuông cân')
    alert('đây là tam giác vuông cân')
}else if(Math.pow(ab,2)===Math.pow(bc,2) + Math.pow(ac,2) && bc===ac){
    console.log('đây là tam giác vuông cân')
    alert('đây là tam giác vuông cân')
}else if(Math.pow(bc,2)===Math.pow(ab,2) + Math.pow(ac,2) && ab===ac){
    console.log('đây là tam giác vuông cân')
    alert('đây là tam giác vuông cân')
}else if(Math.pow(ac,2)===Math.pow(bc,2) + Math.pow(ab,2) && bc===ab){
    console.log('đây là tam giác vuông cân')
    alert('đây là tam giác vuông cân')
}else{
    console.log('đây là tam giác bình thường')
    alert('đây là tam giác bình thường')
}