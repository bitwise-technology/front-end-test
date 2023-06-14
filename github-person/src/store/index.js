import { createStore } from 'vuex'
import router from '../router/index';
import axios from 'axios';
import { token } from '../env/env'; 

// Defina o token de acesso pessoal do GitHub
const tokenID = token;

export default createStore({
  state: {
    user:{},
    repos:{},
    notFound: true,
    Isloading:true,
  },
  getters: {
    getUser(state){
      return state.user;
    },
    getRepos(state){
      return state.repos;
    },
    getNotFound(state){
      return state.notFound;
    },
    getIsloading(state){
      return state.Isloading;
    },
  },
  mutations: {
    setUser(state, valueUser){
      state.user = valueUser;
    },
    setRepos(state,repos){
      state.repos = repos;
    },
    setNotFound(state,value){
      state.notFound = value;
    },
    setIsloading(state,value){
      state.Isloading = value;
    },
  },
  actions: {
    async actionUserGithub({commit},user){
      commit('setIsloading',false);
      await axios.get(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `Bearer ${tokenID}`,
        },
      }).then(response => {
          // Extrai os dados do usuário da resposta
          const userData = response.data;
          console.log('Dados do usuário:', userData.login);
          commit('setIsloading',true);
          commit('setNotFound',true);
          // Passando paramentro na rota
          router.push(`/search/${userData.login}`);
      }).catch(error => {
          console.error('Ocorreu um erro:', error);
          commit('setIsloading',true);
          commit('setNotFound',false);
        });
    },

    async actionUserInfo({ commit }, user) {
      const userRequest = axios.get(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `Bearer ${tokenID}`,
        },
      });
    
      try {
        const userResponse = await userRequest;
        // Extrai os dados do usuário da resposta
        const userData = {
          username: userResponse.data.login,
          avatar_url: userResponse.data.avatar_url,
          repos_url: userResponse.data.repos_url,
        };
        console.log('Dados do usuário:', userData);
        commit('setUser', userData);
    
        const repositoriesRequest = axios.get(`https://api.github.com/users/${user}/repos`, {
          headers: {
            Authorization: `Bearer ${tokenID}`,
          },
        });
    
        const repositoriesResponse = await repositoriesRequest;
    
        // Extrai os dados dos repositórios que o usuário criou
        const repositoriesCreated = repositoriesResponse.data;
        console.log('Repositórios criados:', repositoriesCreated);
    
        // Array para armazenar os repositórios com informações de commits
        const repositoriesWithCommits = [];
    
        for (const repository of repositoriesCreated) {
          const commitsRequest = axios.get(`https://api.github.com/repos/${user}/${repository.name}/commits`, {
            headers: {
              Authorization: `Bearer ${tokenID}`,
            },
          });
    
          const commitsResponse = await commitsRequest;
    
          // Extrai a quantidade de commits do usuário nesse repositório
          const commitCount = commitsResponse.data.length;
    
          // Adiciona o repositório com a quantidade de commits ao array
          const repositoryWithCommits = {
            ...repository,
            commit_count: commitCount,
          };
    
          if (commitCount > 0) {
            const lastCommitSha = commitsResponse.data[0].sha;
            const lastCommitRequest = axios.get(`https://api.github.com/repos/${user}/${repository.name}/commits/${lastCommitSha}`, {
              headers: {
                Authorization: `Bearer ${tokenID}`,
              },
            });
    
            const lastCommitResponse = await lastCommitRequest;
    
            // Extrai a mensagem e o hash do último commit
            const lastCommitMessage = lastCommitResponse.data.commit.message;
            const lastCommitHash = lastCommitResponse.data.sha.slice(0, 6);
    
            // Adiciona a mensagem e o hash do último commit ao objeto do repositório
            repositoryWithCommits.last_commit_message = lastCommitMessage;
            repositoryWithCommits.last_commit_hash = lastCommitHash;
          }
    
          repositoriesWithCommits.push(repositoryWithCommits);
        }
    
        console.log('Repositórios com informações de commits:', repositoriesWithCommits);
    
        // Combina os repositórios criados pelo usuário com os repositórios em que ele é um colaborador
        const allRepositories = repositoriesWithCommits.map(repository => {
          return {
            name: repository.name,
            last_commit_message: repository.last_commit_message,
            last_commit_hash: repository.last_commit_hash,
            commit_count: repository.commit_count
          };
        });

        console.log('Todos os repositórios:', allRepositories);
        commit('setRepos', allRepositories);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
        commit('setNotFound',false);
      }
    },
    actionValid({commit},value){
      commit('setNotFound',value);
    },
    actionValidInfo({commit},value){
      commit('setIsloadingInfo',value);
    }
  },
  modules: {
  }
})
