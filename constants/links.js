// hover color classes must be safelisted in tailwind.config.js

export const links = {
  contact: {
    heading: 'Contact',
    links: [
      {
        class: 'underline',
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
  experience: {
    heading: 'Experience',
    links: [
      {
        class: 'underline',
        href: '/Henry_Bley-Vroman_resume.pdf',
        hoverColor: 'maroon-400',
        iconEntity: '&#xe415;',
        text: 'Print-ready Resume',
        textClasses: 'font-bold',
      },
      {
        class: 'underline',
        href: 'https://stackoverflow.com/story/henrybleyvroman',
        hoverColor: 'yellow-500',
        iconEntity: '&#xeA19;',
        text: 'Stackoverflow Developer Story (CV)',
      },
    ],
  },
  profile: {
    heading: 'Profiles',
    links: [
      {
        class: 'underline',
        href: 'https://github.com/olets',
        hoverColor: 'pink-500',
        iconEntity: '&#xe86f;',
        text: 'GitHub projects & open-source contributions',
      },
      {
        class: 'underline',
        href: 'https://stackoverflow.com/users/1241736/henry',
        hoverColor: 'yellow-500',
        iconEntity: '&#xe0c6;',
        text: 'Stackoverflow activity',
      },
      {
        class: 'underline',
        href: 'https://www.linkedin.com/in/henry-bley-vroman',
        hoverColor: 'blue-600',
        iconEntity: '&#xe97a;',
        text: 'LinkedIn',
      },
    ],
  },
}

