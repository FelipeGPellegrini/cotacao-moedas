import { useState } from "react";
import "./Operator.css"


const Operator = ({saveData}) => {

  const [de, setDe] = useState("")
  const [para, setPara] = useState("")
  const [moedaQuantity, setMoedaQuantity] = useState()

  function startConvertion (e) {
    e.preventDefault()
    console.log(moedaQuantity)
    saveData(de, para, moedaQuantity)
  }

  return (
    <div className="containerOperator">
      <div className="containerDePara">
        <h2>Selecione a moeda: </h2>
        <ul>
          <li className="moeda" onClick={() => {
            if(para === "USD") {
              alert("Escolha uma moeda diferente, você não pode transformar uma moeda nela mesma.")
            } else {
              setDe("USD")
            }
          }}>USD</li>
          <li className="moeda" onClick={() => {
            if(para === "BRL") {
              alert("Escolha uma moeda diferente, você não pode transformar uma moeda nela mesma.")
            } else {
              setDe("BRL")
            }
          }}>BRL</li>
          <li className="moeda" onClick={() => {
            if(para === "EUR") {
              alert("Escolha uma moeda diferente, você não pode transformar uma moeda nela mesma.")
            } else {
              setDe("EUR")
            }
          }}>EUR</li>
        </ul>
      </div>
      <div className="containerDePara">
        <h2>Para: </h2>
        <ul>
          {
            de === "USD" ?         
            <div className="containerPara">      
            <li className="moeda" onClick={() => setPara("BRL")}>BRL </li>
            <li className="moeda" onClick={() => setPara("EUR")}> EUR</li>
          </div> : null
          }
          {
            de === "BRL" ?
            <div className="containerPara">
            <li className="moeda" onClick={() => setPara("USD")}>USD </li>
            <li className="moeda" onClick={() => setPara("EUR")}> EUR</li>
          </div> : null
          }
          {
            de === "EUR" ?
            <div className="containerPara">      
            <li className="moeda" onClick={() => setPara("USD")}>USD </li>
            <li className="moeda" onClick={() => setPara("BRL")}> BRL</li>
          </div> :
          null
          }
        </ul>
      </div>
      <div>
        <h3>Transformando {de} em {para}</h3>
      </div>
      <div className="containerForm">
        <form>
          <input type="number" placeholder={`Digite o valor em ${de}...`} value={moedaQuantity} onChange={(e) => setMoedaQuantity(e.target.value)}/>
          <button onClick={startConvertion}>Converter</button>
        </form>
      </div>
    </div>
  )
}

export default Operator