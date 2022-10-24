<template>
  <div class="container">
    <Filters />
    <div class="container" v-if="users?.length">
      <table class="responsive-table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Department</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="7">Sources: <a href="https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json" rel="external">Github gist</a></td>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row" data-title="Id"><span>{{ user.id }}</span></th>
            <td data-title="Name"><span>{{ user.name }}</span></td>
            <td data-title="Age"><span>{{ user.age }}</span></td>
            <td data-title="Gender" data-type="currency"><span>{{ user.gender }}</span></td>
            <td data-title="Department" data-type="currency"><span>{{ user.department }}</span></td>
            <td data-title="Address" data-type="currency">{{ user.address.city }}, {{ user.address.street }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="errorContainer">
      Пользователей с заданными параметрами не найдено
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import { useUserStore } from "@/stores/users";
  import Filters from '@/components/UsersFilters/UsersFilters.vue'

  const userStore = useUserStore();

  onMounted(() => {
    userStore.fetchUsers();
  })

  const users = computed(() => {
    return userStore.getSortedAndFilteredUsers;
  })
</script>

<style scoped lang="scss">
    @import './styles.scss';
</style>