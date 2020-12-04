// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

let convertTemp = function (temp) {
    return (9 / 5) * temp + 32;
}

// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
let arr = [1, 2, 3, 4, 5, 6]
let secondMax = function (arr) {
    let max = arr[0];
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > answer && arr[i] < max) {
            answer = arr[i];
        }
    }
    return answer;
}

// Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
let arr = ["asdas", "sadzxczx", "sdjia", "sdkzkjxhc"];
let longestString = function (arr) {
    let string = "";
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            string = arr[i];
        }
    }
    return string
}


// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
let a = "asdzczxcaABC";
let b = "ABCd";
let checkString = function (string, target) {
    let stringLength = string.length; 
    let targetLength = target.length; 
    let j = 0;
    for (let i = stringLength - targetLength; i < stringLength; i++) {
        if (string[i] != target[j]) {
            return false;
        } else {
            j++;
        }
    }
    return true
}

// Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).
let arr = ["a", "b", "ac", "bb", "", 1, 11, 0, 4, true, false, NaN, NaN];
let dup = function (arr) {
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
        temp[temp.length] = arr[i];
        
    }
    return true;
}

dup(arr);