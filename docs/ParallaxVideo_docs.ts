import { Parallax } from '../src/lib';
import type { ParallaxDisplayData, VideoParallaxProps } from '../src/app';
import { cityVideo } from './assets';

export const parallaxVideos: ParallaxDisplayData =
{
  id: 'parallax_video',
  header: 'Parallax Video',
  description: 'Parallax has a video component that you can use to create a parallax effect on a video element.',
  type: 'components',
  examples: [
    {
      component: Parallax.Video,
      props: {
        height: '300px',
        width: '100%',
        video: cityVideo,
        alt: 'parallax video',
        speed: 0.2,
        position: [0, -35],
      } as VideoParallaxProps,
      code: [
        `<Parallax.Video {video} {speed} />`,
      ],
    },
  ],
}

export const parallaxvideoProps: ParallaxDisplayData = {
  id: `parallax_video props_props`,
  header: `Parallaxvideo Props`,
  description: 'Parallax.Video has mostly the same props as Parallax.Image, but with a few differences. The video prop is required, and the alt prop is not used. The video prop is the URL of the video you want to use for the parallax effect.',
  type: 'table',
  table: {
    tableName: 'parallaxvideo',
    rows: [{
      name: `parallaxvideo_video!`,
      description: 'The URL of the image you want to use for the parallax effect.',
      type: '{string}',
      default: '\"\"',
      nav: false,
    },
    {
      name: `parallaxvideo_height`,
      description: 'The height of the parallax area on your page.',
      type: '{string}',
      default: '\"300px\"',
      nav: false,
    },
    {
      name: `parallaxvideo_width`,
      description: 'The width of the parallax area. It defaults to full width.',
      type: '{string}',
      default: '\"100%\"',
      nav: false,
    },
    {
      name: `parallaxvideo_speed`,
      description: 'Controls the rate at which the parallax effect takes place. Adjust this to get the right feel for your design.',
      type: '{number}',
      default: '0.5',
      nav: false,
    },
    {
      name: `parallaxvideo_position`,
      description: 'Sets the starting position of the parallax image. Useful for making sure the focus of the image is visible.',
      type: '{[number, number]}',
      default: '[0, 0]',
      nav: false,
    }],
  },
  examples: [
    {
      component: null,
      props: {} as VideoParallaxProps,
    },
  ],
}
