<template>
    <div class="search">
        <input type="text" placeholder="Buscar usuário">
        <button @click="()=>{}">
            <img src="@/assets/icon-search.svg" alt="Icone de busca">
        </button>
        <div>
            <img src="@/assets/github-icon.svg" alt="Icone do Github">
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .search{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        display: flex;
        align-items: center;
        margin-bottom: 219px;
    }

    .search input{
        font-family: 'Roboto', sans-serif;
        padding: 16px 0px 16px 64px;
        background-color: #fff; 
        border: 3px solid #fff;
        border-radius: 4px;
        box-sizing: border-box;
        width: 560px;
        font-size:1rem;
        line-height: 24px;
        color: #4F4F4F;
    }

    .search input:focus{
        outline: none;
        border: 3px solid #42163A;
    }

    .search button{
        box-sizing: border-box;
        position: absolute;
        height: 32px;
        left: 2.84%;
        right: 91.47%;
        top: calc(50% - 32px/2);
        border: none;
        background-color: #fff;
        cursor: pointer;
    }

    .search div{
        padding: 19px 22px;
        background-color: #42163A;
        border: none;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: -0.43px;
    }
    
</style>