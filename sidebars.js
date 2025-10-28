/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/overview', 'getting-started/how-to-play'],
    },
    {
      type: 'category',
      label: 'Game Modes',
      items: [
        'game-modes/market-grid',
        'game-modes/coin-grid',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/power-ups',
        'features/patterns',
        'features/scoring',
      ],
    },
    {
      type: 'category',
      label: 'Product Specification',
      items: [
        'specification/overview',
        'specification/technical',
        'specification/user-experience',
      ],
    },
  ],
};

module.exports = sidebars;
