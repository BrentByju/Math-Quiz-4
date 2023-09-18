function send(){
    N1 = document.getElementById("N1").value;
    N2 = document.getElementById("N2").value;
    actual_answer = parseInt(N1) * parseInt(N2);
    question_number = "<h4>" + N1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick ='check()'>Check</button>" ;
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";
}