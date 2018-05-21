//global vars
let clickCounter = 0;

$(document).ready(function(){
  $('#generateButton').on('click', addDiv);
  $('#appendArea').on('click', '.swap', swap);
  $('#appendArea').on('click', '.delete', delDiv);
});

function addDiv(){
  clickCounter++;
  const output = `<div class="child red">
                    <p>${clickCounter}</p>
                    <button class="swap">Swap</button>
                    <button class="delete">Delete</button>
                  </div>`;
  $('#appendArea').append(output);
}//end addLine

function swap(){
  if ($(this.parentNode).hasClass('red')){
    $(this.parentNode).removeClass('red');
    $(this.parentNode).addClass('yellow');
  } else {
    $(this.parentNode).removeClass('yellow');
    $(this.parentNode).addClass('red');
  }
} //end swap

//remove the div the button is stored in
function delDiv(){
  $(this.parentNode).remove();
}//end delDiv
