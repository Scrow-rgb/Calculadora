let expressao = "";

function appendNumber(number){
    expressao += number;
    document.getElementById('result').value = expressao;

}

function appendOperator(operator){
    expressao += operator;
    document.getElementById('result').value = expressao;
}

function clearResult(){
    expressao = "";

    document.getElementById('result').value = "";
}

function calculate(){
    try{
        const result = eval(expressao);
        document.getElementById('result').value = result;
        expressao = '';

} catch(error){
    document.getElementById('result').value = "Erro";
    
}
}