const toggleBtn = document.querySelector('.header_header_toggle_btn');
const menu = document.querySelector('.header_menu');
const modal = document.querySelector('.bg-modal');
const close_btn = document.querySelector('.close');
const body = document.querySelector('body');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let total = document.querySelector('.section-container');
let gridsize;
let item;
if(window.innerWidth <= 1000){
    gridsize = (total.clientWidth-56)/3+'px';
    total.style.gridTemplateColumns = 'repeat(3,'+gridsize+')';
    total.style.gridAutoRows = gridsize;
}
if(window.innerWidth <= 768){
    gridsize = (total.clientWidth-8)/3+'px';
    total.style.gridTemplateColumns = 'repeat(3,'+gridsize+')';
    total.style.gridAutoRows = gridsize;
}
const modal_slider = document.querySelector('.modal-slider');
toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
})
let sulzip = ['무지개맥주' , '귀신닭발' , '미술관' , '동원다방' ,
    '요로시' , '역전할머니맥주' , '코리안타운' , '끌림2911' , '인생맥주'];
let open;
let cnt = 0;
let nth_modal = document.querySelectorAll('.modal-photo');
let index;
let photosize;
document.querySelectorAll('.grid-item').forEach(function (element,idx){
    element.addEventListener('click' , function (e){
        index = idx;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        nth_modal[index].style.display = 'flex'
        item = document.querySelectorAll('.item'+(idx+1));
    })
    // 박스외 클릭시 취소버튼과 동일하게 작동하게 추가해야함
})
close_btn.addEventListener('click' , function (e){
    modal.style.display = 'none';
    nth_modal[index].style.display = 'none';
    document.body.style.overflow = 'scroll';
    cnt = 0;
    nth_modal[index].style.transform = 'translateX(0)';
    left.style.display = 'none'
    right.style.display = 'flex'
})
left.addEventListener('click' , function (){
    if(cnt > 0) {
        cnt--;
        // photosize = modal_slider.clientWidth;
        // nth_modal[index].style.transform = 'translateX(-' + photosize*cnt + 'px)';
        // document.querySelectorAll('.modal-photo')[idx].style.transform = 'translateX(-' + photosize*count + 'px)';
        item.forEach(function (el){
            el.classList.remove('active');
        })
        item[cnt].classList.add('active');
        if(cnt === 0){
            left.style.display = 'none';
        }
        if(cnt !== 2){
            right.style.display = 'flex';
        }
    }
})
right.addEventListener('click' , function (){
    console.log(nth_modal[index]);
    if(cnt < 2) {
        cnt++;
        // photosize = modal_slider.clientWidth;
        // nth_modal[index].style.transform = 'translateX(-' + photosize*cnt + 'px)';
        item.forEach(function (el){
            el.classList.remove('active');
        })
        item[cnt].classList.add('active');
        if(cnt === 2){
            right.style.display = 'none';
        }
        if(cnt !== 0){
            left.style.display = 'flex'
        }
    }
})
// 브라우저의 크기가 작아질때 그리드아이템의 가로 세로 너비가 동일하게 변화시켜주기
window.addEventListener('resize' , function (){
    if(window.innerWidth > 768){
        gridsize = (total.clientWidth-56)/3+'px';
        total.style.gridTemplateColumns = 'repeat(3,'+gridsize+')';
        total.style.gridAutoRows = gridsize;
    }
    if(window.innerWidth <= 768){
        gridsize = (total.clientWidth-8)/3+'px';
        total.style.gridTemplateColumns = 'repeat(3,'+gridsize+')';
        total.style.gridAutoRows = gridsize;
    }
})

