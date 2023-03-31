<script lang="ts">
  import Banner from "$lib/assets/banner.png";
</script>

<svelte:head>
  <title>MySvelteUI</title>
  <meta
    name="description"
    content="Discover our intuitive Svelte component library, designed to simplify web application development for beginners and experienced developers alike. Save time with pre-built components, streamline your workflow, and boost productivity without compromising on quality or functionality."
  />
  <meta property="og:title" content="MySvelteUI" />
  <meta
    property="og:description"
    content="Discover our intuitive Svelte component library, designed to simplify web application development for beginners and experienced developers alike. Save time with pre-built components, streamline your workflow, and boost productivity without compromising on quality or functionality."
  />
  <meta property="og:image" content={Banner} />
</svelte:head>

<section>
  <p>
    Our Svelte component library is a powerful tool designed to help developers
    create beautiful and functional web applications with ease. We understand
    that time is of the essence in software development, and our library has
    been created with a focus on simplifying the development process to save you
    time and effort. With our library, you can easily import our pre-built
    components into your project, eliminating the need to start from scratch and
    saving you hours of development time.
  </p>

  <p>
    Our library is designed to be intuitive and easy to use, even for beginners.
    We have ensured that our components are designed with simplicity in mind,
    making it easy for anyone to understand and use them. You won't need to
    spend hours reading documentation or trying to figure out how to use our
    components, as we have made them as user-friendly as possible. Experienced
    developers will also appreciate the simplicity of our library, as it allows
    them to focus on the more complex aspects of development without being
    bogged down by the details.
  </p>

  <p>
    By using our Svelte component library, you can streamline your workflow and
    improve your productivity, without the hassle of downloading or importing
    anything. Our library is a great choice for anyone looking to save time and
    effort in their development process, without sacrificing the quality or
    functionality of their web applications. So why not give our library a try
    today and see how it can make your development process smoother and more
    efficient?
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  p {
    max-width: 800px;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
  }

  @media screen and (max-width: 660px) {
    p {
      text-align: justify;
    }
  }
</style>
