<template>
  <div class="container">
    <h1>Cadastro</h1>
    <hr />

    <div class="form-todo form-group">
      <p>
        <label>Nome</label><br />
        <input placeholder="" type="text" name="nome" class="form-control" />
      </p>

      <p>
        <label>Email</label><br />
        <input placeholder="" type="email" name="email" class="form-control" />
      </p>

      <p>
        <label>CPF</label><br />
        <input
          placeholder="111.111.111-11"
          type="text"
          name="cpf"
          class="form-control"
        />
      </p>

      <div class="row">
        <div class="column">
          <label>Endereço</label><br />
          <input
            placeholder="Rua, Numero e Bairro"
            type="text"
            name="endereco"
            class="form-control"
          />
        </div>

        <div class="column">
          <label for="estado">Estado</label><br />
          <select id="estado">
            <option value="" disabled selected>Selecione o Estado</option>
          </select>
        </div>
      </div>

      <p></p>

      <div class="row">
        <div class="column">
          <label>CEP</label><br />
          <input
            placeholder="22.222-000"
            type="text"
            name="cep"
            class="form-control"
          />
        </div>

        <div class="column">
          <label for="cidade">Cidade</label><br />
          <select id="cidade">
            <option value="" disabled selected>Selecione a Cidade</option>
          </select>
        </div>
      </div>
    </div>

    <h4>Forma de Pagamento</h4>
    <hr />

    <input
      type="radio"
      id="cartao_de_credito"
      name="forma_de_pagamento"
      value="cartao_de_credito"
    />

    <label for="cartao_de_credito">Cartão de Crédito</label>
    <input
      type="radio"
      id="boleto_bancario"
      name="forma_de_pagamento"
      value="boleto_bancario"
    />

    <label for="boleto_bancario">Boleto Bancário</label>

    <p></p>

    <div class="row">
      <div class="column">
        <label for="nome_no_cartao">Nome no Cartão</label>
        <input
          type="text"
          placeholder="Nome impresso do cartão"
          name="nome_no_cartao"
        />
      </div>

      <div class="column">
        <label>Data de Expiração</label><br />
        <select id="mes_expiracao">
          <option value="" disabled selected>Mês</option>
        </select>
        <select id="ano_expiracao">
          <option value="" disabled selected>Ano</option>
        </select>
      </div>
    </div>

    <p></p>

    <div class="row">
      <div class="column">
        <label for="numero_cartao">Número do Cartão</label>
        <input
          type="text"
          name="numero_cartao"
          placeholder="55555 55555 55555 55555"
        />
      </div>

      <div class="column">
        <lable for="codigo_seguranca">Código de Segurança</lable>
        <input type="number" name="codigo_seguranca" placeholder="XXX" />
      </div>
    </div>
    <hr />

    <h5>Seu cartão será debitado em R$ 49,00</h5>

    <button type="submit">REALIZAR MATRÍCULA</button>

    <h6>Informações seguras e criptografadas</h6>

    <footer>Natanael Emilio da Costa - 2020</footer>
  
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
}

.column {
  flex: 50%;
  width: 100%;
}

</style>
