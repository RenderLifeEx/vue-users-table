import { SortType, ActiveSortValues, SortDirection } from "@/models/sort.model";
import { User } from "@/models/user.model";

export function getSortValues(sortType: SortType | null, currentSortValues: ActiveSortValues) {
    let newSortType = <SortType | null>sortType
    let direction = <SortDirection | null>null
    if (currentSortValues.type === sortType) {
        if (currentSortValues.direction === null) {
            direction = SortDirection.DESC
        } else if (currentSortValues.direction == SortDirection.DESC) {
            direction = SortDirection.ASC
        } else {
            newSortType = null
        }
    } else {
        direction = SortDirection.DESC
    }

    return {
        type: newSortType,
        direction: direction
    }
}

export function sortedUsers(users: User[], sortParam: ActiveSortValues) {
    if (!sortParam.type) {
        return users
    }

    const orderedUsers = users.sort(function(a, b) {
        const direction = sortParam.direction === 'asc' ? 1 : -1;

        sortParam.type === SortType.USERS_FILTERS_ADDRESS_KEY

        let keyA = a[sortParam.type as keyof User];
        let keyB = b[sortParam.type as keyof User];

        if (sortParam.type === SortType.USERS_FILTERS_ADDRESS_KEY && typeof keyA === 'object' && typeof keyB === 'object') {
            keyA = `${keyA.city}${keyA.street}`
            keyB = `${keyB.city}${keyB.street}`
        }

        if (typeof keyA == "string") {
            keyA = (""+keyA).toLowerCase();
        }
        if (typeof keyB == "string") {
            keyB = (""+keyB).toLowerCase();
        }

        if (keyA > keyB) return direction;
        if (keyA < keyB) return -(direction);

        return 0;
    });

    return orderedUsers
}
