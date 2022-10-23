<template>
  <div class="container">
    <slot />
    <slot name="desc" />
    <div>{{ myDate }}</div>
    <div class="filters">
    </div>
    <table class="responsive-table">
      <caption>Top 10 Grossing Animated Films of All Time</caption>
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
        <tr v-for="user in myUsers" :key="user.id">
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
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  myUsers: { type: Array, required: true },
  myDate: { type: String, required: true }
})

</script>

<style scoped lang="scss">
    @import './styles.scss';
</style>