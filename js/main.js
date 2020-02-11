var addSkill = $('#skill')
var deleteButton = $()

 $('button').on('click', function(){
    var $addLi = $(`<li>${addSkill.val()}</li>`) 
    $('ul').append($addLi);
    $('li').remove($addLi);
});




