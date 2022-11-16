import React, { memo, useEffect, useState } from 'react';
import './App.css';
import Boxes from './components/boxes';
import Values from './components/values';
import List from './components/list';


function App() {

  const [item, setItem] = useState([])

  const [desc, setDesc] = useState("")
  const [valor, setValor] = useState(0)
  const [option, setOption] = useState("undefined")
  const [id, setId] = useState(0)

  function addItem() {

    setId(id + 1)

    if (option == "entrada") {

      const itemValue = [...item, { desc, valor: + valor, id }]
      localStorage.setItem("item", JSON.stringify(itemValue))

      setItem([...item, { desc, valor: + valor, id }])
      console.log(item)

    }
    else if (option == "saida") {

      const itemValue = [...item, { desc, valor: - valor, id }]
      localStorage.setItem("item", JSON.stringify(itemValue))

      setItem([...item, { desc, valor: - valor, id }])
      console.log(item)

    }
    else {
      alert("Selecione se o valor é 'Entrada' ou 'Saida'")
    }

  }

  useEffect(() => {

    const memory = localStorage.getItem("item")

    if (memory) {
      setItem(JSON.parse(memory))
    }
  }, [])


  function delItem(id) {

    console.log(id)

    let filteritems = item.filter(it => it.id != id)
    setItem(filteritems)
    localStorage.setItem("item", JSON.stringify(filteritems))

  }

  function clearAll() {
    console.log("clear")
    localStorage.removeItem("item")
    setItem([])
  }

  function descValue(e) {

    let value = e.target.value
    setDesc(value)
  }

  function valorValue(e) {
    let value = e.target.value
    setValor(value)

  }

  function changeOption(e) {
    let value = e.target.value
    setOption(value)
  }



  return (
    <div className="App">

      <header>
        <h1 className='title'>Controle de Finanças</h1>
      </header>

      <Boxes addItem={item} />
      <Values changeOption={changeOption} valorValue={valorValue} descValue={descValue} clearAll={clearAll} addItem={addItem} />
      <List addItem={item} delItem={delItem} />

    </div>
  );
}

export default App;
