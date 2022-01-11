function launchfizzbuzz(){
    let value = document.getElementById("ValueFizzBuzz").value
    let ul = document.getElementById("ulFizzBuzz")
    ul.innerHTML = '';
    
    for (var i = 1; i <= value; i++) {
        var li = document.createElement("li");
        if(i % 15 == 0) {
            console.log("FizzBuzz");
            li.appendChild(document.createTextNode("FizzBuzz"));
            ul.appendChild(li);
        }  
        else if(i % 3 == 0){
            console.log("Fizz");
            li.appendChild(document.createTextNode("Fizz"));
            ul.appendChild(li);
        }
        else if(i % 5 == 0){
            console.log("Buzz");
            li.appendChild(document.createTextNode("Buzz"));
            ul.appendChild(li);
        }
        else{
            console.log(i);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
    }

}