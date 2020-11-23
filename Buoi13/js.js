// Viết function cho phép nhập vào key và value tương ứng, gán key và value vào một object. Cho phép nhập số lượng key và value tùy ý, chỉ dừng khi nào người dùng bấm cancel hoặc nhập giá trị rỗng
// let person = {};
// let input = (a) => {
//     do {
//         let key = prompt(`Nhap key: `, "");
//         if (key === null || key === "") {
//           break;
//         }
//         let value = prompt(`Nhap value: `, "");      
//         a[key] = value;
//     } while (true)
//     for (let key in person) {
//       console.log(key +": " + person[key]);

//     }
// }

// input(person);
// let printKey = (object) => {
//   for (let key in object) {
//     console.log(key + " ");
//   }
// };

// printKey(person);

// Viết hàm nhận 2 tham số, một là object, 2 là key, nếu key có tồn tại thì trả về giá trị của key đó, nếu không, trả về false. Sau đó, in ra màn hình giá trị trả về, nếu không có in ra “Không có ‘key’”
// let person = {
//     1: "a",
//     2: "b",
//     3: "c"
// }

// let checkObject = (object_temp, key_temp) => {
//   for (let key in object_temp) {
//     if (key === key_temp) {
//         return key_temp;
//     } 
//   }
//   return false;
// }

// if (checkObject(person, '5')) {
//     alert(`Key = ${checkObject(person, "3")}`);
// } else {
//     alert(`Khong co 'key'`);
// }
