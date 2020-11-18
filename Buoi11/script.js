//Toan tu
//Bai 1:
// let a = +prompt("a = ", "");
// let b = +prompt("b = ", "");

// alert(`${a} + ${b} = ${a+b}`);

//Bai 2:
// let a = +prompt("a = ", "");
// let b = +prompt("b = ", "");

// alert(
// `${a} + ${b} = ${a + b};
// ${a} - ${b} = ${a - b};
// ${a} x ${b} = ${a * b};
// ${a} / ${b} = ${a / b}`);

//Bai 3:
// let cD = +prompt("Chieu dai = ", "");
// let cR = +prompt("Chieu rong = ", "");

// alert(`Chu vi = ${2 * (cD + cR)}`);

//Bai 4:
// let cD = +prompt("Chieu dai = ", "");
// let cR = +prompt("Chieu rong = ", "");

// alert(`Dien tich = ${cD * cR}`);

//Bai 5:
// const PI = 3.14;
// let r = prompt(`Ban kinh = `, "");

// alert(
// `Duong kinh = ${2 * r};
// Chu vi = ${2 * r * PI};
// Dien tich = ${r * r * PI}`);

//Bai 6:
// let a = +prompt("Nhap so can doi(cm): ", "");

// alert(`${a}(cm) = ${a / (10 ** 2)}(m) = ${a / (10 ** 5)}(km)`);

//Bai 7:
// let a = +prompt("Nhap nhiet do can doi (C): ", "");

// alert(`${a} C = ${(a * 9 / 5) + 32} F`);

//Cau truc dieu khien
//Bai 1:
// let a = +prompt("a = ", "");
// let b = +prompt("b = ", "");

// a > b ? alert(`${a} la so lon nhat`) : alert(`${b} la so lon nhat`);

//Bai 2:
// let a = +prompt("a = ", "");
// let b = +prompt("b = ", "");
// let c = +prompt("c = ", "");

// if (a > b) {
//     if (a > c) {
//         alert(`${a} la so lon nhat`);
//     }
//     else {
//         alert(`${c} la so lon nhat`);
//     }
// }
// else if (b > c) {
//     alert(`${b} la so lon nhat`);
// }
// else {
//     alert(`${c} la so lon nhat`);
// }

//Bai 3:
// let a = +prompt("a = ", "");

// (a == 0) ? alert(`Bang 0`)
//     : (a < 0) ? alert(`${a} la so am`)
//         : alert(`${a} la so duong`);

//Bai 4:
// let a = +prompt("a = ", "");

// (a % 5 != 0) ? alert(`Nope!`) : (a % 11 != 0) ? alert(`Nope!`) : alert(`Yes :D`);

//Bai 5:
// let a = +prompt("a = ", "");

// (a % 2 == 0) ? alert(`${a} la so chan`) : alert(`${a} la so le`);

//Bai 6:
// let a = +prompt("Nam = ", "");

// if (a % 400 == 0 || a % 100 != 0 && a % 4 == 0) {
//     alert(`${a} la nam nhuan`);
// }
// else{
//     alert(`${a} khong la nam nhuan`);
// }

//Bai 7:
// let a = prompt(`Nhap ki tu: `, "");

// (a >= 'a' && a <= 'z' || a >= 'A' && a <= 'Z') ? alert(`Yes`) : alert(`Nope`);

//Bai 8:
// let a = prompt(`Nhap ki tu: `, "");

// switch (a.toUpperCase()) {
//     case 'O':
//     case 'U':
//     case 'I':
//     case 'A':
//     case 'E':
//         alert(`Yes`);
//         break;
//     default:
//         alert(`Nope`);
// }

//Bai 9:
// let a = prompt(`Nhap ki tu: `, "");

// if ((a >= "a" && a <= "z") || (a >= "A" && a <= "Z")) {
//     if (a === a.toUpperCase()) {
//         alert(`${a} la chu hoa`);
//     }
//     else alert(`${a} la chu thuong`);
// }
// else alert(`Nhap lai!`)

//Bai 10:
// let day = +prompt(`Nhap ngay: `, "")

// if (day > 0 && day < 8 && Number.isInteger(day) == true) {
//     switch (day % 7) {
//         case 1:
//             alert(`Ngay 1 la thu Hai`);
//             break;
//         case 2:
//             alert(`Ngay 2 la thu Ba`);
//             break;
//         case 3:
//             alert(`Ngay 3 la thu Tu`);
//             break;
//         case 4:
//             alert(`Ngay 4 la thu Nam`);
//             break;
//         case 5:
//             alert(`Ngay 5 la thu Sau`);
//             break;
//         case 6:
//             alert(`Ngay 6 la thu Bay`);
//             break;
//         case 7:
//             alert(`Ngay 7 la thu Chu Nhat`);
//             break;
//     }
// }
// else alert(`Nhap sai!`);

//Bai 11:
// let month = +prompt(`Nhap thang: `, "");

// switch (month) {
//     case 2:
//         alert(`Thang ${month} co 30 ngay`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         alert(`Thang ${month} co 30 ngay`);
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert(`Thang ${month} co 31 ngay`);
//         break;
//     default:
//         alert(`Nhap sai!`);
// }

//Bai 12:
// let a = +prompt(`a = `, "");
// let b = +prompt(`b = `, "");
// let c = +prompt(`c = `, "");

// let delta = (b * b - (4 * a * c));
// if (delta == 0) {
//     alert(`Phuong trinh co nghiem kep x = ${-b / 2 / a}`);
// } else if (delta > 0) {
//     alert(`Phuong trinh co nghiem x1 = ${(-b + Math.sqrt(delta)) / 2 / a}; x2 = ${(-b - Math.sqrt(delta)) / 2 / a}`);
// } else alert(`Vo nghiem`);

//Bai 13:
// let diem = +prompt(`Nhap diem: `, "");

// if (diem >= 0 && diem <= 10) {
//     diem < 4
//         ? (diem = "F")
//         : diem < 5.5
//             ? (diem = "D")
//             : diem < 7
//                 ? (diem = "C")
//                 : diem < 8.5
//                     ? (diem = "B")
//                     : (diem = "A");
//     alert(`Loai: ${diem}`);
// } else alert(`Nhap lai!`);

//Bai 14:
// let LCB = +prompt(`Nhap Luong Co Ban: `, "");

// if (LCB > 0 && Number.isInteger(LCB)) {
//     if (LCB < 2000000)
//         alert(`Luong = ${LCB + (20 / 100) * LCB + (80 / 100) * LCB}`);
//     else if (LCB < 5000000)
//         alert(`Luong = ${LCB + (25 / 100) * LCB + (90 / 100) * LCB}`);
//     else alert(`Luong = ${LCB + (30 / 100) * LCB + LCB}`);
// } else alert(`Nhap lai!`);