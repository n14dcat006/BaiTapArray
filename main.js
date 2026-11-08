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
/**
 * input:
 * mảng: các số
 * vị trí 1
 * vị trí 2
 *
 * xử lý:
 * tạo 1 biến giá trị tạm = giá trị biến 1
 * gán mảng[vị trí 1]= giá trị mảng[vị trí 2]
 * gán lại mảng[vị trí 2] = giá trị biến tạm lúc nãy
 *
 * output:
 * mảng sau khi đổi chỗ
 */
function swapPositions() {
  let position1 = document.getElementById("inputPosition1").value * 1;
  let position2 = document.getElementById("inputPosition2").value * 1;
  let tempValue = numberList[position1];
  numberList[position1] = numberList[position2];
  numberList[position2] = tempValue;
  document.getElementById("result6").innerHTML = `👉 ${numberList}`;
}

// 7. Sắp xếp tăng dần
/**
 * input: mảng các số
 *
 * xử lý:
 * for (i từ 0-> < mảng.length -1){
 *      for(i từ i+1 -> <mảng.length){
 *          nếu số phía trước lớn hơn số phía sau => đổi chỗ (như hàm swap phía trên)
 *      }
 * }
 *
 * output:
 * mảng sau khi sắp xếp
 */
function sortAscending() {
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[j] < numberList[i]) {
        let temp = numberList[j];
        numberList[j] = numberList[i];
        numberList[i] = temp;
      }
    }
  }
  document.getElementById("result7").innerHTML = `👉 ${numberList}`;
}

// 8. Tìm số nguyên tố đầu tiên (không có -> -1)
/**
 * input: mảng các số
 *
 * xử lý:
 * số nguyên tố là số >1, chỉ chia hết cho 1 và chính nó
 * gán biến kết quả = -1 (mặc định)
 * chạy vòng lặp mảng {
 *  nếu mảng[i]>i thì :
 *      gán biến tạm giả định số này là nguyên số: temp=true
 *      chạy for(từ j=2 -> <mảng[i]){
 *      nếu mảng [i]%j ===0 => số này chia hết có 1 số khác 1 và chính nó
 *      => không phải nguyên tố => gán lại biến temp=false
 *      }
 * nếu biến temp=true => không có nào giữa 1 và mảng[i] mà bị chia hết
 * gán biến kết quả = mảng [i]
 * break thoát vòng lặp for i (do chỉ cần tìm thấy số đầu tiên)
 * }
 *
 * output:
 * nếu không có số nguyên tố: -1
 * nếu có trả biến kết quả
 */
function findFirstPrime() {
  let rs = -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > 1) {
      let temp = true;
      for (j = 2; j < numberList[i]; j++) {
        if (numberList[i] % j === 0) {
          temp = false;
        }
      }
      if (temp == true) {
        rs = numberList[i];
        break;
      }
    }
  }
  document.getElementById("result8").innerHTML = `👉 ${rs}`;
}

// 9. Thêm số thực & đếm số nguyên
let realNumber = 0;
let realNumberList = [];
function addRealNumber() {
  realNumber = document.getElementById("inputRealNumber").value * 1;
  realNumberList.push(realNumber);
  document.getElementById("realArrayResult").innerHTML = realNumberList;
}
/**
 * input: mảng số thực
 *
 * xử lý:
 * tạo biến kết quả gán trước sl = 0
 * chạy vòng lặp mảng: dùng hàm isInteger, nếu =true thì +1 vào biến kết quả
 *
 * output: biến kết quả
 */
function countIntegers() {
  let rs = 0;
  for (let i = 0; i < realNumberList.length; i++) {
    if (Number.isInteger(realNumberList[i]) == true) {
      rs += 1;
    }
  }
  document.getElementById("result9").innerHTML = `👉 ${rs}`;
}

// 10. So sánh số lượng số dương và số âm
function comparePositiveNegative() {}
