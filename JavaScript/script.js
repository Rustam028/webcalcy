console.log("Welcome TO Calculator==>");

let string="";

var button = document.querySelectorAll('button');

Array.from(button).forEach((button)=>{

    button.addEventListener('click', (e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value=string;
        } 
        else if(e.target.innerHTML == 'AC'){
            document.querySelector('input').value="";
            string="";
        }
        else if(e.target.innerHTML == 'DEL'){
            document.querySelector('input').value=string.substring(0,string.length-1);
            string = string.substring(0,string.length-1);
        }
        else{
            // console.log(e.target.innerHTML)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })

});



