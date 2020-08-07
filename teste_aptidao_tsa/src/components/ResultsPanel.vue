<template>
  <ResultsPanel :user-data="this.users" />
</template>
<script>
import ResultsPanel from "./ResultsPanel.vue";
export default {
  components: {
    ResultsPanel
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Kevin",
          email: "kevin@coderethinked.com"
        },
        {
          id: 2,
          name: "John",
          email: "John@coderethinked.com"
        },
        { id: 3, name: "Matt", email: "Matt@coderethinked.com" }
      ]
    };
  }
};
</script>