
export enum FilterType {
    USERS_FILTERS_GENDER_KEY = 'gender',
    USERS_FILTERS_DEPARTMENT_KEY = 'department',
    USERS_FILTERS_CITY_KEY = 'city'
}

export type Option = {
    name: string
    usersCount: number
    id: string
    isActive: boolean
    disabled: boolean
}

export type ActiveFiltersValues = {
    gender: string[]
    department: string[]
    city: string[]
}
