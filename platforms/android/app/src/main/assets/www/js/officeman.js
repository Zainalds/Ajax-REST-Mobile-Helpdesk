jQuery(document).ready(function(){

    var $TicketsUL = $('#TicketsUL');

    var url = 'https://officeman.azurewebsites.net/api/ticket/';

        $.ajax({
            type:'GET',                               
            url: 'https://officeman.azurewebsites.net/api/ticket',
            dataType: 'json',
            headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
             },                   
            success: function (data){
                
                    localStorage.setItem("gid", 1);                 
                
                

                $('#data-table').DataTable({
                    dom: 'Bfrtip',  
                    bFilter: false,
                    buttons: ['csv','pdf' ],   
                    data: data,                             
                    columns: [
                        { 
                            "data": "TicketId",
                            "render": function(data, type, row, meta){
                               if(type === 'display'){
                                   data = '<a id="TicketGuid" class="classOne" href="#">' + data + '</a>';
                                
                                   $(".classOne").click(function(){

                                        var a = this.innerHTML;
                                        console.log(a);
                                        window.location.href = "details.html";
                                        localStorage.setItem("storageName",a);
                                   })
                               }
                               
                               return data;
                            }
                         } 
                        ,]
                   }); 
            }
        });


})