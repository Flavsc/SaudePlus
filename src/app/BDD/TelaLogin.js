import { Given, When, Then } from "cucumber";

//TelaLogin.feature
Given("um usuario e senha para entrar na conta", (user, password) => {});

When("clico no botao para enviar as validacao", () => {
    <RegularButton
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate("PaginaInicial")}
    >
        Logar
    </RegularButton>;
});

Then("sera navegado para tela inicial do aplicativo", () => {});
