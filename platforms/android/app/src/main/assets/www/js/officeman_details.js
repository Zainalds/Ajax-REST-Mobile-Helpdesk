jQuery(document).ready(function(){

    var $Department = $('#Department');
    var TicketId = localStorage.getItem("storageName")
    console.log(TicketId);
    url = 'https://officeman.azurewebsites.net/api/ticket/'+TicketId;

        $.ajax({
            type:'GET',                               
            url: url,
            dataType: 'json',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
             },                   
            success: function (data){
                $('#Department').val($('#Department').val() + data.Department);
                $('#TicketType').val($('#TicketType').val() + data.TicketType);
                console.log(TicketId);
            }
        });      
})