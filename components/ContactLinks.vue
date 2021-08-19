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
      }
    },
  }
</script>
