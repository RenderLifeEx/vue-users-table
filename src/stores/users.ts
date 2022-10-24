import { User } from "@/models/user.model";
import { FiltersList, ActiveFiltersValues } from "@/models/filter.model";
import { defineStore } from "pinia";
import API from '@/services/API'
import { FilterType, Option } from "@/models/filter.model";

import { filterUsersList } from '@/utils/users'
import { filterOptionsFromFilteredData } from '@/utils/filters'

export type RootState = {
    isLoading: boolean
    users: User[]
    usersListFilters: FiltersList
    getSortedAndFilteredUsers: User[]
    getUsersFiltersGenderOptions: Option[]
    getUsersFiltersDepartmentOptions: Option[]
    getUsersFiltersCityOptions: Option[]
};

export const useUserStore = defineStore("user", {
    state: () => (<RootState>{
        isLoading: false,
        users: [],
        usersListFilters : {
            activeFiltersValuesList: {
                gender : [],
                department : [],
                city: []
            },
        },
        getSortedAndFilteredUsers: [],
        getUsersFiltersGenderOptions: [],
        getUsersFiltersDepartmentOptions: [],
        getUsersFiltersCityOptions: []
    }),
    getters: {
        getSortedAndFilteredUsers(state) {
            const filterParam = state.usersListFilters.activeFiltersValuesList
            return state.users.filter(user => filterUsersList(user, filterParam))
        },
        getUsersFiltersGenderOptions(state) {
            const filterParam = state.usersListFilters.activeFiltersValuesList
            return filterOptionsFromFilteredData(state.users, this.getSortedAndFilteredUsers, filterParam, FilterType.USERS_FILTERS_GENDER_KEY);
        },
        getUsersFiltersDepartmentOptions(state) {
            const filterParam = state.usersListFilters.activeFiltersValuesList
            return filterOptionsFromFilteredData(state.users, this.getSortedAndFilteredUsers, filterParam, FilterType.USERS_FILTERS_DEPARTMENT_KEY);
        },
        getUsersFiltersCityOptions(state) {
            const filterParam = state.usersListFilters.activeFiltersValuesList
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
        filterChange(filterType: keyof ActiveFiltersValues, value: string) {
            const activeList = this.usersListFilters.activeFiltersValuesList[filterType]
            if (activeList.includes(value)) {
                this.usersListFilters.activeFiltersValuesList[filterType] = activeList.filter(i => i !== value)
            } else {
                this.usersListFilters.activeFiltersValuesList[filterType].push(value)
            }
        }
    }
})

// export const useMainStore = defineStore({
//     id: "mainStore",

//     state: () => ({
//         items: [],
//     } as RootState),

//     actions: {
//         createNewItem(item: Item) {
//             if (!item) return;

//             this.items.push(item);
//         },

//         updateItem(id: string, payload: Item) {
//             if (!id || !payload) return;

//             const index = this.findIndexById(id);

//             if (index !== -1) {
//                 this.items[index] = generateFakeData();
//             }
//         },

//         deleteItem(id: string) {
//             const index = this.findIndexById(id);

//             if (index === -1) return;

//             this.items.splice(index, 1);
//         },

//         findIndexById(id: string) {
//             return this.items.findIndex((item) => item.id === id);
//         },
//     },
// });