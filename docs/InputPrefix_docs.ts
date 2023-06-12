import { Input } from '../src/lib';
import type { InputDisplayData } from '../src/app';

export const inputprefixes: InputDisplayData = 
  {
    id: 'input.prefix_',
    header: 'Input.Prefix',
    description:
      `You can add a prefix the this input by using dot notation IE. Input.Prefix. 
    You can also change the prefix from the default using the prefix prop. (default: @)
    
    const prefix = "@" 
    let val = "example"
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(\`\${prefix}@{val}\`); // @example
    };
    
    <form on:submit={handleSubmit}>
    <Input.Prefix {prefix} bind:value={val} />
    </form>`,
    type: 'components',
    examples: [
      {
        component: Input.Prefix,
        props: {
          prefix: '@',
          placeholder: 'Woah',
        },
        code: '<Input.Prefix prefix="@" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '#',
          placeholder: 'Pretty',
        },
        code: '<Input.Prefix prefix="#" />',
      },
      {
        component: Input.Prefix,
        props: {
          prefix: '¯_(ツ)_/¯',
          placeholder: 'Cool',
        },
        code: '<Input.Prefix prefix="¯_(ツ)_/¯" />',
      },
    ],
  }

export const inputprefixProps: InputDisplayData =
  {
    id: `input.prefix_props`,
    header: `Input.Prefix Props`,
    description: 'Input.Prefix shares the same props with Input, besides the addition of the prefix prop.',
    type: 'table',
    table: {
      tableName: 'inputprefix',
      rows: [
        {
          name: `input.prefix_prefix`,
          description: 'Specify a prefix that appears before the input. Useful for indicating the input purpose, such as \'@\' for mentioning users.',
          type: '{string}',
          default: '\"@\"',
          nav: false,
        }
      ],
    },
    examples: [
      {
        component: null,
        props: {},
      },
    ],
  }