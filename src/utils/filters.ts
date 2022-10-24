import { User, Address } from "@/models/user.model";
import { getRandomId } from '@/utils/common'
import { FilterType, ActiveFiltersValues } from "@/models/filter.model";

export function filterOptionsFromFilteredData(
    users: User[],
    filteredUsers: User[],
    filterParam: ActiveFiltersValues,
    filterKey: FilterType
) {
    const uniqueValueMap = new Map()
    const key = filterKey as keyof User & keyof Address

    // Собираем уникальные фильтры
    users.forEach((user: User) => {
        const optionValue = filterKey === FilterType.USERS_FILTERS_CITY_KEY ? user.address[key] : user[key]

        if (optionValue) {
            if (uniqueValueMap.has(optionValue)) {
                const oldValue = uniqueValueMap.get(optionValue)
                uniqueValueMap.set(optionValue, oldValue)
            } else {
                if (optionValue !== undefined) {
                    uniqueValueMap.set(optionValue, {
                        name : optionValue,
                        usersCount : 0,
                        id: getRandomId(),
                        isActive: false,
                        disabled: false
                    })
                }
            }
        }
    }, [])

    // Собираем счетчики для фильтров
    filteredUsers.forEach((user: User) => {
        const optionValue = filterKey === FilterType.USERS_FILTERS_CITY_KEY ? user.address[key] : user[key]

        if (optionValue && uniqueValueMap.has(optionValue)) {
            const oldValue = uniqueValueMap.get(optionValue)
            oldValue.usersCount = oldValue.usersCount + 1
            uniqueValueMap.set(optionValue, oldValue)
        }
    })

    // Вычисляем активность и блокировку фильтров
    Array.from(uniqueValueMap).forEach(([name]) => {
        const oldValue = uniqueValueMap.get(name)
        if (filterParam[filterKey].includes(name)) {
            oldValue.isActive = true
            uniqueValueMap.set(name, oldValue)
        }
        oldValue.disabled = oldValue.usersCount === 0 ? true : false
        uniqueValueMap.set(name, oldValue)
    })

    return Array.from(uniqueValueMap).map(([name, value]) => ({ ...value }));
}
