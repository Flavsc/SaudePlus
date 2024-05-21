import { Given, When, Then } from 'cucumber';

//Calendario.feature
Given('uma consulta marcada', (day, month) => {

});

When('vejo no calendario a consulta marcada', () => {

});

Then('será dado um lembrete para a pessoa que a consulta esta chegando', () => {
    alert("Consulta marcada para o dia " + day + " do mês " + month)
});