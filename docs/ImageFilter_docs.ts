import { ImageFilter } from '../src/lib';
import type { ImageFilterDisplayData } from '../src/app';
import { ImageFilterPropRows } from './generated/ImageFilter.props';

const image1 = "https://images.unsplash.com/photo-1511352015382-902404d75843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image2 = "https://images.unsplash.com/photo-1569406125624-98ee19b01d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image3 = "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image4 = "https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image5 = "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image6 = "https://plus.unsplash.com/premium_photo-1672863447733-19c558bef8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";
const image7 = "https://plus.unsplash.com/premium_photo-1673296133387-22f91a1a144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80";

export const imageFilters: ImageFilterDisplayData[] = [
  {
    id: 'imagefilter_basics',
    header: 'Image Filter Basicss',
    description: 'The ImageFilter component allows applying filter and shape to any image.',
    type: 'gallery',
    examples: [
      {
        component: ImageFilter,
        props: {
          image: image1,
          alt: 'Image1',
          width: '150px',
          height: '100px',
          aspectRatio: '3/2',
        },
        code: [
          `<ImageFilter {image} {alt} {width} {height} {aspectRatio} />`,
        ],
      },
    ],
  },
  {
    id: 'imagefilter_shape',
    header: 'Image Filter Shape',
    description: 'Image can be square, rounded, or circ. (default: square)',
    type: 'gallery',
    examples: [
      {
        component: ImageFilter,
        props: {
          image: image2,
          alt: 'Image2',
          shape: 'square',
          width: '150px',
          height: '100px',
        },
        code: [
          `<ImageFilter {shape} />`,
        ],
      },
      {
        component: ImageFilter,
        props: {
          image: image4,
          alt: 'Image4',
          shape: 'circ',
          width: '150px',
          height: '150px',
        },
        code: [
          `<ImageFilter {image} {alt} shape="circ" width="150px" height="150px" />`,
        ],
      },
      {
        component: ImageFilter,
        props: {
          image: image3,
          alt: 'Image3',
          shape: 'rounded',
          width: '150px',
          height: '100px',
        },
        code: [
          `<ImageFilter {image} {alt} shape="rounded" width="150px" height="100px" />`,
        ],
      },
    ],
  },
  {
    id: 'imagefilter_filter',
    header: 'Image Filters',
    description: `Images can be filtered using various filter effects. 
    The filter prop determines the filter applied to the image and can be set to one of the following values: 
    - "none" (no filter)
    - "gray" (grayscale)
    - "sepia" (sepia tone)
    - "invert" (color inversion)
    - "blur" (blurring effect)
    - "contrast" (adjusting contrast)
    - "hue-rotate" (rotating hues)
    - "saturate" (adjusting saturation)
    - "hue-rotate-saturate" (simultaneous adjustment of hue rotation and saturation).
    
    (default: "none")`,
    type: 'gallery',
    examples: [
      {
        component: ImageFilter,
        props: {
          image: image5,
          alt: 'Image5',
          filter: 'gray',
          title: 'Gray',
          width: '150px',
          height: '100px',
        },
        code: [
          `<ImageFilter {filter} />`,
        ],
      },
      {
        component: ImageFilter,
        props: {
          image: image6,
          alt: 'Image6',
          filter: 'sepia',
          title: 'Sepia',
          width: '150px',
          height: '100px',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image7,
          alt: 'Image7',
          filter: 'invert',
          title: 'Invert',
          width: '150px',
          height: '100px',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image1,
          alt: 'Image1',
          filter: 'blur',
          title: 'Blur',
          width: '150px',
          height: '100px',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image3,
          alt: 'Image3',
          filter: 'contrast',
          title: 'Contrast',
          width: '150px',
          height: '100px',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image4,
          alt: 'Image4',
          filter: 'hue-rotate',
          title: 'Hue Rotate',
          width: '150px',
          height: '100px',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image5,
          alt: 'Image5',
          filter: 'saturate',
          title: 'Saturate',
          width: '150px',
          height: '100px',
          aspectRatio: '2/3',
        },
      },
      {
        component: ImageFilter,
        props: {
          image: image3,
          alt: 'Image3',
          filter: 'hue-rotate-saturate',
          title: 'Hue Rotate Saturate',
          width: '150px',
          height: '100px',
        },
      },
    ],
  },
  {
    id: `imagefilter_props`,
    header: `Imagefilter Props`,
    type: 'table',
    table: {
      tableName: 'imagefilter',
      rows: ImageFilterPropRows,
    },
    examples: null,
  },
];