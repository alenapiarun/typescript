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
        catalog: "READ",
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