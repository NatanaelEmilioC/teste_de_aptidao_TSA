<template>
  <div class="container">
    <div class="title_section">
      <h1>Lista</h1>
    </div>

    <div class="container inner">
      <div class="row">
        <div class="ajuste">
          <div class="subsection">
            <p>Lista de Clientes</p>
          </div>
          <hr />
          <div class="label">
            <p>Nome do Cliente</p>
          </div>

          <!--<v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-on:keyup.enter="myFunction"
          >
          </v-text-field>-->
          <div class="row">
            <table border="1">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>Email</td>
                  <td>Cpf</td>
                  <td>Criado em</td>
                </tr>
              </thead>

              <tr v-for="person in persons" :key="person.id">
                <td>{{ person.nome }}</td>
                <td>{{ person.email }}</td>
                <td>{{ person.cpf }}</td>
                <td>{{ person.criado_em }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listagem",
  data() {
    return {
      persons: [
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
        {
          id: "6",
          criado_em: "2020-08-06T07:36:52.418Z",
          nome: "Derick Morissette",
          email: "Herbert_Marquardt15@gmail.com",
          cpf: 19,
        },
        {
          id: "7",
          criado_em: "2020-08-06T00:02:30.535Z",
          nome: "Salvatore Spencer",
          email: "Zander18@hotmail.com",
          cpf: 63,
        },
        {
          id: "8",
          criado_em: "2020-08-05T18:51:07.352Z",
          nome: "Therese O'Hara",
          email: "Logan_Turner@yahoo.com",
          cpf: 11,
        },
        {
          id: "9",
          criado_em: "2020-08-06T04:50:46.657Z",
          nome: "Aida Sauer",
          email: "Katherine.Corwin@yahoo.com",
          cpf: 47,
        },
        {
          id: "10",
          criado_em: "2020-08-05T20:16:15.149Z",
          nome: "Daisy Schmeler",
          email: "Chelsie69@hotmail.com",
          cpf: 34,
        },
        {
          id: "11",
          criado_em: "2020-08-06T03:50:45.879Z",
          nome: "Hollie Walsh I",
          email: "Hannah_Jaskolski58@hotmail.com",
          cpf: 18,
        },
        {
          id: "12",
          criado_em: "2020-08-06T04:49:56.028Z",
          nome: "Ms. Major Gleason",
          email: "Lorena.White86@gmail.com",
          cpf: 69,
        },
        {
          id: "13",
          criado_em: "2020-08-06T00:14:23.257Z",
          nome: "Eldred Walter V",
          email: "Nickolas_Altenwerth@gmail.com",
          cpf: 17,
        },
        {
          id: "14",
          criado_em: "2020-08-06T01:58:26.367Z",
          nome: "Natasha Jones",
          email: "Baby2@hotmail.com",
          cpf: 80,
        },
        {
          id: "15",
          criado_em: "2020-08-05T17:01:15.260Z",
          nome: "Xzavier Bartell I",
          email: "Orland_Dibbert@gmail.com",
          cpf: 51,
        },
        {
          id: "16",
          criado_em: "2020-08-05T21:30:07.634Z",
          nome: "Kendra Stracke",
          email: "Casandra9@gmail.com",
          cpf: 45,
        },
        {
          id: "17",
          criado_em: "2020-08-06T10:54:26.289Z",
          nome: "Simeon Zemlak",
          email: "Estell53@hotmail.com",
          cpf: 52,
        },
        {
          id: "18",
          criado_em: "2020-08-05T19:29:38.353Z",
          nome: "Noel Mueller",
          email: "Clemmie_Larson2@yahoo.com",
          cpf: 1,
        },
        {
          id: "19",
          criado_em: "2020-08-06T12:59:55.611Z",
          nome: "Mattie Ernser",
          email: "Simeon65@hotmail.com",
          cpf: 43,
        },
        {
          id: "20",
          criado_em: "2020-08-06T12:03:12.672Z",
          nome: "Dawson Thompson",
          email: "Amya3@gmail.com",
          cpf: 60,
        },
        {
          id: "21",
          criado_em: "2020-08-06T07:35:40.574Z",
          nome: "Ms. Mikayla Wintheiser",
          email: "Christ26@hotmail.com",
          cpf: 78,
        },
        {
          id: "22",
          criado_em: "2020-08-06T03:42:09.410Z",
          nome: "Zachariah Nitzsche",
          email: "Madelyn.Wilkinson@yahoo.com",
          cpf: 43,
        },
        {
          id: "23",
          criado_em: "2020-08-06T13:24:25.021Z",
          nome: "Tressie Gislason",
          email: "Milo96@gmail.com",
          cpf: 15,
        },
        {
          id: "24",
          criado_em: "2020-08-05T14:32:51.484Z",
          nome: "Aletha Lockman",
          email: "Mozelle_Schimmel24@gmail.com",
          cpf: 96,
        },
        {
          id: "25",
          criado_em: "2020-08-06T09:16:47.985Z",
          nome: "Mozelle Kub",
          email: "Ian27@gmail.com",
          cpf: 57,
        },
        {
          id: "26",
          criado_em: "2020-08-05T14:11:05.485Z",
          nome: "Elda Nienow Sr.",
          email: "Queen_Rippin96@yahoo.com",
          cpf: 33,
        },
        {
          id: "27",
          criado_em: "2020-08-05T14:01:38.816Z",
          nome: "Jayda Fahey",
          email: "Katherine_Labadie@gmail.com",
          cpf: 74,
        },
        {
          id: "28",
          criado_em: "2020-08-06T04:29:10.370Z",
          nome: "Filomena Kunze IV",
          email: "Alia40@gmail.com",
          cpf: 25,
        },
        {
          id: "29",
          criado_em: "2020-08-06T01:52:03.795Z",
          nome: "Arnaldo Lowe",
          email: "Monserrat.Schinner@hotmail.com",
          cpf: 77,
        },
        {
          id: "30",
          criado_em: "2020-08-05T15:00:59.970Z",
          nome: "Mrs. Frank Ritchie",
          email: "Josiah.Barrows@gmail.com",
          cpf: 6,
        },
        {
          id: "31",
          criado_em: "2020-08-05T22:21:06.283Z",
          nome: "Miss Kaycee Berge",
          email: "Casper.Greenfelder91@gmail.com",
          cpf: 99,
        },
        {
          id: "32",
          criado_em: "2020-08-05T19:07:09.828Z",
          nome: "Thad Hagenes",
          email: "Jo.Torp61@yahoo.com",
          cpf: 89,
        },
        {
          id: "33",
          criado_em: "2020-08-05T23:29:01.589Z",
          nome: "Pearl Mayert",
          email: "Sincere34@hotmail.com",
          cpf: 35,
        },
        {
          id: "34",
          criado_em: "2020-08-05T16:27:26.532Z",
          nome: "Prince Corkery",
          email: "Adele8@gmail.com",
          cpf: 27,
        },
        {
          id: "35",
          criado_em: "2020-08-05T23:08:25.513Z",
          nome: "Lucas Osinski",
          email: "Randal.Walsh@hotmail.com",
          cpf: 71,
        },
        {
          id: "36",
          criado_em: "2020-08-05T18:42:01.896Z",
          nome: "Clara Heathcote",
          email: "Melody88@gmail.com",
          cpf: 7,
        },
        {
          id: "37",
          criado_em: "2020-08-06T10:46:36.268Z",
          nome: "Kris Vandervort",
          email: "Edyth.Legros44@yahoo.com",
          cpf: 97,
        },
        {
          id: "38",
          criado_em: "2020-08-06T01:58:54.191Z",
          nome: "Vidal Gusikowski",
          email: "Izabella_McLaughlin84@yahoo.com",
          cpf: 26,
        },
        {
          id: "39",
          criado_em: "2020-08-05T15:54:35.461Z",
          nome: "Jarvis Graham",
          email: "Gregoria.Aufderhar58@yahoo.com",
          cpf: 10,
        },
        {
          id: "40",
          criado_em: "2020-08-06T00:24:44.989Z",
          nome: "Santos Kilback",
          email: "Amira_Funk@hotmail.com",
          cpf: 87,
        },
        {
          id: "41",
          criado_em: "2020-08-06T13:06:29.755Z",
          nome: "Trent Gorczany",
          email: "Noah89@yahoo.com",
          cpf: 99,
        },
        {
          id: "42",
          criado_em: "2020-08-05T18:10:45.475Z",
          nome: "Ms. Izabella Wyman",
          email: "Reggie_Leuschke77@yahoo.com",
          cpf: 41,
        },
        {
          id: "43",
          criado_em: "2020-08-05T15:25:06.783Z",
          nome: "Cole Welch",
          email: "Jaida.Waelchi@gmail.com",
          cpf: 81,
        },
        {
          id: "44",
          criado_em: "2020-08-05T20:16:31.602Z",
          nome: "Miss Willy Sipes",
          email: "Louvenia34@yahoo.com",
          cpf: 87,
        },
        {
          id: "45",
          criado_em: "2020-08-06T02:33:01.399Z",
          nome: "Treva Beier",
          email: "Drake_Haley80@hotmail.com",
          cpf: 17,
        },
        {
          id: "46",
          criado_em: "2020-08-05T15:25:28.514Z",
          nome: "Nat Lindgren",
          email: "Wilfredo84@gmail.com",
          cpf: 91,
        },
        {
          id: "47",
          criado_em: "2020-08-06T01:26:20.513Z",
          nome: "Makenzie Goyette",
          email: "Marge.Gibson@hotmail.com",
          cpf: 50,
        },
        {
          id: "48",
          criado_em: "2020-08-06T07:02:36.454Z",
          nome: "Georgiana Morar",
          email: "Kelley88@yahoo.com",
          cpf: 47,
        },
        {
          id: "49",
          criado_em: "2020-08-05T22:36:14.954Z",
          nome: "Estrella Ankunding",
          email: "Mathew37@gmail.com",
          cpf: 47,
        },
        {
          id: "50",
          criado_em: "2020-08-05T22:35:37.341Z",
          nome: "Emmanuel Mosciski",
          email: "Trudie_Monahan@yahoo.com",
          cpf: 61,
        },
      ],
    };
  },
};
</script>
