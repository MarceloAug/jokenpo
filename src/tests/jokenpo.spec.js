const getJokenpo = require('../controller/jokenpo');
const request = require("supertest");

const url = "http://localhost:3001";

describe('Jokenpo testes', () =>{
  	it("Jogador 1 Vence, Pedra ganha", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"pedra",
			playerTwo:"tesoura",
		});

		expect(res.statusCode).toEqual(200);
		expect(res.body.message).toEqual("Jogador 1 Venceu!");
  	});


	it("Jogador 2 Vence, Papel ganha", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"pedra",
			playerTwo:"papel",
		});
		expect(res.statusCode).toEqual(200);
		expect(res.body.message).toEqual("Jogador 2 Venceu!");
  	});

	it("Empate", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"tesoura",
			playerTwo:"tesoura",
		});
		expect(res.statusCode).toEqual(200);
		expect(res.body.message).toEqual("Empatou! Tente novamente!");
  	});


	it("Jogador 1 não jogou", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"",
			playerTwo:"tesoura",
		});
		expect(res.statusCode).toEqual(400);
		expect(res.body.message).toEqual("Jogador 1 não passou nenhum movimento");
  	});


	it("Jogador 2 não jogou", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"tesoura",
			playerTwo:"",
		});
		expect(res.statusCode).toEqual(400);
		expect(res.body.message).toEqual("Jogador 2 não passou nenhum movimento");
  	});


	it("Erro ao identificar vencedor", async () => {
    	const res = await request(url)
		.post('/jokenpo')
		.send({
			playerOne:"tesouraaaaa",
			playerTwo:"papeeeeel",
		});
		expect(res.statusCode).toEqual(200);
		expect(res.body.message).toEqual("Erro ao identificar vencedor, verifique os movimentos dos jogadores");
  	});
})