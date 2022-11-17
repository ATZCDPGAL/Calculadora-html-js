function operaciones(op){
    var ops = {
        sumar : function sumarNumeros(n1,n2){
            return (parseFloat(n1) + parseFloat(n2));
        },

        restar : function restarNumeros(n1, n2){
            return (parseFloat(n1) - parseFloat(n2));
        },
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseFloat(n1) * parseFloat(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseFloat(n1) / parseFloat(n2));
        },

        potencia: function potenciarNumeros(n1,n2){
            return Math.pow(parseFloat(n1), parseFloat(n2));
        },

        raiz: function raizNumeros(n1){
            return Math.sqrt(parseFloat(n1));
        },
        
        porcentaje: function porcentajeNumeros(n1, n2){
            return (((parseFloat(n1) /100)*parseFloat(n2)));
        }
    };

    var operacion;

    switch(op){
        case 'sumar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "suma";
            break;
        case 'restar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "resta";
            break;
        case 'multiplicar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "multiplicacion";
            break;  
        case 'dividir':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "division";
            break;
        case 'potenciar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "^";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "potencia";
            break;
        case 'raiz':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value =  "√" + operando1;
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "raiz";
            break;
        case 'porcentaje':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "%";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "porcentaje";
            break;
        /* case 'delete':
            var operando1 = document.getElementById("resultado").value;
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "borrar";
            break; */
        case 'igual':
            operacion = document.getElementById("resultado").value;
            var memoriaop = document.getElementById("memoria").value;

            switch(memoriaop){
                case 'suma':
                    var operandos = operacion.split("+");
                    var resultado = ops.sumar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'resta':
                    var operandos = operacion.split("-");
                    var resultado = ops.restar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;  
                case 'multiplicacion':
                    var operandos = operacion.split("*");
                    var resultado = ops.multiplicar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'division':
                    var operandos = operacion.split("/");
                    var resultado = ops.dividir(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'potencia':
                    var operandos = operacion.split("^");
                    var resultado = ops.potencia(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'raiz':
                    var operandos = operacion.split("√");
                    var resultado = ops.raiz(operandos[1], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'porcentaje':
                    var operandos = operacion.split("%");
                    var resultado = ops.porcentaje(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break; 
            }
            break;
    }
}
