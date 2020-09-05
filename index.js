function grandparentDivClicked() {
    alert('grandparentDivClicked');
}
function parentDivClicked() {
    alert('parentDivClicked');
}
function childDivClicked() {
    alert('childDivClicked');
}
function anchorTagClicked(event,thisElement) {
    event.target;
    alert('anchorTagClicked');
    event.preventDefault();
    // event.stopPropagation();
    // event.stopImmediatePropagation();
}
$(document).ready(function(){
    $('a').on('click',(event)=>{
        event.stopImmediatePropagation();
        alert('jQuery Invoked');
    }).on('click', ()=>{
        alert('Hii');
    });    
})
$('.div2').on('click', 'tr', (event)=>{
    event.target;
    debugger;
    alert('Clicked tr');
})