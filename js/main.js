var addSkill = $('#skill')
var deleteButton = $('.delete')

 $('button').on('click', function(){
    var $addLi = $(`<li>${addSkill.val()}</li><button>X</button>`) 
    $('ul').append($addLi);
    $('li').remove($addLi);
});




