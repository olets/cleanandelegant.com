// hover color classes must be safelisted in tailwind.config.js

export const links = {
  contact: {
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
  experience: {
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
  profile: {
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
}

