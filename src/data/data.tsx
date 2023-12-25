import {AcademicCapIcon, BuildingOffice2Icon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mike Irlbeck',
  description: "Mike Irlbeck's personal website, showcasing his work and interests.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mike Irlbeck.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Colorado based <strong className="text-stone-100">Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Vectis Automation</strong> to help build a robotic welding user interface and
        programming tools to better enable the collaboration of man and machine.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My deep passion for learning has led me to pursue a{' '}
        <strong className="text-stone-100">Masters in Computer Science</strong> through{' '}
        <strong className="text-stone-100">Georgia Tech</strong>. My current focus centers on computing systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">mountain biking</strong>,{' '}
        <strong className="text-stone-100">reading</strong>, or exploring the magnificent{' '}
        <strong className="text-stone-100">Rocky Mountains</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `My passion resides in building useful apps where I have the opportunity to develop both the front end interface as well as the backend data management and algorithm design. Learning the complete picture of the computer system has been fascinating.`,
  aboutItems: [
    {label: 'Location', text: 'Loveland, CO', Icon: MapIcon},
    {label: 'Interests', text: 'Mountain Biking, Reading, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Vectis Automation LLC', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Java Swing',
        level: 9,
      },
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'Typescript',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 4,
      },
    ],
  },
  // {
  //   name: 'Mobile development',
  //   skills: [
  //     {
  //       name: 'React Native',
  //       level: 9,
  //     },
  //     {
  //       name: 'Flutter',
  //       level: 4,
  //     },
  //     {
  //       name: 'Swift',
  //       level: 3,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'This Website!',
    description: 'Forked this next project and modified it.',
    url: 'https://mikeirlbeck.com',
    image: porfolioImage1,
  },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'Georgia Institute of Technology',
    title: 'Masters in Computer Science',
    content: (
      <div>
        Courses taken:
        <ul>
          <li>- High Performance Computer Architecture</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'August 2018 - May 2022',
    location: 'Colorado State University',
    title: 'B.S. Mechanical Engineering',
    content: (
      <p>
        Studied the broadfield of mechanical engineering. My favorite courses included robotics, mechatronics, and
        machine design.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'Vectis Automation LLC.',
    title: 'Software Engineer',
    content: (
      <p>
        Responsible for full-stack development of a robotic welding application. Developed new features to enable
        customers to more efficiently teach welds. In addition to normal development work, I've helped in establishing
        unit testing, release branch version control practices, Innovated UX, The application runs on an{' '}
        <i>i-pad like</i> device.
      </p>
    ),
  },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Send me an email or connect with me on LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'software.mikeirlbeck@gmail.com',
      href: 'mailto:software.mikeirlbeck@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Loveland, CO',
      href: 'https://maps.app.goo.gl/dDmMRNpeuH4fuBcT9',
    },
    {
      type: ContactType.Github,
      text: 'MikeIrlbeck',
      href: 'https://github.com/MikeIrlbeck',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MikeIrlbeck'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mike-irlbeck'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
