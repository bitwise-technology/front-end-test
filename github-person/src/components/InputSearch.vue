<template>
    <div class="input-search">
        <input type="text" placeholder="Buscar usuário" v-model="user" @keyup.enter="searchUser(user)">
        <div class="img-search">
            <img src="@/assets/icon-search.svg" alt="Icone de busca">
        </div>
        <button class="box-github" @click="searchUser(user)">
            <img v-if="loading" src="@/assets/github-icon.svg" alt="Icone do Github">
            <CicleProgress v-else></CicleProgress>
        </button>
    </div>
    
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
import CicleProgress from './CicleProgress.vue';
export default {
    components:{CicleProgress},
    data(){
        return{
            user:""
        }
    },
    computed:{
        ...mapGetters(['getIsloading']),
        loading(){
            return this.getIsloading;
        }
    },
    methods:{
        ...mapActions(['actionUserGithub']),
        searchUser(user){
            this.actionUserGithub(user);
        }
    }
}
</script>

<style scoped>

    .input-search{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .input-search input{
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

    .input-search input:focus{
        outline: none;
        border: 3px solid #42163A;
    }

    .img-search{
        box-sizing: border-box;
        position: absolute;
        height: 32px;
        left: 21px;
        top: 21px;
        border: none;
        background-color: #fff;
    }

    .box-github{
        padding: 19px 22px;
        background-color: #42163A;
        border: none;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0.01px;
        right: -0.43px;
        cursor: pointer;
    }
    
    /* Responsive */

    @media (max-width:1220px){
        .input-search input{
            width: 480px;   
        }
    }

    @media (max-width:1086px){
        .input-search input{
            width: 480px;   
        }
    }
    @media (max-width:640px){
        .input-search input{
            width: 478px;   
        }
    }

    @media (max-width:550px){
        .input-search input{
            width: 400px;   
        }

    }

    @media (max-width:460px){
        .input-search input{
            padding: 8px 0px 8px 64px;
            font-size:1rem;
            width: 320px;
        }

        .input-search{
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            display: flex;
            align-items: center;
            margin-bottom: 0;
        }

        .box-github{
            padding: 11px 22px;
        }

        .input-search button{
            left: 9px;
            top: 9px;
        }
    }
</style>