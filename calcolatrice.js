$("#btn").click(()=>calcola("+")),
$("#btn2").click(()=>calcola("-")),
$("#btn3").click(()=>calcola("*")),
$("#btn4").click(()=>calcola("/"))



var calcola=function(segno){
    var input=$("#num1");
    var input2=$("#num2");
    console.log("input1", input.val());
    console.log("input2", input2.val());
    console.log("segno", segno);
    if(input.val() && input2.val()){
    var n1=parseInt(input.val());
    var n2=parseInt(input2.val());
    switch(segno){
        case "+":
            var risultato=n1+n2;
            break;
            case "-":
            var risultato=n1-n2;
            break;
            case "*":
            var risultato=n1*n2;
            break;
            case "/":
            var risultato=n1/n2;
            break;
    } 
    var string=
    "<tr><td>"+ n1 + "</td><td style='text-align:centre'>"+segno+"</td><td>"+  n2+
    "</td><td>"+risultato +"</td></tr>";
    localStorage.setItem(string);
   localStorage.getItem(string);
    $("#tab").append(string);
    };
    input.val("");
    input.val("");
    } 


    
