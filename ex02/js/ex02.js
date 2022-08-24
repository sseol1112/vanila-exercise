$(document).ready(function(){

    $('.result-wrap').hide();
    $('.btn-wrap .btn').click(function(){

        $('.btn-wrap .btn').removeClass('active');
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    });

    $('#confirm').click(function(){
        if($('.btn-wrap .btn').hasClass('active')){
            let btnDataVal = $('.btn-wrap .btn.active').data('type');
            // vanila JS 사용시,
            //let btnDataVal = document.querySelector('.btn-wrap .btn.active').dataset.type;
            accountData(btnDataVal);
        } else {
            alert('연산하려는 탭버튼을 먼저 선택해주세요.');
            $('.plus').focus();
        }
    })

    $('#reset').click(function () {
        $('.btn_input1').val('');
        $('.btn_input2').val('');
        $('.total').text('');
        $('.result-wrap').hide();
    })

});


function accountData(type){
    //alert(`${type} 계산을 시작합니다.`);
    // let val1 = parseInt(prompt("첫번째 값을 입력해주세요."));
    // let val2 = parseInt(prompt("두번째 값을 입력해주세요."));
    let val1 = document.getElementsByClassName('btn_input1')[0].value;
    let val2 = document.getElementsByClassName('btn_input2')[0].value;
    const RESULT_VAL = 0;

    val1 = parseInt(val1);
    val2 = parseInt(val2);
    if (!val1 || !val2) {
        alert("입력값을 다시확인해주세요. 숫자값만 계산 가능합니다.")
    }else {
        valChk(val1,val2,RESULT_VAL,type);
        $('.result-wrap').show();
    }

    //벡틱 사용. - es6
    //resultVal = `${val1} ${type} ${val2}`;
}

function valChk (val1,val2,result,operator){
    switch(operator){
        case '+' :
            result = val1 + val2;
            console.log("계산된 값은 : " + result);
            //document.querySelector(".result-wrap > p > .total").innerHTML = result;
            $(".result-wrap > p > .total").html(result);
            break;
        case '-' :
            result = val1 - val2;
            console.log("계산된 값은 : " + result);
            $(".result-wrap > p > .total").html(result);
            break;
        case '*' :
            result = val1 * val2;
            console.log("계산된 값은 : " + result);
            $(".result-wrap > p > .total").html(result);
            break;
        case '/' :
            result = val1 / val2;
            console.log("계산된 값은 : " + result);
            $(".result-wrap > p > .total").html(result);
            break;
        case '%' :
            result = val1 % val2;
            console.log("계산된 값은 : " + result);
            $(".result-wrap > p > .total").html(result);
            break;
    }
}