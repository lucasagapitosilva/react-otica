import './estilo.css'

export default function Topo(){
    return(

        <header>
            <div className="limitar-secao topo">
                <img src="assets/logo.png" alt="Logo óticas vida"></img>

                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>

    )
}