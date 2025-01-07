import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How it Works",
    url: "#how-it-works",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "API Access",
    url: links.apiDocs,
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Custom Model Creation",
  "Data-driven Insights",
  "Personalized Interactions",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  sliders04,
  chromecast,
  disc02,
];

export const roadmap = [
  {
    id: "0",
    title: "Custom Model Builder",
    text: "Allow users to create their own models using intuitive interfaces and tailored datasets.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "API Integration",
    text: "Enable external systems to access and interact with the custom AI models.",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "User Profile Personalization",
    text: "Enhance Impersona’s ability to adapt based on user behaviors and preferences.",
    date: "Jan 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "One AI for All",
    text: "Unify diverse needs under a single AI platform designed to adapt and deliver personalized solutions for every individual and business.",
    date: "Jan 2025",
    status: "soon",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Empowering teams with AI-driven customization, seamless integration, and robust security for smarter collaboration.";

  export const collabContent = [
    {
      id: "0",
      title: "Custom Model Collaboration",
      text: "Work seamlessly with your team to build and deploy custom AI models tailored to your business needs.",
    },
    {
      id: "1",
      title: "Intuitive AI Tools",
      text: "Access user-friendly tools that simplify the creation and deployment of AI-driven solutions.",
    },
    {
      id: "2",
      title: "Enhanced Security Features",
      text: "Ensure the safety of your data with state-of-the-art security measures and compliance protocols.",
    },
  ];
  
export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Starter",
    description: "Get started with basic model creation features.",
    price: "Soon",
    features: [
      "Basic model creation with limited features",
      "AI-generated insights",
      "Community support",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Professional",
    description: "Unlock advanced features and API access.",
    price: "Soon",
    features: [
      "Advanced model customization",
      "Priority API access",
      "Comprehensive analytics dashboard",
      "Priority customer support",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions for large-scale operations contact adarsh@cosminder.com.",
    price: "Email Us",
    features: [
      "Custom AI solutions tailored to business needs",
      "Dedicated account manager",
      "24/7 enterprise-grade support",
      "Full API customization",
    ],
    premium: true,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom AI Models",
    text: "Create AI models designed specifically for your unique challenges and objectives.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Personalized Insights",
    text: "Gain deep, actionable insights through AI-powered analysis and customization.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless API Integration",
    text: "Integrate Cosminder’s AI solutions into your existing systems effortlessly.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Real-time Interactions",
    text: "Harness AI to deliver accurate, real-time solutions and support.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
