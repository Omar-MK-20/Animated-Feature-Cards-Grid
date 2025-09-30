import { BarChart3, Cloud, Code, Globe, Headphones, Lock, Shield, Smartphone, Users, Zap } from "lucide-react";
import type { ReactNode } from "react";

export interface FeatureCard {
    id: string;
    icon: ReactNode; // lucide-react icon name
    title: string;
    description: string;
    accent?: string; // optional gold highlight text
  }


export const Features: FeatureCard[] = [
    {
      id: "feat-1",
      icon: <Shield color="gold" />,
      title: "Advanced Security",
      description: "Enterprise-grade protection for your data and applications",
      accent: "99.9% Uptime"
    },
    {
      id: "feat-2",
      icon: <Zap color="gold" />,
      title: "Instant Deployment",
      description: "Go from code to production in seconds with our smart CI/CD",
      accent: "15s Avg Deployment"
    },
    {
      id: "feat-3",
      icon: <Users color="gold" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for distributed teams"
    },
    {
      id: "feat-4",
      icon: <BarChart3 color="gold" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into your application performance"
    },
    {
      id: "feat-5",
      icon: <Globe color="gold" />,
      title: "Global CDN",
      description: "Lightning-fast content delivery across 100+ countries",
      accent: "Edge Network"
    },
    {
      id: "feat-6",
      icon: <Lock color="gold" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all your communications"
    },
    {
      id: "feat-7",
      icon: <Cloud color="gold" />,
      title: "Cloud Storage",
      description: "Scalable storage solutions with automatic backups"
    },
    {
      id: "feat-8",
      icon: <Smartphone color="gold" />,
      title: "Mobile Optimized",
      description: "Flawless experience across all devices and screen sizes"
    },
    {
      id: "feat-9",
      icon: <Code color="gold" />,
      title: "Developer First",
      description: "Tools and APIs designed with developers in mind"
    },
    {
      id: "feat-10",
      icon: <Headphones color="gold" />,
      title: "24/7 Support",
      description: "Round-the-clock customer success and technical support",
      accent: "Priority Help"
    }
  ];