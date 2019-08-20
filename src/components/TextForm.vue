<template>
  <input v-model="newTask" type="text" placeholder="タスク" class="input" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextForm",
  model: {
    prop: "newTask",
    event: "input"
  },
  computed: {
    newTask: {
      get(): string {
        return this.$store.getters.newTask;
      },
      set(value: string) {
        this.$store.commit("setNewTask", value);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.input {
  border: 1px solid;
  margin: 40px 0px 10px 10px;
}
</style>
