import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
   const [count, setCount] = useState(0);
   const [nome, setNome] = useState('');

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio 01"/>
             <div className="center">
                 <span className="text">{count}</span>
                 <div>
                     <button className="btn" onClick={()=> {setCount(count + 1)}}>
                         +1
                     </button>
                     <button className="btn" onClick={() => {setCount(count - 1)}}>
                         -1
                     </button>

                 </div>
             </div>
            <SectionTitle title="Exercicio 02"/>
            <div className="center">
            
            <div>
                <input type="text" value={nome} className="input" onChange={(e) =>{setNome(e.target.value)}}  />
            </div>
            <span> Nome: <strong>{nome}</strong> </span>
            </div>
        </div>
    )
}

export default UseState
