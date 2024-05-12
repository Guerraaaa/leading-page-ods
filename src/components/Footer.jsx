function Footer(){
    return(
        <div className="rounded-sm bg-slate-600 flex flex-col py-4">
            <ul className="flex justify-evenly items-center text-slate-400 text-center">
                <li>
                    <h2 className="uppercase text-lg">Direitos Autorais</h2>
                </li>
                <li>
                    <h2 className="uppercase text-md">Trabalho</h2>
                    <p className="text-sm">APS - UNIP</p>
                </li>
                <li>
                    <h2 className="uppercase text-md">Data de Entrega</h2>
                    <p className="lowercase text-sm">29/04/2024</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer