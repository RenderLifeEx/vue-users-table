<template>
  <h1>Список пользователей</h1>
  <TableUsers
    myDate="19 октября 2022 г."
    :myUsers="users"
  >
    <template #desc><p>{{ msg }}</p></template>
    <h2>Таблица</h2>
  </TableUsers>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useUserStore } from "@/stores/users";
import TableUsers from '@/components/TableUsers/TableUsers.vue'

const msg = ref("Welcome to my Pinia Store");

//users="{{ users }}"
//const items = ref<Item[]>([]);

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
})

const users = computed(() => {
  return userStore.users;
})

console.log('users', users)

// const getUsers = computed(() => {
//   return userStore.getUsers
// })

//console.log('getUsers', getUsers)

</script>

<!-- Старый подход
<script>
  import Table from '@/components/Table.vue'

  export default {
    component: {
      Table
    }
  }

</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.colWrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
}
</style>
