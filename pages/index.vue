<template>
  <div class="max-w-5xl px-6 mx-auto my-20 antialiased leading-loose text-slate-500">
    <Header></Header>

    <main class="text-lg">
      <section class="col-span-2 pt-10">
        <p>
          I work on <Em>Node, PHP, and Rails stacks</Em>
          to make <Em>accessible responsive front ends</Em> for websites small and large,
          <Em>CMS-backed</Em> or not.

          I think about <Em>information architecture</Em> and presentation,
          <Em>mentorship</Em> and knowledge sharing,
          code reviews and <Em>team strength</Em>,
          <Em>collaboration</Em>.

          Co-chair of Viget's <Em>Diversity, Equity, and Inclusion</Em> Advisory Committee.

          Skill with smallest market:
          restoration of early 20th Century clay-court croquet courts.
        </p>
      </section>

      <section v-for="(section, index) in sections"
            :key="index"
            class="my-20">
        <SectionHeading :divider-color="section.headingDividerColor"
              :text="section.heading">
        </SectionHeading>

        <p :if="section.summary" class="max-w-screen-lg mx-auto mb-10 text-center">
          {{ section.summary }}
        </p>

        <AirtableEmbed :id="section.id"
              :show-view-controls="section.showViewControls"
              :title="section.title"></AirtableEmbed>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sections: [
          {
            heading: 'Select CV',
            headingDividerColor: 'green-700',
            id: 'shrSQfzb1yfob4QOe',
            summary: 'Some recent projects, sorted by date with ongoing projects first and then alphabetically.',
            title: 'CV table'
          },
          {
            heading: 'Select Writings',
            headingDividerColor: 'green-700',
            id: 'shrDTpZKkXftcjYOk',
            title: 'Writings table'
          },
        ],
        year: new Date().getFullYear(),
      }
    },
  }
</script>
