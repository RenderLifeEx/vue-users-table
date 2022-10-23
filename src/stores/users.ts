import { User } from "@/models/user.model";
import { defineStore } from "pinia";
import API from '@/services/API'
export type RootState = {
    users: User[];
};

export const useUserStore = defineStore("user", {
    state: () => ({
        users: [],
    }  as RootState),
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    actions: {
      async fetchUsers() {
        try {
            const data = await API.request('bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json')
            this.users = data.data
        } catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
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