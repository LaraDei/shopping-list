$(function () {
    //this lets the user add items to their list using the form
    $('#js-shopping-list-form').submit(function(event){
        //stop default
        event.preventDefault();
    
        //assign value of text
        let newListItem = $('#shopping-list-entry').val();
        //clear text
        $('#shopping-list-entry').val('');
        //add li
        $('.shopping-list').append(`<li><span class="shopping-item">${newListItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    });
    // this strikes out the item when check button in clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    //this deletes the listed item when the delete button in clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

});