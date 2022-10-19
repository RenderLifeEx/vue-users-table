<template>
  <h1>Список пользователей</h1>
  <h2>{{ msg }}</h2>
  <div class="colWrap">
    <div v-if="getUsers?.length > 0">
      <h3>Made By Getters</h3>
      <div
        v-for="(gettersUser, index) in getUsers"
        :key="index"
        style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px; margin-top: 10px;"
      >
        <code>{{gettersUser.id}} {{gettersUser.name}} {{gettersUser.address}}</code>
        <!-- <button @click="deleteItem(item.id)">Удалить</button>
        <button @click="updateItem(item.id)">Обновить</button> -->
      </div>
    </div>
    <div v-if="users?.length > 0">
      <h3>Made By Actions</h3>
      <div
        v-for="(user, index) in users"
        :key="index"
        style="background-color: #f944f9; padding: 10px; margin-bottom: 10px; margin-top: 10px;"
      >
        <code>{{user.id}} {{user.name}} {{user.address}}</code>
        <!-- <button @click="deleteItem(item.id)">Удалить</button>
        <button @click="updateItem(item.id)">Обновить</button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useUserStore } from "@/stores/users";
const store = useUserStore();

const msg = ref("Welcome to my Vuex Store");

const getUsers = computed(() => {
  return store.getUsers
})

const users = computed(() => {
  return store.users
})

onMounted(() => {
  store.fetchUsers();
})

// export default defineComponent({
//   name: 'App',
//   setup() {
//     const items = ref<Item[]>([]);
//     const mainStore = useMainStore();
//     onMounted(() => {

//       items.value = mainStore.items;
//     });
//     function createItem() {
//       mainStore.createNewItem(generateFakeData());
//     }
//     function deleteItem(id: string) {
//       mainStore.deleteItem(id);
//     }
//     function updateItem(id: string) {
//       mainStore.updateItem(id, generateFakeData());
//     }
//     return {
//       items,
//       createItem,
//       deleteItem,
//       updateItem,
//     };
//   },
// });

</script>


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
  grid-template-areas: ". .";
}
</style>
