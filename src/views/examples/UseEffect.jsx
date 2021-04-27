import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function fatorial(num) {
  let n = parseInt(num);
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else return n * fatorial(n - 1);
}

function ParOuImpar(num) {
  if (num % 2 === 0) return "Par";
  else return "Impar";
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fat, setFat] = useState(1);
  const [status, setStatus] = useState("Impar");

  useEffect(
    function () {
      setFat(fatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      setStatus(ParOuImpar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercicio 01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red"> {fat === -1 ? "nao existe" : fat} </span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio 02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status} </span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
