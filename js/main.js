var addSkill = $('#skill')
// var addLi = 

 $('button').on('click', function(){
    var $addLi = $(`<li>${addSkill.val()}</li>`) 
    $('ul').append($addLi);
});


