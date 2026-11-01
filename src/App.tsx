import { useEffect, useRef, useState } from 'react'
import sarfarajPortrait from './assets/sarfaraj-about.jpeg'
import siteLogo from './assets/site-logo.svg'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const HEADER_NAV_LINKS = NAV_LINKS.filter(link => link.label !== 'Contact')

const SERVICES = [
  {
    number: '01',
    title: 'WordPress Development',
    desc: 'Custom WordPress websites built around your business requirements.',
    tags: ['WordPress Development', 'Elementor & Elementor Pro', 'Divi, Avada & WPBakery', 'Theme Customization', 'Custom Templates', 'Plugin Integration'],
  },
  {
    number: '02',
    title: 'UI/UX & Web Design',
    desc: 'Clean and user-focused interfaces designed for modern websites.',
    tags: ['Website UI Design', 'Landing Page Design', 'Figma Design', 'Responsive Layouts', 'Website Redesign', 'Figma-to-WordPress'],
  },
  {
    number: '03',
    title: 'WooCommerce',
    desc: 'Professional eCommerce experiences built with WordPress and WooCommerce.',
    tags: ['Product Pages', 'Shop Layouts', 'Cart & Checkout', 'WooCommerce Customization', 'Payment & Plugin Integration'],
  },
  {
    number: '04',
    title: 'Website Optimization',
    desc: 'Improving website performance, usability, and overall experience.',
    tags: ['WordPress Optimization', 'WP Rocket', 'Responsive Optimization', 'CSS & Layout Fixes', 'Technical Troubleshooting'],
  },
  {
    number: '05',
    title: 'Analytics & Tracking',
    desc: 'Setting up the right tools to understand website performance.',
    tags: ['Google Analytics 4', 'Google Tag Manager', 'Google Search Console', 'Microsoft Clarity', 'Conversion Tracking'],
  },
  {
    number: '06',
    title: 'Website Visuals',
    desc: 'Professional visuals that make websites and content more engaging.',
    tags: ['Blog Featured Images', 'Article Graphics', 'Website Banners', 'Digital Graphics', 'Social Media Visuals'],
  },
]

