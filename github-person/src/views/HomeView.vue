<template>
    <div id="home-container">
        <section class="container home" id="home" name="home">
            <img class="logotipo" src="@/assets/logo.svg" alt="Logo da Bitwise">
            <h1 class="title">Buscar um usuário no <strong>Github</strong> ficou muito <strong>fácil!</strong></h1>
            <InputSearch></InputSearch>
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
        background-image: url('@/assets/background.svg');
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
</style>