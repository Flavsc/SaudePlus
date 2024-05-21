import { Given, When, Then } from 'cucumber';

//TelaCadastro.feature
Given('um usuario e senha para cadastrar uma conta', (user, password) => {

});

When('clico no botao para enviar as validacao', () => {
    <RegularButton
        onPress={() => {
            alert("Armazenando Dados...")
            navigation.navigate("PaginaInicial")
        }}
    >
        Continuar
    </RegularButton>
});

Then('será direcionado para pagina principal', () => {
  
});