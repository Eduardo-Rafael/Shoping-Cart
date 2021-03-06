//Author: Eduardo Carranza


function addItem(event){
  event.preventDefault();

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
          "<div class='text-white text-shadow'>" + "$" + parseFloat(itemPrice).toFixed(2) + "</div>" +
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
  $('#button-calculate-price').removeAttr('disabled');

}

function updateSubtotal(){
  var parent = $(this).parents('.col');
  var itemPriceObject = parent.next().next();
  var currentPrice = parseFloat(parent.prev().children().first().text().substring(1));
  var itemAount = Number($(this).val());
  var subtotal = parseFloat(currentPrice * itemAount);
  itemPriceObject.children().first().text('$' + subtotal.toFixed(2));
}

function removeButton(){
  var parent = $(this).parents('.col-12');
  parent.remove();
  totalPrice();
  if($('#item-table').children().length == 0)
    $('#button-calculate-price').attr('disabled' , 'true');
}

function totalPrice(){
  var totalPrice = 0;
  var itemBoard = $('#item-table');
  var items = itemBoard.children();
  if(items.length > 0)
  {
    items.each(function(){
      var text = $(this).children().children().last().children().text();
      if(text != '$--.--')
        totalPrice += parseFloat(text.substring(1));
    });
  }
  $('#total-price h4').text('$' + totalPrice.toFixed(2));
}

$(document).ready(function(){
 
  $('#create-item').submit(addItem);
  $(document).on('change', 'input.item-amount', updateSubtotal);
  $(document).on('click', 'button.removeButton', removeButton);
  $('#button-calculate-price').click(totalPrice);
  

});