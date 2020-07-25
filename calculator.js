//  Input value function
function input(num){
     document.getElementById("output").value = document.getElementById("output").value+=num;
    
}
// Total value function
 function equal(){
    var solve =  document.getElementById("output").value;
     if(solve){
                document.getElementById("output").value = eval(solve);
     }
 }
//  All clean value function
 function clean(){
    document.getElementById("output").value = "";
 }
//  Only last value clean
 function backspace(){
   var value = document.getElementById("output").value;
   document.getElementById("output").value = value.substr(0, value.length - 1);

 }
