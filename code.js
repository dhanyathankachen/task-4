
$(document).ready(function(){
    $("#regForm").submit(function(){
    if($("#fname").val()== '')
    {
        $("#error").html("Please enter your first name");
        $("#fname").focus();
        return false;
    }
    else if($("#lname").val()== ''){
        $("#error2").html("Please enter your last name");
        $("#lname").focus();
        return false;
    }
    else if($("#email").val()== ''){
        $("#error3").html("Please enter email");
        $("#email").focus();
        return false;
    }
    else if($("#pwd").val()== ''){
        $("#error4").html("Please enter password");
        $("#pwd").focus();
        return false;
    }
    else if($("#rgender:checked").length == 0)    {
        $("#error5").html("Please select gender");
        return false;
    }
    else if($("#inlineCheckbox").filter(':checked').length == 0){
        $("#error6").html("Please select languages");
        return false;
    }
    else if($("#sel1").val()== ''){
        $("#error7").html("Please select");
        return false;
    }
    else if($("#sel2").val()== ''){
        $("#error8").html("Please select");
        return false;
    }
    else{
        return true;
    }
      });
    });