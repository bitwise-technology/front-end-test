<template>
    <div id="search-container">
       <section v-if="getValid" class="container search">
            <nav>
                <router-link to="/">
                    <img src="@/assets/logo.svg" alt="Logotipo da Bitwise">
                </router-link>
                <div class="input-component">
                    <InputSearch></InputSearch>
                </div>
                <div class="social-component">
                    <SocialContainer></SocialContainer>
                </div>
                <button v-if="!valid" class="button-search" @click="valid=!valid">
                    <img src="@/assets/icon-search.svg" alt="Botão de pesquisa">
                </button>
            </nav>
            <div class="responsive-input" v-if="valid">
                <InputSearch></InputSearch>
            </div>
            <div class="box-profile">
                <div class="avatar" :style="{ backgroundImage: `url(${user.avatar_url})` }"></div>
                <div class="container-describe">
                    <h1>{{ user.username }}</h1>
                    <div class="repo-amount">
                        <h2 v-if="isLoading">{{ repositorys.length }}</h2>
                        <CicleProgressVue v-else style="height: 14px; width: 14px;"></CicleProgressVue>
                        <span>Repositórios</span>
                    </div>
                    <div class="ornament"></div>
                </div>
            </div>
            <div class="card-info">
                <h3>Repositórios</h3>
                <div class="table">
                    <div class="row-table">
                        <span class="name">Nome do repositório</span>
                        <span class="commits">Qtd de commit</span>
                        <span class="message">Msg Ultimo commit</span>
                        <span class="hash">Hash do ultimo commit</span>
                    </div>
                </div>
                <div class="list">
                    <div v-if="isLoading" class="scrollable-div">
                        <div :class=" index % 2 == 0 ? 'items' : 'items-par'" v-for="(repo, index) in repositorys" :key="index">
                            <span class="item name">{{ repo.name }}</span>
                            <span class="item commits">{{ repo.commit_count }}</span>
                            <span class="item message">{{ repo.last_commit_message}}</span>
                            <span class="item hash">{{ repo.last_commit_hash}}</span>
                        </div>
                    </div>
                    <div v-else class="list-loading">
                        <CicleProgressVue></CicleProgressVue>
                    </div>
                </div>
            </div>
       </section>
       <section v-else class="loading">
            <AlertComponent></AlertComponent>
       </section>
       <div class="footer-component">
            <FooterComponent></FooterComponent>
       </div>
       <div class="active-social-bottom">
            <SocialContainer></SocialContainer>
       </div>
    </div>
