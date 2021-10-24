<template>
  <div class="max-w-5xl px-6 mx-auto my-20 antialiased leading-loose text-slate-500">
    <Header></Header>

    <main class="">
      <Intro></Intro>

      <Sites></Sites>

      <Projects></Projects>

      <Writings></Writings>

      <section>
        <h2 class="sr-only">Links</h2>

        <div class="grid-cols-3 leading-relaxed sm:grid mb-14">
          <div>
            <IconLinkList v-bind="linkLists[0]"></IconLinkList>

            <IconLinkList v-bind="linkLists[1]"></IconLinkList>
          </div>

          <IconLinkList v-bind="linkLists[2]"></IconLinkList>
        </div>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
  const linkLists = [
    {
      heading: 'Experience',
      links: [
        {
          className: 'focus:text-maroon-400 hover:text-maroon-400',
          href: '/Henry_Bley-Vroman_resume.pdf',
          iconEntity: '&#xe415;',
          text: 'Print-ready Resume',
          textClass: 'underline underline-maroon-400',
        },
        {
          className: 'focus:text-yellow-500 hover:text-yellow-500',
          href: 'https://stackoverflow.com/story/henrybleyvroman',
          iconEntity: '&#xeA19;',
          text: 'Stackoverflow Developer Story (CV)',
          textClass: 'underline underline-yellow-500',
        },
      ],
    },
    {
      heading: 'Contact',
      links: [
        {
          className: 'focus:text-green-500 hover:text-green-500',
          href: 'mailto:olets@olets.dev',
          iconEntity: '&#xe0E6;',
          text: 'olets@olets.dev',
          textClass: 'underline underline-green-500',
        },
        {
          iconEntity: '&#xe0c8;',
          text: 'Hawaii',
        },
      ],
    },
    {
      heading: 'Profiles',
      links: [
        {
          className: 'focus:text-pink-500 hover:text-pink-500',
          href: 'https://github.com/olets',
          iconEntity: '&#xe86f;',
          text: 'GitHub projects & open-source contributions',
          textClass: 'underline underline-pink-500',
        },
        {
          className: 'focus:text-yellow-500 hover:text-yellow-500',
          href: 'https://stackoverflow.com/users/1241736/henry',
          iconEntity: '&#xe0c6;',
          text: 'Stackoverflow activity',
          textClass: 'underline underline-yellow-500',
        },
        {
          className: 'focus:text-blue-600 hover:text-blue-600',
          href: 'https://www.linkedin.com/in/henry-bley-vroman',
          iconEntity: '&#xe97a;',
          text: 'LinkedIn',
          textClass: 'underline underline-blue-600',
        },
      ],
    },
  ]

  export default {
    data() {
      return {
        linkLists,
      }
    },
  }
</script>
