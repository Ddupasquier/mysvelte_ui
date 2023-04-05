<script lang="ts">
  import { Card } from "$lib";
  import { banner } from "./assets";
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
  <meta property="og:image" content={banner} />
</svelte:head>

<section>
  <Card style="flex: 1; min-width: 20rem">
    <Card.Head color="black">
      <h2>Streamline Your Workflow with Our Svelte Component Library</h2>
    </Card.Head>
    <Card.Content color="black">
      <p>
        Our Svelte component library is a powerful tool designed to help
        developers create beautiful and functional web applications with ease.
        We understand that time is of the essence in software development, and
        our library has been created with a focus on simplifying the development
        process to save you time and effort. With our library, you can easily
        import our pre-built components into your project, eliminating the need
        to start from scratch and saving you hours of development time.
      </p>
    </Card.Content>
  </Card>

  <Card style="flex: 1; min-width: 20rem">
    <Card.Head color="black">
      <h2>
        Our Svelte Component Library is Designed for Beginners and Experienced
        Developers Alike
      </h2>
    </Card.Head>
    <Card.Content color="black">
      <p>
        Our library is designed to be intuitive and easy to use, even for
        beginners. We have ensured that our components are designed with
        simplicity in mind, making it easy for anyone to understand and use
        them. You won't need to spend hours reading documentation or trying to
        figure out how to use our components, as we have made them as
        user-friendly as possible. Experienced developers will also appreciate
        the simplicity of our library, as it allows them to focus on the more
        complex aspects of development without being bogged down by the details.
      </p>
    </Card.Content>
  </Card>

  <Card style="flex: 1; min-width: 20rem">
    <Card.Head color="black">
      <h2>
        Our Svelte Component Library is a Great Choice for Anyone Looking to
        Save Time and Effort in Their Development Process
      </h2>
    </Card.Head>
    <Card.Content color="black">
      <p>
        By using our Svelte component library, you can streamline your workflow
        and improve your productivity, without the hassle of downloading or
        importing anything. Our library is a great choice for anyone looking to
        save time and effort in their development process, without sacrificing
        the quality or functionality of their web applications. So why not give
        our library a try today and see how it can make your development process
        smoother and more efficient?
      </p>
    </Card.Content>
  </Card>
</section>

<style lang="scss">
  @use "src/routes/breakpoints.scss" as breakpoints;
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    margin: 1rem 0;
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

  @media screen and (max-width: breakpoints.$sm-mobile-breakpoint) {
    p {
      font-size: 12px;
    }
  }
</style>
