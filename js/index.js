$(function () {
    setTimeout(function(){
        
    },0)
    let img = $('.img');
    let index = 0;
    let i=10;
    let nextbtn = $('.nextbtn');
    let prevbtn = $('.prevbtn');
    $(nextbtn).click(function(){
    index = (index + 1) % img.length;
    i++;
    $(img).eq(index).css('z-index',i);
    });
    $(prevbtn).click(function(){
        index = (index + 3) % img.length;
        i++;
        $(img).eq(index).css('z-index',i);
        });
});
