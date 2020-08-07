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
        <q-table :data="data" :columns="columns" row-key="name"></q-table>
      </div>
    </div>
  </div>
</template>

<script>
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
      data: [
        {
          id: "1",
          criado_em: "2020-08-05T23:08:42.261Z",
          nome: "Merlin Jakubowski",
          email: "Betsy93@yahoo.com",
          cpf: 47,
        },
        {
          id: "2",
          criado_em: "2020-08-05T14:34:33.719Z",
          nome: "Richie Bashirian",
          email: "Dallin.Friesen33@yahoo.com",
          cpf: 47,
        },
        {
          id: "3",
          criado_em: "2020-08-06T04:33:22.977Z",
          nome: "Claudine Bradtke",
          email: "Delia.Cormier13@hotmail.com",
          cpf: 28,
        },
        {
          id: "4",
          criado_em: "2020-08-05T15:44:59.756Z",
          nome: "Hardy Connelly",
          email: "Rylan_Reynolds75@yahoo.com",
          cpf: 92,
        },
        {
          id: "5",
          criado_em: "2020-08-06T09:10:45.105Z",
          nome: "Abe Welch",
          email: "Claud_Frami56@gmail.com",
          cpf: 15,
        },
      ],
    };
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
