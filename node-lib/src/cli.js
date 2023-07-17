import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";
import { validateHeaderName } from "http";

const caminho = process.argv;

function imprimeLista(valida,  resultado , identificador = '') {
    
    if (valida)  {
    console.log(
        chalk.yellow('lista validada') ,
        chalk.black.bgGreen(identificador),
         listaValidada(valida,  resultado));

}else {
    console.log(
        chalk.yellow('lista de links') ,
        chalk.black.bgGreen(identificador),
         resultado);

}

    
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
    

    try {
        fs.linkSync(caminho);
    } catch (erro) {
       if (erro.code === 'ENOENT')
       console.log('arquivo ou diretório não existe');
       return;
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(valida , resultado);
    }  else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async(nomeDeAquivo) => {            
            const lista = await pegaArquivo(`${caminho}/${nomeDeAquivo}`)
           imprimeLista(lista , nomeDeAquivo);
        })
        console.log(arquivos);
    }

}

processaTexto(caminho);