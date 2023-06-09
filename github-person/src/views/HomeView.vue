<template>
    <div id="home-container">
        <section class="container home" id="home" name="home">
            <img class="logotipo" src="@/assets/logo.svg" alt="Logo da Bitwise">
            <div>
                <h1 class="title">Buscar um usuário no <strong>Github</strong> ficou muito <strong>fácil!</strong></h1>
                <InputSearch></InputSearch>
            </div>
            <SocialContainer></SocialContainer>
        </section>
    </div>
</template>

<script>
import InputSearch from '@/components/home/InputSearch.vue';
import SocialContainer from '@/components/home/SocialContainer.vue';
export default {
    components:{InputSearch, SocialContainer},
}
</script>

<style scoped>
    #home-container{
        background-image: url('@/assets/backgrounds/background.svg');
        background-size: cover;
        font-family: 'Gotham', sans-serif;
        padding: 60px 150px 41px 150px;
        height: 100%;
    }

    .home{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
    }

    .logotipo{
        margin-bottom: 133px;
    }

    .title{
        margin-bottom: 91px;
        font-size: 2.625rem;
        max-width: 540px;
        line-height: 3rem;
        letter-spacing: -3px;
        font-weight: 400;
        color: #42163A;
    }

    .title strong{
        font-weight: 700;
    }

    /* Responsive */

    @media (max-width:860px){
        #home-container{
            padding: 60px 40px 41px 40px;
            height: 100%;
        }
    }

    @media (max-width:640px){
        .title{
            font-size: 2.3rem;
        }
    }

    @media (max-width:480px){
        #home-container{
            background-image: url('@/assets/backgrounds/min-background.svg');
            background-size: cover;
            padding: 32px 16px 16px 16px;
        }
        .home{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 100%;
        }

        .logotipo{
            margin-bottom: 0px;
        }

        .title{
            margin-bottom: 40px;
            font-size: 2.625rem;
            max-width: 320px;
            line-height: 2rem;
            letter-spacing: -1px;
            font-weight: 400;
            line-height: 40px;
            color: #42163A;
        }
    }

</style>