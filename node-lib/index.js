import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

function trataErro (erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivos no diretório'))
}

function pegaArquivo(caminhoDoArquivo) {
   const encoding = 'utf-8';
    fs.promises
       .readFile(caminhoDoArquivo, encoding)
       .then((texto) => console.log(chalk.green(texto)))
       .catch (trataErro)


    }
     //    if (erro) {
          //  trataErro(erro);
      //   }

     //   console.log(chalk.green(texto));
   // })
//}

//pegaArquivo('./arquivos/texto.md');
