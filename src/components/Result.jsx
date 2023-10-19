import Operator from "./Operator"
import "./Result.css"
import { useState, useEffect } from "react"

const Result = () => {
  let [dePara, setDePara] = useState("")
  let [value, setValue] = useState(0)
  let [arrayAPI, setArrayAPI] = useState("")
  let [valueConverted, setValueConverted] = useState(0)
  const [data, setData] = useState(null)

  function saveData(de, para, value) {
    setDePara(`${de}-${para}`)
    setArrayAPI(`${de}${para}`)
    setValue(value)
  }

  useEffect(() => {
    if (dePara && arrayAPI) {
      fetchData();
    }
  }, [dePara, arrayAPI]);

  const fetchData = () => {
    fetch(`https://economia.awesomeapi.com.br/last/${dePara}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    if (data && arrayAPI) {
      const ask = data[arrayAPI] ? data[arrayAPI].ask : 0;
      setValueConverted(value * ask);
      console.log(value * ask)
    }
  }, [data, arrayAPI, value]);

  return (
    <div>
      <Operator saveData={saveData} />
      <h3>{valueConverted}</h3>
    </div>
  )
}

export default Result