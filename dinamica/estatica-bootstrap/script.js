$(document).ready(function(){
    $(".btn-add").click(function(){
        var assunto = $("input[name=assunto]").val();
        if (assunto != ""){
            $( ".lista-aprender" ).prepend("<li class=\"list-group-item ng-binding ng-scope\">"+ assunto +
                "<span class=\"pull-right\">" +
                "<button type=\"button\" class=\"btn btn-xs btn-success\"><span class=\"glyphicon glyphicon-ok-sign\"></span></button>"
                + " " + "<button class=\"btn btn-xs btn-danger\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
                "</span></li>");
        }
    });

    $(".btn-success").click(function(){
        $( ".lista-aprendido" ).prepend("<li class=\"list-group-item ng-binding ng-scope\">"+ assunto + "</span></li>");
    });

});