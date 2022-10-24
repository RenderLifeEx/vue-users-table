<template>
  <div class="filterGroups">
    <div class="filterItem">
      <div class="filterItem__title">Gender</div>
      <div class="filterItem__list">
        <label v-for="filter in filtersGenderOptions" :key="filter.id" :for="filter.id" class="filterItem__option">
          <input :id="filter.id"
            type="checkbox"
            :value="filter.name"
            :checked="filter.isActive"
            :disabled="filter.disabled"
            v-on:change="filterChange(FilterType.USERS_FILTERS_GENDER_KEY, filter.name)">
          <span class="filterItem__option__name" :class="{ filterItem__option__name_disabled: filter.disabled }">
            {{filter.name}} ({{filter.usersCount}})
          </span>
        </label>
      </div>
    </div>
    <div class="filterItem">
      <div class="filterItem__title">Department</div>
      <div class="filterItem__list">
        <label v-for="filter in filtersDepartmentOptions" :key="filter.id" :for="filter.id" class="filterItem__option">
          <input :id="filter.id"
            type="checkbox"
            :value="filter.name"
            :checked="filter.isActive"
            :disabled="filter.disabled"
            v-on:change="filterChange(FilterType.USERS_FILTERS_DEPARTMENT_KEY, filter.name)">
          <span class="filterItem__option__name" :class="{ filterItem__option__name_disabled: filter.disabled }">
            {{filter.name}} ({{filter.usersCount}})
          </span>
        </label>
      </div>
    </div>
    <div class="filterItem">
      <div class="filterItem__title">City</div>
      <div class="filterItem__list">
        <label v-for="filter in filtersCityOptions" :key="filter.id" :for="filter.id" class="filterItem__option">
          <input :id="filter.id"
            type="checkbox"
            :value="filter.name"
            :checked="filter.isActive"
            :disabled="filter.disabled"
            v-on:change="filterChange(FilterType.USERS_FILTERS_CITY_KEY, filter.name)">
          <span class="filterItem__option__name" :class="{ filterItem__option__name_disabled: filter.disabled }">
            {{filter.name}} ({{filter.usersCount}})
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed } from 'vue'
  import { useUserStore } from "@/stores/users";
  import { FilterType, ActiveFiltersValues } from "@/models/filter.model";

  export default {
    setup () {
      const userStore = useUserStore();

      const filtersGenderOptions = computed(() => {
        return userStore.getUsersFiltersGenderOptions
      })

      const filtersDepartmentOptions = computed(() => {
        return userStore.getUsersFiltersDepartmentOptions
      })

      const filtersCityOptions = computed(() => {
        return userStore.getUsersFiltersCityOptions
      })

      const filterChange = (filterType: keyof ActiveFiltersValues, value: string) => {
        userStore.filterChange(filterType, value);
      }

      return { filtersGenderOptions, filtersDepartmentOptions, filtersCityOptions, filterChange, FilterType }
    }
  }
</script>

<style scoped lang="scss">
    @import './styles.scss';
</style>