// 변수선언
let countVal = document.querySelector('.count_val'); //선택자 element를 countVal 변수로 지정
let result = countVal.textContent; //현재 화면의 countVal 엘리멘트의 텍스트 값을 가져옴. -> '0'
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");

// plusBtn.addEventListener("click", function(e, type){
//     type = 'plus';
//     countNum(type);
//     // if(type == 'plus') {
//     //     result = parseInt(result) + 1; //parseInt : 문자열 인자('0')를 파싱하여 정수형 값으로 반환 (정수형으로 값 출력하여 result 변수에 담아줌) -> 항상 정수형으로 담기도록 하기 위해서, 해당 함수 사용하였음
//     // } 
//     // countVal.innerHTML = result; //countVal 엘리멘트 내 계산된 현재 result 변수의 값을 뿌려줌. -> html 화면에 노출하기 위한 소스
// });

// minusBtn.addEventListener("click", function(e, type){
//     type = 'minus';
//     countNum(type);
//     // console.log(type);
//     // if(type == 'minus') {
//     //     result = parseInt(result) - 1;
//     // }
//     // countVal.innerHTML = result; 
// });

// countNum 함수 : 숫자 카운트 체크하기 위한 함수
// function countNum (type) {
//     //plus, minus type값을 이용해 plus일 경우 +1 , minus type일 경우, -1 계산
//     if(type == 'plus') {
//         result = parseInt(result) + 1; //parseInt : 문자열 인자('0')를 파싱하여 정수형 값으로 반환 (정수형으로 값 출력하여 result 변수에 담아줌) -> 항상 정수형으로 담기도록 하기 위해서, 해당 함수 사용하였음
//     } else {
//         result = parseInt(result) - 1;
//     }
//     countVal.innerHTML = result; //countVal 엘리멘트 내 계산된 현재 result 변수의 값을 뿌려줌. -> html 화면에 노출하기 위한 소스
// }

// 화살표 함수로 변경
plusBtn.addEventListener("click", (e,type) => {
    type = 'plus';
    countNum(type);
})

minusBtn.addEventListener("click", (e, type) =>{
    type = 'minus';
    countNum(type);
})

let countNum = (type) => {
    //plus, minus type값을 이용해 plus일 경우 +1 , minus type일 경우, -1 계산
    if(type == 'plus') {
        result = parseInt(result) + 1; //parseInt : 문자열 인자('0')를 파싱하여 정수형 값으로 반환 (정수형으로 값 출력하여 result 변수에 담아줌) -> 항상 정수형으로 담기도록 하기 위해서, 해당 함수 사용하였음
    } else {
        result = parseInt(result) - 1;
    }
    countVal.innerHTML = result; //countVal 엘리멘트 내 계산된 현재 result 변수의 값을 뿌려줌. -> html 화면에 노출하기 위한 소스
}