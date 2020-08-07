<template>
  <div class="container">
    <div class="subsection">
      <p>Lista de Clientes</p>
    </div>
    <hr />
    <div class="label">
      <p>Nome do Cliente</p>
    </div>

    <div id="q-app">
      <div class="q-pa-md">
        <q-table :data="persons" :columns="columns" row-key="name"></q-table>
      </div>
    </div>
  </div>
</template>

<script>
import persons from "@/data/persons";

export default {
  name: "Lista",
  data() {
    return {
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
      persons: persons,
    };
  },
  mounted() {
    console.log("App Mounted");
    if (localStorage.getItem("persons"))
      this.persons = JSON.parse(localStorage.getItem("persons"));
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
  }
}

@media screen and (min-width: 700px) {
  .container {
    flex-direction: column;
    width: 60%;
    display: flex;
  }
}
</style>
