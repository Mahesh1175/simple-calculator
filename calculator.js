var output = document.getElementById("output");

//  Input value function
function input(num){
     output.value = output.value += num;
    
}
// Total value function
 function equal(){
    var solve =  output.value;
     if(solve){
                output.value = eval(solve);
     }
 }
//  All clean value function
 function clean(){
    output.value = "";
 }
//  Only last value clean
 function backspace(){
   var value = output.value;
   output.value = value.substr(0, value.length - 1);

 }
