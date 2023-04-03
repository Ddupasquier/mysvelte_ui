<script lang="ts">
  import { banner } from "../assets";
  const iconSize = "50px";
</script>

<svelte:head>
  <title>MySvelteUI - Contact</title>
  <meta
    name="description"
    content="Connect with us - Reach out with questions, feedback, or collaboration ideas, and let's create amazing web applications together."
  />
  <meta property="og:title" content="MySvelteUI - Contact" />
  <meta
    property="og:description"
    content="Connect with us - Reach out with questions, feedback, or collaboration ideas, and let's create amazing web applications together."
  />
  <meta property="og:image" content={banner} />
</svelte:head>

<div class="contact-container">
  <h2 class="contact-headline">Let's Connect</h2>
  <p class="contact-text">
    We're always excited to hear from our users! If you have any questions,
    suggestions, or feature requests, please don't hesitate to reach out. Your
    feedback is invaluable in helping us improve our products and services.
  </p>
  <a href="mailto:dylandupasquier@gmail.com" class="contact-btn">Say Hello</a>
  <div class="contact-icons">
    <a href="https://www.linkedin.com/in/example/"
      ><svg
        width={iconSize}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>linkedin</title>
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-180.000000, -7479.000000)"
            fill="#000000"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                id="linkedin-[#161]"
              />
            </g>
          </g>
        </g>
      </svg></a
    >

    <a href="https://github.com/example"
      ><svg
        width={iconSize}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>github</title>
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-140.000000, -7559.000000)"
            fill="#000000"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                id="github-[#142]"
              />
            </g>
          </g>
        </g>
      </svg></a
    >

    <a href="https://twitter.com/example"
      ><svg
        width={iconSize}
        viewBox="0 -2 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>twitter</title>
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-60.000000, -7521.000000)"
            fill="#000000"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                id="twitter-[#154]"
              />
            </g>
          </g>
        </g>
      </svg></a
    >

    <a href="https://www.buymeacoffee.com/example"
      ><svg
        fill="#000000"
        width={iconSize}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>buymeacoffee</title>
        <path
          d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"
        /></svg
      ></a
    >
  </div>
</div>

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
  .contact-container {
    background-color: var(--color-bg-1);
    padding: 40px;
    margin: 0 auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  .contact-headline {
    font-size: 22px;
    font-weight: 600;
    color: #181818;
    margin-bottom: 20px;
    text-align: center;
  }

  .contact-text {
    font-size: 14px;
    color: #2c2c2c;
    text-align: center;
  }

  .contact-btn {
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 40px;
    background: #000;
    border-radius: 20px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    text-decoration: none;
    margin-top: 20px;
  }

  .contact-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    gap: 1rem;
  }

  .contact-icons a {
    color: #000;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
  }

  .contact-icons a:hover {
    color: #27a2da;
    transform: scale(1.1);
    transition: all 0.3s;
  }

  @media (max-width: 600px) {
    .contact-container {
      max-width: 400px;
    }

    .contact-btn {
      width: 120px;
    }
  }

  @media (max-width: breakpoints.$sm-mobile-breakpoint) {
    .contact-container {
      width: 90%;
      padding: 20px;
    }

    .contact-btn {
      width: 100px;
    }

    .contact-headline {
      font-size: 18px;
    }

    .contact-text {
      font-size: 12px;
    }

    .contact-btn {
      font-size: 12px;
    }

    .contact-icons {
      gap: 0;
    }

    .contact-icons a {
      transform: scale(0.8);
    }
  }
</style>
