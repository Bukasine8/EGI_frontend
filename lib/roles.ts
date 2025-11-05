/**
 * Role-Based Access Control (RBAC) System for EGI Admin Panel
 */

export type UserRole = 'super_admin' | 'content_manager' | 'donation_manager' | 'event_manager' | 'volunteer_coordinator' | 'viewer';

export interface Permission {
  resource: string;
  actions: readonly string[];
}

export interface RoleConfig {
  name: string;
  description: string;
  permissions: Permission[];
  adminRoutes: string[];
}

// Define all available permissions
export const PERMISSIONS = {
  DASHBOARD: { resource: 'dashboard', actions: ['view'] },
  USERS: { resource: 'users', actions: ['view', 'create', 'edit', 'delete'] },
  BLOG: { resource: 'blog', actions: ['view', 'create', 'edit', 'delete'] },
  DONATIONS: { resource: 'donations', actions: ['view', 'create', 'edit', 'delete', 'export'] },
  EVENTS: { resource: 'events', actions: ['view', 'create', 'edit', 'delete'] },
  PROJECTS: { resource: 'projects', actions: ['view', 'create', 'edit', 'delete'] },
  VOLUNTEERS: { resource: 'volunteers', actions: ['view', 'create', 'edit', 'delete'] },
  MESSAGES: { resource: 'messages', actions: ['view', 'reply', 'delete'] },
  PARTNERS: { resource: 'partners', actions: ['view', 'create', 'edit', 'delete'] },
  SCHOOLS: { resource: 'schools', actions: ['view', 'create', 'edit', 'delete'] },
  TEAM: { resource: 'team', actions: ['view', 'create', 'edit', 'delete'] },
  SETTINGS: { resource: 'settings', actions: ['view', 'edit'] },
} as const;

// Role definitions with their permissions and accessible routes
export const ROLES: Record<UserRole, RoleConfig> = {
  super_admin: {
    name: 'Super Administrator',
    description: 'Full access to all admin features including user management',
    permissions: Object.values(PERMISSIONS),
    adminRoutes: [
      '/admin/dashboard',
      '/admin/create-account',
      '/admin/blog',
      '/admin/donations',
      '/admin/events',
      '/admin/projects',
      '/admin/volunteers',
      '/admin/messages',
      '/admin/partners',
      '/admin/schools',
      '/admin/team',
      '/admin/settings'
    ]
  },
  content_manager: {
    name: 'Content Manager',
    description: 'Manages blog posts, events, and general content',
    permissions: [
      PERMISSIONS.DASHBOARD,
      PERMISSIONS.BLOG,
      PERMISSIONS.EVENTS,
      { resource: 'projects', actions: ['view', 'edit'] },
      { resource: 'messages', actions: ['view', 'reply'] }
    ],
    adminRoutes: [
      '/admin/dashboard',
      '/admin/blog',
      '/admin/events',
      '/admin/projects',
      '/admin/messages'
    ]
  },
  donation_manager: {
    name: 'Donation Manager',
    description: 'Manages donations, financial reports, and donor relations',
    permissions: [
      PERMISSIONS.DASHBOARD,
      PERMISSIONS.DONATIONS,
      { resource: 'messages', actions: ['view', 'reply'] },
      { resource: 'projects', actions: ['view'] }
    ],
    adminRoutes: [
      '/admin/dashboard',
      '/admin/donations',
      '/admin/messages',
      '/admin/projects'
    ]
  },
  event_manager: {
    name: 'Event Manager',
    description: 'Manages events, volunteers, and event-related activities',
    permissions: [
      PERMISSIONS.DASHBOARD,
      PERMISSIONS.EVENTS,
      PERMISSIONS.VOLUNTEERS,
      { resource: 'messages', actions: ['view', 'reply'] }
    ],
    adminRoutes: [
      '/admin/dashboard',
      '/admin/events',
      '/admin/volunteers',
      '/admin/messages'
    ]
  },
  volunteer_coordinator: {
    name: 'Volunteer Coordinator',
    description: 'Manages volunteers and volunteer programs',
    permissions: [
      PERMISSIONS.DASHBOARD,
      PERMISSIONS.VOLUNTEERS,
      { resource: 'events', actions: ['view', 'edit'] },
      { resource: 'messages', actions: ['view', 'reply'] }
    ],
    adminRoutes: [
      '/admin/dashboard',
      '/admin/volunteers',
      '/admin/events',
      '/admin/messages'
    ]
  },
  viewer: {
    name: 'Viewer',
    description: 'Read-only access to reports and data',
    permissions: [
      PERMISSIONS.DASHBOARD,
      { resource: 'donations', actions: ['view'] },
      { resource: 'events', actions: ['view'] },
      { resource: 'projects', actions: ['view'] },
      { resource: 'volunteers', actions: ['view'] }
    ],
    adminRoutes: [
      '/admin/dashboard',
      '/admin/donations',
      '/admin/events',
      '/admin/projects',
      '/admin/volunteers'
    ]
  }
};

// Helper functions for permission checking
export function hasPermission(userRole: UserRole, resource: string, action: string): boolean {
  const role = ROLES[userRole];
  if (!role) return false;

  return role.permissions.some(permission => 
    permission.resource === resource && permission.actions.includes(action)
  );
}

export function canAccessRoute(userRole: UserRole, route: string): boolean {
  const role = ROLES[userRole];
  if (!role) return false;

  return role.adminRoutes.some(allowedRoute => 
    route.startsWith(allowedRoute)
  );
}

export function getAccessibleRoutes(userRole: UserRole): string[] {
  const role = ROLES[userRole];
  return role ? role.adminRoutes : [];
}

export function getRoleConfig(userRole: UserRole): RoleConfig | null {
  return ROLES[userRole] || null;
}

// Check if user can manage other users (only super_admin)
export function canManageUsers(userRole: UserRole): boolean {
  return userRole === 'super_admin';
}
