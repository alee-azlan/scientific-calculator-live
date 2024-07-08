document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentvalue = "";
        function evaluateResult() {
            console.log("Current Value:" , currentvalue);
            const convertedvalue= currentvalue
            .replace("×","*")
            .replace("÷","/")
            .replace("%","*0.01")
            .replace("sin","Math.sin")
            .replace("cos" , "Math.cos")
            .replace("ln","Math.log")
            .replace("π","Math.PI")
            .replace("log","Math.log10")
            .replace("e","Math.E")
            .replace("tan","Math.tan")
            .replace("√","Math.");
            console.log("ConvertedValue:" , convertedvalue);
            
        const result = eval(convertedvalue);
        currentvalue = result.toString();
        display.value=currentvalue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;
            try{
                if (value == "AC") {
                    currentvalue = "";
                    display.value = currentvalue;
                } 
                else if(value == "=")
                {
                    evaluateResult();
                } 
                else {
                    currentvalue += value;
                    console.log("Current Value:", currentvalue);
                    display.value = currentvalue;
                }
            }
                catch (error){
                    console.error(error);
                    currentvalue="ERROR";
                    display.value= currentvalue;
                }
            
           
        })
    }
});