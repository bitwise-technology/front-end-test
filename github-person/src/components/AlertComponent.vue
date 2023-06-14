<template>
    <div class="custom-alert">
        <div class="row-close">
            <button class="close" @click="modifiedValid()">
                <img src="@/assets/close.svg" alt="Icone de fechar">
            </button>
        </div>
        <h1 class="message-alert">Nenhum usuário encontrado!</h1>
        <div class="subtitle-alert">
            <span class="subtitle">Enquanto isso, acompanhe a Bitwise nas redes sociais:</span>
            <div class="alert-social">
                <a href="" target="_blank" rel="Link para o email">
                    <img src="@/assets/social/email_with_icon.svg" alt="Icone do Email" height="24" width="24">
                </a>
                <a href="https://www.linkedin.com/company/bitwisetechnology/" target="_blank" rel="Link para o LinkedIn">
                    <img src="@/assets/social/linkedin-withe.png" alt="Icone do LinkedIn" height="24" width="24">
                </a>
                <a href="https://www.instagram.com/bitwisetechnology/" target="_blank" rel="Link para o Instagram">
                    <img src="@/assets/social/instagram-withe.png" alt="Icone do Instagram" height="24" width="24">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions(['actionValid']),
        modifiedValid(){
            this.actionValid(true);
        }
    }
}
</script>
<style scoped>
    .custom-alert{
        width: 786px;
        display: flex;
        background: linear-gradient(90deg, #5B1E50 0%, #8C2E7C 100%);
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 16px 16px 40px 40px;
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.04), 2px 2px 16px rgba(0, 0, 0, 0.12);
        border-radius: 20px;
        margin-bottom: 80px;
    }

    .message-alert{
        font-family: 'Gotham', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        line-height: 40px;
        letter-spacing: -1px;
        color: #FBFBFB;
        margin-bottom: 38px;
    }

    .subtitle-alert{
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .subtitle{
        font-size: 1rem;
        color:#FBFBFB
    }

    .alert-social{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .row-close{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 24px;
    }

    .close{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    /* Responsive */

    @media (max-width:1220px){
        .custom-alert{
            width: 700px;
        }
    }

    @media (max-width:1086px){
        .custom-alert{
            width: 500px;
        }
        .message-alert{
            font-weight: 400;
            font-size: 1.8rem;
            margin-bottom: 38px;
        }

        .subtitle{
            font-size: 0.9rem;
            color:#FBFBFB
        }
    }
    @media (max-width:640px){
        .custom-alert{
            width: 440px;
        }

        .message-alert{
            font-weight: 400;
            font-size: 1.6rem;
            margin-bottom: 38px;
        }
    }

    @media (max-width:550px){
        .custom-alert{
            width: 340px;
            padding: 16px 16px 16px 24px;
        }

        .subtitle-alert{
            display: none;
        }
    }

    @media (max-width:490px){

        .custom-alert{
            width: 340px;
            padding: 16px 16px 16px 24px;
            margin-bottom: 0px;
        }
        
        .message-alert{
            font-weight: 700;
            font-size: 1.5rem;
            margin-bottom: 32px;
            max-width: 206px;
            margin-bottom: 0px;
        }
        .row-close{
            margin-bottom: 0px;
        }
    }
</style>