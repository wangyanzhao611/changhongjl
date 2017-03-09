/**
 * Created by APIG on 2016/6/27.
 */
//解决click延迟问题
FastClick.attach(document.body);

//动态计算rem的值
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 375 * 100 + 'px';
}();

//初始化swiper
var mySwiper=new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    speed:1000,
    preventClicks:false,
    //effect: "coverflow",
    onSlidePrevEnd: changeEnd,
    ////->向下切换结束:swiper.activeIndex当前活动块的索引
    onSlideNextEnd: changeEnd,
    //onTap:toTop,
});

$(".back").click(function(){
    var slideAry=mySwiper.slides;
    mySwiper.slideTo(2,1000,false);
    for(var i=0;i<slideAry.length;i++){
        slideAry[i].id=null;
        if(i==2){
            slideAry[i].id="page2";
            return;
        }
    }
    console.log(slideAry.length)
    //slideAry[2].id="page2";
})
$(".btn1").click(function(){
    var slideAry=mySwiper.slides;
    mySwiper.slideTo(3,1000,false);
    console.log(slideAry.length)
    slideAry[3].id="page3";
})
$(".btn2").click(function(){
    var slideAry=mySwiper.slides;
    mySwiper.slideTo(4,2000,false);
    console.log(slideAry.length)
    slideAry[4].id="page4";
})
$(".btn3").click(function(){
    var slideAry=mySwiper.slides;
    mySwiper.slideTo(5,2000,false);
    console.log(slideAry.length)
    slideAry[5].id="page5";
})
$(".btn4").click(function(){
    var slideAry=mySwiper.slides;
    mySwiper.slideTo(6,2000,false);
    console.log(slideAry.length)
    slideAry[6].id="page6";
})


function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            //slide.id = (n == 1 || n == 3) ? "page1" : "page2";
            if(n==1||n==7){
                slide.id="page1";
            }else if(n==0||n==6){
                slide.id="page6";
            }else{
                slide.id="page"+n;
            }
            return;
        }
        slide.id = null;
    });
}


//音频自动播放
var music = document.getElementById("music");
var musicAudio = document.getElementById("musicAudio");
window.setTimeout(
    function () {
        musicAudio.play();
        musicAudio.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music move";
        }, false)
    }
,1000)
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music move";
        return;
    }
    musicAudio.pause();
    music.className="music";
},false)















