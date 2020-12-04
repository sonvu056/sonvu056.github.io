// Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND. Tham số truyền vào là 1 số nguyên dương.

let USDtoVND = function (usd) {
    return usd * 23000;
}

// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, (số PI sử dụng Math.PI).

let theTichHinhCau = function (r) {
    return (4 / 3 * Math.PI * r * r * r);
}

// Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

let sumBetween = function (a, b) {
    let sum = 0;
    for (let i = a + 1; i < b; i++) {
        sum = sum + i;
    }
    return sum;
}

// Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

let tongUoc = function (n) {
    let sum = 1 + n;
    for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i == 0) {
            sum = sum + i;
        }
    }
    return sum;
}