<template>
  <div class="max-w-5xl px-6 mx-auto my-20 antialiased leading-loose text-slate-500">
    <Header></Header>

    <main class="text-lg">
      <Intro></Intro>

      <div v-for="(airtableSection, index) in airtableSections"
            :key="index"
            class="my-20">
        <AirtableSection v-bind="airtableSection"></AirtableSection>
      </div>

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
  // dividerClassNames must be safelisted in tailwind.config.js
  const airtableSections = [
    {
      heading: 'Select Client Projects',
      dividerClassName: 'bg-green-700',
      airtableEmbedId: 'shrSQfzb1yfob4QOe',
      summary: 'Sorted by date descending, with ongoing projects first; and then alphabetically.',
      airtableEmbedTitle: 'CV table'
    },
    {
      heading: 'Select Writings',
      dividerClassName: 'bg-green-700',
      airtableEmbedId: 'shrDTpZKkXftcjYOk',
      airtableEmbedTitle: 'Writings table',
      summary: 'Sorted by date descending',
    },
  ]

  // hover color classes must be safelisted in tailwind.config.js
  const linkLists = [
    {
      heading: 'Experience',
      links: [
        {
          className: 'underline',
          href: '/Henry_Bley-Vroman_resume.pdf',
          hoverColor: 'maroon-400',
          iconEntity: '&#xe415;',
          text: 'Print-ready Resume',
          textClasses: 'font-bold',
        },
        {
          className: 'underline',
          href: 'https://stackoverflow.com/story/henrybleyvroman',
          hoverColor: 'yellow-500',
          iconEntity: '&#xeA19;',
          text: 'Stackoverflow Developer Story (CV)',
        },
      ],
    },
    {
      heading: 'Contact',
      links: [
        {
          className: 'underline',
          href: 'mailto:olets@olets.dev',
          hoverColor: 'green-500',
          iconEntity: '&#xe0E6;',
          text: 'olets@olets.dev',
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
          className: 'underline',
          href: 'https://github.com/olets',
          hoverColor: 'pink-500',
          iconEntity: '&#xe86f;',
          text: 'GitHub projects & open-source contributions',
        },
        {
          className: 'underline',
          href: 'https://stackoverflow.com/users/1241736/henry',
          hoverColor: 'yellow-500',
          iconEntity: '&#xe0c6;',
          text: 'Stackoverflow activity',
        },
        {
          className: 'underline',
          href: 'https://www.linkedin.com/in/henry-bley-vroman',
          hoverColor: 'blue-600',
          iconEntity: '&#xe97a;',
          text: 'LinkedIn',
        },
      ],
    },
  ]

  export default {
    data() {
      return {
        airtableSections,
        linkLists,
      }
    },
  }
</script>
