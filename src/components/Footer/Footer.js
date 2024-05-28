import './Footer.css'

export const Footer = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="http://www.facebook.com" target="_blank">
                            <img src='.\img\fb.png' alt='facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.twitter.com" target="_blank">
                            <img src='.\img\tw.png' alt='twitter/x'/>
                        </a>
                    </li>
                    <li>
                        <a href="http://www.instagram.com" target="_blank">
                            <img src='.\img\ig.png' alt='insta'/>   
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <p>
                    <img src='.\img\logo.png'/>
                </p>
            </section>
            <section>
                <p>
                    Desenvolvido por Alura
                </p>
            </section>
        </footer>
    )
}