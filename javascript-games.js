
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('#randomGame').click(function () {
    console.log('Clicked Random Button', random(4))
  })
});