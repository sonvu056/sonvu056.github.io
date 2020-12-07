// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
let convertString = function (string) {
    temp = "";
    string = string.toLowerCase();
    temp  += string[0].toUpperCase();
    for (let i = 1; i < string.length; i++) {
        if (string[i] == " ") {
            temp += " " + string[i + 1].toUpperCase();
            i++;
        } else {
            temp += string[i];
        }
    }
    return temp;
}

let a = "HELLO world";
convertString(a);

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
let convertToSpinalCase = function (string) {
    temp = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            temp += "-";
        } else {
            temp += string[i];
      }
    }
    return temp;
}

let b = "HELLO world";
convertToSpinalCase(b);

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.

let check = function (string) {
    temp = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            temp += string[i];
        } else {
            continue;
        }
    }
    for (let i = 0, j = temp.length; i < temp.length / 2; i++, j--) {
        if (temp[i] == temp[j-1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let c = "Race car";
check(c);
let d = "hello world";
check(d);