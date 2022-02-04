
$.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=237',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response,textStatus);
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });