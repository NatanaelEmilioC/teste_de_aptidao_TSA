<template>
<!-- Container principal customizado para reajuste com a tela menor de 768px-->
  <div class="container custom">
    <div class="row"><!--div auxiliar para alinhamento dos campos-->
      <div class="custom"><!--div auxiliar para reajuste dos campos dos campos-->
        <div class="form-todo form-group" @submit="check_form"><!--chamada para validação das informações minimas para o cadastro-->
        <p v-if="erros.length"><!--verificação e impressão dos erros-->
          <b>Favor corrigir os erro(s):</b>
          <ul>
           <li class="error_message" v-for="(error, index) in erros" :key="index">{{ error }}</li>
          </ul>
           </p>
          <div class="row">
            <div class="custom"><!--divs para captura do nome no formulário-->
              <label for="nome">Nome</label><br />
              <input
                placeholder=""
                type="text"
                name="nome"
                class="form-control custom-input" 
                v-model="nome"
              /> <!--style class custom-input para ajuste das caracteriscas do imput-->
            </div>
          </div>

          <div class="row">
            <div class="custom"><!--divs para captura do email no formulário-->
              <label form="email">Email</label><br />
              <input
                placeholder=""
                type="email"
                name="email"
                class="form-control custom-input"
                v-model="email"
              />
            </div>
          </div>

          <div class="row">
            <div class="custom"><!--divs para captura do cpf no formulário-->
              <label for="cpf">CPF</label><br /><!--v-mask (mascara de formato) aplicado ao cpf no formulário-->
              <input
                placeholder="111.111.111-11"
                type="text"
                name="cpf"
                class="form-control custom-input"
                v-model="cpf"
                v-mask="'###.###.###-##'"
              />
            </div>
          </div>

          <div class="row">
            <div class="custom"><!--divs para captura do endereço no formulário-->
              <label for="endereco">Endereço</label><br />
              <input
                placeholder="Rua, Numero e Bairro"
                type="text"
                name="endereco"
                id="endereco"
                class="form-control custom-input"
                v-model="endereco"
              />
            </div>

            <div class="custom">
              <label for="estado">Estado</label><br />
              <div class="custom_select"> <!--divs para captura do estado no formulário utilizando json file para completar as options-->
                <select
                  name="estado"
                  id="estado"
                  class="form-control custom-input"
                  v-model="estado"
                  @change="get_cidades(estado)"
                ><!--@change usado como gatilho para filtra as cidades por estado no campo de cidade-->
                  <option value="" disabled selected>Selecione o Estado</option><!--primeira opção disabled por motivos de customização-->
                  <option v-for="(sigla, index) in siglas" :key="index" v-bind:value="sigla.sigla">{{sigla.sigla}}</option><!--chamada dos dados do json para preenchimento das options-->
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="custom"><!--divs para captura do cep no formulário-->
              <label for="cep">CEP</label><br /><!--v-mask (mascara de formato) aplicado ao cep no formulário-->
              <input
                placeholder="22.222-000"
                type="text"
                name="cep"
                class="form-control custom-input"
                v-model="cep"
                v-mask="'##.###-###'"
              />
            </div>

            <div class="custom">
              <label for="cidade">Cidade</label><br /><!--divs para captura da cidade no formulário-->
              <select
                id="cidade"
                class="form-control custom-input"
                v-model="cidade"
              ><!--options preenchidas com nomes conforme o estado selecionado-->
                <option value="" disabled selected>Selecione a Cidade</option><!--primeira opção disabled por motivos de customização-->
                <option v-for="cidade in cidades" :key="cidade">{{cidade}}</option>
              </select>
            </div>
          </div>

          <div class="subsection"><!--div customizada para marcação da seção da forma de pagamento-->
            <p>Forma de Pagamento</p>
          </div>
          <hr />
          <div class="row">
            <div class="custom"><!--divs para as opções de pagamento com radio-->
              <input
                type="radio"
                id="cartao_de_credito"
                name="forma_de_pagamento"
                value="cartao_de_credito"
                v-model="forma_de_pagamento"
              />
              <label for="cartao_de_credito">Cartão de Crédito</label>
            </div>
            <div class="custom">
              <input
                type="radio"
                id="boleto_bancario"
                name="forma_de_pagamento"
                value="boleto_bancario"
                v-model="forma_de_pagamento"
                
              />
              <label for="boleto_bancario">Boleto Bancário</label>
            </div>
          </div>
          
          <!--v-if verifica a forma de pagamento para bloquear a vizualização dos campos que não são de interesse para a forma de pagamento-->
          <div class="row" v-if="this.forma_de_pagamento === 'cartao_de_credito'">
            <div class="custom">
              <label for="nome_no_cartao">Nome no Cartão</label><!--divs para as informações do cartão-->
              <input
                type="text"
                placeholder="Nome impresso do cartão"
                name="nome_no_cartao"
                class="form-control custom-input"
                v-model="nome_no_cartao"
              />
            </div>

            <div class="col-md-6"><!--div para dividir a row em 3-->
              <div class="row" v-if="this.forma_de_pagamento === 'cartao_de_credito'"><!--divs para as informações sobre a validade cartão-->
                <div class="custom_month"><!--div customizada para o mês de vencimento do cartão-->
                  <label>Data de Expiração</label><br />
                  <select
                    id="mes_expiracao"
                    class="form-control custom-input"
                    v-model="data_de_expiracao_mes"
                  >
                  <!--options construidas com loop para representar os meses de 1 a 12 (Janeiro a Dezembro)-->
                    <option value="" disabled selected>Mês</option><!--primeira opção disabled por motivos de customização-->
                       <option v-for="n in 12" :key="n" value="n">{{ n }}</option>
                  </select>
                </div>

                <div class="custom_year"><!--div customizada para o ano de vencimento do cartão-->
                  <select
                    id="ano_expiracao"
                    class="form-control custom-input"
                    v-model="data_de_expiracao_ano"
                  >
                    <!--options construida com 10 anos de margem (cartão tem validade de 3 a 5 anos dependendo do banco)-->
                    <option value="" disabled selected>Ano</option> <!--primeira opção disabled por motivos de customização-->
                    <option v-for="ano in anos" :key="ano" value="ano">{{ ano }}</option><!--iteração sobre o array com 10 anos para frente do atual-->
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="custom" v-if="this.forma_de_pagamento === 'cartao_de_credito'">
              <label for="numero_cartao">Número do Cartão</label><!--v-mask (mascara de formato) aplicado ao numero do cartão no formulário-->
              <input
                type="text"
                name="numero_cartao"
                placeholder="55555 55555 55555 55555"
                class="form-control custom-input"
                v-model="numero_cartao"
                v-mask="'##### ##### ##### #####'"
              />
            </div>

            <div class="custom"  v-if="this.forma_de_pagamento === 'cartao_de_credito'">
              <label for="codigo_seguranca">Código de Segurança</label><!--v-mask (mascara de formato) aplicado ao codigo de segurança do cartão no formulário-->
              <input
                type="number"
                name="codigo_seguranca"
                placeholder="XXX"
                class="form-control custom-input"
                v-model="codigo_seguranca"
                v-mask="'###'"
              />
            </div>
          </div>
          <hr />
          <br />
          <p>Seu cartão será debitado em R$ 49,00</p>
          <!--botão para adicionar usuário ao array de persons-->
          <button v-on:click="add_person" type="submit">
            REALIZAR MATRÍCULA
          </button>

          <div class="note">
            <p>Informações seguras e criptografadas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//importando a lista de cidades e estados
