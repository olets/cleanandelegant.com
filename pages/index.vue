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
  import { airtableSections } from '../constants/airtableSections'
  import { linkLists } from '../constants/linkLists'

  export default {
    data() {
      return {
        airtableSections,
        linkLists,
      }
    },
  }
</script>
