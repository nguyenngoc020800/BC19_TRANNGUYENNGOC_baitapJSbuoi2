// bài tập chào hỏi người dùng
// block1: nhập người dùng
// block2: 
// b1: tạo biến cho người sử dụng là userName và yêu cầu người dùng nhập giá trị bằng câu lệnh prompt 
// b2: sử dụng switch, case để đủa câu chào ra màn hình theo từng trường hợp dựa vào giá trị của biến userName,giá trị defaul sẽ chỉ để giá trị 'xin chào'
// b3: sử dụng console.log để xuất ra màn hình câu chào và alert để hiện ra pupup thông báo có lời chào
// block3: xuất ra màn hình câu chào dựa theo userName
const userName = prompt('Ai đang sử dụng:','bố')
switch (userName){
    case 'Bố':
    case 'bố':{
        alert('chào Bố');
        console.log('chào',userName)
        break
    }
    case 'mẹ':
    case 'Mẹ':{
        alert('chào mẹ');
        console.log('chào',userName)
        break
    }
    case 'anh trai':
    case 'Anh Trai':{
        alert('chào anh trai');
        console.log('chào',userName)
        break
    }
    case 'em':
    case 'Em':{
        alert('chào em');
        console.log('chào',userName);
        break
    }
    default :{
        alert('xin chào');
        console.log('chào',userName)
    }
}