import Cadastro from "@screens/Cadastro";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return <Cadastro />;
}
