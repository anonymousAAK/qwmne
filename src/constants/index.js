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
    date: "June 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "API Integration",
    text: "Enable external systems to access and interact with the custom AI models.",
    date: "July 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "User Profile Personalization",
    text: "Enhance Impersona’s ability to adapt based on user behaviors and preferences.",
    date: "August 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Gamified Interaction",
    text: "Introduce gamification elements to keep users engaged while building their custom models.",
    date: "September 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Empowering teams with AI-driven customization, seamless integration, and robust security for smarter collaboration.";

export const collabContent = [
  {
    id: "0",
    title: "Custom Model Collaboration",
    text: collabText,
  },
  {
    id: "1",
    title: "Intuitive AI Tools",
  },
  {
    id: "2",
    title: "Enhanced Security Features",
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
    price: "0",
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
    price: "14.99",
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
    description: "Custom solutions for large-scale operations.",
    price: "Contact us",
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
    text: "Empower users to create AI models tailored to their specific needs.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Personalized Insights",
    text: "Deliver actionable insights using AI-driven personalization.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Seamless API Integration",
    text: "Easily integrate Impersona’s capabilities into your systems.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Real-time Interactions",
    text: "Leverage AI to provide instant and accurate responses.",
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
