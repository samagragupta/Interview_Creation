    //= require jquery
    //= require jquery_ujs
    //= require turbolinks
    //= require tree .

('#new_participant').submit(function() {
    alert('Handler for .submit() called.');
    return false;
});

$('#new_participant').submit(function() {
    .preventDefault()
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: success,
        dataType: dataType
    });
});