$("#btn").click(function(){
    var input=$("#num1");
    var input2=$("#num2");
    console.log("input1", input.val());
    console.log("input2", input2.val());
    if(input.val() && input2.val()){
    var n1=parseInt(input.val());
    var n2=parseInt(input2.val());
    var risultato=n1+n2;
    var string=
    "<tr><td>"+ n1 + "</td><td style='text-align:centre'>+</td><td>"+  n2+
    "</td><td>"+risultato +"</td></tr>";
    $("#tab").append(string);
    };
    input.val("");
    input.val("");
    });