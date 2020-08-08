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
      <a class="active" href="#" v-on:click="change_to_lista">Listas </a>
      <i class="fas fa-dot-circle"></i>
      <a href="#" v-on:click="change_to_cadastro">Cadastro</a>
    </div>
    <div>
      <div class="title_section">
        <h1>{{ component.name }}</h1>
      </div>
    </div>

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
import Lista from "./components/Lista.vue";

export default {
  name: "App",
  components: {
    Cadastro,
    Lista,
  },
  data() {
    return {
      component: Cadastro,
    };
  },
  methods: {
    change_to_cadastro() {
      this.component = Cadastro;
    },
    change_to_lista() {
      this.component = Lista;
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

a:any-link {
  color: white;
  padding: 20px;
}

.fas,
.fa-dot-circle {
  font-size: 10px;
  padding-bottom: 2px;
}

/* Header/logo Title */
.header {
  padding: 10px;
  vertical-align: middle;
  text-align: right;
  background: #17222d;
  color: white;
}

/* Column container */
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

/* custom column */
.custom {
  flex: 50%;
  background-color: white;
  padding: 10px;
}

.custom_month {
  flex: 50%;
  background-color: white;
  padding-left: 10px;
  padding-top: 10px;
}

.custom_year {
  flex: 50%;
  background-color: white;
  padding-left: 10px;
  padding-top: 42px;
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
  border-radius: 6%;
}

/* Footer */
.footer {
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  background: #1188ee;
  color: white;
  position: static;
  bottom: 0;
  width: 100%;
}

label {
  color: #445566;
}

.subsection {
  padding-top: 10px;
  color: #1188ee;
}

.note {
  font-size: 80%;
}

.custom-input {
  background: #eff4f9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
}

@media screen and (max-width: 700px) {
  .title_section {
    padding: 10px;
    vertical-align: middle;
    text-align: left;
    background: #eff4f9;
    color: #445566;
    padding-left: 5%;
  }
  .custom_month {
    flex: 50%;
    background-color: white;
    padding-left: 10px;
    padding-top: 10px;
  }

  .custom_year {
    flex: 50%;
    background-color: white;
    padding-left: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media screen and (min-width: 700px) {
  .title_section {
    padding: 10px;
    vertical-align: middle;
    text-align: left;
    background: #eff4f9;
    color: #445566;
    padding-left: 20%;
  }
}
</style>
