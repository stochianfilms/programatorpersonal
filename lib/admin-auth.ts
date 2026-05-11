/**
 * Admin authorization helpers.
 * TODO: Integrate with NextAuth session to check user role from JWT.
 */

export const ADMIN_ROLE = "admin";
export const CLIENT_ROLE = "client";

export type UserRole = typeof ADMIN_ROLE | typeof CLIENT_ROLE;

/**
 * Check if a user is an admin.
 * Expects the session to have a role claim.
 */
export function isAdmin(role?: string | null): boolean {
  return role === ADMIN_ROLE;
}

/**
 * Check if a user has a specific role.
 */
export function hasRole(role?: string | null, requiredRole?: UserRole): boolean {
  return role === requiredRole;
}
