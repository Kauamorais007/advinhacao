const min = 100;
const max = 200;
const numerorandom = Math.floor(Math.random() * (max - min + 1)) + min;
let tentativas = 0;
const maxtentativas = 5;

process.stdout.write('Adivinhe o número entre', min, 'e', max,': ');

process.stdin.on('data', (input) => {
  const entrada = parseInt(input.toString().trim());

  if (isNaN(entrada) || entrada < min || entrada > max) {
    process.stdout.write('Por favor, insira um número válido entre', min, 'e', max,': ');
  } else {
    tentativas++;

    if (entrada === numerorandom) {
      process.stdout.write(`Parabéns! Você acertou o número ${numerorandom} em ${tentativas} tentativas.\n`);
      process.exit();
    } else {
      process.stdout.write('Você errou! Tente novamente.\n');
      if (tentativas === maxtentativas) {
        process.stdout.write(`Você atingiu o número máximo de tentativas (${maxtentativas}). O número era ${numerorandom}.\n`);
        process.exit();
      } else {
        process.stdout.write(`Tentativa ${tentativas} de ${maxtentativas}.\n`);
        process.stdout.write('Adivinhe o número entre', min, 'e', max,': ');
      }
    }
  }
});
