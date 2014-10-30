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

    $(".lista-aprender").on("click", ".btn-success", function() {
        var parent = $(this).parent().parent();
        var text = parent.text();
        parent.remove();
        $(".lista-aprendido").append("<li class=\"list-group-item ng-binding ng-scope\">"+ text+
            "<span class=\"pull-right\">" +
            "<button class=\"btn btn-xs btn-danger\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
            "</span></li>");
    });

    $(".lista-aprender").on("click", ".btn-danger", function() {
        var parent = $(this).parent().parent();
        parent.remove();
    });

    $(".lista-aprendido").on("click", ".btn-danger", function() {
        var parent = $(this).parent().parent();
        parent.remove();
    });
});