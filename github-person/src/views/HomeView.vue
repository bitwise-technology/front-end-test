<template>
    <div id="home-container">
        <section class="container home">
            <h1>Olá</h1>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    #home-container{
        background-image: url('@/assets/background.svg');
        background-size: cover;
        font-family: 'Gotham', sans-serif;
    }

    .home{
        padding: 60px 150px 41px 150px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>