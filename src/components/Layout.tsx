//import MenuLateral from './MenuLateral'
//import Cabecalho from './Cabecalho'
//import Conteudo from './Conteudo'
//import ForcarAutenticacao from '../auth/ForcarAutenticacao'
//import useAppData from '../../data/hook/useAppData'

import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    subtitulo?: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    
    return (
        
            <div className={`
                flex flex-col w-2/3
                bg-white text-gray-800 rounded-md
                `}>
                <Titulo>
                    {props.titulo}
                </Titulo>
                <div className="p-6">
                    {props.children}
                </div>

            </div>
        
    )
}