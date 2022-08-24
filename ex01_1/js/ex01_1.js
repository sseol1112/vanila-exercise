const selectBox = document.querySelector('.sel_box');
const selEl = document.querySelectorAll('.sel_box select')
const tabW = document.querySelector('#tabCategory > .weight');
const tabA = document.querySelector('#tabCategory > .area');
const btnConver = document.querySelector('.btn_conver button');
const inputUnit = document.querySelector('.unit_input');
const outputUnit = document.querySelector('.unit_output');

let inputValue = '';
let outputEl = document.querySelector('#output');
let resultVal = '';

selEl[0].addEventListener('change', function() {
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';
})
selEl[1].addEventListener('change', function() {
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';
})
tabW.addEventListener('click', function(){
    tabW.classList.remove('active');
    tabA.classList.remove('active');
    
    if(!tabW.classList.contains('active')){
        tabW.classList.add('active');
    }
    optionCheck(tabW.innerText);


})
tabA.addEventListener('click', function () {
    tabW.classList.remove('active');
    tabA.classList.remove('active');

    if(!tabA.classList.contains('active')){
        tabA.classList.add('active');
    }
    optionCheck(tabA.innerText);
})

btnConver.addEventListener('click', () => {
    let inputLabel = selectBox.children['unitInput'].selectedOptions[0].label;
    let outputLabel = selectBox.children['unitOutput'].selectedOptions[0].label;

    checkConvert(inputLabel,outputLabel);
})

// option값 type 체크 함수 : tab버튼으로 선택한 단위값에 맞는 단위만 option값으로 노출해줌
function optionCheck (type) {
    let weightOption = document.querySelectorAll('.sel_box select option[data-type=weight]');
    let areaOption = document.querySelectorAll('.sel_box select option[data-type=area]');

    // Tab버튼의 유형값에 따른 option값 none, block 처리
    switch(type) {
        case '무게' :
            for(var i=0; i<areaOption.length; i++){
                areaOption[i].style.display = "none";
            }
            for(var j=0; j<weightOption.length; j++){
                weightOption[j].style.display = "block";
            }
            break;
        case '넓이' :
            for(var i=0; i<weightOption.length; i++){
                weightOption[i].style.display = "none";
            }
            for(var j=0; j<areaOption.length; j++){
                areaOption[j].style.display = "block";
            }
            break;
    }
}

// 단위 변환값 계산 함수
function checkConvert(input,output){
    inputValue = document.querySelector('#input').value;
    if(!tabW.classList.contains('active') && !tabA.classList.contains('active')) {
        alert("탭버튼을 먼저 체크해주세요.")
    } else if(!inputValue) {
        alert("변환하고자하는 입력값을 입력해주세요.")
    } else {
        // 22.08.24 if문 -> switch-case 문으로 구조 변경
        if(input == output ) {
            alert("입력값, 변환값을 동일하게 선택하였습니다. \n서로 다른 단위를 선택해주세요.")
        } else {
            switch(input, output) {
                case 'kg', 'g' :
                case 'g', 'mg' :
                    resultVal = Number(inputValue) * 1000;
                    break;
                case 'g', 'kg' :
                case 'mg', 'g' :
                    resultVal = Number(inputValue) * 0.001;
                    break;
                case '㎡','평' :
                    resultVal = Math.round(inputValue / 3.3058)
                    break;
                case '평','㎡' :
                    resultVal = Math.round(inputValue * (1 / 3.3058))
                    break; 
                default:
                    alert("변환할수 없는 단위 입니다. 선택값을 다시 확인 해주세요.");
            }

            // if(input == 'kg' && output == 'g' || input == 'g' && output == 'mg'){
            //     //kg -> g  또는 g -> mg
            //     resultVal = Number(inputValue) * 1000; 
                
            //     //console.log("변환 계산값" + resultVal);
            // } else if (input == 'g' && output == 'kg' || input == 'mg' && output == 'g') {
            //     resultVal = Number(inputValue) * 0.001;
            // } else if (input == '㎡' && output == '평'){
            //     resultVal = Math.round(inputValue / 3.3058)
            // } else if (input == '평' && output == '㎡'){
            //     resultVal = Math.round(inputValue * (1 / 3.3058)) // 정확한 계산식 확인해서 바꾸기!
            // } else if (input == output ){
            //     alert("입력값, 변환값을 동일하게 선택하였습니다. \n서로 다른 단위를 선택해주세요.")
            // } else {
            //     alert("변환할수 없는 단위 입니다. 선택값을 다시 확인 해주세요.")
            // }

            outputEl.value = resultVal;
            inputUnit.innerHTML = input;
            outputUnit.innerHTML = output;
        }   
    }
}



