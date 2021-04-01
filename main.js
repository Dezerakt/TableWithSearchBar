var sb = $("#search-bar");

$(sb).keyup(function (e) { 
    $("td").each(function(){
            if($(this).text().toLowerCase() == $(sb).val().toLowerCase()){
                $(this).parents("tr").addClass("res");
                $("tr:not(.res)").addClass("hid");
            }    
            else if($(sb).val() == ""){
                $(this).parents("tr").removeClass("res");
                $("tr:not(.res)").removeClass("hid");
            }
    })
});  

