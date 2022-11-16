import React from "react";

export default function Values(props) {

    return (

        <div className="values">

            <p className="p_values">Descrição: <input type={"text"} onChange={props.descValue} /></p>
            <p className="p_values">Valor: <input type={"number"} onChange={props.valorValue} /></p>

            <div className="opt_inputs">
                <p className="p_values"><input className="entrada" type={"radio"} name="radio" value={"entrada"} onClick={props.changeOption} /> Entrada</p>
                <p className="p_values"><input className="saida" type={"radio"} name="radio" value={"saida"} onClick={props.changeOption} /> Saida</p>
            </div>

            <button onClick={props.addItem}>ADICIONAR</button>
            <button className="limpar" onClick={props.clearAll}>LIMPAR</button>
        </div>
    )
}