import siglas from "@/data/siglas_estados";
export default {
 
  name: "Cadastro",
  data() {
    
    return {
      siglas,//auxiliar para armazenar a sigla do estado
      cidades:[],//lista auxiliar para as cidades do estado
      anos:[],//lista auxiliar para armazenar os proximos 10 anos
      erros:[],//lista auxiliar para armazenar os erros no preenchimento do formulário
      persons: [],//lista de pessoas cadastradas
      nome: null,//campo para nome da pessoa
      email: null,//campo para email
      cpf: null,//campo para cpf
      endereco: "",//campo para endereço
      estado: "",//campo para estado
      cep: "",//camppo para cep
      cidade: "",//campo para cidade
      forma_de_pagamento: "",//campo para forma de pagamento
      nome_no_cartao: "",//campo para nome impressão no cartão
      data_de_expiracao_mes: "",//mes de expiração do cartão
      data_de_expiracao_ano: "",//ano de expiração do cartão
      numero_cartao: "",//numero do cartão
      codigo_seguranca: "",//codigo de segurança do cartão
      criado_em: "",//campo auxiliar para gerar a data de criação da person
    };
  },
  created() {
    setInterval(this.created_date, 1000);//gatilho para capturar a data de criação
  },
  watch: {
    persons: {
      handler() {
        console.log("Persons array alterado!");
        localStorage.setItem("persons", JSON.stringify(this.persons));//auxiliar para escrever no localStorage
        this.erros = [];//inicializando o array de erros encontrados no preenchimento
      },
      deep: true,
    },
  },
  methods: {
    add_person() {
      this.check_form()//verificar se o minimo de dados foram inseridos para incluir pessoa
      this.persons.push({//adicionando a pessoa cadastrada na lista de persons
        nome: this.nome,
        email: this.email,
        cpf: this.cpf,
        endereco: this.endereco,
        estado: this.estado,
        cep: this.cep,
        cidade: this.cidade,
        forma_de_pagamento: this.forma_de_pagamento,
        nome_no_cartao: this.nome_no_cartao,
        data_de_expiracao_mes: this.data_de_expiracao_mes,
        data_de_expiracao_ano: this.data_de_expiracao_ano,
        numero_cartao: this.numero_cartao,
        codigo_seguranca: this.codigo_seguranca,
        criado_em: this.criado_em,
      });
    },
    created_date: function() {//função para formata o time stamp para um padrão mais amigável
      const agora = new Date();
      const data =
        agora.getFullYear() +
        "-" +
        (agora.getMonth() + 1) +
        "-" +
        agora.getDate();
      const hora =
        agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
      const dateTime = data + " " + hora;
      this.criado_em = dateTime;
    },
    check_form:function(e) {//função para checar o emial nome e cpf
      if(this.nome && this.cpf && this.email) return true;
      this.erros = [];//inicializa vetor de erros
      if(!this.nome) this.erros.push("Nome obrigatório.");
      if(!this.email) this.erros.push("Email obrigatório.");
      if(!this.cpf) this.erros.push("Cpf obrigatório.");
      e.preventDefault();//stop point para submição com erro
    },
    get_years: function () {	//função que gera a lista com 10 proximos anos
      for (let index = 0; index < 10; index++) {
        this.anos.push((new Date()).getFullYear() + index);
      }
		
    },
    get_cidades: function(estado){//função para filtrar as cidades conforme estado passado
      this.siglas.forEach(element => {
        if(element.sigla === estado)
        this.cidades = element.cidades;
      });
      }
  },
  mounted() {
    console.log("Local Storage Limpo");
    localStorage.clear();//limpa o localstorage
    this.siglas = siglas;//predefine a lista de siglas
    this.get_years();//gatilho para forma a lista com os 10 proximos anos
    this.forma_de_pagamento = 'cartao_de_credito';//inicializando o radio para vizualizar todos os campos quando montar a pagina
    this.estado = 'AM';//inicializando o estado
    this.get_cidades(this.estado);//inicializa a lista de cidades como o estado predefinido
  },
};
</script>

<style scoped>


/*style proprio para o cadastro para ajuste para telas menores que 768px*/
@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .container {
    flex-direction: column;
    width: 100%;
    display: flex;
    align-items: center;
  }
}

/*style proprio para o cadastro para ajuste para telas maiores que 768px*/
@media screen and (min-width: 768px) {
  .container {
    flex-direction: column;
    width: 60%;
    display: flex;
    align-items: center;
  }
}


</style>
