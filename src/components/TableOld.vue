<template>

  <div class="table">
    <div class="table__inner">

      <!-- Filters -->

      <div class="table__filters">

        <div class="table__filters-item">

          <div class="table__filters-item-title">
            Пол
          </div>

          <div class="table__filters-item-options-list">

            <label v-for="filter in genderFilters" :key="filter.id" :for="filter.id" class="table__filters-item-option">

              <input :id="filter.id"
                     type="checkbox"
                     :value="filter.name"
                     :checked="filter.isActive"
                     v-on:change="filterList(filter.name)">

              <span class="table__filters-item-option-name">
                  {{filter.name}} ({{filter.usersCount}})
              </span>

            </label>

          </div>

        </div>

        <div class="table__filters-item">

          <div class="table__filters-item-title">
            Департамент
          </div>

          <div class="table__filters-item-options-list">

            <label v-for="filter in departmentFilters" :key="filter.id" :for="filter.id" class="table__filters-item-option">

              <input :id="filter.id"
                     type="checkbox"
                     :value="filter.name"
                     :checked="filter.isActive"
                     v-on:change="filterList(filter.name)">

              <span class="table__filters-item-option-name">
                  {{filter.name}} ({{filter.usersCount}})
              </span>

            </label>

          </div>

        </div>

        <div class="table__filters-item">

          <div class="table__filters-item-title">
            Город
          </div>

          <div class="table__filters-item-options-list">

            <label v-for="filter in cityFilters" :key="filter.id" :for="filter.id" class="table__filters-item-option">

              <input :id="filter.id"
                     type="checkbox"
                     :value="filter.name"
                     :checked="filter.isActive"
                     v-on:change="filterList(filter.name)">

              <span class="table__filters-item-option-name">
                  {{filter.name}} ({{filter.usersCount}})
              </span>

            </label>
          </div>

        </div>

      </div>

      <!-- END Filters -->

      <div class="table__rows">

        <!-- Order row -->

        <div class="table__row table__row_head">

          <div v-on:click="changeOrder('name')"
               v-bind:class="[
                (orderKey === 'name') ? 'table__td_active-sort' : '',
                (orderKey === 'name' && orderDirection === 'asc') ? 'table__td_sort-asc' : 'table__td_sort-desc',
                orderFilterClass
               ]"
          >
            Имя
          </div>

          <div v-on:click="changeOrder('age')"
               v-bind:class="[
                (orderKey === 'age') ? 'table__td_active-sort' : '',
                (orderKey === 'age' && orderDirection === 'asc') ? 'table__td_sort-asc' : 'table__td_sort-desc',
                orderFilterClass
               ]"
          >
            Возраст
          </div>

          <div v-on:click="changeOrder('gender')"
               v-bind:class="[
                (orderKey === 'gender') ? 'table__td_active-sort' : '',
                (orderKey === 'gender' && orderDirection === 'asc') ? 'table__td_sort-asc' : 'table__td_sort-desc',
                orderFilterClass
               ]"
          >
            Пол
          </div>

          <div v-on:click="changeOrder('department')"
               v-bind:class="[
                (orderKey === 'department') ? 'table__td_active-sort' : '',
                (orderKey === 'department' && orderDirection === 'asc') ? 'table__td_sort-asc' : 'table__td_sort-desc',
                orderFilterClass
               ]"
          >
            Департамент
          </div>

          <div v-on:click="changeOrder('city')"
               v-bind:class="[
                (orderKey === 'city') ? 'table__td_active-sort' : '',
                (orderKey === 'city' && orderDirection === 'asc') ? 'table__td_sort-asc' : 'table__td_sort-desc',
                orderFilterClass,
                orderFilterAddressClass
               ]"
          >
            Адрес
          </div>

        </div>

        <!-- END Order row -->

        <!-- Users rows -->

        <div v-for="user in users" :key="user.id" :data-key="user.id" class="table__row">

          <div class="table__td">
            {{ user.name }}
          </div>

          <div class="table__td">
            {{ user.age }}
          </div>

          <div class="table__td">
            {{ user.gender }}
          </div>

          <div class="table__td">
            {{ user.department }}
          </div>

          <div class="table__td table__td_address">
            {{ user.address.city }}, {{ user.address.street }}
          </div>

        </div>

        <!-- END Users rows -->

      </div>

    </div>
  </div>

</template>

<script>

import { mapMutations } from 'vuex';

