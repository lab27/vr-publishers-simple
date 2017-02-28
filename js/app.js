$('a#grid-view').on('click', function(){
  $(this).removeClass('faded')
  $('a#list-view').addClass('faded')
  $("#pubs").removeClass('hide')
  $("#pubst-table").addClass('hide')
})

$('a#list-view').on('click', function(){
  $(this).removeClass('faded')
    $('a#grid-view').addClass('faded')

  $("#pubs").addClass('hide')
  $("#pubs-table").removeClass('hide')
})
