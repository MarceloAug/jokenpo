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
    
    if (playerOneValue === playerTwoValue) 
        return 'Empatou! Tente novamente!';
    
    if (playerOneValue === 'tesoura')
    return (playerTwoValue === 'papel') ? 'Jogador 1 Venceu!' : 'Jogador 2 Venceu!';

    if (playerOneValue === 'papel')    
    return (playerTwoValue === 'pedra') ? 'Jogador 1 Venceu!' : 'Jogador 2 Venceu!';

    if (playerOneValue === 'pedra')
    return (playerTwoValue === 'tesoura') ?'Jogador 1 Venceu!' : 'Jogador 2 Venceu!';

    return "Não foi possivel identificar um vencedor!"
}
  
module.exports = new Jokenpo();