import {create} from '@storybook/theming/create';

export default create({
    base: 'dark',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'MySvelteUI',
    brandUrl: 'https://www.mysvelteui.io',
    brandImage: 'https://i.ibb.co/MsGjGNj/My-Svelte-UI-1.png',
    brandTarget: '_self',

    //
    colorPrimary: '#fc0303',
    colorSecondary: '#080808',

    // UI
    appBg: '#454545',
    appContentBg: '#121212',
    appBorderColor: '#585C6D',
    appBorderRadius: 40,

    // Text colors
    textColor: '#fff',
    textInverseColor: '#000',

    // Toolbar default and active colors
    barTextColor: '#000',
    barSelectedColor: '#585C6D',
    barBg: '#909090',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#fff',
    inputTextColor: '#fff',
    inputBorderRadius: 2,
});
