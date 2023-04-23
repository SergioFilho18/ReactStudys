import React from 'react'
import SegundoComponente from './SegundoComponente'

const PrimeiroComponente = () => {
    const nome = "Sérgio"
    const aluno = {
        nome: "Sérgio Filho",
        curso: "Curso React"
    }
  return (
    <div><h1>Primeiro Componente</h1>

    <p>Ola! {aluno.nome}, seja Bem Vindo!</p>
    <p>Está matriculado em {aluno.curso}</p>
    <p>{4+4}</p>
    <p>{console.log('Olá Mundo')}</p>
    
    
    
    
    
    
    <SegundoComponente />
    </div>
  )
}

export default PrimeiroComponente