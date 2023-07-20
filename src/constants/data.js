import images from "./images";

// skills
const skills = [
    {
        title: "UI/UX DESIGN",
        value: "80%"
    },
    {
        title: "WEB DEVELOPMENT",
        value: "75%"
    },
    {
        title: "APP DEVELOPMENT",
        value: "45%"
    },
    {
        title: "MARKETING",
        value: "15%"
    },
];

// stats
const stats = [
    {
        img: `${images.icon_briefcase}`,
        value:  548,
        title: "projects completed"
    },
    {
        img: `${images.icon_clock}`,
        value: 1465,
        title: "working hours"
    },
    {
        img: `${images.icon_star_white}`,
        value: 612,
        title: "positive feedbacks"
    },
    {
        img: `${images.icon_heart}`,
        value: 735,
        title: "happy clients"
    },
];

// works
const works = [
  {
    img: `${images.work_1}`
  },
  {
    img: `${images.work_2}`
  },
  {
    img: `${images.work_3}`
  },
  {
    img: `${images.work_4}`
  },
  {
    img: `${images.work_5}`
  },
  {
    img: `${images.work_6}`
  },
  {
    img: `${images.work_7}`
  },
  {
    img: `${images.work_8}`
  }
]

// services
const services = [
    {
        img: `${images.icon_diamond}`,
        title: "UI / UX DESIGN",
        text: 'I/UX (User Interface and User Experience) is the backbone of digital design.'
    },
    {
        img: `${images.icon_archer}`,
        title: "WEB DEVELOPMENT",
        text: 'Web Development - Building Digital Possibilities.'
    },
    {
        img: `${images.icon_phone}`,
        title: "APP / MOBILE",
        text: 'Mobile App - Empowering On-the-Go Experiences.'
    },
    {
        img: `${images.icon_console}`,
        title: "GAME DESIGN",
        text: 'Game Design - Crafting Interactive Adventures.'
    },
    {
        img: `${images.icon_plane}`,
        title: "SEO / MARKETING",
        text: 'SEO/Marketing - Elevating Online Visibility.'
    },
    {
        img: `${images.icon_star}`,
        title: "PHOTOGRAPHY",
        text: 'Mobile Photography App - Capturing Moments with Ease.'
    },
    {
        img: `${images.icon_fantasy}`,
        title: "GRAPHIC DESIGN",
        text: 'Graphic Design - Visualizing Creativity to Inspire.'
    },
    {
        img: `${images.icon_paint}`,
        title: "ILLUSTRATIONS",
        text: 'Illustrations - Bringing Imagination to Life.'
    }
];

// testimonials
const testimonials = [
    {
        name: "Christine Troughton, BPTC Officer",
        text: "The staff and support are second to none. They are polished, proficient, accessible and patient.",
    },
    {
        name: "Michael Hopkins",
        text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap."
    },
    {
        name: "Terry Overacker",
        text: "We completed our product website with In Tech and are so excited to have it live!! It is so professionally done and eye appealing, not to mention how great it looks and works. We love how easy it is to make changes ourselves, yet know we have the support when/if we need it."
    },
    {
        name: "Tim K. & Kristen H.",
        text: "When you choose In Tech you get a wonderful, professional team with innovative ideas, awesome customer service, and exactly what you're looking for. It took the ideas that we had and put them perfecly on the web."
    }
];

// export default {skills, stats, works, services, testimonials};
const data = { skills, stats, works, services, testimonials };

export default data;
