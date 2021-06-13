import React from "react";
import Header from "./components/header";
import Searchbox from "./components/searchbox";
import Rescont from "./components/rescont";
import "./App.css";

function App() {
    const name = require("@rstacruz/startup-name-generator");
    const [res, setres] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        var temp = name(e.target.text.value);
        console.log(e.target.text.value);
        setres(temp);
    };

    return (
        <div className="App">
            <Header />
            <Searchbox fun={handleSubmit} />
            <Rescont val={res} />
        </div>
    );
}

export default App;
