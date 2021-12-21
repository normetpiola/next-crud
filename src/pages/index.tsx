//import { useEffect, useState } from "react";
//import ColecaoCliente from "../firebase/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
//import Cliente from "../core/Cliente";
//import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

export default function Home() {
  
  const { 
    cliente, 
    clientes, 
    novoCliente,
    salvarCliente,
    selecionarCliente, 
    excluirCliente, 
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
   } = useClientes()

  return (
    <div className={`
            flex h-screen items-center justify-center
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
            `}>
      <Layout titulo="CRUD" subtitulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" 
                onClick={novoCliente} 
                >
                Novo Cliente
              </Botao>

            </div>
            <Tabela clientes={clientes} 
                    clienteSelecionado={selecionarCliente}
                    clienteExcluido={excluirCliente}
                    />
          </>

        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          >

          </Formulario>

        )}

      </Layout>
    </div>
  )
}