const PROJECTS = [
  {
    title: 'Business Landing Page',
    desc: 'A clean, conversion-focused landing page built with WordPress and Elementor, featuring responsive layouts and custom sections.',
    services: 'WordPress • UI/UX • Elementor',
    tools: 'Figma • WordPress • Elementor',
    category: ['wordpress', 'landing'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'eCommerce Store',
    desc: 'Full-featured WooCommerce store with custom product pages, optimized checkout flow, and payment integrations.',
    services: 'WooCommerce • WordPress • UI/UX',
    tools: 'Figma • WordPress • WooCommerce',
    category: ['wordpress', 'woocommerce'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'SaaS Product Website',
    desc: 'Modern SaaS website with feature sections, pricing table, and testimonials, fully responsive across all devices.',
    services: 'UI/UX • WordPress • Elementor',
    tools: 'Figma • WordPress • Elementor',
    category: ['uiux', 'wordpress'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'Agency Portfolio',
    desc: 'Creative agency portfolio with animated sections, project showcases, and a modern visual identity.',
    services: 'UI/UX • WordPress • Divi',
    tools: 'Figma • WordPress • Divi',
    category: ['uiux', 'wordpress'],
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'Real Estate Landing Page',
    desc: 'High-converting real estate landing page with property listings, contact forms, and CTA optimization.',
    services: 'Landing Page • WordPress • Elementor',
    tools: 'Figma • WordPress • Elementor',
    category: ['landing', 'wordpress'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format',
  },
  {
    title: 'Digital Marketing Agency',
    desc: 'Full website redesign for a digital marketing agency, improving visual hierarchy and user engagement.',
    services: 'WordPress • UI/UX • WooCommerce',
    tools: 'Figma • WordPress • Elementor',
    category: ['wordpress', 'uiux'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&auto=format',
  },
]

const TECH_STACK = [
  {
    category: 'WordPress',
    items: ['Elementor', 'Elementor Pro', 'Divi', 'Avada', 'WPBakery', 'WooCommerce', 'ACF', 'Contact Form 7', 'Yoast SEO'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
  },
  {
    category: 'Design',
    items: ['Figma', 'Canva', 'Photoshop'],
  },
  {
    category: 'Analytics',
    items: ['GA4', 'GTM', 'GSC', 'Microsoft Clarity'],
  },
  {
    category: 'SEO & Marketing',
    items: ['Yoast SEO', 'Ahrefs', 'Brevo', 'Mailchimp', 'MailerLite', 'HubSpot', 'Zapier'],
  },
  {
    category: 'CMS Platforms',
    items: ['Shopify', 'Webflow', 'Showit', 'Squarespace', 'Wix'],
  },
]

const PROCESS = [
  { step: '01', title: 'Understand', desc: 'I start by understanding your goals, requirements, audience, and project scope.' },
  { step: '02', title: 'Plan', desc: 'I define the website structure, content flow, and required functionality.' },
  { step: '03', title: 'Design', desc: 'I create the UI or work from existing Figma designs to establish the visual direction.' },
  { step: '04', title: 'Develop', desc: 'I build the website using WordPress and the appropriate tools and technologies.' },
  { step: '05', title: 'Optimize', desc: 'I check responsiveness, usability, performance, and functionality across devices.' },
  { step: '06', title: 'Launch', desc: 'After final testing and revisions, I prepare the website for deployment.' },
]

const WHY_ME = [
  { num: '01', title: 'Practical Experience', desc: 'Hands-on experience working across 75+ WordPress websites.' },
  { num: '02', title: 'Design + Development', desc: 'I understand both the visual design side and the technical implementation side.' },
  { num: '03', title: 'Attention to Detail', desc: 'I focus on spacing, responsiveness, visual consistency, and usability.' },
  { num: '04', title: 'Problem Solving', desc: 'I troubleshoot WordPress, CSS, plugin, responsive, and functionality-related issues.' },
  { num: '05', title: 'End-to-End Support', desc: 'From design and development to optimization, tracking, and deployment.' },
]

const FILTER_CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'UI/UX', value: 'uiux' },
  { label: 'Landing Pages', value: 'landing' },
  { label: 'WooCommerce', value: 'woocommerce' },
]

type VisualIconType = 'featured' | 'article' | 'banner' | 'digital' | 'content' | 'social'

function VisualDesignIcon({ type }: { type: VisualIconType }) {
  const primary = `visual-${type}-primary`
  const secondary = `visual-${type}-secondary`

  return (
    <svg className="visual-design-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={primary} x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#86E968" />
          <stop offset="0.52" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id={secondary} x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#F97316" />
        </linearGradient>
      </defs>

      {type === 'featured' && (
        <g transform="translate(8 8) scale(2)" fill="#5DD62C">
          <path d="M17.453 24q-.253 0-.51-.066L1.48 19.793a2.02 2.02 0 0 1-1.414-2.45l1.951-7.272a.5.5 0 0 1 .966.258l-1.95 7.27c-.139.53.179 1.082.71 1.229L17.2 22.967a.995.995 0 0 0 1.217-.704l.781-2.894a.499.499 0 1 1 .966.26l-.78 2.89A2 2 0 0 1 17.453 24" />
          <path d="M22 18H6c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2M6 3c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V4c0-.551-.449-1-1-1z" />
          <path d="M9 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1M4.57 16.93a.5.5 0 0 1-.354-.853l4.723-4.723c.566-.566 1.555-.566 2.121 0l1.406 1.406 3.892-4.67a1.5 1.5 0 0 1 1.142-.54h.011a1.5 1.5 0 0 1 1.139.523l5.23 6.102a.5.5 0 1 1-.759.651l-5.23-6.102a.5.5 0 0 0-.38-.174.53.53 0 0 0-.384.18l-4.243 5.091a.5.5 0 0 1-.362.179.48.48 0 0 1-.376-.146l-1.793-1.793a.514.514 0 0 0-.707 0l-4.723 4.723a.5.5 0 0 1-.353.146" />
        </g>
      )}

      {type === 'article' && (
        <g transform="translate(8 8) scale(.48)" fill="#5DD62C">
          <path d="M23.42 92.06a6.11 6.11 0 0 0 5.83 4.33 6.2 6.2 0 0 0 1.75-.25l39.62-11.93 7.13-.93A6.08 6.08 0 0 0 83 76.46l-3.76-28.7L91.08 29.6 94 25.19 95.4 23a6.77 6.77 0 0 0-11.34-7.41l-1.44 2.21-2.88 4.4-3.23 4.94L74.1 8.79a6.08 6.08 0 0 0-6.82-5.24L25.2 9.08a6.06 6.06 0 0 0-5.27 6.42l-12.1 3.64a6.08 6.08 0 0 0-4.07 7.57zm60.89-71.37 3.16 2.06 3.15 2.06-1.24 1.9-6.31-4.12zm2.26-3.47a3.77 3.77 0 0 1 6.32 4.13l-.62.95L86 18.17zm-5.14 7.88 3.16 2.06 3.15 2.06L68.49 58.7l-3.16-2.06-3.15-2.06zm-23 40.31.6-1.92a4.74 4.74 0 0 1 2.54 1.66l-1.52 1.32a1 1 0 0 1-1.62-1.06m5.4-2.23a7.65 7.65 0 0 0-3.92-2.56l1-3.27 5.49 3.59zM23.54 13.23a3.1 3.1 0 0 1 2.05-1.18l42.08-5.52a3 3 0 0 1 .41 0 3.09 3.09 0 0 1 3 2.68L74 31l-7.66 11.71-15.06 2a1.5 1.5 0 0 0 .19 3h.2L64.18 46l-5.33 8.17a1 1 0 0 0 0 .1 1 1 0 0 0-.09.2l-.93 3-21.32 2.87a1.5 1.5 0 0 0 .2 3h.19l19.87-2.6-1.18 3.82a4 4 0 0 0 1.63 4.53 4 4 0 0 0 2.19.66 4 4 0 0 0 2.62-1l7.88-6.82.08-.09a1 1 0 0 0 .16-.19l6.52-10L80 76.85a3.07 3.07 0 0 1-.61 2.28 3 3 0 0 1-2 1.17l-42.12 5.53a3.08 3.08 0 0 1-3.45-2.66l-8.89-67.66a3.1 3.1 0 0 1 .61-2.28M8.7 22l11.6-3.49 8.54 65.05a6.09 6.09 0 0 0 6 5.29 5.4 5.4 0 0 0 .8-.06l16.48-2.16-22 6.62a3.07 3.07 0 0 1-3.82-2.05L6.63 25.85A3.09 3.09 0 0 1 8.7 22m30.24-1.6a1.5 1.5 0 0 1 1.29-1.68l24-3.16a1.5 1.5 0 0 1 .39 3l-24 3.15h-.19a1.51 1.51 0 0 1-1.49-1.31m-7.26 14.66A1.5 1.5 0 0 1 33 33.38L66 29a1.5 1.5 0 0 1 .39 3l-33.03 4.36h-.19a1.51 1.51 0 0 1-1.49-1.3M42.89 47.3A1.5 1.5 0 0 1 41.6 49l-6.47.85h-.19a1.5 1.5 0 0 1-.2-3l6.47-.85a1.5 1.5 0 0 1 1.68 1.3M37 75.5a1.5 1.5 0 0 1 1.29-1.68l11.51-1.51a1.5 1.5 0 1 1 .4 3l-11.53 1.48h-.19A1.5 1.5 0 0 1 37 75.5" />
        </g>
      )}

      {type === 'banner' && (
        <g fill="#5DD62C">
          <path d="M59 7.96H5c-1.654 0-3 1.346-3 3v42.08c0 1.654 1.346 3 3 3h54c1.654 0 3-1.346 3-3V10.96c0-1.654-1.346-3-3-3m1 45.08c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1V19.05h56zm0-35.99H4v-6.09c0-.552.449-1 1-1h54c.551 0 1 .448 1 1z" />
          <path d="M56.743 12.505H36.367a1 1 0 1 0 0 2h20.376a1 1 0 1 0 0-2M8.376 35.376h47.248a1 1 0 0 0 1-1v-11.94a1 1 0 0 0-1-1H8.376a1 1 0 0 0-1 1v11.94a1 1 0 0 0 1 1m1-11.94h45.248v9.94H9.376zM8.376 40.337H32a1 1 0 1 0 0-2H8.376a1 1 0 1 0 0 2M32 43.995h-6.881a1 1 0 1 0 0 2H32a1 1 0 1 0 0-2M8.376 45.995h11.812a1 1 0 1 0 0-2H8.376a1 1 0 1 0 0 2M32 49.653H18.733a1 1 0 1 0 0 2H32a1 1 0 1 0 0-2M8.376 51.653h5.906a1 1 0 1 0 0-2H8.376a1 1 0 1 0 0 2M55.624 38.337H37.357a1 1 0 0 0-1 1v11.316a1 1 0 0 0 1 1h18.267a1 1 0 0 0 1-1V39.337a1 1 0 0 0-1-1m-1 11.316H38.357v-9.316h16.267z" />
          <circle cx="7.26" cy="13.507" r="1.005" />
          <circle cx="12.38" cy="13.507" r="1.005" />
          <circle cx="17.51" cy="13.507" r="1.005" />
        </g>
      )}

      {type === 'digital' && (
        <g transform="translate(2 2) scale(.91)" fill="#5DD62C">
          <path d="M61.17 53.48c-1.33-2.59-3.7-4.42-5.79-6.05-.04-.03-.08-.07-.13-.1.85-.07 1.45-.15 1.73-.23l.02.03c.04-.02.08-.05.12-.08.01 0 .01-.01.02-.01.03-.02.05-.04.07-.06.05-.04.1-.09.14-.14 1.08-1.37 1.22-14.96.4-40.38-.05-1.64-1.24-2.93-2.77-2.99-1.05-.04-2.55-.09-4.36-.16C8.81 1.7 5.35 2.9 5.02 4.78c-.45 2.54-1.43 28.65-1.03 38.66.03 1.08.49 2.11 1.26 2.84.61.56 1.34.89 2.13.94 3.21.23 7.22.41 11.74.55 3.63 2.43 8.01 3.84 12.69 3.84.21 0 .42 0 .63-.01 2.67-.07 5.25-.6 7.66-1.53 7.06 7.9 10.92 11.83 12.26 12.5 1.09.53 2.4.87 3.72.87 1.46 0 2.93-.42 4.09-1.45 2.42-2.15 2.34-5.91 1-8.51M7.51 45.37c-.45-.03-.79-.26-.99-.44-.41-.39-.65-.95-.67-1.55-.41-10.27.57-34.76.97-38.05 3.2-1.73 33.63-.55 43.73-.16 1.82.07 3.31.13 4.36.16.53.02.96.54.98 1.19.67 20.99.68 36.33.04 38.95-.52.05-1.51.11-2.82.15-1.14-.91-2.27-1.82-3.4-2.74 3.14-4.05 4.76-9 4.59-14.16C53.91 16.67 43.81 7.1 31.64 7.1c-.22 0-.43 0-.65.01-6.1.17-11.74 2.68-15.88 7.08-4.06 4.31-6.18 9.92-5.99 15.8.2 6.3 3.06 11.91 7.48 15.85-3.45-.14-6.53-.29-9.09-.47m24.87 4.38c-.19.01-.39.01-.58.01-11.18 0-20.46-8.78-20.82-19.84-.18-5.38 1.77-10.52 5.48-14.46 3.8-4.04 8.98-6.34 14.58-6.49.2-.01.4-.01.6-.01 11.17 0 20.44 8.78 20.8 19.84.18 5.38-1.77 10.51-5.48 14.45-3.8 4.03-8.98 6.34-14.58 6.5M58.93 60.6c-1.56 1.38-4.07 1.13-5.75.3-.77-.38-3.44-2.85-11.3-11.62a22.5 22.5 0 0 0 6.44-4.77c.06-.07.12-.14.19-.21 1.89 1.55 3.82 3.11 5.74 4.6 2.03 1.58 4.13 3.2 5.27 5.43.98 1.92 1.11 4.76-.59 6.27" />
          <path d="M48.87 39.72a.5.5 0 0 0 .08-.07.85.85 0 0 0 .28-.46c.07-.25.03-.51-.11-.73l-.99-1.6c-2.38-3.86-5.35-8.67-6.99-11.05-.52-.78-1.34-1.26-2.23-1.31-.88-.06-1.74.3-2.35.99-1.22 1.38-2.78 3.4-4.06 5.13-1.21-2.06-2.37-3.98-3.17-5.15-.53-.78-1.35-1.26-2.24-1.32-.87-.05-1.73.3-2.35.99-2.4 2.69-6.56 8.46-9.27 12.51-.33.5-.37 1.15-.11 1.69.26.53.75.87 1.35.91 2.78.2 6.5.35 10.74.44 2.45.05 5.03.07 7.57.07h1.79c.28 0 .54-.14.72-.35 10.52-.07 11.07-.49 11.34-.69m-10.91-13c.23-.26.53-.38.84-.37.32.02.61.2.81.5 1.61 2.36 4.57 7.14 6.94 10.99l.27.43c-1.53.12-4.65.24-9.69.27-.73-1.24-1.52-2.6-2.33-3.99l-1.28-2.2c1.83-2.47 3.36-4.42 4.44-5.63M27.49 38.83c-4.03-.08-7.58-.22-10.29-.41 2.67-3.99 6.65-9.48 8.94-12.05.23-.26.55-.39.84-.37.32.02.61.2.82.51.94 1.38 2.45 3.92 3.93 6.45l1.47 2.53c.68 1.17 1.35 2.33 1.99 3.41-2.55.02-5.21-.02-7.7-.07M33.12 23.09c2.52 0 4.57-2.24 4.57-5 0-2.75-2.05-4.99-4.57-4.99s-4.56 2.24-4.56 4.99c0 2.76 2.05 5 4.56 5m0-8.13c1.49 0 2.71 1.4 2.71 3.13s-1.22 3.14-2.71 3.14-2.7-1.41-2.7-3.14 1.21-3.13 2.7-3.13" />
        </g>
      )}

      {type === 'content' && (
        <g fill="#5DD62C">
          <path d="m54.904 8.59-8.521 8.524H6.693a1 1 0 0 0-1 1v28.518H3a1 1 0 0 0-1 1v5.021a3.98 3.98 0 0 0 3.972 3.973h46.94a3.977 3.977 0 0 0 3.972-3.973v-5.021a1 1 0 0 0-1-1h-2.693V22.066l7.585-7.585a4.13 4.13 0 0 0 1.223-2.941 4.15 4.15 0 0 0-1.223-2.95c-1.614-1.613-4.246-1.613-5.873 0zM25.457 48.632h7.971v1.997h-7.971zm29.428 4.021a1.975 1.975 0 0 1-1.972 1.973H5.972A1.975 1.975 0 0 1 4 52.653v-4.021h19.457v2.997a1 1 0 0 0 1 1h9.971a1 1 0 0 0 1-1v-2.997h19.457zm-3.693-28.587v22.563H7.693V19.113h36.688l-8.79 8.797c-.119.12-.207.268-.253.43l-1.806 6.265a1 1 0 0 0 .253.984 1 1 0 0 0 .369.226 1 1 0 0 0 .328.065l.011.002h.003a1 1 0 0 0 .273-.039l6.264-1.797a1 1 0 0 0 .431-.254zm8.171-10.999L40.234 32.196l-4.278 1.227 1.234-4.28 19.127-19.136a2.16 2.16 0 0 1 3.684 1.533c0 .574-.227 1.116-.637 1.527z" />
        </g>
      )}

      {type === 'social' && (
        <g fill="#5DD62C">
          <path d="M19 6a5 5 0 0 0-5 5v15a1 1 0 1 0 2 0V11a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v15a1 1 0 1 0 2 0V11a5 5 0 0 0-5-5zM29 52a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" />
          <path fillRule="evenodd" d="M16 46a1 1 0 1 0-2 0v7a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5v-7a1 1 0 1 0-2 0v2H16zm0 7v-3h32v3a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3" clipRule="evenodd" />
          <path d="M11 35a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
          <path fillRule="evenodd" d="M7 28a1 1 0 0 0-1 1v14a1 1 0 0 0 .985 1h19.001a1 1 0 0 0 .629-.211 1 1 0 0 0 .385-.804V29a1 1 0 0 0-1-1zm6.465 14h-4.05L13 38.414l1.713 1.713zM20 35.803 24.132 42h-8.264zm.832-2.358L25 39.697V30H8v10.586l4.293-4.293a1 1 0 0 1 1.414 0l2.138 2.137 3.323-4.985a1 1 0 0 1 1.664 0" clipRule="evenodd" />
          <path d="M37 14a1 1 0 0 0-1.141-.99l-7 1A1 1 0 0 0 28 15v4a2 2 0 1 0 2 2v-5.133l5-.714V18a2 2 0 1 0 2 2.003V20z" />
          <path fillRule="evenodd" d="M22 11a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1zm2 1v12h17V12zM43.498 31.135a1 1 0 0 1 .998-.003l7 4a1 1 0 0 1 0 1.736l-7 4A1 1 0 0 1 43 40v-8a1 1 0 0 1 .498-.865M45 38.277 48.984 36 45 33.723z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M38 28a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V29a1 1 0 0 0-1-1zm1 14V30h17v12z" clipRule="evenodd" />
        </g>
      )}
    </svg>
  )
}

function ProcessIcon({ step }: { step: number }) {
  const gradientId = `process-icon-${step}`

  return (
    <svg className="process-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="5" y1="4" x2="27" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5DD62C" />
          <stop offset="1" stopColor="#5DD62C" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {step === 0 && (
          <>
            <circle cx="14" cy="14" r="7" />
            <path d="M19 19L26 26M11 14h6M14 11v6" />
            <circle cx="14" cy="14" r="2.5" />
          </>
        )}
        {step === 1 && (
          <>
            <rect x="4" y="5" width="9" height="7" rx="2" />
            <rect x="19" y="20" width="9" height="7" rx="2" />
            <rect x="4" y="20" width="9" height="7" rx="2" />
            <path d="M13 8.5h4a4 4 0 014 4V20M8.5 12v8M13 23.5h6" />
          </>
        )}
        {step === 2 && (
          <>
            <path d="M6 24L9 15L22 4L28 10L17 23L8 27L6 24Z" />
            <path d="M9 15l8 8M20 6l6 6M8 27l4-5" />
            <path d="M5 7h7M8.5 3.5v7" />
          </>
        )}
        {step === 3 && (
          <>
            <path d="M11 8L3 16l8 8M21 8l8 8-8 8M18 5l-4 22" />
          </>
        )}
        {step === 4 && (
          <>
            <path d="M5 23a12 12 0 0122 0" />
            <path d="M16 23l6-8" />
            <circle cx="16" cy="23" r="2.5" />
            <path d="M8 19l-2-1M11 14l-1-2M16 12V9M21 14l1-2M25 19l2-1" />
          </>
        )}
        {step === 5 && (
          <g fill="#5DD62C" stroke="none" transform="scale(.0625)">
            <path d="M431.349 283.823a124 124 0 0 0-43.561-45.079l-10.394-6.321c2.473-24.864 1.325-47.127-3.485-67.852-12.211-52.617-40.227-94.307-55.839-114.475-10.887-14.064-22.242-26.223-32.838-35.164C273.327 4.884 263.765 0 256.001 0s-17.326 4.884-29.232 14.931c-10.595 8.941-21.95 21.101-32.838 35.164-15.613 20.168-43.628 61.858-55.839 114.475-4.81 20.725-5.958 42.988-3.485 67.852l-10.395 6.322a124 124 0 0 0-43.561 45.079 124 124 0 0 0-15.878 60.643l.001 112.073c0 9.132 5.452 17.29 13.888 20.785a22.439 22.439 0 0 0 24.517-4.877l67.491-67.491h170.66l67.491 67.491a22.435 22.435 0 0 0 24.517 4.876 22.43 22.43 0 0 0 13.888-20.784l.002-112.073c0-21.197-5.491-42.167-15.879-60.643M160.008 169.656c7.375-31.778 21.148-59.362 33.665-79.663h62.334c6.212 0 11.249-5.036 11.249-11.249s-5.036-11.249-11.249-11.249h-47.048a321 321 0 0 1 1.365-1.809c9.703-12.744 19.807-23.835 29.22-32.072 9.225-8.073 14.738-10.647 16.456-11.076 1.718.429 7.231 3.003 16.456 11.076 9.413 8.238 19.518 19.328 29.22 32.072 14.069 18.479 39.313 56.557 50.317 103.969 4.665 20.101 5.405 42.099 2.261 67.251L336.06 382.457H175.94l-18.194-145.551c-3.143-25.15-2.404-47.148 2.262-67.25M87.271 456.538l-.001-112.073c0-35.11 18.634-68.255 48.632-86.499l1.677-1.02 16.587 132.697zm337.457 0-66.893-66.893 16.587-132.698 1.675 1.019c29.998 18.244 48.633 51.389 48.632 86.499z" />
            <path d="M256.001 269.97c15.023 0 29.147-5.85 39.77-16.473s16.474-24.747 16.474-39.771c0-15.023-5.851-29.147-16.474-39.771s-24.747-16.473-39.77-16.473-29.147 5.85-39.771 16.473-16.473 24.747-16.473 39.771c0 15.023 5.85 29.147 16.473 39.771 10.623 10.623 24.747 16.473 39.771 16.473m0-89.99c18.608 0 33.746 15.139 33.746 33.746s-15.139 33.746-33.746 33.746-33.746-15.139-33.746-33.746 15.138-33.746 33.746-33.746M306.028 428.401c-5.556-2.778-12.313-.526-15.092 5.031l-24.927 49.853c-1.945 3.889-5.701 6.214-10.049 6.218h-.013c-4.342 0-8.099-2.316-10.049-6.197l-25.321-50.374c-2.79-5.551-9.552-7.789-15.102-4.999s-7.789 9.552-4.999 15.102l25.321 50.374c5.765 11.47 17.315 18.59 30.15 18.59h.037c12.849-.014 24.401-7.162 30.148-18.654l24.927-49.853c2.777-5.556.525-12.313-5.031-15.091" />
          </g>
        )}
      </g>
    </svg>
  )
}

function TechStackIcon({ category }: { category: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {category === 'WordPress' && (
          <path
            d="M27.84 5.61A3.41 3.41 0 0 0 24.23 5a3.34 3.34 0 0 0-1.9 3.27 6.6 6.6 0 0 0 1 2.73c.72 1.46 1.54 3.11 1.27 4.9L21.65 24 16.44 9.26h1.19l2.82 8a1 1 0 0 0 .94.66 1 1 0 0 0 .95-1.33l-2.59-7.33h.79a1 1 0 0 0 0-2h-6.62a1 1 0 0 0 0 2h.4L15.65 13l-3.93 11-5.2-14.74H7.7l2.83 8a1 1 0 0 0 .94.66 1 1 0 0 0 .33-.05 1 1 0 0 0 .61-1.28L9.82 9.26h.8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2h.4l6.38 18.07a1 1 0 0 0 .94.67 1 1 0 0 0 .94-.66L16.7 16l4 11.32a1 1 0 0 0 .94.67 1 1 0 0 0 .94-.66l3.87-10.83v-.05l1.63-4.57.61-1.83a4 4 0 0 0-.85-4.44m-1 3.81-.9 2.58c-.28-.7-.59-1.33-.87-1.9a6.3 6.3 0 0 1-.74-1.84A1.47 1.47 0 0 1 25 6.82a1.2 1.2 0 0 1 .49-.1 1.5 1.5 0 0 1 1 .37 2.13 2.13 0 0 1 .32 2.33z"
            fill="currentColor"
            stroke="none"
            transform="translate(1.5 1.5) scale(.78)"
          />
        )}
        {category === 'Frontend' && (
          <>
            <path d="M10 7L3 14l7 7M18 7l7 7-7 7M16 4l-4 20" />
          </>
        )}
        {category === 'Design' && (
          <>
            <path d="M5 21L8 12 19 3l6 6-9 11-9 4-2-3Z" />
            <path d="M8 12l8 8M17 5l6 6M7 24l4-5" />
          </>
        )}
        {category === 'Analytics' && (
          <>
            <path d="M4 23V5M4 23h20" />
            <rect x="8" y="15" width="3.5" height="5" rx="1" />
            <rect x="13.5" y="10" width="3.5" height="10" rx="1" />
            <rect x="19" y="6" width="3.5" height="14" rx="1" />
          </>
        )}
        {category === 'SEO & Marketing' && (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="M17 17l7 7M8 14l3-3 3 2 3-4" />
            <path d="M14 9h3v3" />
          </>
        )}
        {category === 'CMS Platforms' && (
          <>
            <rect x="3" y="4" width="9" height="8" rx="2" />
            <rect x="16" y="4" width="9" height="8" rx="2" />
            <rect x="3" y="16" width="9" height="8" rx="2" />
            <rect x="16" y="16" width="9" height="8" rx="2" />
            <path d="M12 8h4M7.5 12v4M20.5 12v4M12 20h4" />
          </>
        )}
      </g>
    </svg>
  )
}

function ThemeToggle({
  darkMode,
  onToggle,
  className = '',
}: {
  darkMode: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      className={`theme-toggle ${darkMode ? 'is-dark' : ''} ${className}`.trim()}
      onClick={onToggle}
      aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={darkMode}
      title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <svg className="theme-sun" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6L16 16M16 4l-1.4 1.4M5.4 14.6L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg className="theme-moon" viewBox="0 0 20 20" fill="none">
          <path d="M16.8 12.3A7 7 0 017.7 3.2 7 7 0 1016.8 12.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <i />
      </span>
    </button>
  )
}

function WebsiteBuildShowcase() {
  return (
    <div className="website-build-showcase" role="img" aria-label="Animated website section building from HTML structure through CSS styling, motion design, Figma, and WordPress">
      <div className="build-ambient build-ambient-blue" />
      <div className="build-ambient build-ambient-violet" />

      <div className="build-tool tool-html" aria-hidden="true">
        <span>&lt;/&gt;</span>
        HTML
      </div>
      <div className="build-tool tool-figma" aria-hidden="true">
        <span>F</span>
        Figma
      </div>
      <div className="build-tool tool-wordpress" aria-hidden="true">
        <span>W</span>
        WordPress
      </div>

      <div className="build-window">
        <div className="build-window-bar">
          <div className="build-window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="build-window-title">
            <span className="build-live-dot" />
            Live website build
          </div>
          <span className="build-window-url">sarfaraj.design</span>
        </div>

        <div className="build-stages">
          <div className="build-stage stage-structure">
            <span>01</span>
            Structure
          </div>
          <div className="build-stage stage-style">
            <span>02</span>
            Style
          </div>
          <div className="build-stage stage-motion">
            <span>03</span>
            Motion
          </div>
          <div className="build-stage stage-publish">
            <span>04</span>
            WordPress
          </div>
        </div>

        <div className="website-canvas">
          <div className="color-boom" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="canvas-site-nav">
            <div className="canvas-logo">SK<span>.</span></div>
            <div className="canvas-nav-links">
              <span />
              <span />
              <span />
            </div>
            <div className="canvas-nav-button" />
          </div>

          <div className="canvas-hero">
            <div className="canvas-copy">
              <div className="canvas-kicker">CREATIVE WEB STUDIO</div>
              <div className="canvas-heading">
                <span>Designing digital</span>
                <span>experiences that</span>
                <span><b>move</b> people.</span>
              </div>
              <div className="canvas-paragraph">
                <span />
                <span />
              </div>
              <div className="canvas-actions">
                <span>Start a project</span>
                <span>View work</span>
              </div>
            </div>

            <div className="canvas-art">
              <div className="art-shape art-shape-one" />
              <div className="art-shape art-shape-two" />
              <div className="art-photo">
                <div className="art-photo-grid" />
                <div className="art-photo-mark">S</div>
              </div>
              <div className="art-float-card">
                <span>75+</span>
                Websites
              </div>
            </div>
          </div>

          <div className="canvas-feature-row">
            <div><span>01</span>UI/UX Design</div>
            <div><span>02</span>WordPress</div>
            <div><span>03</span>Motion</div>
          </div>

          <div className="design-cursor" aria-hidden="true">
            <svg viewBox="0 0 24 28" fill="none">
              <path d="M2 2l17 12-8 2.2L7 25 2 2z" fill="#5DD62C" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span>Designing</span>
          </div>

          <div className="paint-brush" aria-hidden="true">
            <div className="brush-tip" />
            <div className="brush-handle" />
          </div>

          <div className="color-palette" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="final-tool-stack">
            <div className="final-tool-heading">
              <span>Complete creative stack</span>
              <b>Ready to launch</b>
            </div>
            <div className="final-tool-list">
              {[
                ['W', 'WordPress'],
                ['E', 'Elementor'],
                ['CSS', 'CSS'],
                ['B', 'Bootstrap'],
                ['C', 'Canva'],
                ['S', 'Shopify'],
                ['M', 'Mailchimp'],
                ['B', 'Brevo'],
                ['ML', 'MailerLite'],
                ['H', 'HubSpot'],
              ].map(([icon, label]) => (
                <div className="final-tool-item" key={label}>
                  <i>{icon}</i>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="build-footer">
          <div className="build-progress-copy">
            <span>Creating your experience</span>
            <strong className="build-progress-number" />
          </div>
          <div className="build-progress-track">
            <div className="build-progress-fill" />
            <div className="build-progress-spark" />
          </div>
          <div className="build-complete">
            <span>✓</span>
            Website section complete
          </div>
        </div>
      </div>

      <div className="build-particle particle-one" aria-hidden="true" />
      <div className="build-particle particle-two" aria-hidden="true" />
      <div className="build-particle particle-three" aria-hidden="true" />
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [processVisible, setProcessVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const processSectionRef = useRef<HTMLElement>(null)

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter))

  useEffect(() => {
    const section = processSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  return (
    <div className={`app-shell${darkMode ? ' dark-theme' : ''}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* NAVBAR */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a className="site-logo-lockup" href="#home" style={{ textDecoration: 'none' }}>
            <img src={siteLogo} alt="Sarfaraj Khan" />
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {HEADER_NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} style={{ fontSize: '14px', fontWeight: 500, color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                {link.label}
              </a>
            ))}
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(mode => !mode)} />
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 20px', backgroundColor: '#5DD62C', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#46b51f')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5DD62C')}>
              Hire Me
            </a>
          </nav>

          <div className="mobile-header-actions">
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(mode => !mode)} />
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} className="mobile-menu-btn">
              <div style={{ width: '22px', height: '2px', backgroundColor: '#111111', marginBottom: '5px', transition: 'all 0.2s' }} />
              <div style={{ width: '22px', height: '2px', backgroundColor: '#111111', marginBottom: '5px' }} />
              <div style={{ width: '22px', height: '2px', backgroundColor: '#111111' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-panel" style={{ backgroundColor: '#fff', borderTop: '1px solid #E5E7EB', padding: '16px 24px 20px' }}>
            {HEADER_NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                style={{ display: 'block', padding: '10px 0', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none', borderBottom: '1px solid #F3F4F6' }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
              style={{ display: 'inline-flex', marginTop: '16px', padding: '10px 20px', backgroundColor: '#5DD62C', color: '#fff', fontSize: '14px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none' }}>
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" style={{ paddingTop: '148px', paddingBottom: '100px', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="hero-main">
            <div className="hero-copy">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: '#F1FCEB', borderRadius: '20px', marginBottom: '28px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5DD62C', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Web Designer & WordPress Developer</span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: '#111111', letterSpacing: '-1.5px', marginBottom: '24px' }}>
                I Design & Build Modern Websites That Look Great and{' '}
                <span style={{ color: '#5DD62C' }}>Work Better.</span>
              </h1>

              <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#6B7280', marginBottom: '40px', maxWidth: '580px' }}>
                I'm Sarfaraj Khan, a Web Designer & WordPress Developer specializing in responsive websites, WordPress development, UI/UX design, and Figma-to-WordPress implementation.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', backgroundColor: '#5DD62C', color: '#fff', fontSize: '15px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none', transition: 'background-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#46b51f')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5DD62C')}>
                  View My Work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a className="hero-secondary-button" href="#contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', backgroundColor: '#fff', color: '#111111', fontSize: '15px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none', border: '1.5px solid #E5E7EB', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#111111')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5E7EB')}>
                  Download CV
                </a>
              </div>
            </div>

            <WebsiteBuildShowcase />
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', paddingTop: '40px', borderTop: '1px solid #E5E7EB' }}>
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '75+', label: 'WordPress Websites' },
              { value: 'UI/UX', label: 'Design & Development' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#111111', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            {/* Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#E5E7EB', aspectRatio: '4/5' }}>
                <img
                  src={sarfarajPortrait}
                  alt="Sarfaraj Khan — Web Designer & WordPress Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Floating badge */}
              <div className="glass-card" style={{ position: 'absolute', bottom: '32px', right: '-24px', backgroundColor: '#fff', borderRadius: '10px', padding: '20px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#5DD62C', letterSpacing: '-0.5px' }}>75+</div>
                <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>WordPress Websites</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>About Me</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '24px' }}>
                Web Designer & WordPress Developer
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '20px' }}>
                I'm a Web Designer & WordPress Developer focused on creating modern, responsive, and user-friendly websites.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '20px' }}>
                With hands-on experience across 75+ WordPress websites, I work across the complete website development process — from UI design and Figma implementation to WordPress development, customization, optimization, and deployment.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '40px' }}>
                I specialize in WordPress, Elementor, Divi, WooCommerce, Figma, and responsive design, with additional experience in analytics, email marketing integrations, and basic SEO tools.
              </p>
              <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: 600, color: '#5DD62C', textDecoration: 'none', transition: 'gap 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}>
                More About Me →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '560px', marginBottom: '60px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>What I Do</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '16px' }}>Services</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#6B7280' }}>
              From design to development, I help turn ideas and designs into functional, professional websites.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#E5E7EB', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
            {SERVICES.map((service, i) => (
              <div className="glass-card" key={i} style={{ backgroundColor: '#fff', padding: '40px 36px', transition: 'background-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#fff')}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#5DD62C', letterSpacing: '0.08em', marginBottom: '16px' }}>{service.number}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111111', marginBottom: '12px', letterSpacing: '-0.2px' }}>{service.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#6B7280', marginBottom: '24px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '12px', fontWeight: 500, color: '#374151', backgroundColor: '#F3F4F6', padding: '4px 10px', borderRadius: '4px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>My Work</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '12px' }}>Selected Work</h2>
              <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '480px' }}>
                A selection of websites, landing pages, UI designs, and digital experiences I've worked on.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {FILTER_CATEGORIES.map(cat => (
              <button key={cat.value} onClick={() => setActiveFilter(cat.value)}
                style={{ padding: '8px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s',
                  backgroundColor: activeFilter === cat.value ? '#5DD62C' : '#fff',
                  color: activeFilter === cat.value ? '#fff' : '#6B7280',
                  borderColor: activeFilter === cat.value ? '#5DD62C' : '#E5E7EB',
                }}>
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {filteredProjects.map((project, i) => (
              <div className="glass-card" key={i} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', border: '1px solid #E5E7EB', transition: 'box-shadow 0.25s, transform 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', backgroundColor: '#E5E7EB' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111111', marginBottom: '8px', letterSpacing: '-0.2px' }}>{project.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.65, color: '#6B7280', marginBottom: '16px' }}>{project.desc}</p>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 600, color: '#374151' }}>Services: </span>{project.services}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '20px' }}>
                    <span style={{ fontWeight: 600, color: '#374151' }}>Tools: </span>{project.tools}
                  </div>
                  <a href="#" style={{ fontSize: '13px', fontWeight: 600, color: '#5DD62C', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORDPRESS EXPERTISE */}
      <section style={{ padding: '100px 0', backgroundColor: '#111111' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Expertise</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '24px' }}>
                WordPress Development
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#9CA3AF', marginBottom: '32px' }}>
                I build and customize WordPress websites with a focus on responsive design, usability, performance, and maintainability.
              </p>
              <div className="glass-card glass-card-dark" style={{ padding: '24px', backgroundColor: 'rgba(93,214,44,0.12)', borderRadius: '8px', border: '1px solid rgba(93,214,44,0.25)' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#5DD62C', letterSpacing: '-0.5px', marginBottom: '4px' }}>75+</div>
                <div style={{ fontSize: '14px', color: '#9CA3AF', fontWeight: 500 }}>WordPress websites designed, developed, customized, and maintained.</div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Elementor', 'Elementor Pro', 'Divi', 'Avada', 'WPBakery', 'WooCommerce', 'ACF', 'Contact Form 7', 'Yoast SEO', 'WP Rocket'].map((tool, i) => (
                  <span key={i} style={{ padding: '10px 16px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '6px', fontSize: '14px', fontWeight: 500, color: '#E5E7EB', transition: 'background-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(93,214,44,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX & FIGMA */}
      <section id="uiux" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Design</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '24px' }}>
                UI/UX & Figma
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '20px' }}>
                I create clean and practical website interfaces with a focus on visual hierarchy, usability, spacing, and responsive layouts.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '40px' }}>
                From landing pages to complete website interfaces, I use Figma to create designs that can be efficiently translated into responsive WordPress websites.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { title: 'Website UI Design', desc: 'Modern layouts designed around user needs.' },
                { title: 'Landing Page Design', desc: 'Conversion-focused layouts with clear visual hierarchy.' },
                { title: 'Figma to WordPress', desc: 'Accurate implementation of Figma designs into responsive websites.' },
                { title: 'Responsive Design', desc: 'Layouts optimized for desktop, tablet, and mobile.' },
              ].map((item, i) => (
                <div className="glass-card" key={i} style={{ display: 'flex', gap: '16px', padding: '20px 24px', border: '1px solid #E5E7EB', borderRadius: '8px', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#5DD62C'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(93,214,44,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5DD62C', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#111111', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DESIGN */}
      <section style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {([
                { label: 'Blog Featured Images', icon: 'featured' },
                { label: 'Article Graphics', icon: 'article' },
                { label: 'Website Banners', icon: 'banner' },
                { label: 'Digital Visuals', icon: 'digital' },
                { label: 'Content Graphics', icon: 'content' },
                { label: 'Social Media Visuals', icon: 'social' },
              ] as const).map((item, i) => (
                <div className="visual-design-card glass-card" key={i} style={{ padding: '24px 20px', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', textAlign: 'center' }}>
                  <VisualDesignIcon type={item.icon} />
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{item.label}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Visual Design</div>
              <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '24px' }}>
                Blog & Digital Visuals
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6B7280', marginBottom: '32px' }}>
                I also create professional visual content for websites, blogs, and digital platforms — turning ideas and content into clear, engaging visuals.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Figma', 'Canva', 'Photoshop'].map(tool => (
                  <span key={tool} style={{ padding: '8px 16px', backgroundColor: '#F1FCEB', color: '#5DD62C', fontSize: '13px', fontWeight: 600, borderRadius: '6px' }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="skills" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 60px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2 }}>Tools & Technologies</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {TECH_STACK.map((stack, i) => (
              <div className="tech-stack-card glass-card" key={i}>
                <div className="tech-stack-heading">
                  <span className="tech-stack-icon">
                    <TechStackIcon category={stack.category} />
                  </span>
                  <h3>{stack.category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                  {stack.items.map((item, j) => (
                    <span key={j} style={{ fontSize: '12px', fontWeight: 500, color: '#6B7280', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', padding: '5px 10px', borderRadius: '4px' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        ref={processSectionRef}
        className={`process-section${processVisible ? ' is-visible' : ''}`}
        style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 60px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Process</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2 }}>How I Work</h2>
          </div>

          <div className="process-timeline">
            <div className="process-timeline-rail" aria-hidden="true">
              <span />
              <i />
            </div>
            {PROCESS.map((step, i) => (
              <div className="process-timeline-item" key={step.step}>
                <div className="process-timeline-card glass-card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                <div className="process-timeline-node">
                  <ProcessIcon step={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Experience</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: '48px' }}>Work Experience</h2>

            <div className="glass-card" style={{ padding: '40px', border: '1px solid #E5E7EB', borderRadius: '12px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: '40px', width: '48px', height: '3px', backgroundColor: '#5DD62C', borderRadius: '0 0 2px 2px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111111', marginBottom: '4px', letterSpacing: '-0.3px' }}>Web Designer & WordPress Developer</h3>
                  <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>Indore, India</div>
                </div>
                <span style={{ padding: '6px 14px', backgroundColor: '#F1FCEB', color: '#5DD62C', fontSize: '13px', fontWeight: 600, borderRadius: '20px', whiteSpace: 'nowrap' }}>
                  5+ Years Experience
                </span>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6B7280', marginBottom: '24px' }}>
                Working across website design, WordPress development, UI implementation, website customization, troubleshooting, analytics, and digital integrations.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'WordPress website design and development',
                  'Figma-to-WordPress implementation',
                  'Elementor and page builder development',
                  'WooCommerce customization',
                  'Website optimization',
                  'UI/UX implementation',
                  'Client communication and project delivery',
                  'Analytics and tracking implementation',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5DD62C', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section style={{ padding: '100px 0', backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 60px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Why Me</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: '#111111', letterSpacing: '-0.8px', lineHeight: 1.2 }}>Why Work With Me?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {WHY_ME.map((item, i) => (
              <div className="glass-card" key={i} style={{ padding: '32px 24px', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', textAlign: 'center', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#5DD62C'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(93,214,44,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ fontSize: '28px', fontWeight: 900, color: '#5DD62C', letterSpacing: '-0.5px', marginBottom: '12px' }}>{item.num}</div>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111111', marginBottom: '10px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" style={{ padding: '100px 0', backgroundColor: '#111111' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#5DD62C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Have a Website Project in Mind?</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '24px' }}>
              Let's Build Something Great Together.
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#9CA3AF', marginBottom: '40px' }}>
              Whether you need a new WordPress website, a landing page, a redesign, or help improving an existing website, I'd be happy to discuss your project.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="mailto:ksarfaraj23@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', backgroundColor: '#5DD62C', color: '#fff', fontSize: '15px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none', transition: 'background-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#46b51f')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5DD62C')}>
                Start a Project
              </a>
              <a href="mailto:ksarfaraj23@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', backgroundColor: 'transparent', color: '#fff', fontSize: '15px', fontWeight: 600, borderRadius: '6px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.2)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
                Email Me
              </a>
            </div>
            <a href="mailto:ksarfaraj23@gmail.com" style={{ fontSize: '14px', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}>
              ksarfaraj23@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0A0A0A', padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
            <div>
              <div className="footer-logo-lockup" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                <img src={siteLogo} alt="Sarfaraj Khan" />
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>Web Designer & WordPress Developer</div>
            </div>
            <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} style={{ fontSize: '13px', fontWeight: 500, color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {['WordPress', 'UI/UX', 'Figma', 'WooCommerce', 'Analytics'].map(tag => (
              <span key={tag} style={{ fontSize: '12px', fontWeight: 500, color: '#4B5563', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px' }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '13px', color: '#4B5563' }}>© 2026 Sarfaraj Khan. All Rights Reserved.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="https://sarfarajxl.com" style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                sarfarajxl.com
              </a>
              <a href="https://linkedin.com/in/sarfarajxl" style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 900px) {
          section > .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section > .container > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          section > .container > div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          section > .container > div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
