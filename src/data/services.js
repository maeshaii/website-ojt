import {
  Code,Rocket,Search,PenTool,Monitor,Store,Image,Presentation,FileText,Layout,BookOpen,
  Music,
  Instagram,
  Mail,
  PanelsTopLeft,
  Badge,
  Package,
  Megaphone,
  Facebook,
  Briefcase,
  TrendingUp,
  Users,
  Lightbulb,
  ClipboardList,
  BadgeDollarSign,
  Smile,
  Target,
  Phone,
  Headphones,
  Copyright,
  Mic,
  AudioWaveform,
  Podcast,
  Radio,
  MonitorSmartphone,
  Cloud,
  Globe,
  Wrench,
  LayoutDashboard,
  Laptop,
  Cpu,
  Terminal,
  Puzzle,
  Smartphone,
  TabletSmartphone,
  ShieldCheck,
  Headset,
  FileCog,
  PenSquare,
  Languages,
  BookOpen as BookMarked,
  PencilLine,
  RefreshCcw,
  Quote,
  SpellCheck,
  MessageSquareMore,
  FileBadge,
  MailOpen,
  Linkedin,
  Newspaper,
  BadgeInfo,
  ShoppingBag,
  Clapperboard,
  Feather,
  AudioLines,
  SmilePlus,
  Repeat,
  Baby,
  Twitch,
  Box,
  Building2,
  
  Globe as LayoutTemplate,
  Type,
  Film,
  Video,
  FileVideo,
  Sparkles,
  Camera,
  MonitorPlay,
  Scissors,
  Wand2,
  Palette,
  PlaySquare,
  Captions,
  Images,
  BadgeCheck,
  ShoppingBag as ShoppingCart,
  Bot,
  MessageSquareMore as MessageCircle,
  BarChart3,
  HeartHandshake,


} from "lucide-react";

import digitalMarketing from "../assets/digital-marketing.jpg";

import graphicsAndDesign from "../assets/digital-marketing.jpg";
import businessServices from "../assets/digital-marketing.jpg";
import musicAndAudio from "../assets/digital-marketing.jpg";
import programmingAndTech from "../assets/digital-marketing.jpg";
import writingAndTranslation from "../assets/digital-marketing.jpg";
import videoAnimation from "../assets/digital-marketing.jpg";

