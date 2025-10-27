import { FaCamera, FaLaptopCode, FaMobileAlt, FaRegStar } from "react-icons/fa";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import testimonial2 from "../assets/boy.png";
import Clothify from "../assets/Clothify.png";
import Digital from "../assets/Digital.png";
import testimonial1 from "../assets/girl.png";
import Nike from "../assets/Nike.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBriefcase,
//   faSchool,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon:  <FaBriefcase/>,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FaGraduationCap/>,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FaRegStar/>,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Photography",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"Vanshika Sondhiya",
        para:"Rohit is a highly talented website developer! He understands requirements well and creates clean, user-friendly websites. Great work and highly recommended! ",
        img: testimonial1
    },
    {
        name:"Aman Sharma",
        para:"Rohit is an excellent website developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2002 - 2003',
      title: 'BACHELOR OF SCIENCE IN AGRICULTURE',
      subtitle: 'KSA',
      desc: 'KING FAISAL UNIVERSITY, ',
    },
    {
      icon: workIcon,
      date: '',
      title: 'BACHELOR OF SCIENCE IN AGRICULTURE',
      subtitle: 'KSA',
      desc: 'KING FAISAL UNIVERSITY, ',
    },
    {
      icon: workIcon,
      date: '-',
      title: 'Bachelor s degree ',
      subtitle: '',
      desc: 'Bachelor s degree in Landscape Architecture. Civil Engineering, Horticulture, or Environmental Design',
    },
    {
      icon: workIcon,
      date: '',
      title: 'Masters degree or certifications',
      subtitle: '-',
      desc: ' Masters degree or certifications (e.q., CMLI, ISA Certified Arborist. PMP) are a plus ',
    },
    {
      icon: workIcon,
      date: 'Skill',
      title: 'Landscaping deliverye',
      subtitle: '',
      desc: 'Minimum 8 years of experience in landscaping delivery, with at least 3 years in a leadership role',
    },
    {
      icon: schoolIcon,
      date: 'SKill',
      title: 'landscaping works on large-scale infrastructure ',
      subtitle: '',
      desc: 'Proven track record in delivering landscaping works on large-scale infrastructure or aviation projects',
    },
    {
      icon: schoolIcon,
      date: 'Skill',
      title: 'Sustainable landscape practices',
      subtitle: 'Adarsh Madhyamik Vidhyalaya',
      desc: 'Deep knowledge of regional plant species, soil conditions, and sustainable landscape practices (especially in arid or tropical environment',
    },
    
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      link: "https://business420.netlify.app/",
      github: 'https://github.com/rohitsingh93300/YTBusiness',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Nike Shoes",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://nike-topaz-delta.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Nike',
      image: Nike, // Replace with your project screenshot
    },
    {
      title: "Clothify",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Clerk Authentication"],
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/YT-Clothify',
      image: Clothify, // Replace with your project screenshot
    },
  ];