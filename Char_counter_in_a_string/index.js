const conatiner = document.getElementById("conatiner");
const resultconatiner=document.querySelector(".resultconatiner")
const myh1 = document.getElementById("myh1");
const textbox = document.getElementById("textbox");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

function countstrings(){
    const textbox_value = textbox.value.toLowerCase();
    let apohate='"';
    let apohate2='"'
    const b = "abcdefghijklmnopqrstuvwxyz123456789/*-+=_)(*&^%$#@!';][/.,}{:?><`~ "+apohate+apohate2;
    const string = "abcdefghijklmnopqrstuvwxyz";
    const integer = "123456789";
    const special_char = "/*-+=_)(*&^%$#@!';][/.,}{:?><`~  "+apohate+apohate2;

    let total_alphabets=0;
    let total_integer=0;
    let total_special_char=0;

    let count = 0;
    let total_characters = 0;

    let string_dict = {};
    let alphabet_dict = {};
    let num_dict = {};
    let special_char_dict = {};
    let askprompt = window.prompt("Do you want different dict for (number, special characters, and alphabets").toLowerCase();
    const ask=askprompt.toLowerCase();
    for (i=0; i<b.length; i++){
        for (j=0; j<textbox_value.length; j++){
            if ( b.charAt(i) == textbox_value.charAt(j)){
                count += 1;
                total_characters += 1;
                if (ask == "yes" || ask == "y"){
                    if (string.includes(textbox_value.charAt(j))){
                        total_alphabets++;
                        alphabet_dict[textbox_value.charAt(j)] = count;
                    }
                    else if (integer.includes(textbox_value.charAt(j))){
                        total_integer++;
                        num_dict[textbox_value.charAt(j)] = count;
                    }
                    else{
                        total_special_char++;
                        special_char_dict[textbox_value.charAt(j)] = count;
                    }
                }
        
                else if (ask == "no" || ask == "n"){
                    string_dict[textbox_value.charAt(j)]=count;}
            }
        }
        count=0;
    }
    if (ask == "yes" || ask == "y"){

        myh1.textContent=`${total_characters} Characthers `;

        
        resultconatiner.textContent="";

        const result=document.createElement("p");
        const result2=document.createElement("p");
        const result3=document.createElement("p");
        const result4=document.createElement("p");

        result.textContent=(`Total Characters used are ${total_characters}`);
        result2.textContent+=(`Total number Alphabets in String are: ${total_alphabets}. Alphabets used ${JSON.stringify(alphabet_dict)}`);
        result3.textContent+=(`Total number integers in String are: ${total_integer}. Number used ${JSON.stringify(num_dict)}`);
        result4.textContent+=(`Total number Special Characters in String are: ${total_special_char}. Special Characters used ${JSON.stringify(special_char_dict)}`);
        
        result.classList.add("result");
        result2.classList.add("result");
        result3.classList.add("result");
        result4.classList.add("result");

        resultconatiner.appendChild(result);
        resultconatiner.appendChild(result2);
        resultconatiner.appendChild(result3);
        resultconatiner.appendChild(result4);
    }
    else if (ask == "no" || ask == "n"){
        
        myh1.textContent=`${total_characters} Characthers `;
        
        resultconatiner.textContent="";

        const result=document.createElement("p");
        const result2=document.createElement("p");

        result.textContent=(`Total Characters used are ${total_characters}`);
        result2.textContent+=(`Total String used ${JSON.stringify(string_dict)}`);
        
        result.classList.add("result");
        result2.classList.add("result");

        resultconatiner.appendChild(result);
        resultconatiner.appendChild(result2);
    }
    
    else{
        resultconatiner.textContent="";
        const result=document.createElement("p");

        result.textContent=("Please answer in yes or no");

        result.classList.add("result");
        
        resultconatiner.appendChild(result);
        
        console.error("Please answer in yes or no");
    }
}