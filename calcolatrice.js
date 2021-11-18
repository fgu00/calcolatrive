$("#btn").click(()=>calcola("+")),
$("#btn2").click(()=>calcola("-")),
$("#btn3").click(()=>calcola("*")),
$("#btn4").click(()=>calcola("/"))
var int=0;

//localStorage.setItem("tabella","");
$("#tab").append(localStorage.getItem("tabella"));
//for(var va=0;va<=int;va++){
//localStorage.setItem(va,"<tr><td>1</td><td style='text-align:center'>-</td><td>1</td><td>0</td></tr>;");
//$("#tab").append(localStorage.getItem(va));
//}
//localStorage.clear();
//console.log("nome",localStorage.getItem("nome"));
//$("#tab").append(localStorage.getItem("nome"));
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
    "<tr><td>"+ n1 + "</td><td style='text-align:center'>"+segno+"</td><td>"+  n2+
    "</td><td>"+risultato +"</td></tr>";
    var table=localStorage.getItem("tabella");
    localStorage.setItem("tabella",table+string);
    $("#tab").append(string);
    int++;
    };
    input.val("");
    input.val("");
    } 


    
