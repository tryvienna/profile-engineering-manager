import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'em-badge',
  name: 'Engineering Manager',
  description: 'Tools for engineering leadership',
  icon: { text: '📊' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'Engineering Manager',
      priority: 50,
    },
  },
});
