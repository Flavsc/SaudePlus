import { Given, When, Then } from "cucumber";

//TelaConfiguracoes.feature
Given("uma alteracao que eu queira fazer na minha conta", () => {});

When("eu entre em algumas das telas para alterar os dados", () => {
    <>
        {/* telas */}
        <DeleteEmail />
        <NewEmail />
        <NewPassword />
        <PasswordForget />
    </>;
});

Then("posso deixar armazenado o registro do exame", () => {});
