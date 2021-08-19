<template>
  <Links :heading="heading"
        :links="links"
        :sr-only-heading="srOnlyHeading">
  </Links>
</template>

<script>
  export default {
    props: {
      srOnlyHeading: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        heading: 'Experience',
        links: [
          {
            href: 'https://cleanandelegant.com/Henry_Bley-Vroman_resume.pdf',
            hoverColor: 'maroon-400',
            iconName: 'pdf',
            iconEntity: '&#xe415;',
            text: 'Print-ready Resume',
            textClasses: 'font-bold',
          },
          {
            href: 'https://stackoverflow.com/story/henrybleyvroman',
            hoverColor: 'yellow-500',
            iconName: 'book',
            iconEntity: '&#xeA19;',
            text: 'Story View',
          },
          {
            href: 'https://stackoverflow.com/cv/henrybleyvroman',
            hoverColor: 'yellow-500',
            iconName: 'list',
            iconEntity: '&#xe896;',
            text: 'CV View',
          },
        ],
      }
    },
  }
</script>
