// form start

$(function(){
    $('.form .select_box label').on('click',function(e){
        $(this).toggleClass("label_active");
        $(this).children('.fa-square').toggle();
        $(this).children('.fa-check').toggle();
    })
})

// form end