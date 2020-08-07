<template>
  <div class="container">
    <div class="title_section">
      <h1>Cadastro</h1>
    </div>
    <div class="container inner">
      <div class="row">
        <div class="ajuste">
          <div class="form-todo form-group">
            <p>
              <label for="nome">Nome</label><br />
              <input
                placeholder=""
                type="text"
                name="nome"
                class="form-control custom-input"
              />
            </p>

            <p>
              <label form="email">Email</label><br />
              <input
                placeholder=""
                type="email"
                name="email"
                class="form-control custom-input"
              />
            </p>

            <p>
              <label for="cpf">CPF</label><br />
              <input
                placeholder="111.111.111-11"
                type="text"
                name="cpf"
                class="form-control custom-input"
              />
            </p>

            <div class="row">
              <div class="ajuste">
                <label for="endereco">Endereço</label><br />
                <input
                  placeholder="Rua, Numero e Bairro"
                  type="text"
                  name="endereco"
                  id="endereco"
                  class="form-control custom-input"
                />
              </div>

              <div class="ajuste">
                <label for="estado">Estado</label><br />
                <div class="custom_select">
                  <select
                    name="estado"
                    id="estado"
                    class="form-control custom-input"
                  >
                    <option value="" disabled selected
                      >Selecione o Estado</option
                    >
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
                />
              </div>

              <div class="ajuste">
                <label for="cidade">Cidade</label><br />
                <select id="cidade" class="form-control custom-input">
                  <option value="" disabled selected>Selecione a Cidade</option>
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
                />
                <label for="cartao_de_credito">Cartão de Crédito</label>
              </div>
              <div class="ajuste">
                <input
                  type="radio"
                  id="boleto_bancario"
                  name="forma_de_pagamento"
                  value="boleto_bancario"
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
                />
              </div>

              <div class="col-md-6">
                <label>Data de Expiração</label><br />
                <div class="row">
                  <div class="ajuste">
                    <select
                      id="mes_expiracao"
                      class="form-control custom-input"
                    >
                      <option value="" disabled selected>Mês</option>
                    </select>
                  </div>

                  <div class="ajuste">
                    <select
                      id="ano_expiracao"
                      class="form-control custom-input"
                    >
                      <option value="" disabled selected>Ano</option>
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
                />
              </div>

              <div class="ajuste">
                <label for="codigo_seguranca">Código de Segurança</label>
                <input
                  type="number"
                  name="codigo_seguranca"
                  placeholder="XXX"
                  class="form-control custom-input"
                />
              </div>
            </div>
            <hr />
            <br />
            <p>Seu cartão será debitado em R$ 49,00</p>

            <button type="submit">REALIZAR MATRÍCULA</button>

            <div class="note">
              <p>Informações seguras e criptografadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
};
</script>
