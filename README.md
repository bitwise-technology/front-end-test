# Desavio Frontend - Bem-vindo a Bitwise

Somos Humanos e amamos trabalho com pessoas humanas, pode parecer estranha essa frase, mas pense bem nas empresas que você já trablhou e em algum momento você foi tratado como um robo ou pior como recurso, aqui sabemos que nossos **'wisers'** são a nossa assinatura, cultura e o motivo pelo qual nossa empresa existe.

Nosso modelo de negócios combina projetos de valor compartilhado com consultoria nas tecnologias mais avançadas. Esse desafio é uma oportunidade para fazer parte do nosso time em uma jornada de aprendizado e desenvolvimento!

## Que tipo de pessoas buscamos?

Buscamos pessoas que gostem de aprender, que não tenham medo de falhar e que não fiquem presas em paradgamas de programção, pois acreditamos que linguagens, frameworks o SDK's precisam ser escolhidas baseadas na necessidade de cada projeto. E o que isso quer dizer? Simples, quer dizer que nós amamos trabalhar com tecnologias de ponta e quem decidirá as ferramentas a serem utilizadas assim como a composição tecnologica será o time envolvido.

## Instruções para participar

- Crie sua conta no github, caso você não tenha uma
- Crie um novo fork do repositorio do desafio
- Crie uma nova branch com seu nome-sobrenome
- Faça um pullrequest para o nosso respositorio quando você terminar o desafio.
- Envie um email para douglas@bitwise.ltda para te adicionarmos ao time slack do desafio.

## O nosso desafio

Como você irá ver nós somos fãns do Github e nada mais justo que fazer um desafio baseado nessa API sensacional! 

Bem, basicamente você tem a responsabilidade de criar uma webpage usando a [API de GraphQL do Github](https://docs.github.com/en/graphql) que tenha as seguintes features:

- Implementaçao do campo de busca pelo nome de usuários no github
- Caso o nome de usuário seja encontrato pela busca, mostrar imagem do perfil do github na pagina principal como está desenhada no figma
- Caso o nome de usuário não seja encontrado mostrar um alerta informando que o usuário não existe.
- Caso o nome de usuário possua ou participe de algum repositorio, então mostrar uma lista com 
  | Quantidade de respositorios do usuário | ( Participaçao e Repositorios criados pelo usuário )
  | Nome do Repo | Quantidade de commits do usuário | Mensagem do ultimo commit | Hash do cultimo commit | 
- Caso o nome de usuário não possua e nem participe de nenhum repositorio mostrar um alert informando que o usuário encontrado não possuie nenhum repo.

Você pode usar qualquer tipo de tecnologia para entreguar o projeto como: ReactJS, VueJS, Ruby on Rails e etc.. Não existe limites ou formas erradas de fazer o projeto. 

OBS: *É muito importante para analizarmos sua capacidade de adaptação a novas tecnologias que o projeto seja implementado utilizando a **API de GraphQL**, mas se caso você encontre muitos problemas para entender ou implmentar o GraphQL, como fallback você pode utilizar a versão **REST** , mas lembresse, que ao fazer isso você irá perder uma grande quantidade pontos no nosso teste.*

### Adicinais

Caso você consiga completar todas tarefas acima e queira nós mostrar que você manja:
- Adione ao campo de busca sugestões de nome de usuários, ou seja, quando usuário começar a digitar "mend" abaixo do campo de busca ira mostrar uma lista de nomes como: "mendos, mendesbarreto, mendeswhat" etc.. e quando usuário clicar em um desses nomes irá executar as atividades descritas acima.

OBS: O Github possui API para busca dos usuários


## O que iremos avaliar?

- Adaptação a novos tipos de tecnlogias como API de GraphQL do Github
- Coesão das mensagens dos commits
- Testes automatizados como (Unit Test, UI Test ...)
- Estrutura do projeto
- Nomeclatura de classes, funçoes e methodos
- Aplicação de Design Patterns
- Nivel de fidelidade/carinho do desenvolvimento da UI que entregamos no figam



