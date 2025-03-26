function generatePassword(){

    const password_Length=Number(check_password_Length.value);
    const include_Lower_case=check_include_Lower_case.checked;
    const include_Upper_case=check_include_Upper_case.checked;
    const include_Number=check_include_Number.checked;
    const include_Symbols=check_include_Symbols.checked;
    const Lower_case_chars= "abcdefghijklmnopqrstuvwxyz";
    const Upper_case_chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Number_chars= "0123456789";
    const Symbol_chars="!@#$%^&*()_+-="

    let Allowed_chars="";
    let password="";
    Allowed_chars += include_Lower_case ? Lower_case_chars : "";
    Allowed_chars += include_Upper_case ? Upper_case_chars : "";
    Allowed_chars += include_Number ? Number_chars : "";
    Allowed_chars += include_Symbols ? Symbol_chars : "";

    if(password_Length<=0){
        password="(Password length mustbe atleast 1)";
    }
    if(Allowed_chars.length===0){
       password = "(Atleast 1 set of character needs to be selected)";
    }
    else{
    for(let i=0; i<password_Length; i++){
        const random_Index=Math.floor(Math.random()*Allowed_chars.length);
        password+=Allowed_chars[random_Index];
    }}
    result.textContent = password;
}

const check_password_Length = document.getElementById("password_length");
const check_include_Lower_case = document.getElementById("include_Lower_case");
const check_include_Upper_case = document.getElementById("include_Upper_case");
const check_include_Number = document.getElementById("include_Number");
const check_include_Symbols = document.getElementById("include_Symbols");
const result=document.getElementById("result");