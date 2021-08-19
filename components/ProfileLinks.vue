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
      }
    },
  }
</script>
