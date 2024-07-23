import './styles/main/main.css';

import TVScreen from 'Screen.svelte';
import Remote from 'Remote.svelte';
import HeaderControls from 'HeaderControls.svelte';
import SpaceTrigger from 'SpaceTrigger.svelte';
import { raf } from 'utils.js';
import { screenEl } from 'tv.js';
import { initTextNav } from 'textNav.js';
import { initHotkeys } from 'keyboard.js';
import { initLinks } from 'links.js';

const bootstrap = () => {
  raf(() => {
    initTextNav();
    initHotkeys();
    initLinks();

    new TVScreen({ target: screenEl });

    new Remote({ target: document.querySelector('.js-remote') });

    new HeaderControls({
      target: document.querySelector('.js-header-controls'),
    });

    new SpaceTrigger({
      target: document.querySelector('.js-space-trigger'),
    });
  });
};

if (document.readyState !== 'interactive') {
  window.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
