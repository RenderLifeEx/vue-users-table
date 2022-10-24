import { User, Address } from "@/models/user.model";
import { ActiveFiltersValues, FilterType } from "@/models/filter.model";

export function filterUsersList(user: User, filterParam: ActiveFiltersValues) {
    const resultArr = <Boolean[]>[]
    type PropsKeys = keyof ActiveFiltersValues;
    const filterParamKeys = Object.keys(filterParam) as PropsKeys[]

    if (filterParamKeys.every(key => !filterParam[key].length)) {
        return true
    }

    filterParamKeys.forEach((key: PropsKeys) => {
        const columnKey = key as keyof User & keyof Address

        if (filterParam[key].length > 0) {
            if (columnKey === FilterType.USERS_FILTERS_GENDER_KEY) {
                resultArr.push(user[columnKey] === filterParam[key][0])
            }

            if (columnKey === FilterType.USERS_FILTERS_DEPARTMENT_KEY) {
                resultArr.push(filterParam[key].includes(user[columnKey]))
            }

            if (columnKey === FilterType.USERS_FILTERS_CITY_KEY) {
                resultArr.push(filterParam[key].includes(user.address[columnKey]))
            }
        }
    })

    return resultArr.every(Boolean)
}
