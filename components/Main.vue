<template>
  <main>
    <div class="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-3">
      <nav aria-labelledby="nav">
        <h2 id="nav" class="sr-only">Links</h2>

        <ul class="grid w-full grid-cols-1 gap-2 leading-relaxed sm:grid-cols-2 md:grid-cols-1">
          <li>
            <ExperienceLinks></ExperienceLinks>
          </li>

          <li>
            <ContactLinks></ContactLinks>
          </li>

          <li>
            <ProfileLinks></ProfileLinks>
          </li>
        </ul>
      </nav>

      <section class="col-span-2 pt-10">
        <p class="first-letter:float-left first-letter:font-semibold first-letter:text-5xl first-letter:pt-1 first-letter:pr-3">
          Website builder since 1995.

          Professional since 2009.

          Full-time since 2014.

          I make <Em>accessible responsive front ends</Em> for websites small and large,

          <Em>CMS-backed</Em> or not.

          In a typical week I work on <Em>Node, PHP, and Rails stacks</Em>.

          I think about <Em>information architecture</Em> and presentation,
            <Em>mentorship</Em> and knowledge sharing,
            code reviews and <Em>team strength</Em>,
            <Em>collaboration</Em>.

          I enjoy writing utilities and build pipelines, and in open-source and the community am an <Em>active contributor</Em>.
        </p>

        <p class="first-letter:ml-4">
          A member of my employer's <Em>Diversity, Equity, and Inclusion</Em> Advisory Committee,
          which does research and proposals.
          I currently lead feedback frameworks initiative team,
          and previously was a member of the applicant pool diversity initiative team.
        </p>

        <p class="first-letter:ml-4">
          Bachelor of Arts from Pomona College in Linguistics and Cognitive Science, Psychology concentration (2005; studied the relation of language to thought).
        </p>

        <p class="first-letter:ml-4">
          Master of Arts from Boston University's Brain, Behavior, and Cognition program in Psychology (2008; studied the biochemistry of mental disorders).
        </p>

        <p class="first-letter:ml-4">
          Skill with smallest market out of all my skills with small markets: restoration of early 20th Century clay-court croquet courts.
        </p>
      </section>
    </div>

    <section v-for="(section, index) in sections"
          :key="index"
          class="my-20">
      <SectionHeading :divider-color="section.headingDividerColor"
            :text="section.heading">
      </SectionHeading>

      <p :if="section.summary" class="max-w-screen-md mx-auto mb-10">
        {{ section.summary }}
      </p>

      <AirtableEmbed :id="section.id"
            :show-view-controls="section.showViewControls"
            :title="section.title"></AirtableEmbed>
    </section>
  </main>
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
            summary: 'Some of the last 5 years’ noteworthy projects, sorted by recency with ongoing projects first and then alphabetically.',
            title: 'CV table'
          },
          {
            heading: 'Technical Proficiencies and Interests',
            headingDividerColor: 'red-700',
            id: 'shrBY8dhGxy3BS8AK',
            showViewControls: true,
            summary: 'Default sort is by excitement, then by expertise, then alphabetically.',
            title: 'Skills table'
          },
          {
            heading: 'Writings',
            headingDividerColor: 'green-700',
            id: 'shrDTpZKkXftcjYOk',
            summary: 'When time allows I write up things related to front-end development, developer tools, Git, and the command line.',
            title: 'Writings table'
          },
        ],
      }
    },
  }
</script>
