import {
  Zap,
  Shield,
  Globe,
  Sparkles,
  Users,
  BarChart,
  Github,
  MessageCircle,
  HelpCircle,
  Mail,
} from "lucide-react"
import type {
  SiteConfig,
  HeroProps,
  SocialProofProps,
  FeaturesProps,
  PricingProps,
  FAQProps,
  FooterProps,
} from "@/types/landing"

export const siteConfig: SiteConfig = {
  name: "ProductName",
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Discord", href: "https://discord.gg", icon: MessageCircle },
  ],
}

export const heroConfig: HeroProps = {
  badge: "Now in public beta",
  badgeIcon: Sparkles,
  headline: "Your product headline goes here",
  subheadline:
    "A compelling description of what your product does and why people should care. Keep it concise and benefit-focused.",
  primaryCTA: {
    label: "Get started free",
    href: "#pricing",
  },
  secondaryCTA: {
    label: "See how it works",
    href: "#features",
  },
}

export const socialProofConfig: SocialProofProps = {
  heading: "Trusted by teams worldwide",
  stats: [
    { value: "10K+", label: "Users" },
    { value: "50K+", label: "Tasks completed" },
    { value: "99.9%", label: "Uptime" },
  ],
}

export const featuresConfig: FeaturesProps = {
  badge: "Features",
  heading: "Everything you need",
  subheading: "Built with the tools and features your team actually needs.",
  items: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized for speed. Everything loads instantly so your team stays productive.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description:
        "Enterprise-grade security with end-to-end encryption and SOC 2 compliance.",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description:
        "Access from any device, any browser. Full mobile support included.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time collaboration features that keep your team in sync.",
    },
    {
      icon: BarChart,
      title: "Analytics Built-in",
      description:
        "Track usage, performance, and insights with beautiful dashboards.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description:
        "Smart suggestions and automations that learn from your workflow.",
    },
  ],
  columns: 3,
}

export const pricingConfig: PricingProps = {
  badge: "Pricing",
  heading: "Simple, transparent pricing",
  subheading: "No hidden fees. Cancel anytime.",
  tiers: [
    {
      name: "Free",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1 GB storage",
      ],
      ctaLabel: "Start free",
      ctaHref: "#",
    },
    {
      name: "Pro",
      description: "For growing teams",
      monthlyPrice: 19,
      yearlyPrice: 180,
      highlighted: true,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100 GB storage",
        "Custom integrations",
        "Team management",
      ],
      ctaLabel: "Start free trial",
      ctaHref: "#",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 49,
      yearlyPrice: 468,
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Dedicated support",
        "Unlimited storage",
        "Custom contracts",
        "SLA guarantee",
      ],
      ctaLabel: "Contact sales",
      ctaHref: "#",
    },
  ],
}

export const faqConfig: FAQProps = {
  heading: "Frequently asked questions",
  subheading: "Got questions? We have answers.",
  items: [
    {
      question: "How do I get started?",
      answer:
        "Sign up for a free account and you can start using the product immediately. No credit card required.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. Your data will be retained for 30 days after cancellation.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, the Pro plan comes with a 14-day free trial. You can try all features before committing.",
    },
    {
      question: "Do you offer team discounts?",
      answer:
        "Yes, we offer volume discounts for teams of 10+. Contact us for custom pricing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
  ],
  ctaCard: {
    heading: "Still have questions?",
    description: "Our team is here to help you get started.",
    ctaLabel: "Contact support",
    ctaHref: "mailto:support@example.com",
  },
}

export const footerConfig: FooterProps = {
  name: "ProductName",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "Discord", href: "https://discord.gg", icon: MessageCircle },
    { label: "Support", href: "mailto:support@example.com", icon: HelpCircle },
    { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  ],
  copyright: `\u00A9 ${new Date().getFullYear()} ProductName. All rights reserved.`,
}
