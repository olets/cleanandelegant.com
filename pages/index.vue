<template>
  <div class="max-w-5xl px-6 mx-auto my-20 text-base antialiased leading-loose text-slate-500">
    <Header></Header>

    <main>
      <div class="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-3">
        <nav aria-labelledby="nav">
          <h2 id="nav" class="sr-only">Links</h2>

          <ul class="grid w-full grid-cols-1 gap-2 leading-relaxed sm:grid-cols-2 md:grid-cols-1">
            <li>
              <Links :heading="experienceLinks.heading"
                    :links="experienceLinks.links">
              </Links>
            </li>

            <li>
              <Links :heading="contactLinks.heading"
                    :links="contactLinks.links">
              </Links>
            </li>

            <li>
              <Links :heading="profileLinks.heading"
                    :links="profileLinks.links">
              </Links>
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

    <footer>
      <div class="grid grid-cols-3 leading-relaxed mb-14">
        <div>
          <Links :heading="experienceLinks.heading"
                :links="experienceLinks.links"
                :sr-only-heading="boolTrue">
          </Links>

          <Links :heading="contactLinks.heading"
                :links="contactLinks.links"
                :sr-only-heading="boolTrue">
          </Links>
        </div>

        <Links :heading="profileLinks.heading"
              :links="profileLinks.links"
              :sr-only-heading="boolTrue">
        </Links>
      </div>

      <div class="text-xs leading-loose">
        <p>
          Site copyright &copy; {{ year }} Henry Bley-Vroman.
          <br>
          Photo copyright &copy; 2016 Bradley Aaron Photography.
          <br>
          All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        boolTrue: true,
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
        contactLinks: {
          heading: 'Contact',
          links: [
            {
              href: 'mailto:olets@olets.dev',
              hoverColor: 'green-500',
              iconEntity: '&#xe0E6;',
              text: 'olets@olets.dev',
            },
            {
              href: 'tel:+19099922147',
              hoverColor: 'blue-400',
              iconEntity: '&#xe0B0;',
              text: '909-992-2147',
            },
            {
              href: 'https://www.google.com/maps/place/Kailua,+HI/@21.3919243,-158.2958003,9z/data=!4m5!3m4!1s0x7c005d0e3dc611d3:0xd9298ce0313066c2!8m2!3d21.4022222!4d-157.7394444',
              hoverColor: 'indigo-500',
              iconEntity: '&#xe0c8;',
              text: 'Kailua, HI',
            },
          ],
        },
        experienceLinks: {
          heading: 'Experience',
          links: [
            {
              href: 'https://cleanandelegant.com/Henry_Bley-Vroman_resume.pdf',
              hoverColor: 'maroon-400',
              iconEntity: '&#xe415;',
              text: 'Print-ready Resume',
              textClasses: 'font-bold',
            },
            {
              href: 'https://stackoverflow.com/story/henrybleyvroman',
              hoverColor: 'yellow-500',
              iconEntity: '&#xeA19;',
              text: 'Story View',
            },
            {
              href: 'https://stackoverflow.com/cv/henrybleyvroman',
              hoverColor: 'yellow-500',
              iconEntity: '&#xe896;',
              text: 'CV View',
            },
          ],
        },
        profileLinks: {
          heading: 'Profiles',
          links: [
            {
              href: 'https://github.com/olets',
              hoverColor: 'pink-500',
              iconEntity: '&#xe86f;',
              text: 'GitHub: Projects & Open-Source Activity',
            },
            {
              href: 'https://stackoverflow.com/users/1241736/henry',
              hoverColor: 'yellow-500',
              iconEntity: '&#xe0c6;',
              text: 'Stackoverflow: Teaching & Knowledge Sharing',
            },
            {
              href: 'https://www.linkedin.com/in/henry-bley-vroman',
              hoverColor: 'blue-600',
              iconEntity: '&#xe97a;',
              text: 'LinkedIn',
            },
          ],
        },
        year: new Date().getFullYear(),
      }
    },
  }
</script>
