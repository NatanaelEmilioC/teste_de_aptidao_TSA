<template>
<!-- Container principal customizado para reajuste com a tela menor de 1079px-->
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
              <label for="cpf">CPF</label><br />
              <input
                placeholder="111.111.111-11"
                type="text"
                name="cpf"
                class="form-control custom-input"
                v-model="cpf"
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
                >
                  <option value="" disabled selected>Selecione o Estado</option>
                  <option v-for="(sigla, index) in siglas" :key="index" v-bind:value="sigla.sigla">{{sigla.sigla}}</option><!--chamada dos dados do json para preenchimento das options-->
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="custom"><!--divs para captura do cep no formulário-->
              <label for="cep">CEP</label><br />
              <input
                placeholder="22.222-000"
                type="text"
                name="cep"
                class="form-control custom-input"
                v-model="cep"
              />
            </div>

            <div class="custom">
              <label for="cidade">Cidade</label><br /><!--divs para captura da cidade no formulário-->
              <select
                id="cidade"
                class="form-control custom-input"
                v-model="cidade"
              ><!--options preenchidas com nomes aleatórios de cidades-->
                <option value="" disabled selected>Selecione a Cidade</option>
                <option v-for="cidade in cidades" :key="cidade">{{cidade}}</option>
              </select>
            </div>
          </div>

          <div class="subsection"><!--div para marcação da seção da forma de pagamento-->
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
          
          <!--verifica a forma de pagamento para bloquear a vizualização dos campos que não são de interesse para a forma de pagamento-->
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

            <div class="col-md-6">
              <div class="row" v-if="this.forma_de_pagamento === 'cartao_de_credito'"><!--divs para as informações sobre a validade cartão-->
                <div class="custom_month"><!--div customizada para o mês de vencimento do cartão-->
                  <label>Data de Expiração</label><br />
                  <select
                    id="mes_expiracao"
                    class="form-control custom-input"
                    v-model="data_de_expiracao_mes"
                  >
                  <!--options construidas com loop para representar os meses de 1 a 12 (Janeiro a Dezembro)-->
                    <option value="" disabled selected>Mês</option>
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
                    <option value="" disabled selected>Ano</option>
                    <option v-for="ano in anos" :key="ano" value="ano">{{ ano }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="custom" v-if="this.forma_de_pagamento === 'cartao_de_credito'">
              <label for="numero_cartao">Número do Cartão</label>
              <input
                type="text"
                name="numero_cartao"
                placeholder="55555 55555 55555 55555"
                class="form-control custom-input"
                v-model="numero_cartao"
              />
            </div>

            <div class="custom"  v-if="this.forma_de_pagamento === 'cartao_de_credito'">
              <label for="codigo_seguranca">Código de Segurança</label>
              <input
                type="number"
                name="codigo_seguranca"
                placeholder="XXX"
                class="form-control custom-input"
                v-model="codigo_seguranca"
              />
            </div>
          </div>
          <hr />
          <br />
          <p>Seu cartão será debitado em R$ 49,00</p>

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
import siglas from "@/data/siglas_estados";
export default {
 
  name: "Cadastro",
  data() {
    
    return {
      siglas,
      cidades:[],
      anos:[],
      erros:[],
      persons: [],
      nome: null,
      email: null,
      cpf: null,
      endereco: "",
      estado: "",
      cep: "",
      cidade: "",
      forma_de_pagamento: "",
      nome_no_cartao: "",
      data_de_expiracao_mes: "",
      data_de_expiracao_ano: "",
      numero_cartao: "",
      codigo_seguranca: "",
      criado_em: "",
    };
  },
  created() {
    setInterval(this.created_date, 1000);
  },
  watch: {
    persons: {
      handler() {
        console.log("Persons array alterado!");
        localStorage.setItem("persons", JSON.stringify(this.persons));
        this.erros = [];
      },
      deep: true,
    },
  },
  methods: {
    add_person() {
      this.check_form()
      this.persons.push({
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
    saveFile: function() {
      const data = JSON.stringify(this.persons);
      window.localStorage.setItem("persons", data);
      console.log(JSON.parse(window.localStorage.getItem("persons")));
    },
    created_date: function() {
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
    check_form:function(e) {
      if(this.nome && this.cpf && this.email) return true;
      this.erros = [];
      if(!this.nome) this.erros.push("Nome obrigatório.");
      if(!this.email) this.erros.push("Email obrigatório.");
      if(!this.cpf) this.erros.push("Cpf obrigatório.");
      e.preventDefault();
    },
    get_years: function () {	
      for (let index = 0; index < 10; index++) {
        this.anos.push((new Date()).getFullYear() + index);
      }
		
    },
    get_cidades: function(estado){
      this.siglas.forEach(element => {
        if(element.sigla === estado)
        this.cidades = element.cidades;
      });
      }
  },
  mounted() {
    console.log("Local Storage Limpo");
    localStorage.clear();
    this.siglas = siglas;
    this.get_years();
    this.forma_de_pagamento = 'cartao_de_credito';//inicializando o radio para vizualizar todos os campos quando montar a pagina
    this.estado = 'AM';
    this.get_cidades(this.estado);
  },
};
</script>

<style scoped>



@media screen and (max-width: 1079px) {
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

@media screen and (min-width: 1079px) {
  .container {
    flex-direction: column;
    width: 60%;
    display: flex;
    align-items: center;
  }
}


</style>
