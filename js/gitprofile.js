$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var access_token = '509e598035b93fc8f590078ba22f20f4d035d76a' // Replace this with a Github access token that you can generate as explained here https://help.github.com/articles/creating-an-access-token-for-command-line-use/
    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;

    var template = $('template').html();

    $.get(url, function(info) { console.log(info);
      $('.container').append(Mustache.render(template, info));
    }).fail(function() {
      $('.container').append("User not found")
    }).always(function() {
      $('input.username').val('');
      });
  });
});
