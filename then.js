// Promessa: se o cachorro sentar, ele recebe um biscoito
let promessaDeBiscoito = new Promise((resolve, reject) => {
    // Imaginar que o cachorro senta
    let cachorroSentou = false;
    
    if (cachorroSentou) {
      resolve("Biscoito!");
    } else {
      reject("Nada de biscoito.");
    }
  });
  
  // .then é como dar o biscoito depois que a promessa foi cumprida
  promessaDeBiscoito.then(biscoito => {
    console.log(biscoito); // Aqui o dono dá o biscoito
  }).catch(erro=>{
    console.log(erro)
  })

///////////////////////////////////////////////////////////

// Promessa para o cachorro 1
let cachorro1Sentou = new Promise((resolve, reject) => {
    let sentou = true; // Digamos que ele sentou
    if (sentou) {
      resolve("Cachorro 1 ganhou um biscoito!");
    } else {
      reject("Cachorro 1 não sentou.");
    }
  });
  
  // Promessa para o cachorro 2
  let cachorro2Sentou = new Promise((resolve, reject) => {
    let sentou = true; // Digamos que ele também sentou
    if (sentou) {
      resolve("Cachorro 2 ganhou um biscoito!");
    } else {
      reject("Cachorro 2 não sentou.");
    }
  });
  
  // Promessa para o cachorro 3
  let cachorro3Sentou = new Promise((resolve, reject) => {
    let sentou = false; // Digamos que ele não sentou
    if (sentou) {
      resolve("Cachorro 3 ganhou um biscoito!");
    } else {
      reject("Cachorro 3 não sentou.");
    }
  });
  
  // Usando Promise.all para esperar todas as promessas
  Promise.all([cachorro1Sentou, cachorro2Sentou, cachorro3Sentou])
    .then(resultados => {
      // Este bloco será executado se todos os cachorros sentarem
      console.log(resultados);
    })
    .catch(erro => {
      // Este bloco será executado se qualquer um dos cachorros não sentar
      console.log(erro);
    });


//////////////////////////////////////////////////////////
  
// Função para simular a promessa de um cachorro sentar
function cachorroSentou(nome, sentou) {
    return new Promise((resolve, reject) => {
      if (sentou) {
        resolve(`${nome} ganhou um biscoito!`);
      } else {
        reject(`${nome} não sentou.`);
      }
    });
  }
  
  // Função assíncrona para lidar com todas as promessas
  async function darBiscoitos() {
    try {
      // Criando as promessas para cada cachorro
      const promessa1 = cachorroSentou('Cachorro 1', true); // Sentou
      const promessa2 = cachorroSentou('Cachorro 2', true); // Sentou
      const promessa3 = cachorroSentou('Cachorro 3', false); // Não sentou
  
      // Esperando que todas as promessas sejam resolvidas
      const resultados = await Promise.all([promessa1, promessa2, promessa3]);
  
      // Se todas forem resolvidas, este bloco será executado
      console.log(resultados);
    } catch (erro) {
      // Se qualquer uma das promessas falhar, este bloco será executado
      console.log(erro);
    }
  }
  
  // Chamar a função para dar biscoitos
  darBiscoitos();
  
////////////

// Função para simular uma tarefa que pode demorar
function tarefa(nome, tempo, sucesso) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sucesso) {
          resolve(`${nome} concluída!`);
        } else {
          reject(`${nome} falhou.`);
        }
      }, tempo);
    });
  }
  
  // Função assíncrona para lidar com todas as tarefas
  async function organizarEvento() {
    try {
      // Criando as promessas para cada tarefa
      const enviarConvites = tarefa('Envio de convites', 2000, true); // Demora 2 segundos
      const prepararComida = tarefa('Preparação da comida', 3000, true); // Demora 3 segundos
      const decorarLocal = tarefa('Decoração do local', 4000, true); // Demora 4 segundos e falha
  
      // Esperando que todas as promessas sejam resolvidas
      const resultados = await Promise.all([enviarConvites, prepararComida, decorarLocal]);
  
      // Se todas forem resolvidas, este bloco será executado
      console.log('Todas as tarefas concluídas:');
      console.log(resultados);
  
      // Iniciar o evento
      console.log('Evento iniciado com sucesso!');
    } catch (erro) {
      // Se qualquer uma das promessas falhar, este bloco será executado
      console.log('Erro ao organizar o evento:');
      console.log(erro);
    }
  }
  
  // Chamar a função para organizar o evento
  organizarEvento();

//////////////
// Função simulada para obter usuários
function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['User1', 'User2', 'User3']);
      }, 1000); // Demora 1 segundo
    });
  }
  
  // Função simulada para obter posts
  function getPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Post1', 'Post2', 'Post3']);
      }, 1500); // Demora 1,5 segundos
    });
  }
  
  // Função simulada para obter comentários
  function getComments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Comment1', 'Comment2', 'Comment3']);
      }, 2000); // Demora 2 segundos
    });
  }
  
  // Função assíncrona para obter e processar todos os dados
  async function fetchDataForDashboard() {
    try {
      // Fazendo as requisições simultaneamente
      const [users, posts, comments] = await Promise.all([getUsers(), getPosts(), getComments()]);
  
      // Processando os dados após todas as promessas serem resolvidas
      console.log('Usuários:', users);
      console.log('Posts:', posts);
      console.log('Comentários:', comments);
  
      // Aqui você pode combinar e processar os dados como necessário
      // Por exemplo, criando um relatório ou atualizando a UI do painel de controle
      const dashboardData = {
        users,
        posts,
        comments,
      };
  
      console.log('Dados do painel:', dashboardData);
    } catch (error) {
      // Lidando com qualquer erro que ocorra durante as requisições
      console.error('Erro ao obter dados para o painel:', error);
    }
  }
  
  // Chamando a função para obter e processar os dados
  fetchDataForDashboard();
  
  