export default {
  name: 'UsersSortedTable',
  data: function (){
    return {
      orderFilterClass: 'table__td',
      orderFilterAddressClass: 'table__td_address'
    };
  },
  methods: {
    ...mapMutations([
      'changeUsersListOrder',
      'filterUsersList'
    ]),
    changeOrder: function (orderKey) {
      this.changeUsersListOrder(orderKey);
    },
    filterList: function (filter) {
      this.filterUsersList(filter);
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsersForSortTable;
    },
    orderKey() {
      return this.$store.getters.getUsersOrderKey;
    },
    orderDirection() {
      return this.$store.getters.getUsersOrderDirection;
    },
    genderFilters() {
      return this.$store.getters.getUsersFiltersGender;
    },
    departmentFilters() {
      return this.$store.getters.getUsersFiltersDepartment;
    },
    cityFilters() {
      return this.$store.getters.getUsersFiltersCity;
    },
  },
  beforeCreate() {
    if( !this.$store.getters.getUsersForSortTable.length ) {
      this.$store.dispatch('loadUsers');
    }
  }
};
</script>


<script>
// export default {
//   name: 'UsersSortedTable',
//   data: function (){
//     return {
//       orderFilterClass: 'table__td',
//       orderFilterAddressClass: 'table__td_address'
//     };
//   },
//   methods: {
//     changeOrder: function (orderKey) {
//       this.changeUsersListOrder(orderKey);
//     },
//     filterList: function (filter) {
//       this.filterUsersList(filter);
//     }
//   },
//   computed: {
//     users() {
//       return this.$store.getters.getUsersForSortTable;
//     },
//     orderKey() {
//       return this.$store.getters.getUsersOrderKey;
//     },
//     orderDirection() {
//       return this.$store.getters.getUsersOrderDirection;
//     },
//     genderFilters() {
//       return this.$store.getters.getUsersFiltersGender;
//     },
//     departmentFilters() {
//       return this.$store.getters.getUsersFiltersDepartment;
//     },
//     cityFilters() {
//       return this.$store.getters.getUsersFiltersCity;
//     },
//   },
//   beforeCreate() {
//     if( !this.$store.getters.getUsersForSortTable.length ) {
//       this.$store.dispatch('loadUsers');
//     }
//   }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  $mobile-width : 899px;

  .table {
    display: block;
    max-width: 1200px;
    margin: 50px auto;
    border: 1px solid black;
    overflow: auto;

    @media (max-width:$mobile-width) {
      max-width: 100%;
    }

  }

  .table__inner {
    display: block;
    position: relative;

    @media (max-width:$mobile-width) {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
    }

  }

  // Filters

  .table__filters {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: start;
    border: 1px solid black;
    border-width: 0 0 1px 0;
    background-color: rgba(134, 134, 134, 0.48);

    @media (max-width:$mobile-width) {
      border-width: 0 1px 0 0;
      width: 120px;
      min-width: 120px;
      flex-wrap: wrap;
    }

    &-item {
      display: block;
      width: 33.3%;
      border: 1px solid black;
      border-width: 0 1px 0 0;
      padding: 10px;
      word-break: break-word;

      &:last-child {
        border-width: 0;

        @media (max-width:$mobile-width) {
          border-width: 0 0 1px 0;
        }

      }

      @media (max-width:$mobile-width) {
        width: 100%;
        border-width: 0 0 1px 0;
      }

    }

    &-item-title {
      padding-bottom: 10px;
      font-weight: bold;
    }

    &-item-option {
      display: block;
      text-align: left;
      cursor: pointer;
    }

  }

  // Rows

  .table__rows {
    display: block;
    width: 100%;
  }

  .table__row {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: start;
    border-bottom: 1px solid black;
  }

  .table__td {
    display: block;
    width: 20%;
    min-width: 17%;
    border-right: 1px solid black;
    word-wrap: break-word;
    padding: 5px;

    &:last-child {
      border-width: 0;
    }

    @media (max-width:$mobile-width) {
      width: 25%;
      min-width: 21%;
    }

  }

  .table__td_active-sort {
    background-color: gray;
    color: white;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid white;
      bottom: 4px;
      left: 50%;
      margin-left: -5px;
    }

  }

  .table__td_sort-asc {
    &:before {
        transform: rotate(180deg);
    }
  }

  .table__td_sort-desc {
    &:before {
        transform: rotate(0deg);
    }
  }

  .table__row_head {

    .table__td {
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      padding-top: 15px;
      padding-bottom: 15px;

      &:hover {
        background-color: gray;
        color: white;
      }

    }

  }

  .table__td_address {
    @media (max-width:$mobile-width) {
      display: none;
    }
  }


</style>