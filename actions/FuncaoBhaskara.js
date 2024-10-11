import { Alert } from 'react-native';

class FuncaoBhaskara {
  static CalculoBhaskara(a, b, c) {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    // Verificação de entradas inválidas
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      alert('Erro Por favor, insira valores válidos para a, b e c');
      return null;
    }

    // Verificação se a é igual a 0
    if (aNum === 0) {
      alert('Erro O valor de a deve ser diferente de 0');
      return null;
    }

    // Cálculo do delta
    const delta = bNum * bNum - 4 * aNum * cNum;

    // Verificação se delta é negativo
    if (delta < 0) {
      alert('Resultado Sem raízes reais');
      return null;
    }

    // Cálculo das raízes
    const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
    const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);

    return { x1, x2 };
  }
}

export default FuncaoBhaskara;
