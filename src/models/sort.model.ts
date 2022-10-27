export enum SortType {
    USERS_FILTERS_NAME_KEY = 'name',
    USERS_FILTERS_AGE_KEY = 'age',
    USERS_FILTERS_GENDER_KEY = 'gender',
    USERS_FILTERS_DEPARTMENT_KEY = 'department',
    USERS_FILTERS_ADDRESS_KEY = 'address'
}

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc'
}

export type ActiveSortValues = {
    type: SortType | null;
    direction: SortDirection | null;
}
