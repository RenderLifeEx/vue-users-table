<template>
  <div class="container">
    <Filters v-if="users?.length" />
    <div class="container" v-if="users?.length">
      <table class="responsive-table">
        <thead>
          <tr>
            <template v-for="(head, index) in TableHeads" :key="index">
              <UsersTableHead
                :name="head.title"
                :sortKey="head.key"
                :sortType="sortType"
                :sortDirection="sortDirection"
                @handle-sort-click="handleSortClick"
              />
            </template>
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
    <div v-else-if="!isLogging" class="infoContainer infoContainer_loading">
      <span>Loading...</span>
    </div>
    <div v-else class="errorContainer infoContainer_error">
      <span>No users matching the specified parameters was found</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed, ref } from 'vue';
  import { useUserStore } from "@/stores/users";
  import Filters from '@/components/UsersFilters/UsersFilters.vue';
  import UsersTableHead from '@/components/UsersTable/UsersTableHead.vue';
  import { SortType } from "@/models/sort.model";
  import { TableHeads } from '@/constants/constants';

  const userStore = useUserStore();
  const isLogging = ref(userStore.isLoading);

  onMounted(() => {
    userStore.fetchUsers();
  })

  const users = computed(() => {
    return userStore.getSortedAndFilteredUsers;
  })

  const sortType = computed(() => {
    return userStore.activeSortValues.type;
  })

  const sortDirection = computed(() => {
    return userStore.activeSortValues.direction;
  })

  const handleSortClick = (sortType: SortType | null) => {
    userStore.doSortUser(sortType);
  }
</script>

<style scoped lang="scss">
    @import './styles.scss';
</style>