//메뉴 변경 함수
function home(){
    let homecon=document.getElementsByClassName("homecon");
    let visitcon=document.getElementsByClassName("visitcon");
    let photocon=document.getElementsByClassName("photocon");
    let boardcon=document.getElementsByClassName("boardcon");
    homecon[0].style.visibility="visible";
    photocon[0].style.visibility="hidden";
    boardcon[0].style.visibility="hidden";
    visitcon[0].style.visibility="hidden";
}
function visit(){
    let homecon=document.getElementsByClassName("homecon");
    let visitcon=document.getElementsByClassName("visitcon");
    let photocon=document.getElementsByClassName("photocon");
    let boardcon=document.getElementsByClassName("boardcon");
    homecon[0].style.visibility="hidden";
    photocon[0].style.visibility="hidden";
    boardcon[0].style.visibility="hidden";
    visitcon[0].style.visibility="visible";
}
function photo(){
    let homecon=document.getElementsByClassName("homecon");
    let visitcon=document.getElementsByClassName("visitcon");
    let photocon=document.getElementsByClassName("photocon");
    let boardcon=document.getElementsByClassName("boardcon");
    homecon[0].style.visibility="hidden";
    photocon[0].style.visibility="visible";
    boardcon[0].style.visibility="hidden";
    visitcon[0].style.visibility="hidden";
}
function board(){
    let homecon=document.getElementsByClassName("homecon");
    let visitcon=document.getElementsByClassName("visitcon");
    let photocon=document.getElementsByClassName("photocon");
    let boardcon=document.getElementsByClassName("boardcon");
    homecon[0].style.visibility="hidden";
    photocon[0].style.visibility="hidden";
    boardcon[0].style.visibility="visible";
    visitcon[0].style.visibility="hidden";
}
$(function(){
    let interval;
    let count=0;
    let gc;
    let textarea='';
    let str = $("#wave .typing").text();
    let idx = 0; 
    let speed = 100;
    let j=0;
    let name;

    //글자 타이핑 함수
    $("#wave .typing").text(""); 
    interval=setInterval(function() {
        if (idx < str.length) {
            var char = str.charAt(idx);
            $("#wave .typing").append (char);
            idx++;
        }
    }, speed);
    setTimeout(function(){
        setInterval(function() {
            $(".typing").fadeOut(1000).fadeIn(1000);
        }, 1000);
    },2500)
    //방명록 입력함수
    $('.guestsubmit').click(function() {
        count++;
        gc = $('.guest').eq(0).clone();
        gc.find('h5').text('no.' + count);
        textarea=$('.textarea').val();
        $('.textarea').val('');
        if(textarea.length>0){
            gc.find('textarea').remove();
            gc.find('.guestsubmit').remove();
            gc.find('.inputtext').text(textarea);
            gc.find('.inputtext').css('display','inline-block');
            $('.temper').prepend(gc);
            
        }else{
            alert('방명록을 작성해주세요');
            count--;
        }
        gc='';
    });
    //메뉴 클릭 함수
     name=$('#right2 h2');
     $(name).click(function(){
        $(name).css('opacity',0.6);
        $(this).css({
            opacity:1
        });
     })
    //bgm 앨범 변경 함수
     $('.leftbtn').click(function(){
        if(j>0){
            j--;
            $('.album').animate({
                left:-(j*155)
            },'slow');
            $('.albumName').animate({
                left:-(j*155)
            },'slow');
        }
     })
     $('.rightbtn').click(function(){
        if(j<5){
            j++;
            $('.album').animate({
                left:-(j*155)
            },'slow');
            $('.albumName').animate({
                left:-(j*155)
            },'slow');
        }
     });
     //배경 변경 함수
     $('.colorEx1').click(function(){
        $('#bgborder').css('backgroundColor','rgb(42, 156, 190)')
        $('#bgborder').css('backgroundImage',url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23333' stroke-width='5' stroke-dasharray='15%2c15' stroke-dashoffset='50' stroke-linecap='square'/%3e%3c/svg%3e"))
     })
     $('.colorEx2').click(function(){
        $('#bgborder').css('backgroundColor','#FFC0CB')
     })
     $('.colorEx3').click(function(){
        $('#bgborder').css('backgroundColor','rgb(233, 96, 32)')
     })
    
})


