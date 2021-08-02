enum Role {
    Guest = 'guest',
    User = 'user',
    Admin = 'admin',
}
let role: Role = Role.Guest;

type Feature = 'catalog' | 'basket' | 'news' | 'report'
let feature: Feature = "catalog";

type Permission = 'NO_ACCESS' | 'READ' |'READ_WRITE'
let permission: Permission = "READ";

type FeaturePermission = Record<Role, Partial<{[key in Feature]: Permission}>>
const permissions: FeaturePermission = {
    guest: {
        catalog: "NO_ACCESS",
        news: "READ",
    },
    user: {
        catalog: "READ",
        basket: "READ_WRITE",
        news: "READ",
    },
    admin: {
        catalog: "READ_WRITE",
        news: "READ",
        report: "READ",
    },
};


interface User {
    role: Role
}

function hasAccess(user: User, features: Feature | Feature[]): boolean  {
    const role:Role = user.role;
    const rolePermissions = permissions[role];
    const featuresToCheck = Array.isArray(features) ? features : [features];
    return featuresToCheck.every((feature: Feature ) => {
        const userFeaturePermission: Permission | undefined = rolePermissions[feature];
        if (!userFeaturePermission) return false;
        return ["READ", "READ_WRITE"].includes(userFeaturePermission)
      }
   );
}

let user= {
    role: Role.Guest
}

const hasAccessToCatalog = hasAccess(user, "catalog");
const hasAccessToCatalogAndBasket = hasAccess(user, ["basket", "catalog"]);
