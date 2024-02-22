
const result = document.getElementById("result");
const fotter = document.getElementById("footer-r")
const form = document.getElementById("search");
const poly = document.getElementById("Polygon");
const logo = document.getElementById("logo");
const descrip = document.getElementById("description");
const socials = document.getElementById("socials");
const result_heade = document.getElementById("result_header");
const user = document.getElementById("user");
const loading = document.querySelector("#search .load");
const errorDiv = document.getElementById("alert");
const avatar = document.querySelector("#result img");
const gitBtn = document.querySelector("#github_page a");
const infoBtn = document.getElementById("github_page");
const fullName = document.getElementById("full_name");
const username = document.getElementById("username");
const refresh = document.getElementById("refresh");
const x = document.querySelector("#alert .x");
const repos = document.getElementById("repos");
const userRepoContent = document.querySelector("#result .table");

let response, isSuccessful;

refresh.addEventListener("click", () => {
  location.reload();
});

x.addEventListener("click", () => {
  errorDiv.classList.add("inactive");
});

fetch('https://api.github.com/users')
    .then(res => res.json())
    .then((json) => {
        console.log(json);
        const ul = document.getElementById('listaProdutos');
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
            
                <span>${item.login}</span>
            
            `;
            ul.appendChild(li);
        })
    })

function filtrar() {
  var input,
      filter,
      ul,
      li,
      a,
      i,
      span,
      txtValue,
      count = 0

  //PEGAR OS ELEMENTOS HTML
  input = document.getElementById('search');
  ul = document.getElementById('listaProdutos');

  //FILTRO
  filter = input.value;

  //PEGAR TODAS AS LI's DA LISTA
  li = ul.getElementsByTagName("li");

  //PERCORRER TODOS OS LI'S
  for (i = 0; i < li.length; i++) {
      //PEGAR A TAG A DO ELEMENTO PERCORRIDO
      a = li[i].getElementsByTagName("a")[0];
      //PEGAR O TEXTO DENTRO DO NOSSA TAG A
      txtValue = a ;
      //VERIFICAR SE O QUE O USUARIO DIGITOU BATE COM O TEXTO DA TAG A
      if (txtValue .indexOf > -1) {
          //VALOR BATEU
          li[i].style.display = "";
          //INCREMENTAR O CONTADOR
          count++
          //PEGAR A TAG SPAN DO ITEM
          span = li[i].querySelector(".item-name");
          //SE EXISTIR
          if (span) {
              span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                  return "<strong>" + match + "</strong>";
              })
          }
      } else {
          //NÃO MOSTRA O ITEM DA LISTA
          li[i].style.display = "none";
      }
  }
  
//VERIFICANDO SE TEM ITENS NA LISTA
    if(filter ===""){ 
  ul.style.display = "none";
  }else{ 
  ul.style.display = "block";
  }
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading.style.display = "block";

  let apiLink = `https://api.github.com/users/${user.value}`;

  // "./git-user.json"

  await getInfo(apiLink)
    .then((data) => {
      response = data;
      isSuccessful = true;
    })
    .catch(() => {
      response = errorDiv;
      isSuccessful = false;
    });

  if (isSuccessful) {
    const loginName = response.login;
    
    gitBtn.setAttribute("href", response.html_url);
    avatar.setAttribute("src", response.avatar_url);
    avatar.setAttribute("alt", `${loginName}'s avatar`);
    infoBtn.setAttribute(
      "title",
      `View ${loginName}'s profile on main site (github.com)`
    );
    fullName.innerHTML = response.name;
    username.innerHTML = loginName;    
    repos.innerHTML = response.public_repos;     
    const userRepo = await getUserRepo(user);    
    displayUserDataOnScreen(userRepo);
    result.classList.add("active");
    fotter.classList.add("active");
    form.classList.add("inactive");
    poly.classList.add("inactive");
    descrip.classList.add("inactive");
    logo.classList.add("inactive");
    result_heade.classList.add("active");
    socials.classList.add("inactive");
  } else {
    if (response) {
      errorDiv.classList.add("active");
    } else {
      errorDiv.innerHTML = "<p>Um erro ocorreu! por favor, tente novamente</p>";
    }

    errorDiv.style.display = "flex";
    loading.style.display = "none";
    loading.style.animation = "";
  }

  async function getUserRepo(user) {
  const response = await fetch(`https://api.github.com/users/${user.value}/repos?sort=updated`);
  const data = await response.json()
  return data
  }  
  
  function displayUserDataOnScreen(userRepo) {  
   
  
  // Repo
  if (userRepo.length > 0) {
    userRepo.forEach(repo => {
      const userRepoLi = document.createElement("div")
      userRepoLi.classList.add("line1")
  
      const namerepo = document.createElement("span")
      namerepo.classList.add("nome_repositorio")
      namerepo.textContent = repo.name
      userRepoLi.appendChild(namerepo)
            
      function qtd() {      
      fetch(`https://api.github.com/repos/${user.value}/${namerepo.textContent}/contributors`)
        .then(async res => {
          let data = await res.json();
          data.map( item => {
            
            for (i = 0; i <= item.length; i++) {            
              soma += item.contributions;               
            }                                               
            
            const qtdcommit = document.createElement("span")
            qtdcommit.classList.add("qtd_commit")
            qtdcommit.textContent = soma
            userRepoLi.appendChild(qtdcommit)
            console.log(soma);
          })
        })                    
      }     
      qtd();

      function msg() {      
        fetch(`https://api.github.com/repos/${user.value}/${namerepo.textContent}/commits?per_page=1`)
          .then(async res => {
            let data = await res.json();
            data.map( item => {
              const msgcommit = document.createElement("span")
              msgcommit.classList.add("msg_commit")
              msgcommit.textContent = item.commit.message
              userRepoLi.appendChild(msgcommit)

              const hash = document.createElement("span")
              hash.classList.add("hash_commit")
              hash.textContent = item.sha
              userRepoLi.appendChild(hash)

              console.log(item.sha)
            })
          })                    
        }     
        msg();
                             
        
  
      const repoLink = document.createElement("a")
      repoLink.classList.add("github_acess")
      repoLink.href = repo.html_url
      repoLink.textContent = "Acessar" 
      repoLink.target = "_blank"      
      userRepoLi.appendChild(repoLink)

      const left = document.createElement("div")
      left.classList.add("left-bar1")           
      repoLink.appendChild(left)
  
      userRepoContent.appendChild(userRepoLi)
    })
  } else {
    userRepoContent.classList.add("no-repo")
    userRepoContent.textContent = "Nenhum repositório encontrado :("
  }
}
});





async function getInfo(url, options = {}) {
  // extract timeout param from options
  const { timeout = 10000 } = options;

  // instance of abort controller
  const controller = new AbortController();

  // timing function that will be used to clear tomeout
  // whenever the api fetch is completed
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  const res = await fetch(url, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(timeoutId);

  if (res.status !== 200) {
    throw new Error("not found");
  }

  let data = await res.json();

  return data;
}
