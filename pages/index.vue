<template>
  <div class="max-w-5xl px-6 mx-auto my-20 antialiased leading-loose text-slate-500">
    <Header></Header>

    <main class="text-lg">
      <Intro></Intro>

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