export const servicesData = [
  {
  id: 1,
  slug: "digital-marketing",
  title: "Digital Marketing",
  description:
    "Boost your online visibility and connect with your target market with our professional digital marketing services.",
  icon: "📣",
  image: digitalMarketing,

  stats: [
    { icon: Rocket, text: "Brand Growth" },
    { icon: Search, text: "SEO Results" },
    { icon: Megaphone, text: "Marketing Strategy" },
  ],

  subServices: [
    {
      title: "Video Marketing",
      desc: "Creative video campaigns that increase engagement and brand awareness.",
      icon: Megaphone,
      price: "$8,000",
      reviews: { count: 128, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "E-Commerce Marketing",
      desc: "Marketing strategies designed to boost online store sales and conversions.",
      icon: ShoppingCart,
      price: "$10,000",
      reviews: { count: 203, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Email Marketing",
      desc: "Professional email campaigns to nurture leads and increase conversions.",
      icon: Mail,
      price: "$6,000",
      reviews: { count: 156, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Email Automations",
      desc: "Automated email workflows for customer engagement and retention.",
      icon: Bot,
      price: "$7,500",
      reviews: { count: 94, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Community Boosting",
      desc: "Strategies to grow and engage your online community and audience.",
      icon: Users,
      price: "$999",
      reviews: { count: 87, rating: 4.6 },
      image:
        "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Marketing Strategy",
      desc: "Comprehensive marketing strategies tailored to your business goals.",
      icon: BarChart3,
      price: "$15,000",
      reviews: { count: 176, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Brand Strategy (SEO)",
      desc: "SEO-focused branding strategies to strengthen your online presence.",
      icon: Search,
      price: "$2,500",
      reviews: { count: 143, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing Strategy (SEO)",
      desc: "Data-driven digital marketing strategies with SEO optimization.",
      icon: TrendingUp,
      price: "$8,000",
      reviews: { count: 241, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Marketing Concepts and Ideation",
      desc: "Creative marketing ideas and campaign concepts for your brand.",
      icon: Lightbulb,
      price: "$10,000",
      reviews: { count: 66, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Conscious Branding and Marketing (SEO)",
      desc: "Ethical and impactful branding strategies with SEO integration.",
      icon: HeartHandshake,
      price: "$12,000",
      reviews: { count: 98, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Marketing Advice",
      desc: "Professional guidance and consultation for digital marketing success.",
      icon: MessageCircle,
      price: "$5,000",
      reviews: { count: 115, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Music Promotion",
      desc: "Marketing and promotional campaigns for musicians and artists.",
      icon: Music,
      price: "$5,000",
      reviews: { count: 74, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Podcast Marketing",
      desc: "Promotional strategies to grow podcast reach and engagement.",
      icon: Mic,
      price: "$4,000",
      reviews: { count: 82, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Mobile App Marketing",
      desc: "Marketing campaigns designed to increase app downloads and users.",
      icon: Smartphone,
      price: "$6,000",
      reviews: { count: 132, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Book and eBook Marketing",
      desc: "Promotional strategies for books, eBooks, and digital publications.",
      icon: BookOpen,
      price: "$4,500",
      reviews: { count: 58, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Self-Publish Your Book",
      desc: "Guidance and support for self-publishing books and eBooks.",
      icon: PenTool,
      price: "$399",
      reviews: { count: 49, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    },
  ],
},
  // =========================
  // GRAPHICS AND DESIGN
  // =========================
{
  id: 2,
  slug: "graphics-and-design",
  title: "Graphics and Design",
  description:
    "Modern and creative graphic design solutions tailored for your business and branding needs.",
  icon: "🎨",
  image: graphicsAndDesign,

  stats: [
    { icon: PenTool, text: "Creative Designs" },
    { icon: Monitor, text: "Modern Visuals" },
    { icon: Image, text: "High Quality Graphics" },
  ],

  subServices: [
    {
      title: "Industrial and Product Design",
      desc: "Professional product and industrial concept designs.",
      icon: PenTool,
      price: "$4,750",
      reviews: { count: 142, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Graphics for Streamers",
      desc: "Custom overlays, banners, and stream graphics.",
      icon: Monitor,
      price: "$475",
      reviews: { count: 118, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Trade Booth Design",
      desc: "Eye-catching booth and exhibition layouts.",
      icon: Store,
      price: "$3,500",
      reviews: { count: 67, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Image Editing",
      desc: "High-quality photo manipulation and retouching.",
      icon: Image,
      price: "$80",
      reviews: { count: 289, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Presentation Design",
      desc: "Creative and modern presentation slides.",
      icon: Presentation,
      price: "$750",
      reviews: { count: 174, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Resume Design",
      desc: "Professional resume and CV layouts.",
      icon: FileText,
      price: "$235",
      reviews: { count: 196, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Flyer Design",
      desc: "Promotional flyers for businesses and events.",
      icon: Layout,
      price: "$235",
      reviews: { count: 210, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Brochure Design",
      desc: "Elegant brochure and catalog designs.",
      icon: BookOpen,
      price: "$575",
      reviews: { count: 132, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Poster Design",
      desc: "Creative posters for marketing and events.",
      icon: PanelsTopLeft,
      price: "$315",
      reviews: { count: 157, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Menu Design",
      desc: "Stylish menu layouts for restaurants and cafes.",
      icon: Layout,
      price: "$475",
      reviews: { count: 88, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Invitation Design",
      desc: "Beautiful invitation cards for all occasions.",
      icon: Mail,
      price: "$315",
      reviews: { count: 144, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Packaging and Label Design",
      desc: "Modern packaging and product label concepts.",
      icon: Package,
      price: "$1,200",
      reviews: { count: 103, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Book Design",
      desc: "Professional interior and layout book designs.",
      icon: BookOpen,
      price: "$1,750",
      reviews: { count: 74, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Book Covers",
      desc: "Creative and marketable book cover designs.",
      icon: BookOpen,
      price: "$675",
      reviews: { count: 165, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Album Cover Design",
      desc: "Unique album artwork and music branding.",
      icon: Music,
      price: "$475",
      reviews: { count: 91, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Social Media Design",
      desc: "Engaging social media posts and branding.",
      icon: Instagram,
      price: "$340",
      reviews: { count: 248, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Thumbnails Design",
      desc: "Clickable and attractive video thumbnails.",
      icon: Monitor,
      price: "$53",
      reviews: { count: 316, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Email Design",
      desc: "Professional email templates and newsletters.",
      icon: Mail,
      price: "$315",
      reviews: { count: 109, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Web Banners Design",
      desc: "Responsive banners for websites and ads.",
      icon: PanelsTopLeft,
      price: "$340",
      reviews: { count: 136, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Signage Design",
      desc: "Custom signage and display graphics.",
      icon: Badge,
      price: "$675",
      reviews: { count: 72, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    },
  ],
},

  // NOTE: remaining services continue same pattern...

  // =========================
  // BUSINESS SERVICES
  // =========================
  {
  id: 3,
  slug: "business-services",
  title: "Business Services",
  description:
    "Professional business solutions to help startups, entrepreneurs, and companies grow efficiently and successfully.",
  icon: "💼",
  image: businessServices,

  stats: [
    { icon: Briefcase, text: "Business Growth" },
    { icon: TrendingUp, text: "Strategic Planning" },
    { icon: Users, text: "Customer Management" },
  ],

  subServices: [
    {
      title: "Formation and Consulting",
      desc: "Professional guidance for business setup and company development.",
      icon: Briefcase,
      price: "$250 - $1200",
      reviews: { count: 146, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Market Research",
      desc: "In-depth market analysis and competitor research.",
      icon: Search,
      price: "$5,000",
      reviews: { count: 118, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Business Plans",
      desc: "Detailed and strategic business plan preparation.",
      icon: FileText,
      price: "$3,500",
      reviews: { count: 134, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Business Consulting",
      desc: "Expert advice to improve business performance and growth.",
      icon: Lightbulb,
      price: "$15,000",
      reviews: { count: 172, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "HR Consulting",
      desc: "Human resource solutions for hiring and workforce management.",
      icon: Users,
      price: "$8,000",
      reviews: { count: 103, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Project Management",
      desc: "Efficient planning and execution of projects.",
      icon: ClipboardList,
      price: "$10,000",
      reviews: { count: 98, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Product Management",
      desc: "Product development strategies and lifecycle management.",
      icon: Package,
      price: "$7,500",
      reviews: { count: 86, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sales",
      desc: "Sales strategies and customer acquisition solutions.",
      icon: BadgeDollarSign,
      price: "$5000",
      reviews: { count: 214, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Customer Experience Management",
      desc: "Enhancing customer satisfaction and engagement.",
      icon: Smile,
      price: "$12,000",
      reviews: { count: 125, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Lead Generation",
      desc: "Generating quality leads to grow your business.",
      icon: Target,
      price: "$7,500",
      reviews: { count: 247, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Call Center and Calling",
      desc: "Professional outbound and inbound call solutions.",
      icon: Phone,
      price: "$3000",
      reviews: { count: 92, rating: 4.7 },
      image:
        "https://images.unsplash.com/photo-1573497491765-cf4147f4d6fd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Customer Care",
      desc: "Reliable customer support and assistance services.",
      icon: Headphones,
      price: "$4,000",
      reviews: { count: 163, rating: 4.8 },
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Copyright Registration",
      desc: "Protect your intellectual property and creative works legally.",
      icon: Copyright,
      price: "$500",
      reviews: { count: 71, rating: 4.9 },
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    },
  ],
},

  // =========================
  // MUSIC AND AUDIO
  // =========================
 {
  id: 4,
  slug: "music-and-audio",
  title: "Music and Audio",
  description:
    "Professional music and audio production services for creators, businesses, podcasts, and media content.",
  icon: "🎵",
  image: musicAndAudio,

  stats: [
    { icon: Mic, text: "Professional Voice Work" },
    { icon: Headphones, text: "High Quality Audio" },
    { icon: AudioWaveform, text: "Studio Production" },
  ],

  subServices: [
    {
      title: "Voice Over",
      desc: "Professional voice-over recordings for commercials, videos, and content.",
      icon: Mic,
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      price: "$1,000",
      reviews: { count: 284, rating: 4.9 },
    },
    {
      title: "Podcast Production",
      desc: "Complete podcast editing, mixing, and production services.",
      icon: Podcast,
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
      price: "$3,500",
      reviews: { count: 198, rating: 4.8 },
    },
    {
      title: "Audiobook Production",
      desc: "Professional audiobook narration and mastering solutions.",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      price: "$5,000",
      reviews: { count: 121, rating: 4.9 },
    },
    {
      title: "Audio Ads Production",
      desc: "Creative and engaging audio advertisements for brands and campaigns.",
      icon: Radio,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
      price: "$2,500",
      reviews: { count: 143, rating: 4.7 },
    },
  ],
},

  // =========================
  // PROGRAMMING AND TECH
  // =========================
  // =========================
// PROGRAMMING AND TECH
// =========================
{
  id: 5,
  slug: "programming-and-tech",
  title: "Programming and Tech",
  description:
    "Modern software, web, and mobile development solutions tailored for businesses, startups, and digital creators.",
  icon: "💻",
  image: programmingAndTech,

  stats: [
    { icon: Code, text: "Clean Code" },
    { icon: MonitorSmartphone, text: "Modern Applications" },
    { icon: Cloud, text: "Cloud Solutions" },
  ],

  subServices: [
    {
      title: "Website Development",
      desc: "Responsive and modern websites tailored to your business needs.",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      price: "$10,000",
      reviews: { count: 342, rating: 4.9 },
    },
    {
      title: "Website Maintenance",
      desc: "Continuous website updates, fixes, and optimization services.",
      icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      price: "$3,000",
      reviews: { count: 187, rating: 4.8 },
    },
    {
      title: "WordPress",
      desc: "Custom WordPress websites, themes, and plugin solutions.",
      icon: LayoutDashboard,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
      price: "$7,5000",
      reviews: { count: 298, rating: 4.9 },
    },
    {
      title: "Custom Websites",
      desc: "Fully customized websites built for unique business requirements.",
      icon: Code,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      price: "$15,000",
      reviews: { count: 221, rating: 4.9 },
    },
    {
      title: "Portfolio",
      desc: "Professional portfolio websites for freelancers and creatives.",
      icon: Briefcase,
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      price: "$999",
      reviews: { count: 164, rating: 4.8 },
    },
    {
      title: "Web Applications",
      desc: "Dynamic and scalable web application development.",
      icon: Monitor,
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200&auto=format&fit=crop",
      price: "$25,000",
      reviews: { count: 201, rating: 4.9 },
    },
    {
      title: "Desktop Applications",
      desc: "Powerful desktop software solutions for productivity and business.",
      icon: Laptop,
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
      price: "$20,000",
      reviews: { count: 117, rating: 4.7 },
    },
    {
      title: "Software Development",
      desc: "Custom software engineering and development services.",
      icon: Cpu,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      price: "$30,000",
      reviews: { count: 276, rating: 4.9 },
    },
    {
      title: "Scripting",
      desc: "Automation scripts and custom programming solutions.",
      icon: Terminal,
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop",
      price: "$5,000",
      reviews: { count: 144, rating: 4.8 },
    },
    {
      title: "Plugins Development",
      desc: "Custom plugins and extensions for websites and platforms.",
      icon: Puzzle,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      price: "$7,000",
      reviews: { count: 133, rating: 4.7 },
    },
    {
      title: "Mobile App Developments",
      desc: "Native and modern mobile app development services.",
      icon: Smartphone,
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
      price: "$30,000",
      reviews: { count: 310, rating: 4.9 },
    },
    {
      title: "Cross-platform Apps",
      desc: "Applications that work seamlessly across multiple platforms.",
      icon: TabletSmartphone,
      image:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop",
      price: "$25,000",
      reviews: { count: 205, rating: 4.8 },
    },
    {
      title: "Mobile App Maintenance",
      desc: "Ongoing updates, optimization, and support for mobile apps.",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=1200&auto=format&fit=crop",
      price: "$8,000",
      reviews: { count: 126, rating: 4.8 },
    },
    {
      title: "Support and IT",
      desc: "Technical support and IT assistance for businesses.",
      icon: Headset,
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      price: "$10,000",
      reviews: { count: 188, rating: 4.7 },
    },
    {
      title: "Cloud Computing",
      desc: "Cloud infrastructure, deployment, and computing services.",
      icon: Cloud,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      price: "$15,000",
      reviews: { count: 173, rating: 4.8 },
    },
    {
      title: "Convert Files",
      desc: "File conversion and formatting solutions for various platforms.",
      icon: FileCog,
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      price: "$2,000",
      reviews: { count: 96, rating: 4.6 },
    },
  ],
},

  // =========================
  // VIDEO ANIMATION
  // =========================
  {
  id: 6,
  slug: "video-animation",
  title: "Video Animation",
  description:
    "Professional video editing, animation, motion graphics, and production services for businesses, creators, and brands.",
  icon: "🎬",
  image: videoAnimation,

  stats: [
    { icon: Video, text: "Professional Editing" },
    { icon: Clapperboard, text: "Creative Productions" },
    { icon: Sparkles, text: "High Quality Animations" },
  ],

  subServices: [
    {
      title: "Video Editing",
      desc: "Professional editing for content, business, and promotional videos.",
      icon: Scissors,
      image:
        "https://images.unsplash.com/photo-1574717024453-354056510a07?q=80&w=1200&auto=format&fit=crop",
      price: "$5,000",
      reviews: { count: 325, rating: 4.9 },
    },
    {
      title: "Visual Effects",
      desc: "Cinematic visual effects and advanced post-production enhancements.",
      icon: Wand2,
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop",
      price: "$12,000",
      reviews: { count: 214, rating: 4.8 },
    },
    {
      title: "Video Art",
      desc: "Creative artistic video production and experimental visuals.",
      icon: Palette,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      price: "$8,000",
      reviews: { count: 146, rating: 4.7 },
    },
    {
      title: "Intro and Outro Videos",
      desc: "Professional intros and outros for videos and branding.",
      icon: PlaySquare,
      image:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1200&auto=format&fit=crop",
      price: "$2,500",
      reviews: { count: 188, rating: 4.8 },
    },
    {
      title: "Video Templates Editing",
      desc: "Customization and editing of ready-made video templates.",
      icon: LayoutTemplate,
      image:
        "https://images.unsplash.com/photo-1516321310764-8d1c47f5b3c9?q=80&w=1200&auto=format&fit=crop",
      price: "$3,000",
      reviews: { count: 137, rating: 4.7 },
    },
    {
      title: "Subtitles and Captions",
      desc: "Accurate subtitles and captions for accessibility and engagement.",
      icon: Captions,
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
      price: "$1,500",
      reviews: { count: 172, rating: 4.9 },
    },
    {
      title: "Video Ads and Commercials",
      desc: "High-converting promotional and commercial video ads.",
      icon: Megaphone,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      price: "$4,500",
      reviews: { count: 241, rating: 4.8 },
    },
    {
      title: "Social Media Videos",
      desc: "Engaging videos optimized for social media platforms.",
      icon: Instagram,
      image:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1200&auto=format&fit=crop",
      price: "$1,200",
      reviews: { count: 292, rating: 4.9 },
    },
    {
      title: "Music Videos",
      desc: "Creative music video production and editing services.",
      icon: Music,
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
      price: "$6,000",
      reviews: { count: 163, rating: 4.8 },
    },
    {
      title: "Slideshow Videos",
      desc: "Dynamic slideshow videos for events and presentations.",
      icon: Images,
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      price: "$800",
      reviews: { count: 126, rating: 4.7 },
    },
    {
      title: "Live Action Explainers",
      desc: "Professional live-action explainer video production.",
      icon: Camera,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      price: "$4,000",
      reviews: { count: 111, rating: 4.8 },
    },
    {
      title: "Screencasting Videos",
      desc: "Tutorial and demonstration screencast video creation.",
      icon: MonitorPlay,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      price: "$1,200",
      reviews: { count: 103, rating: 4.7 },
    },
    {
      title: "Animated Explainers",
      desc: "Animated explainer videos for businesses and products.",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
      price: "$3,000",
      reviews: { count: 222, rating: 4.9 },
    },
    {
      title: "Character Animation",
      desc: "2D and 3D character animation for stories and branding.",
      icon: SmilePlus,
      image:
        "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1200&auto=format&fit=crop",
      price: "$5,000",
      reviews: { count: 145, rating: 4.8 },
    },
    {
      title: "Animated GIFs",
      desc: "Creative looping GIF animations for social and web use.",
      icon: Repeat,
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      price: "$500",
      reviews: { count: 98, rating: 4.6 },
    },
    {
      title: "Animation for Kids",
      desc: "Fun and engaging animations designed for children.",
      icon: Baby,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
      price: "$4,000",
      reviews: { count: 132, rating: 4.9 },
    },
    {
      title: "Animation for Streamers",
      desc: "Animated overlays, alerts, and assets for streamers.",
      icon: Twitch,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      price: "$2,000",
      reviews: { count: 177, rating: 4.8 },
    },
    {
      title: "2D, 3D, 4D, and 6D Product Animation",
      desc: "Advanced product animation and visualization services.",
      icon: Box,
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
      price: "7,000",
      reviews: { count: 94, rating: 4.8 },
    },
    {
      title: "E-Commerce Product Videos",
      desc: "Professional product showcase videos for online stores.",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      price: "$2,000",
      reviews: { count: 208, rating: 4.9 },
    },
    {
      title: "Corporate Videos",
      desc: "Corporate branding, company profile, and presentation videos.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      price: "$3,000",
      reviews: { count: 165, rating: 4.8 },
    },
    {
      title: "Logo Animation",
      desc: "Dynamic animated logos for brands and businesses.",
      icon: BadgeCheck,
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
      price: "$1,200",
      reviews: { count: 259, rating: 4.9 },
    },
    {
      title: "Lottie and Web Animation",
      desc: "Interactive web animations and Lottie animations.",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop",
      price: "$1,500",
      reviews: { count: 118, rating: 4.7 },
    },
    {
      title: "Text Animations",
      desc: "Animated typography and kinetic text effects.",
      icon: Type,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      price: "$900",
      reviews: { count: 149, rating: 4.8 },
    },
    {
      title: "Filmed Video Production",
      desc: "Professional filming and production services.",
      icon: Film,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      price: "$5,000",
      reviews: { count: 135, rating: 4.9 },
    },
    {
      title: "Videography",
      desc: "Creative videography for events, brands, and content creators.",
      icon: Video,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      price: "$3,000",
      reviews: { count: 192, rating: 4.8 },
    },
    {
      title: "Article to Video",
      desc: "Transform articles and blogs into engaging videos.",
      icon: FileVideo,
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      price: "$1,200",
      reviews: { count: 101, rating: 4.7 },
    },
    {
      title: "Book Trailers",
      desc: "Cinematic trailers designed for books and authors.",
      icon: BookMarked,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      price: "$2,500",
      reviews: { count: 88, rating: 4.8 },
    },
  ],
},

  // =========================
  // WRITING AND TRANSLATION
  // =========================
  {
    id: 7,
    slug: "writing-and-translation",
    title: "Writing and Translation",
    description:
      "Professional writing, editing, publishing, and translation services for businesses, authors, and creators.",
    icon: "✍️",
    image: writingAndTranslation,

    stats: [
      { icon: PenSquare, text: "Creative Writing" },
      { icon: Languages, text: "Translation Services" },
      { icon: BookOpen, text: "Publishing Support" },
    ],

   subServices: [
  {
    title: "Articles and Blog Posts",
    desc: "Engaging and SEO-friendly articles and blog content.",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    price: "$250",
    reviews: { count: 210, rating: 4.9 },
  },
  {
    title: "Content Strategy",
    desc: "Strategic content planning to grow your brand and audience.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    price: "$1,200",
    reviews: { count: 156, rating: 4.8 },
  },
  {
    title: "Website Content",
    desc: "Professional website copywriting for businesses and brands.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",
    price: "$800",
    reviews: { count: 194, rating: 4.9 },
  },
  {
    title: "Scriptwriting",
    desc: "Creative scripts for videos, podcasts, films, and commercials.",
    icon: Clapperboard,
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    price: "$1,000",
    reviews: { count: 132, rating: 4.8 },
  },
  {
    title: "Creative Writing",
    desc: "Original storytelling, fiction, and imaginative writing services.",
    icon: Feather,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
    price: "$900",
    reviews: { count: 145, rating: 4.9 },
  },
  {
    title: "Podcast Writing",
    desc: "Structured podcast scripts and episode planning.",
    icon: Mic,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
    price: "$700",
    reviews: { count: 118, rating: 4.8 },
  },
  {
    title: "Speechwriting",
    desc: "Professional speeches for events, business, and presentations.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    price: "$1,000",
    reviews: { count: 104, rating: 4.9 },
  },
  {
    title: "Research and Summaries",
    desc: "Detailed research and concise summaries for projects and reports.",
    icon: Search,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    price: "$400",
    reviews: { count: 178, rating: 4.7 },
  },
  {
    title: "Blurb",
    desc: "Compelling blurbs for books, products, and marketing.",
    icon: Quote,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    price: "$500",
    reviews: { count: 92, rating: 4.8 },
  },
  {
    title: "Proofreading and Editing",
    desc: "Grammar correction, proofreading, and professional editing.",
    icon: SpellCheck,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    price: "$300",
    reviews: { count: 260, rating: 4.9 },
  },
  {
    title: "Writing Advice",
    desc: "Professional feedback and guidance to improve your writing.",
    icon: MessageSquareMore,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    price: "$200",
    reviews: { count: 101, rating: 4.7 },
  },
  {
    title: "Book and eBook Writing",
    desc: "Complete writing services for books and digital publications.",
    icon: BookMarked,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    price: "$12,000",
    reviews: { count: 88, rating: 4.9 },
  },
  {
    title: "Book Editing",
    desc: "Professional editing and refinement for manuscripts.",
    icon: PencilLine,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
    price: "$3,000",
    reviews: { count: 119, rating: 4.9 },
  },
  {
    title: "RePublication",
    desc: "Book republication and formatting services.",
    icon: RefreshCcw,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
    price: "$999",
    reviews: { count: 74, rating: 4.7 },
  },
  {
    title: "Translation",
    desc: "Accurate multilingual translation services.",
    icon: Languages,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
    price: "$0.15 / word",
    reviews: { count: 233, rating: 4.9 },
  },
  {
    title: "Transcription",
    desc: "Audio and video transcription into written text.",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    price: "$1.25 / audio minute",
    reviews: { count: 144, rating: 4.8 },
  },
  {
    title: "Brand Voice and Tone",
    desc: "Develop a consistent and recognizable brand voice.",
    icon: AudioLines,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    price: "$1,000",
    reviews: { count: 87, rating: 4.8 },
  },
  {
    title: "Business Names and Slogans",
    desc: "Creative naming and slogan development for businesses.",
    icon: BadgeInfo,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    price: "$500",
    reviews: { count: 112, rating: 4.7 },
  },
  {
    title: "Product Descriptions",
    desc: "Persuasive product descriptions for e-commerce and marketing.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    price: "$100",
    reviews: { count: 189, rating: 4.8 },
  },
  {
    title: "Ad Copy",
    desc: "High-converting advertising copy for campaigns and promotions.",
    icon: BadgeDollarSign,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    price: "$300",
    reviews: { count: 170, rating: 4.9 },
  },
  {
    title: "Sales Copy",
    desc: "Strategic sales copy designed to drive conversions.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    price: "$700",
    reviews: { count: 164, rating: 4.9 },
  },
  {
    title: "Email Copy",
    desc: "Professional email marketing and campaign copywriting.",
    icon: Mail,
    image:
      "https://images.unsplash.com/photo-1516321310764-8d4c5f03c6f9?q=80&w=1200&auto=format&fit=crop",
    price: "$250",
    reviews: { count: 138, rating: 4.8 },
  },
  {
    title: "Social Media Copywriting",
    desc: "Creative captions and social media content writing.",
    icon: Instagram,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    price: "$400",
    reviews: { count: 206, rating: 4.9 },
  },
  {
    title: "Press Releases",
    desc: "Professional press releases for announcements and PR.",
    icon: Newspaper,
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
    price: "$800",
    reviews: { count: 91, rating: 4.8 },
  },
  {
    title: "Resume Writing",
    desc: "Professional resume writing tailored to your career goals.",
    icon: FileBadge,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    price: "$300",
    reviews: { count: 227, rating: 4.9 },
  },
  {
    title: "Cover Letters",
    desc: "Custom cover letters that stand out to employers.",
    icon: MailOpen,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    reviews: { count: 126, rating: 4.8 },
  },
  {
    title: "LinkedIn Profiles",
    desc: "Optimized LinkedIn profiles for professional branding.",
    icon: Linkedin,
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1200&auto=format&fit=crop",
    price: "$350",
    reviews: { count: 174, rating: 4.9 },
  },
  {
    title: "Job Descriptions",
    desc: "Clear and professional job description writing services.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    price: "$200",
    reviews: { count: 83, rating: 4.7 },
  },
  {
    title: "Technical Writing",
    desc: "Accurate and structured technical documentation and manuals.",
    icon: FileCog,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    price: "$1,000",
    reviews: { count: 142, rating: 4.9 },
  },
] 
  },
];