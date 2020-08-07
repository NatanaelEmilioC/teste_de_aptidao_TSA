<template>
  <div id="app">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"
      integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito"
      rel="stylesheet"
    />

    <div class="header">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Listas</a>
      <a href="#"><i class="fa fa-fw fa-search"></i> Cadastro</a>
    </div>

    <button v-on:click="toggle">Toggle</button>
    <component v-bind:is="component" />
    <!-- Footer -->
    <div class="footer">
      <p>
        Natanael E. Costa - 2020
      </p>
    </div>
  </div>
</template>

<script>
import Cadastro from "./components/Cadastro.vue";
import Listagem from "./components/Listagem.vue";

export default {
  name: "App",
  components: {
    Cadastro,
    Listagem,
  },
  data() {
    return {
      component: "Cadastro",
    };
  },
  methods: {
    toggle() {
      if (this.component === Cadastro) {
        this.component = Listagem;
      } else {
        this.component = Cadastro;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Nunito;
  margin: 0;
}

/* Header/logo Title */
.header {
  padding: 10px;
  vertical-align: middle;
  text-align: right;
  background: #17222d;
  color: white;
}

.title_section {
  padding: 10px;
  vertical-align: middle;
  text-align: left;
  background: #eff4f9;
  color: #445566;
  padding-left: 20%;
}

/* Column container */
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

/* ajuste column */
.ajuste {
  flex: 50%;
  background-color: white;
  padding: 10px;
}

button {
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #1188ee;
  border-radius: 30%;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  background: #1188ee;
  color: white;
}

label {
  color: #445566;
}

.subsection {
  color: #1188ee;
}

.note {
  font-size: 80%;
}

.container {
  width: 100%;
  padding-left: 0%;
  padding-right: 0%;
}

.inner {
  width: 60%;
}

.custom-input {
  background: #eff4f9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row,
  .navbar {
    flex-direction: column;
  }
}
</style>
