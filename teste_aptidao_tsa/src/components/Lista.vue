<template>
  <div class="container">
    <div class="subsection">
      Lista de Clientes
    </div>
    <hr />
    <div class="label">
      Nome do Cliente
    </div>
    <input type="text" class="form-control custom-input" />
    <div id="q-app">
      <!--id para utilização do quasar framework para geração da tabela dinâmica-->
      <div class="q-pa-md">
        <!--configuração da tabela dinâmica-->
        <q-table :data="persons" :columns="columns" row-key="name"></q-table
        ><!--loop para preenchimento da tabela dinâmica-->
      </div>
    </div>
  </div>
</template>

<script>
//carregando dados mocados para preenchimento da tabela quando vazia
import persons from "@/data/pessoas";

export default {
  name: "Lista",
  data() {
    return {
      //passagem da configuranção para as colunas da tabela dinâmica
      columns: [
        { name: "nome", label: "Nome", field: "nome", align: "left" },
        { name: "email", label: "Email", field: "email", align: "left" },
        { name: "cpf", label: "CPF", field: "cpf", align: "left" },
        {
          name: "criado_em",
          label: "Criado em",
          field: "criado_em",
          align: "left",
        },
      ],
      persons, //passagem dos dados para a tabela
    };
  },
  mounted() {
    console.log("App Mounted");
    if (localStorage.getItem("persons"))
      //verificação se o localstorage possui dados para inserir dados mockados caso vazio
      this.persons = JSON.parse(localStorage.getItem("persons"));
    //passagem dos dados do localstorage para a tabela
    else {
      this.persons = persons; //passagem dos dados mockados para a tabela
    }
  },
};
</script>

<style scoped>
/*style proprio para a tabela para ajuste para telas menores que 768px*/
@media screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
  .container {
    flex-direction: column;
    width: 100%;
    display: flex;
  }
}
/*style proprio para a tabela para ajuste para telas maiores que 768px*/
@media screen and (min-width: 768px) {
  .container {
    flex-direction: column;
    width: 60%;
    display: flex;
  }
}
</style>