</template>
<script>
import InputSearch from '@/components/InputSearch.vue';
import SocialContainer from '@/components/SocialContainer.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import AlertComponent from '@/components/AlertComponent.vue';
import CicleProgressVue from '@/components/CicleProgress.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components:{InputSearch, SocialContainer, FooterComponent,AlertComponent,CicleProgressVue},
    data(){
        return{
            valid: false,
            isLoading:false,
        }
    },
    watch: {
        '$route'(to, from) {
            if (to.params.login !== from.params.login) {
                // Parâmetro de rota 'login' alterado
                // Executar ação ou recarregar a página aqui
                location.reload(); // Recarrega a página
            }
        },
    },
    methods:{
        //Buscando actions especificas na gerencia de estado
        ...mapActions(['actionUserInfo'])
    },
    computed:{
        //Buscando getters especificos na gerencia de estado
        ...mapGetters(['getUser', 'getRepos','getNotFound']),
        user(){
            return this.getUser;
        },
        repositorys(){
            return this.getRepos;
        },
        getValid(){
            return this.getNotFound;
        },
    },
    async created(){
        const login = this.$route.params.login;
        this.isLoading = false
        await this.actionUserInfo(login);
        this.isLoading = true
    }
}
</script>
<style scoped>
    #search-container{
        background-image: url('../assets/backgrounds/background-search.svg');
        background-size: cover;
        font-family: 'Gotham', sans-serif;
        height: 100%;
    }

    .search{
        padding: 60px 158px 98px 158px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 60px;
    }

    .loading{
        padding: 60px 158px 98px 158px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 660px;
    }

    .search nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .button-search{
        display: none;
    }

    .responsive-input{
        display: none;
    }

    .box-profile{
        display: flex;
        align-items: center;
        gap: 32px;
    }

    .box-profile .avatar{
        height: 120px;
        width: 120px;
        border-radius: 4px;
        background-size: cover;
        filter: drop-shadow(1px 2px 6px rgba(0, 0, 0, 0.04)) drop-shadow(2px 2px 16px rgba(0, 0, 0, 0.12));
    }

    .box-profile .container-describe{
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
    }

    .container-describe h1{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 32px;
        color: #373435;
        margin-top: 16px;
    }

    .container-describe .repo-amount{
        border-radius: 4px;
        background: #FBFBFB;
        box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .repo-amount h2{
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 24px;
        color: #373435;
    }

    .repo-amount span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #737172;
    }

    .ornament{
        position: relative;
        width: 3px;
        height: 16px;
        left: 0.1px;
        top: -46px;
        background: #8C2E7C;
        border-radius: 0px 100px 100px 0px;
    }

    .card-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: #ffffff;
        border-radius: 6px;
        box-shadow: 0px 2px 38px rgba(84, 84, 89, 0.14);
    }

    .card-info h3{
        padding-top: 33px;
        padding-left: 32px;
        font-size: 2rem;
        font-weight: 700;
        line-height: 32px;
        color: #373435;
        margin-bottom: 6px;
    }

    .table{
        width: 100%;
    }
    .row-table{
        display: flex;
        padding: 18px 32px;
        align-items: center;
        justify-content: space-between;
    }

    .row-table span{
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 24px;
        color: #555353;
    } 

    .list{
        width: 100%;
        height: 300px;
        overflow: hidden;
    }

    .list-loading{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .scrollable-div{
        height: 100%;
        overflow-y: auto;
    }
    .items{
        display: flex;
        padding: 24px 32px;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        color: #373435;
    }

    .items-par{
        display: flex;
        padding: 24px 32px;
        align-items: center;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
        line-height: 24px;
        color: #373435;
        background-color: #F0F0F0;
    }

    .item{
        display: inline-block;
    }

    .name{
        width: 189px;
    }

    .commits{
        width: 136px;
    }

    .message{
        width: 176px;
        text-align: start;
    }

    .hash{
        width: 250px;
        text-align: end;
    }

    .active-social-bottom{
        display: none;
    }

    /* Responsive */
    @media (max-width:1060px){
        .search{
            padding: 60px 16px 98px 16px;
        }
        .input-component{
            display: none;
        }

        .social-component{
            display: none;
        }

        .button-search{
            display: block;
            background: #FFFFFF;
            border: 1px solid #FFFFFF;
            border-radius: 4px;
            box-sizing: border-box;
            padding: 10px;
            cursor: pointer;
        }

        .responsive-input{
            display: block;
        }
    }

    @media (max-width:860px){
        .search{
            padding: 60px 16px 98px 16px;
        }
    }

    @media (max-width:760px){
        .search{
            padding: 16px 16px 0px 16px;
        }
        .footer-component{
            display: none;
        }
        .active-social-bottom{
            display: block;
            margin-top: 40px;
        }

    }

    @media (max-width:600px){
       
        .row-table{
            display: flex;
            padding: 8px 4px;
            align-items: center;
            justify-content: space-between;
        }

        .row-table span{
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 24px;
            color: #555353;
        } 

        .items{
            padding: 12px 8px 0px 8px;
            font-size: 0.75rem;
            line-height: 22px;
        }

        .items-par{
            padding: 12px 8px 0px 8px;
            font-size: 0.75rem;
            line-height: 22px;
        }
    }

    @media (max-width:500px){
        .search{
            gap: 32px;
        }
        .card-info h3{
            padding-top: 16px;
            padding-left: 16px;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 32px;
            color: #373435;
            margin-bottom: 6px;
        }

        .box-profile .avatar{
            height: 80px;
            width: 80px;
        }

        .box-profile .container-describe{
            display: flex;
            flex-direction: row;
            gap: 8px;
            align-items: center;
        }

        .container-describe h1{
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 24px;
            color: #373435;
            margin-top: 0px;
            max-width: 136px;
        }

        .box-profile{
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .ornament{
            position: relative;
            width: 3px;
            height: 16px;
            left: -103px;
            top: 1px;
            background: #8C2E7C;
            border-radius: 0px 100px 100px 0px;
        }
    }
</style>