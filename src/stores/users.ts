import { User } from "@/models/user.model";
import { ActiveFiltersValues } from "@/models/filter.model";
import { defineStore } from "pinia";
import API from '@/services/API'
import { FilterType, Option } from "@/models/filter.model";
import { SortType, ActiveSortValues, SortDirection } from "@/models/sort.model";

import { filterUsersList } from '@/utils/users';
import { filterOptionsFromFilteredData } from '@/utils/filters';
import { getSortValues, sortedUsers } from '@/utils/sort';

export type RootState = {
    isLoading: boolean
    users: User[]
    activeFiltersValues: ActiveFiltersValues
    activeSortValues: ActiveSortValues
    getSortedAndFilteredUsers: User[]
    getUsersFiltersGenderOptions: Option[]
    getUsersFiltersDepartmentOptions: Option[]
    getUsersFiltersCityOptions: Option[]
};

export const useUserStore = defineStore("user", {
    state: () => (<RootState>{
        isLoading: false,
        users: [],
        activeFiltersValues: {
            gender : [],
            department : [],
            city: []
        },
        activeSortValues: {
            type: null,
            direction: null
        },
        getSortedAndFilteredUsers: [],
        getUsersFiltersGenderOptions: [],
        getUsersFiltersDepartmentOptions: [],
        getUsersFiltersCityOptions: []
    }),
    getters: {
        getSortedAndFilteredUsers(state) {
            const filterParam = state.activeFiltersValues
            const sortParam = state.activeSortValues
            const filteredUsers = state.users.filter(user => filterUsersList(user, filterParam))
            return sortedUsers(filteredUsers, sortParam)
        },
        getUsersFiltersGenderOptions(state) {
            const filterParam = state.activeFiltersValues
            return filterOptionsFromFilteredData(state.users, this.getSortedAndFilteredUsers, filterParam, FilterType.USERS_FILTERS_GENDER_KEY);
        },
        getUsersFiltersDepartmentOptions(state) {
            const filterParam = state.activeFiltersValues
            return filterOptionsFromFilteredData(state.users, this.getSortedAndFilteredUsers, filterParam, FilterType.USERS_FILTERS_DEPARTMENT_KEY);
        },
        getUsersFiltersCityOptions(state) {
            const filterParam = state.activeFiltersValues
            return filterOptionsFromFilteredData(state.users, this.getSortedAndFilteredUsers, filterParam, FilterType.USERS_FILTERS_CITY_KEY);
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await API.request('bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json')
                this.users = data.data
                this.isLoading = true
            } catch (error) {
                alert(error)
                console.log(error)
            }
        },
        doFilterUsers(filterType: FilterType, value: string) {
            const activeList = this.activeFiltersValues[filterType]
            if (activeList.includes(value)) {
                this.activeFiltersValues[filterType] = activeList.filter(i => i !== value)
            } else {
                this.activeFiltersValues[filterType].push(value)
            }
        },
        doSortUser(sortType: SortType | null) {
            const { type, direction } = getSortValues(sortType, this.activeSortValues)
            this.activeSortValues.type = type
            this.activeSortValues.direction = direction
        }
    }
})
