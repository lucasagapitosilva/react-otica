import './estilo.css'

export default function SecaoSobre() {
    return (

        <section className="secao-sobre" id="sobre">

            <div className='limitar-secao quem-somos'>
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="cards-sobre">

                    <img src="assets/loja.png" className="img-sobre"></img>
                    <div className='card-sobre'>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>

                    <div className='card-sobre'>
                        <h3>ATENDIMENTO FLEXÍVEL</h3>
                        <p>Nossa equipe possui e trinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png" className="img-sobre"></img>
                </div>
            </div>
        </section>

    )
}