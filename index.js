$(function(){

  // listen for form submission
  $('#js-shopping-list-form').submit( function(event) {

    // stop default form submission
    event.preventDefault();

    // get text value for the new item
    const newListItem = $('#shopping-list-entry').val();
  
    // add new shopping list item to `li`
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${newListItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `);
    });

  // clear text input 
  $('#shopping-list-entry').val('');

  /**
   *  Deleting shopping item
   * this.closest will look for the closest parent `li` element and remove it.
   */
 
   $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  /**
   * when a user clicks the "check" button, this will cause the checked off styling to toggle.
   * this.closest will look for the closest parent `li` element, then find the child '.shopping-item' and toggle `.shopping-item__checked` class.
   */
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

 

});