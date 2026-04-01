import { Project, Experience, SkillGroup, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cold Outreach Sequence',
    description: 'A 3-email B2B sequence (initial → follow-up → breakup) for a mid-market SaaS SDR. Personalized, value-led, no fluff.',
    icon: '📧',
    tags: ['Email Copy', 'SDR', 'B2B SaaS'],
    link: '#'
  },
  {
    id: '2',
    title: 'Competitive Battlecard',
    description: 'Zoom vs Microsoft Teams — feature comparison, ideal ICP match, pricing breakdown, and a full objection-handling script.',
    icon: '⚔️',
    tags: ['Competitive Intel', 'Objection Handling'],
    link: '#'
  },
  {
    id: '3',
    title: 'Discovery Call Framework',
    description: 'SPIN + MEDDIC-based discovery questions mapped to buyer stages. Includes qualification criteria and pain-uncovering prompts.',
    icon: '🔍',
    tags: ['SPIN', 'MEDDIC', 'Consultative'],
    link: '#'
  },
  {
    id: '4',
    title: 'Mock B2B Proposal',
    description: 'A 2-page proposal recommending Notion to a fictional 60-person agency. Structured as: problem → solution → ROI estimate.',
    icon: '📋',
    tags: ['Proposal Writing', 'ROI Analysis'],
    link: '#'
  },
  {
    id: '5',
    title: 'E-Cell Sponsorship',
    description: 'How I ran a full B2B sales cycle for a college event — built the prospect list, wrote the pitch deck, and closed ₹6.2L.',
    icon: '📌',
    tags: ['Sales Cycle', 'Deck Design', 'CRM'],
    link: '#'
  },
  {
    id: '6',
    title: 'GDSC Onboarding Flow',
    description: 'Designed and ran an onboarding program for 300+ students onto Firebase & GCP. Cut drop-off by 40%.',
    icon: '🛠️',
    tags: ['Customer Success', 'Onboarding', 'Email'],
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Vice President — Sponsorship',
    company: 'E-Cell, Pune',
    period: 'Jun 2023 – Apr 2024',
    location: 'Pune',
    bullets: [
      'Led end-to-end B2B sales cycle — prospecting, cold outreach, pitching, and closing across 2 flagship events',
      'Secured ₹6.2L from 11 sponsors, a 55% YoY increase, by building tiered ROI-focused sponsorship decks',
      'Pitched to 15+ corporate stakeholders (HRs, CMOs, Founders) — improved conversion from 18% → 34%',
      'Managed a 7-person outreach team with a Google Sheets CRM pipeline tracking 60+ contacts'
    ],
    metrics: ['₹6.2L Raised', '34% Conversion', '11 Deals Closed']
  },
  {
    id: 'exp2',
    role: 'Marketing & Outreach Lead',
    company: 'Google Developer Student Club (GDSC)',
    period: 'Aug 2022 – May 2023',
    location: 'Pune',
    bullets: [
      'Onboarded 300+ students onto Firebase & GCP — reduced first-week drop-off by 40% with structured walkthroughs',
      'Designed a 3-email nurture sequence achieving 42% open rate and 19% registration conversion',
      'Created competitive cloud analysis docs comparing 3 platforms — used as onboarding material'
    ],
    metrics: ['300+ Users Onboarded', '42% Email Open Rate', '-40% Drop-off']
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: '💼 Sales & GTM',
    skills: ['Discovery & Needs Analysis', 'Product Demonstrations', 'Objection Handling', 'CRM — HubSpot', 'Salesforce', 'Cold Outreach', 'Lead Qualification', 'Proposal Writing', 'SPIN Selling', 'MEDDIC Framework']
  },
  {
    title: '⚙️ Technical & Tools',
    skills: ['SaaS Products', 'API Concepts (REST)', 'Google Analytics', 'Data Analysis (Sheets)', 'Technical Writing', 'Notion', 'Loom (Video Demo)', 'Canva / Figma Basics', 'Firebase / GCP Basics', 'SQL Basics']
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'HubSpot Sales Software Certification', platform: 'HubSpot Academy', year: '2024', status: 'done' },
  { name: 'HubSpot Inbound Sales Certification', platform: 'HubSpot Academy', year: '2024', status: 'done' },
  { name: 'Salesforce Trailhead — Admin Basics', platform: 'Trailhead', year: '2024', status: 'done' },
  { name: 'Google Analytics Individual Qualification', platform: 'Google Skillshop', year: '2024', status: 'done' }
];
