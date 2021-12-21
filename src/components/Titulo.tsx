interface TituloProps {
    titulo?: string
    subtitulo?: string
    children?: any
}

export default function Titulo(props: TituloProps) {
    return (
        <div className={`flex flex-col justify-center
                        font-black
                        text-gray-900 dark:text-gray-100
        `}>
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500"/>

        </div>
    )
}