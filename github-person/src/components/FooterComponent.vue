<template>
    <section id="container-footer">
        <footer class="container">
            <div class="footer-bitwise">
                <article class="about-bitwise">
                    <img src="@/assets/footer-logo.svg" alt="Logotipo da BitWise branco">
                    <p>
                        Acreditamos no valor da tecnologia e no impacto positivo que a transformação digital exerce sobre 
                        a sociedade, mudando o nosso dia a dia, facilitando atividades comuns e acelerando os negócios.
                    </p>
                </article>
                <article class="local-bitwise">
                    <p>
                        <strong>BRASIL</strong>
                        <br>
                        R. Raphael Dias da Silva, 75
                        3º andar • Sala 306 e 308
                        Campolim • Sorocaba/SP
                    </p>
                    <p class="canada">
                        <strong>CANADÁ</strong>
                        <br>
                        830, Av. Ernest-Gagnon,
                        Bureau 315, Sala 609
                        Quebec
                    </p>
                </article>
            </div>
            <div class="divider"></div>
            <div class="direct-bitwise">
                <p>Todos os direitos reservados - 2020</p>
                <div class="footer-social">
                    <a href="mailto:zau.galvao@bitwisespace.com" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/social/email_with_icon.svg" alt="Imagem de email" height="24" width="24">
                    </a>
                    <a href="https://www.linkedin.com/company/bitwisetechnology/" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/social/linkedin-withe.png" alt="Imagem do LinkedIn" height="24" width="24">
                    </a>
                    <a href="https://www.instagram.com/bitwisetechnology/" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/social/instagram-withe.png" alt="Imagem do Instagram" height="24" width="24">
                    </a>
                </div>
                <span class="back-top" @click="scrollToTop">VOLTAR AO TOPO</span>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // rolagem suave
            });
        }
    }
}
</script>

<style scoped>
    #container-footer{
        background-color: #290E25;
        font-family: "Roboto", sans-serif;
    }

    footer{
        padding: 72px 246px 104px 246px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .footer-bitwise{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .about-bitwise{
        display: flex;
        align-items: center;
        gap: 73px;
    }

    .about-bitwise p{
        max-width: 304px;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 16px;
        color: #E9CDE4;
    }

    .local-bitwise{
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .local-bitwise p{
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 16px;
        color: #E9CDE4;
        max-width: 169px;
    }

    .local-bitwise .canada{
        max-width: 151px;
    }

    .divider{
        margin-top: 64px;
        width: 100%;
        height: 3px;
        background-color: #E9CDE4;
        margin-bottom: 60px;
    }

    .direct-bitwise{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .direct-bitwise p{
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 16px;
        color: #E9CDE4;
    }

    .back-top{
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 16px;
        color: #E9CDE4;
        text-decoration: underline;
        cursor: pointer;
    }

    .direct-bitwise .footer-social{
        display: flex;
        align-items: center;
        gap:11px;
    }

    strong{
        font-weight: 400;
        font-size: 0.75rem;
        color: #FBFBFB;
    }

    /* Responsive  */

    @media (max-width:1270px){
        .footer-bitwise{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 80px;
            width: 100%;
        }
    }
    
    @media (max-width:1100px){
        footer{
            padding: 72px 100px 104px 100px;
        }
    }

    @media (max-width:860px){
        footer{
            padding: 72px 40px 104px 40px;
        }
    }
</style>