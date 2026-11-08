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
/**
 * input: mảng: các số
 *
 * xử lý:
 * tạo 1 kết quả
 * chạy vòng lặp từ đầu -> cuối mảng: if giá trị mảng vị trí đó >0 thì cộng vào biến kết quả đó
 *
 * output:
 * biến kết quả
 */
function sumPositiveNumbers() {
  let rs = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      rs += numberList[i];
    }
  }
  document.getElementById("result1").innerHTML = `👉 ${rs}`;
}

// 2. Đếm số dương
/**
 * input: mảng: các số
 *
 * xử lý
 * tạo 1 biến kết quả
 * chạy vòng lặp đầu -> cuối mảng: if giá trị mảng vị trí đó >0 thì cộng 1 (count) vào biến kết quả đó
 *
 * output:
 * biến kết quả
 */
function countPositiveNumbers() {
  let rs = 0;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0) {
      rs += 1;
    }
  }
  document.getElementById("result2").innerHTML = `👉 ${rs}`;
}

// 3. Tìm số nhỏ nhất
/**
 * input: mảng kết quả
 *
 * xử lý:
 * tạo 1 biến kết quả: gán trước = mảng[0]
 * chạy mảng[1] -> cuối mảng: if giá trị mảng vị trí đó < biến kết quả hiện tại thì gán biến kết quả = mảng[i]
 *
 * output:
 * biến kết quả
 */
function findMinNumber() {
  let rs = numberList[0];
  for (i = 1; i < numberList.length; i++) {
    if (numberList[i] < rs) {
      rs = numberList[i];
    }
  }
  document.getElementById("result3").innerHTML = `👉 ${rs}`;
}

// 4. Tìm số dương nhỏ nhất
/**
 * input: mảng: các số
 *
 * xử lý
 * tạo biến tạm kết quả = số cực lớn
 * tạo biến tạm index = -1 (để phát hiện nếu mảng không có số nguyên dương nào)
 * chạy vòng lặp mảng:xét điều kiện
 * if mảng[i] >0(tìm số dương) && mảng[i]<biến tạm (tìm số nhỏ nhất)
 * thì gán biến tạm = mảng[i] và index =i
 *
 * output:
 * nếu index vẫn =-1 => mảng không có số nguyên dương
 * nếu mảng #-1: trả giá trị biến kết quả
 */
function findMinPositiveNumber() {
  let indexRs = -1;
  let rs = Infinity;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 0 && numberList[i] < rs) {
      rs = numberList[i];
      indexRs = i;
    }
  }
  document.getElementById("result4").innerHTML =
    `👉 ${indexRs === -1 ? "Không có số dương trong mảng" : rs}`;
}

// 5. Tìm số chẵn cuối cùng (không có -> -1)
/**
 * input: mảng: các số
 *
 * xử lý:
 * gán biến kết quả = -1 (giá trị mặc định)
 * chạy vòng lặp mảng: xét giá trị mảng[i]%2 ===0 (số chẵn) thì gán kết quả = mảng[i]
 *
 * output:
 * biến kết quả
 */
function findLastEvenNumber() {
  let rs = -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      rs = numberList[i];
    }
  }
  document.getElementById("result5").innerHTML = `👉 ${rs}`;
}

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
