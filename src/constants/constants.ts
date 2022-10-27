import { FilterType } from "@/models/filter.model";
import { SortType } from "@/models/sort.model";

export const FilterBlocks = [
    {
        key: FilterType.USERS_FILTERS_GENDER_KEY,
        title: 'Gender'
    },
    {
        key: FilterType.USERS_FILTERS_DEPARTMENT_KEY,
        title: 'Gender'
    },
    {
        key: FilterType.USERS_FILTERS_CITY_KEY,
        title: 'Gender'
    },
]

export const TableHeads = [
    {
        key: null,
        title: 'Id'
    },
    {
        key: SortType.USERS_FILTERS_NAME_KEY,
        title: 'Name'
    },
    {
        key: SortType.USERS_FILTERS_AGE_KEY,
        title: 'Age'
    },
    {
        key: SortType.USERS_FILTERS_GENDER_KEY,
        title: 'Gender'
    },
    {
        key: SortType.USERS_FILTERS_DEPARTMENT_KEY,
        title: 'Department'
    },
    {
        key: SortType.USERS_FILTERS_ADDRESS_KEY,
        title: 'Address'
    }
]