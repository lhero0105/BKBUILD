const $menu = document.querySelectorAll(".nav .menu .menu-inner a");
const $menuText = document.querySelectorAll(".nav .menu .menu-inner a");
const $submenu = document.querySelector(".submenu");
const $mNav = document.querySelector(".m-nav");
const $webBtn = document.querySelector(".web");
const $mobileBtn = document.querySelector(".mobile");
const $main = document.querySelectorAll(".main .mainAll");
const $navBack = document.querySelector(".submenu-container");

// ######################## NAV 호버기능
$menu.forEach((e, i) => {
    // $menu[i].addEventListener("mouseover", function () {
        // 충돌
    e.addEventListener("mouseenter", function () {

        $submenu.classList.add("on")
        // $submenu.addEventListener("mouseover")
        // $submenu.style.visibility = "visible"
        // $navBack.style.height = "319px"
    });
    // if($submenu.classList.contains("on")){
    // if($submenu.classList.indexOf("on")){
    //     $navBack.style.height = "319px"
    // }


    // e.addEventListener("mouseleave", function () {

    //     $submenu.classList.remove("on")

    // //     // $menu[i].addEventListener("mouseenter", function(){
    // //     //     $submenu.style.visibility= "hidden"
    // //     // })

        
    // //     // setTimeout(() => {
    // //     //     $submenu.classList.remove("on")
    // //     // }, 5000);
    // });

})
$navBack.addEventListener("mouseleave", ()=>{
    $submenu.classList.remove("on")
})




// $navBack.addEventListener("mouseleave", function(){
//     $submenu.classList.remove("on")
// })

// $submenu.classList.contains("on"){
//     $navBack.style.height = "319px"
// }


// const stayHeight = () => {
//     document.documentElement.style.setProperty('--stay-height', '319px');
// }


// $navBack.addEventListener("mouseenter", stayHeight)



// $menuText.forEach((e,i)=>{
//     $menu[i].addEventListener("mouseover", function(){
//         $submenu.style.display = "block"
//     });
//     $menu[i].addEventListener("mouseout", function(){
//         $submenu.style.display = "none"
//     });
// })




// ###################### NAV 체크박스기능

$webBtn.addEventListener("click", () => {
    $submenu.classList.toggle("on")
});
$mobileBtn.addEventListener("click", () => {
    $mNav.classList.toggle("on")
    document.querySelector(".main").style.zIndex = "-1"
});


window.addEventListener("resize", function () {
    let $width = window.innerWidth;
    // console.log($width)
    if ($width > 1430) {
        // alert()
        $mNav.classList.remove("on")

    }
})



//  ###################### fullPage event

// document.addEventListener("scroll", () => {
//     let $pos = window.scrollY;
//     console.log($pos)
//     let $scrollPosition = Math.floor($pos / window.innerHeight);
//     console.log($scrollPosition);

// })
// ("#fp-nav ul li a").append


// $fpNav.forEach((e,i)=> {
//     console.log(e,i);
//     e.addEventListener("click", (e)=>{
//         let $offsetTop = $main[i].offsetTop;
//         console.log($offsetTop);
//         e.preventDefault()
//         window.scrollTo({
//             top: $offsetTop,
//             behavior: "smooth"
//         })
//     })
// // })

// const $isAnimated = document.querySelectorAll(".main1 .is-animated")



// ####################### fp-nav
$(".fullpage").fullpage({
    navigationTooltips: ["HOME", "건설 사업", "건축영상디자인"],
    // showActiveTooltip: false,
    navigation: true,
    scrollbars: false,
    showActiveTooltip: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    // onLeave: function (origin, destination) {
    //     $fp_nav.forEach((e, i) => {
    //         $fp_nav[i].classList.add("on")
    //     })
    // },


    // afterLoad: function (origin, destination) {
    //     document.querySelectorAll(".section-back").forEach((e,i)=>{
    //         document.querySelectorAll(".section-back")[i].classList.remove("on");
    //         if(destination-1 == 1){
    //             document.querySelectorAll(".section-back")[destination-1].classList.add("on")
    //         }
    //         if(destination-1 == 2){
    //             document.querySelectorAll(".section-back")[destination-1].classList.add("on")
    //         }
    //         if(destination-1 != 0 && destination-1 != 3){
    //             document.querySelectorAll(".section-back")[destination-1].classList.add("on")
    //         }
    //     })
    //     console.log(destination)
    // }
    
    
    // onLeave: function(origin, destination){
    // },
    
    
    

// ####################### fp-휠이벤트 애니메이트
    afterLoad : function (origin, destination){
        console.log(destination)
        $(".section strong, .section em, .section .more-btn").removeClass("animate__animated animate__fadeInUp")
        // 세션 strong / em / .more-btn 에 적용된 애니메이트 클래스를 삭제
        // 삭제하는 이유는 다시 적용하기 위해서
        $(".section").eq(destination-1).find("strong").addClass('animate__animated animate__fadeInUp').css('animation-delay', '.3s');
        $(".section").eq(destination-1).find("em").addClass('animate__animated animate__fadeInUp').css('animation-delay', '.7s');
        $(".section").eq(destination-1).find(".more-btn").addClass('animate__animated animate__fadeInUp').css('animation-delay', '0.9s');
        // 각각의 태그에 destination 값이 1 2 3 으로 나오니깐...세션은 0번부터 시작으로 destination - 1을 적용
        // eq - 인덱스
        // find("") 자식(자손)

        // let $isAnimated = $(".main1 .is-animated");
        // $isAnimated.eq(0).addClass('animate__animated animate__fadeInUp').css('animation-delay', '.3s');
        //             $isAnimated.eq(1).addClass('animate__animated animate__fadeInUp').css('animation-delay', '.6s');
        //             $isAnimated.eq(2).addClass('animate__animated animate__fadeInUp').css('animation-delay', '1.2s');

// ####################### 백그라운드이미지 스케일
        document.querySelectorAll(".section-back").forEach((e, i)=>{
            if(destination-1 !=3){
                document.querySelectorAll(".section-back")[destination-1].classList.add("on")
            }
            document.querySelectorAll(".section-back")[i].classList.remove("on");
        })
    }
})
