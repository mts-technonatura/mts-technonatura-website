type checkRolesT = (
  roles: Array<string>,
  permission: string | Array<string>,
) => boolean;

export const checkRoles: checkRolesT = (roles, permission) => {
  if (Array.isArray(permission)) {
    for (let i: number = 0; i < roles.length; i++) {
      if (permission.includes(roles[i])) {
        return true;
      }
    }
  } else {
    if (roles.includes(permission)) return true;
  }

  return false;
};
