import { Alert } from 'react-native';

class Funcoes {
    static funcaoCalculo(number1, number2, acao) {
        let sum;
        switch (acao) {
            case '+':
                sum = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                sum = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                sum = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                if (parseFloat(number2) !== 0) {
                    sum = parseFloat(number1) / parseFloat(number2);
                } else {
                    alert('Divisão por zero não é permitida.');
                    return;
                }
                break;
            default:
                alert('Operação inválida.');
                return;
        }

        if (!isNaN(sum)) {
            alert(`O resultado é: ${sum}`);
        } else {
            alert('Por favor, insira números válidos.');
        }
    }
}

export default Funcoes;
