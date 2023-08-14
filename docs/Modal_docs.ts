import { Modal } from '../src/lib';
import type { ModalDisplayData } from '../src/app.d.ts';

export const modals: ModalDisplayData[] = [
  {
    id: 'modal_basics',
    header: 'Modal Basics',
    description: 'Modals are used for focused tasks, detailed information, or user confirmation. They temporarily halt user interaction and require deliberate action to be dismissed, thus returning to the app context.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          open: true,
          btnText: 'Check it out',
          btnColor: '#C50EFF',
          modalText: 'Oooooooooooo... Aaaaaaaaahhhhh!!!',
        },
        code: [
          `<Modal>`,
          `indent<Button slot="trigger">Open</Button>`,
          `indent<div slot="content">`,
          `indent<div slot="footer">`,
          `</Modal>`
        ],
      },
    ],
  },
  {
    id: 'modal_title',
    header: 'Modal Title',
    description: 'Every modal needs a title! With the "title" prop, you can label your modal for clarity and ease of understanding.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Shiny ⭐ ',
          btnText: 'Title',
          btnColor: '#FF00D9',
        },
        code: ['<Modal {title} />'],
      },
    ],
  },
  {
    id: 'modal_size',
    header: 'Modal Size',
    description: 'Modals can adjust to fit different content sizes. The "size" prop controls the modal dimensions. Choose from "small", "medium", "large", or "auto".',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Small',
          size: 'small',
          btnText: 'Small',
          btnColor: '#FF3579',
        },
        code: ['<Modal {size} />'],
      },
      {
        component: Modal,
        props: {
          title: 'Medium',
          size: 'medium',
          btnText: 'Medium',
          btnColor: '#FF3579',
        },
      },
      {
        component: Modal,
        props: {
          title: 'Large',
          size: 'large',
          btnText: 'Large',
          btnColor: '#FF3579',
        },
      },
    ],
  },
  {
    id: 'modal_position',
    header: 'Modal Position',
    description: 'Position your modal with the "position" prop. You can place the modal at various locations: "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", or "bottom-right".',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          position: 'top-right',
          size: 'auto',
          title: 'Top Right',
          btnText: 'Top Right',
          btnColor: '#FF8C4C',
        },
        code: ['<Modal {position} />'],
      },
      {
        component: Modal,
        props: {
          position: 'right',
          size: 'auto',
          title: 'Right',
          btnText: 'Right',
          btnColor: '#FF8C4C',
        },
      },
      {
        component: Modal,
        props: {
          position: 'bottom-right',
          size: 'auto',
          title: 'Bottom Right',
          btnText: 'Bottom Right',
          btnColor: '#FF8C4C',
          modalText: 'You get the picture...',
        },
      },
    ],
  },
  {
    id: 'modal_background',
    header: 'Modal Background',
    description: 'The modal\'s backdrop color can be adjusted with the "background" prop. Simply provide the color value that matches your design.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Background',
          background: '#FF8C4C',
          btnText: 'Woah',
          btnColor: '#FFC844',
        },
        code: ['<Modal {background} />'],
      },
    ],
  },
  {
    id: 'modal_color',
    header: 'Modal Text Color',
    description: 'Personalize your modal with the "color" prop. This prop allows you to specify the text color inside the modal.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Color',
          color: '#0000ff',
          btnText: 'Double Woah',
          btnColor: '#FF8C4C',
        },
        code: ['<Modal {color} />'],
      },
    ],
  },
  {
    id: 'modal_outsideClick',
    header: 'Modal Outside Click',
    description: 'With the "outsideClick" prop, you control if a click outside the modal should close it. Set it to "true" or "false" to enable or disable this feature respectively.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Outside Click',
          outsideClick: true,
          btnText: 'True',
          btnColor: '#FF3579',
        },
        code: ['<Modal outsideClick={false} />'],
      },
      {
        component: Modal,
        props: {
          title: 'Outside Click',
          outsideClick: false,
          btnText: 'False',
          btnColor: '#FF3579',
        },
      },
    ],
  },
  {
    id: 'modal_animated',
    header: 'Modal Animation',
    description: 'Give your modal some life! The "animated" prop toggles animations on or off when the modal opens and closes.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Animated',
          animated: true,
          btnText: 'Animated',
          btnColor: '#FF00D9',
        },
        code: ['<Modal animated={true} />'],
      },
      {
        component: Modal,
        props: {
          title: 'Not Animated',
          animated: false,
          btnText: 'Not Animated',
          btnColor: '#FF00D9',
        },
      }
    ],
  },
  {
    id: 'modal_overlayColor',
    header: 'Modal Overlay Color',
    description: 'Set the mood with the "overlayColor" prop. This prop lets you change the color of the overlay that appears behind the modal.',
    type: 'components',
    examples: [
      {
        component: Modal,
        props: {
          title: 'Overlay Color',
          overlayColor: 'linear-gradient(rgba(255, 53, 121, .5), rgba(0, 0, 0, .7))',
          btnText: 'Overlay Color',
          btnColor: '#C50EFF',
        },
        code: ['<Modal overlayColor="linear-gradient(rgba(255, 53, 121, .5), rgba(0, 0, 0, .7))" />'],
      },
    ],
  },
  {
    id: `modal_props`,
    header: `Modal Props`,
    description: 'Modal Props',
    type: 'table',
    table: {
      tableName: 'modal',
      rows: [{
        name: `modal_open`,
        description: 'Controls whether the modal is visible or not.',
        type: '{boolean}',
        default: 'false',
        nav: false,
      },
      {
        name: `modal_size`,
        description: 'Sets the size of the modal. Choose from \'small\', \'medium\', \'large\', or \'auto\'.',
        type: '{string}',
        default: '\"auto\"',
        nav: true,
      },
      {
        name: `modal_position`,
        description: 'Determines the position of the modal on the screen. Choose from \'center\', \'top\', \'bottom\', \'left\', \'right\', \'top-left\', \'top-right\', \'bottom-left\', \'bottom-right\'.',
        type: '{string}',
        default: '\"center\"',
        nav: true,
      },
      {
        name: `modal_background`,
        description: 'Lets you personalize the modal\'s background style. Choose between \'light\' or \'dark\'.',
        type: '{string}',
        default: '\"#fff\"',
        nav: true,
      },
      {
        name: `modal_color`,
        description: 'Lets you personalize the modal\'s text color. Accepts any valid CSS color.',
        type: '{string}',
        default: '\"#000\"',
        nav: true,
      },
      {
        name: `modal_title`,
        description: 'Sets the title text in the modal\'s header.',
        type: '{string}',
        default: '\"Modal Title\"',
        nav: true,
      },
      {
        name: `modal_outsideClick`,
        description: 'Determines if a click outside the modal (on the overlay) will close the modal.',
        type: '{boolean}',
        default: 'true',
        nav: true,
      },
      {
        name: `modal_animated`,
        description: 'If set to true, the modal will have fade in\/out animations.',
        type: '{boolean}',
        default: 'true',
        nav: true,
      },
      {
        name: `modal_overlayColor`,
        description: 'Lets you personalize the overlay\'s background color. Accepts any valid CSS color or gradient.',
        type: '{string}',
        default: '\"rgba(0, 0, 0, .5)\"',
        nav: true,
      }],
    },
    examples: null,
  },
];