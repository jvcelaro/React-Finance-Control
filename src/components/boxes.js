import React from "react";
import { BsArrowUpCircle } from "react-icons/bs"
import { BsArrowDownCircle } from "react-icons/bs"
import { MdOutlineAttachMoney } from "react-icons/md"



export default function Boxes(props) {


    function calcSoma() {
        let soma = 0;
        for (let i = 0; i < props.addItem.length; i++) {
            const element = props.addItem[i]
            if (element.valor > 0) {
                soma += element.valor;
            }
        }
        return soma;
    }

    function calcSub() {
        let soma = 0;
        for (let i = 0; i < props.addItem.length; i++) {
            const element = props.addItem[i]
            if (element.valor < 0) {
                soma += element.valor;
            }
        }
        return soma;

    }


    return (
        <div className="boxes">

            <div className="entradas">
                <p className="text_box">Entradas</p>
                <span><BsArrowUpCircle /></span>
                <h1 className="title_box">{`R$ ${calcSoma()}`}</h1>
            </div>

            <div className="saidas">
                <p className="text_box">Saidas</p>
                <span><BsArrowDownCircle /></span>
                <h1 className="title_box">{`R$ ${calcSub()}`}</h1>
            </div>

            <div className="total">
                <p className="text_box">Total</p>
                <span><MdOutlineAttachMoney /></span>
                <h1 className="title_box">{`R$ ${calcSoma() + calcSub()}`}</h1>
            </div>

        </div>
    )
}