import { addons } from '@storybook/addons';
import myTheme from './theme';

addons.setConfig({
  theme: myTheme,
  isToolshown: true,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
});