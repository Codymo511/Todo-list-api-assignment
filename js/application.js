

var sum = function (acc, x) { return acc + x; };

var UpdateItemTotal = function (ele){
  var productQuantity = parseFloat($(ele).find('.qty input').val());
  var productPrice = parseFloat($(ele).find('.price input').val());
  var itemTotal = productQuantity * productPrice;
  $(ele).children('.itemTotal').html(itemTotal);
   return itemTotal;
}

var updateShoppingCartTotal = function (){
  var totalItemPrice = [];
  $('tbody tr').each(function (i, ele) { 
    var itemTotal = UpdateItemTotal(ele);
    totalItemPrice.push(itemTotal);
  });
  var totalPrice = totalItemPrice.reduce(sum)
  $('#totalPrice').html(totalPrice);
}



$(document).ready(function () {
  updateShoppingCartTotal();
  
  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    updateShoppingCartTotal();
    
  });

  $('tr input').on('input', function () {
    updateShoppingCartTotal();
    
  });

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateShoppingCartTotal();
  
  });


  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var product = $(this).children('[name=product]').val();
    var price = $(this).children('[name=price]').val();
    var quantity = $(this).children('[name=quantity]').val();

    $('tbody').append('<tr>' +
    '<td class="item">' + product + '</td>' +
    '<td class="price"><input type="number" value="' + price + '" /></td>' +
    '<td class="qty"><input type="number" value="' + quantity+ '" /></td>' +
    '<td class="itemTotal"></td>' +
    '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
  '</tr>');

  updateShoppingCartTotal();
 
  $(this).children('[name=product]').val('');
  $(this).children('[name=price]').val('');
  $(this).children('[name=quantity]').val('');
 });
});
 



