//  Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100
// let string = "";

// for (let i = 1; i < 101; i++) {
//     let temp = "";
//     if (i % 3 == 0) {
//         temp += "Fizz";
//     }
//     if (i % 5 == 0) {
//         temp += "Buzz";
//     }
//     if (i % 3 != 0 && i % 5 != 0) {
//         temp = "BuzzFizz";
//     }
//     string += temp + " ";
// }           
// alert(string);

//  Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000
// let sum = 0;

// for (let i = 1; i < 1001; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum += i;
//     }
// }
// alert(`Tong = ${sum}`);

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không
// let n = +prompt(`Nhap n: `, "");

// if (n <= 1) {
//     alert(`${n} khong la so nguyen to`);
// } else if (n == 2 || n == 3) {
//     alert(`${n} la so nguyen to`)
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             alert(`${n} khong la so nguyen to`); 
//             break;
//         }
//         alert(`${n} la so nguyen to`);
//     }
// }

// Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”
// let number = +prompt(`Nhap n: `, "");
// let total = "";

// switch (number) {
//     case 0:
//     case 1:
//         total = "Khong co so nguyen to nao";
//         break;
//     case 2:
//         total += "2";
//         break;
//     case 3:
//         total += "3";
//         break;
//     default:
//         total = "2 3 ";
//         for (let i = 4; i < number + 1; i++) {
//             let key = true;
//             for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
//                 if (i % j == 0) {
//                     key = false;
//                     break;
//                 }
//             }
//             if (key == true) {
//                 total += i + " ";
//             }
//         }
//         break;
// }
// alert(total);

// Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b
// let a = +prompt(`Nhap a: `, "");
// let b = +prompt(`Nhap b: `, "");
// let sum = 0;

// if (a <=2) {
//     sum += 2;
// }

// if (a <=3) {
//     sum += 3;
// }

// for (let i = 4; i < b + 1; i++) {
//     let key = true;
//     for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {      
//         if (i % j == 0) {
//             key = false;
//             break;
//             }
//         }
//     if (key == true) {
//         sum += i;
//     }
// }
// alert(sum);




