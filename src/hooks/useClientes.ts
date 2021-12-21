import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
//    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
    /*
    const clientes = [
      new Cliente( 'José', 8, '1'),
      new Cliente( 'Bia', 18, '2'),
      new Cliente( 'Carlos', 38, '4'),
      new Cliente( 'Mateus', 28, '3')
    ]
    */
  /*
    useEffect(() => {
      repo.obterTodos().then(setClientes)
    },[])
  */
    useEffect(obterTodos,[])
  
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
  
    function selecionarCliente(cliente: Cliente) {
      console.log(cliente.nome)
      setCliente(cliente)
      exibirFormulario()
  
    }
  
    async function excluirCliente(cliente: Cliente) {
      console.log(cliente.nome)
      await repo.excluir(cliente)
      obterTodos()
    }
  
    async function salvarCliente(cliente: Cliente){
      console.log(cliente)
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
  

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela


    }
  
}