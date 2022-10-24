import { User, Address } from "@/models/user.model";
import { FiltersList, ActiveFiltersValues, FilterType } from "@/models/filter.model";

export function filterUsersList(user: User, filterParam: any) {
    const resultArr = <Boolean[]>[]
    const filterParamKeys = Object.keys(filterParam)

    if (filterParamKeys.every(key => !filterParam[key].length)) {
        return true
    }

    filterParamKeys.forEach((key: any) => {
        const filterKey = key as keyof User & keyof Address

        if (filterParam[filterKey].length > 0) {
            if (filterKey === FilterType.USERS_FILTERS_GENDER_KEY) {
                resultArr.push(user[filterKey] === filterParam[filterKey][0])
            }

            if (filterKey === FilterType.USERS_FILTERS_DEPARTMENT_KEY) {
                resultArr.push(filterParam[filterKey].includes(user[filterKey]))
            }

            if (filterKey === FilterType.USERS_FILTERS_CITY_KEY) {
                resultArr.push(filterParam[filterKey].includes(user.address[filterKey]))
            }
        }
    })

    return resultArr.every(Boolean)
}
