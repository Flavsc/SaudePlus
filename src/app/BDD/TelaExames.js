import { Given, When, Then } from "cucumber";

//TelaExames.feature
Given("um exame para ser cadastrado", () => {});

When("eu confirmo a presenca do exame", () => {});

Then(
    "posso deixar armazenado e ver os resultados dos exames, clicando nas telas",
    (exams) => {
        <>
            {/* telas */}
            <HistoricExams_Cholesterol />
            <HistoricExams_Glicose />
            <HistoricExams_Hemograma />
            <HistoricExams_TGO />
            <HistoricExams_TGP />
        </>;
    }
);
