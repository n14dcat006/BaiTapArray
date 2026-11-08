//Tạo biến chung số n user sẽ điền và mảng để làm đầu vào cho các hàm
let numberN = 0;
let numberList = [];

// Thêm số vào mảng
function addNumber() {
  numberN = document.getElementById("inputNumber").value * 1;
  numberList.push(numberN);
  document.getElementById("arrayResult").innerHTML = numberList;
}

// 1. Tổng các số dương
function sumPositiveNumbers() {}

// 2. Đếm số dương
function countPositiveNumbers() {}

// 3. Tìm số nhỏ nhất
function findMinNumber() {}

// 4. Tìm số dương nhỏ nhất
function findMinPositiveNumber() {}

// 5. Tìm số chẵn cuối cùng (không có -> -1)
function findLastEvenNumber() {}

// 6. Đổi chỗ 2 vị trí
function swapPositions() {}

// 7. Sắp xếp tăng dần
function sortAscending() {}

// 8. Tìm số nguyên tố đầu tiên (không có -> -1)
function findFirstPrime() {}

// 9. Thêm số thực & đếm số nguyên
function addRealNumber() {}

function countIntegers() {}

// 10. So sánh số lượng số dương và số âm
function comparePositiveNegative() {}
