import React from "react";
import { BsArrowUpCircle } from "react-icons/bs"
import { BsArrowDownCircle } from "react-icons/bs"
import { FaTrashAlt } from "react-icons/fa"


export default function List(props) {


    return (
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Lixo</th>
                    </tr>
                </thead>
                <tbody>
                    {props.addItem.map((item, index) => <tr key={`${item.desc}${index}`}>
                        <td className="desc">{item.desc}</td>
                        <td className="valor">{item.valor}</td>
                        <td className="icon">{
                            item.valor > 0 ? (<BsArrowUpCircle color="green" />) : (<BsArrowDownCircle color="red" />)
                        }</td>
                        <td className="lixo"><button className="delitem" onClick={() => { props.delItem(item.id) }}><FaTrashAlt /></button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
