/**
 classe responsavel pelo jogo
*/

class Jokenpo {

    /**
      busca o resultado
    */
    getJokenpo(body,response) {

        const { playerOne, playerTwo } = body;
        if (!playerOne){
            return response.status(400).json({ message: 'Jogador 1 não passou nenhum movimento' });
        } 
        
        if(!playerTwo){
            return response.status(400).json({ message: 'Jogador 2 não passou nenhum movimento' });
        }
            
    
        const winner = compareJokenpo(playerOne, playerTwo);
        return response.status(200).json({ message: winner });
       
    }
 
}

  
function compareJokenpo(playerOneValue, playerTwoValue) {
    
    retorno = '';
    if (playerOneValue === playerTwoValue){ 
        return 'Empatou! Tente novamente!';
    }
    switch (playerOneValue) {
        case 'papel':
            
            if(playerTwoValue === 'pedra'){
                retorno = 'Jogador 1 Venceu!' ;
            }else if(playerTwoValue === 'tesoura'){
                retorno = 'Jogador 2 Venceu!';
            }else{
                retorno = 'Erro ao identificar vencedor, verifique os movimentos dos jogadores';
            }

            break;

        case 'tesoura':

            if(playerTwoValue === 'papel'){
                retorno = 'Jogador 1 Venceu!' ;
            }else if(playerTwoValue === 'pedra'){
                retorno = 'Jogador 2 Venceu!';
            }else{
                retorno = 'Erro ao identificar vencedor, verifique os movimentos dos jogadores';
            }

            break;

        case 'pedra':
            if(playerTwoValue === 'tesoura'){
                retorno = 'Jogador 1 Venceu!' ;
            }else if(playerTwoValue === 'papel'){
                retorno = 'Jogador 2 Venceu!';
            }else{
                retorno = 'Erro ao identificar vencedor, verifique os movimentos dos jogadores';
            }

            break;

        default:
            retorno = "Erro ao identificar vencedor, verifique os movimentos dos jogadores";
            break;
    }

    return retorno;
}
  
module.exports = new Jokenpo();