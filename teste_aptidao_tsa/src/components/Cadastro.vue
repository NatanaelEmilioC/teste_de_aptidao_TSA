<template>
  <div class="container ajuste">
    <div class="row">
      <div class="ajuste">
        <div class="form-todo form-group">
          <div class="row">
            <div class="ajuste">
              <label for="nome">Nome</label><br />
              <input
                placeholder=""
                type="text"
                name="nome"
                class="form-control custom-input"
                v-model="nome"
              />
            </div>
          </div>

          <div class="row">
            <div class="ajuste">
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
            <div class="ajuste">
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
            <div class="ajuste">
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

            <div class="ajuste">
              <label for="estado">Estado</label><br />
              <div class="custom_select">
                <select
                  name="estado"
                  id="estado"
                  class="form-control custom-input"
                  v-model="estado"
                >
                  <option value="" disabled selected>Selecione o Estado</option>
                  <option value="MG">MG</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="ajuste">
              <label for="cep">CEP</label><br />
              <input
                placeholder="22.222-000"
                type="text"
                name="cep"
                class="form-control custom-input"
                v-model="cep"
              />
            </div>

            <div class="ajuste">
              <label for="cidade">Cidade</label><br />
              <select
                id="cidade"
                class="form-control custom-input"
                v-model="cidade"
              >
                <option value="" disabled selected>Selecione a Cidade</option>
                <option value="Belo Horizonte"> Belo Horizonte</option>
              </select>
            </div>
          </div>

          <div class="subsection">
            <p>Forma de Pagamento</p>
          </div>
          <hr />
          <div class="row">
            <div class="ajuste">
              <input
                type="radio"
                id="cartao_de_credito"
                name="forma_de_pagamento"
                value="cartao_de_credito"
                v-model="forma_de_pagamento"
              />
              <label for="cartao_de_credito">Cartão de Crédito</label>
            </div>
            <div class="ajuste">
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

          <div class="row">
            <div class="ajuste">
              <label for="nome_no_cartao">Nome no Cartão</label>
              <input
                type="text"
                placeholder="Nome impresso do cartão"
                name="nome_no_cartao"
                class="form-control custom-input"
                v-model="nome_no_cartao"
              />
            </div>

            <div class="col-md-6">
              <div class="row">
                <div class="ajuste_data_mes">
                  <label>Data de Expiração</label><br />
                  <select
                    id="mes_expiracao"
                    class="form-control custom-input"
                    v-model="data_de_expiracao_mes"
                  >
                    <option value="" disabled selected>Mês</option>
                    <option value="01">01</option>
                  </select>
                </div>

                <div class="ajuste_data_ano">
                  <select
                    id="ano_expiracao"
                    class="form-control custom-input"
                    v-model="data_de_expiracao_ano"
                  >
                    <option value="" disabled selected>Ano</option>
                    <option value="2020">2020</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="ajuste">
              <label for="numero_cartao">Número do Cartão</label>
              <input
                type="text"
                name="numero_cartao"
                placeholder="55555 55555 55555 55555"
                class="form-control custom-input"
                v-model="numero_cartao"
              />
            </div>

            <div class="ajuste">
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
export default {
  name: "Cadastro",
  data() {
    return {
      persons: [],
      nome: "",
      email: "",
      cpf: "",
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
    setInterval(this.data_criacao, 1000);
  },
  watch: {
    persons: {
      handler() {
        console.log("Persons array changed!");
        localStorage.setItem("persons", JSON.stringify(this.persons));
      },
      deep: true,
    },
  },
  methods: {
    add_person() {
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
      /*this.persons.forEach((element) => {
        console.log("chamado!");
        console.log(element.nome);
        console.log(element.email);
        console.log(element.cpf);
        console.log(element.endereco);
        console.log(element.estado);
        console.log(element.cep);
        console.log(element.cidade);
        console.log(element.forma_de_pagamento);
        console.log(element.nome_no_cartao);
        console.log(element.data_de_expiracao_mes);
        console.log(element.data_de_expiracao_ano);
        console.log(element.numero_cartao);
        console.log(element.codigo_seguranca);
        console.log(element.criado_em);
      });*/
    },
    saveFile: function() {
      const data = JSON.stringify(this.persons);
      window.localStorage.setItem("persons", data);
      console.log(JSON.parse(window.localStorage.getItem("persons")));
    },
    data_criacao: function() {
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
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
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

@media screen and (min-width: 700px) {
  .container {
    flex-direction: column;
    width: 60%;
    display: flex;
    align-items: center;
  }
}
</style>
