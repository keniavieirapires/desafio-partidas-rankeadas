function matches (vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function rank(){
    let resultadoRank = matches(60, 20)
    let nivel = ""
    if (resultadoRank <= 10){
        nivel = "Ferro"
    }else if(resultadoRank >= 11 && resultadoRank <= 20){
        nivel = "Bronze"
    }else if(resultadoRank >= 21 && resultadoRank <= 50){
        nivel = "Prata"
    }else if(resultadoRank >= 51 && resultadoRank <= 80){
        nivel = "Ouro"
    }else if(resultadoRank >= 81 && resultadoRank <= 90){
        nivel = "Diamante"
    }else if(resultadoRank >= 91 && resultadoRank <= 100){
        nivel = "Lendario"
    }else if(resultadoRank >= 101){
        nivel = "Imortal"
    }

    return `O Herói tem saldo de ${resultadoRank} e está no nível de ${nivel}`
        }
    console.log(rank())
