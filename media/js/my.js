$(function () {
    $('.bottom_m').bind({
        'mouseover': function () {
            $(this).find('.hidelink').show();
            $(this).find('.tabl').hide();
        },
        'mouseout': function () {
            $(this).find('.hidelink').hide();
            $(this).find('.tabl').show();
        }
    });
    $('.hidelink a').click(function () {
        data = $(this).attr('data-title');
        console.log(data);
        $('#textactive').attr({
            'placeholder': data,
        }).val(data);
    });
});

// function initiate() {
//     var button = document.getElementById("third");
//     button.addEventListener("click", sendit);
// }
// function sendit() {
//     var form = document.getElementById('form3');
//     var examplePhone3 = document.getElementById('examplePhone3');
//     var str= document.getElementById('examplePhone3').value;
//     console.log(str);
//     if (str.indexOf("_") + 1) {
//         console.log('Error');
//         examplePhone3.setCustomValidity('Введите номер телефона');
//         examplePhone3.style.background = '#FFDDDD';
//     } else {
//         console.log('Ok');
//         examplePhone3.setCustomValidity('');
//         examplePhone3.style.background = '#FFFFFF';
//         form.submit();
//     }
// }
// addEventListener("load", initiate);


var timerId;
examplePhone = document.getElementById('examplePhone');
examplePhone2 = document.getElementById('examplePhone2');
examplePhone3 = document.getElementById('examplePhone3');
examplePhone.onInput = focusf('examplePhone','first');
examplePhone2.onInput = focusf('examplePhone2','second');
examplePhone3.onInput = focusf('examplePhone3','third');

function focusf(a, form) {
    var examplePhone3 = document.getElementById(a);
    timerId = setInterval(function() {
        if (examplePhone3.value != '') {
            submitb = document.getElementById(form);
            var str = examplePhone3.value;
            if(str.indexOf("_")+1){
                console.log('Error');
                examplePhone3.setCustomValidity('Введите номер телефона');
                examplePhone3.style.background = '#FFDDDD';
            }else{
                console.log('Ok');
                submitb.disabled = false;
                examplePhone3.setCustomValidity('');
                examplePhone3.style.background = '#FFFFFF';
            }
            lastValue = examplePhone3.value;
        }
    }, 1000);
};
