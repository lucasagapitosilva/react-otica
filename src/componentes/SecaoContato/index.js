import './estilo.css'

export default function SecaoContato() {
    return (

        <section id="contato">

            <div className="limitar-secao">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="contato">
                    <div className="container">
                        <h4>Contato</h4>

                        <figure>
                            <img src="assets/local.png"></img>
                            <figcaption>
                                Nova Iguaçu, RJ
                            </figcaption>
                        </figure>

                        <figure>
                            <img src="assets/telefone.png"></img>
                            <figcaption>
                                (21) 9999-9999
                            </figcaption>
                        </figure>

                        <figure>
                            <img src="assets/email.png"></img>
                            <figcaption>
                                contato@oticavida.com
                            </figcaption>
                        </figure>
                    </div>

                    <div className="container">
                        <h4>Nossas Redes Sociais</h4>

                        <figure>
                            <img src="assets/fb.png"></img>
                            <figcaption>
                                /OticaVida
                            </figcaption>
                        </figure>

                        <figure>
                            <img src="assets/ig.png"></img>
                            <figcaption>
                                @oticavidarj
                            </figcaption>
                        </figure>

                        <figure>
                            <img src="assets/tt.png"></img>
                            <figcaption>
                                @oticavidarj
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>

        </section>

    )
}