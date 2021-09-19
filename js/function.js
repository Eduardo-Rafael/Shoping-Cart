//Author: Eduardo Carranza


function addItem(){
  var itemTitle = $('#item-title').val();
  var itemPrice = $('#item-price').val();

  var itemBoard = $('#item-table');
  var itemObject = $('<div></div>' , {
    "class": 'col-12 my-3 fw-bold',
    html: "<div class='row'>" + 

          "<div class='col'>" +
          "<div class='text-white text-shadow'>" + itemTitle + "</div>" +
          "</div>" + 

          "<div class='col'>" +
          "<div class='text-white text-shadow'>" + "$" + itemPrice + "</div>" +
          "</div>" +

          "<div class='col'>" +
          "<div>" +
          "<label>" +
          "<span class='text-white text-shadow'>" + "QTY" + "</span>" + "<input type='number' class='item-amount' />" +
          "</label>" + 
          "</div>" +
          "</div>" +

          "<div class='col'>" +
          "<button type='button' class='btn btn-secondary removeButton'>" + "Remove" + "</button>" +
          "</div>" +

          "<div class='col'>" +
          "<div class='text-white text-shadow'>" + "$--.--" + "</div>" +
          "</div>" +

          "</div>"
  });

  itemBoard.append(itemObject);
  $('#item-title').val('');
  $('#item-price').val('');

}

function updateSubtotal(){
  var parent = $(this).parents('.col');
  var itemPriceObject = parent.next().next();
  var currentPrice = parseFloat(parent.prev().children().first().text().substring(1));
  var itemAount = Number($(this).val());
  var subtotal = parseFloat(currentPrice * itemAount);
  itemPriceObject.children().first().text('$' + subtotal);
}

function removeButton(){
  var parent = $(this).parents('.col-12');
  parent.remove();
}

$(document).ready(function(){
 
  $('#create-item').click(addItem);
  $(document).on('change', 'input.item-amount', updateSubtotal);
  $(document).on('click', 'button.removeButton', removeButton);
  

});