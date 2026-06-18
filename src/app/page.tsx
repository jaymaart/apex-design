"use client";

import React, { useEffect, useState, useRef } from "react";
import CalendlyModal from "@/components/CalendlyModal";

/**
 * A controlled Reveal component that uses IntersectionObserver
 * to manage visibility via React state, preventing class erasures
 * on component re-renders.
 */
function Reveal({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal ${isVisible ? "visible" : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const CALENDLY_URL = "https://calendly.com/stevie-gudeman";

  // JSON-LD Structured Data for Global SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Apex Frame Designs — Global AI & Business Automation",
    "description": "Premium AI receptionists, lead management systems, and high-converting websites for businesses worldwide.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Frame Designs",
      "url": "https://apexframedesigns.com"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Receptionist & Call Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Converting Website Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lead Management & CRM Automation"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          Apex <span>Frame</span>
        </a>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#how" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </a>
          <a className="nav-cta" href={CALENDLY_URL}>
            Book a Call
          </a>
        </div>
        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Accepting New Clients
          </div>
          <h1>
            Your business, <em>automated</em> and always closing
          </h1>
          <p>
            We build AI receptionists, automated follow-up systems, and
            conversion-focused websites that capture leads and book customers
            24/7.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={CALENDLY_URL}>
              Book a Free Strategy Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#services">
              See What We Build
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Automated Response</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1-2 wk</div>
            <div className="stat-label">Build Timeline</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Done-For-You Setup</div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <Reveal>
            <div className="section-label">Services</div>
            <div className="section-title">
              Everything you need to capture
              <br />
              and close more customers
            </div>
            <p className="section-sub">
              We build integrated systems, not just pretty pages. Every piece is
              designed to work together and grow your business on autopilot.
            </p>
          </Reveal>
          <div className="services-grid">
            <Reveal className="service-card">
              <div className="service-icon web">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="3" rx="2" />
                  <line x1="8" x2="16" y1="21" y2="21" />
                  <line x1="12" x2="12" y1="17" y2="21" />
                </svg>
              </div>
              <h3>High-Converting Website Design</h3>
              <p>
                Modern, mobile-first websites built to turn visitors into paying
                customers. Optimized for speed, clarity, and strong
                calls-to-action.
              </p>
              <div className="service-features">
                <span className="feature-tag">Custom Design</span>
                <span className="feature-tag">Mobile-First</span>
                <span className="feature-tag">Booking Forms</span>
                <span className="feature-tag">Hosting</span>
              </div>
            </Reveal>
            <Reveal className="service-card">
              <div className="service-icon ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h3>24/7 AI Receptionist</h3>
              <p>
                Never miss another call. AI answers, books appointments,
                qualifies leads, and responds to customers automatically, even
                after hours.
              </p>
              <div className="service-features">
                <span className="feature-tag">Call Answering</span>
                <span className="feature-tag">SMS Replies</span>
                <span className="feature-tag">Lead Qualifying</span>
                <span className="feature-tag">Custom Scripts</span>
              </div>
            </Reveal>
            <Reveal className="service-card">
              <div className="service-icon lead">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
              <h3>Lead Management & Automation</h3>
              <p>
                Capture leads and follow up instantly so no opportunity slips
                through the cracks. Fully automated CRM and pipeline systems.
              </p>
              <div className="service-features">
                <span className="feature-tag">CRM Setup</span>
                <span className="feature-tag">Auto Follow-ups</span>
                <span className="feature-tag">Pipeline Tracking</span>
                <span className="feature-tag">Review Requests</span>
              </div>
            </Reveal>
            <Reveal className="service-card">
              <div className="service-icon growth">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <h3>Ongoing Growth & Support</h3>
              <p>
                We partner long-term. Monthly plans keep your systems running
                smoothly with updates, monitoring, and strategy guidance.
              </p>
              <div className="service-features">
                <span className="feature-tag">Site Updates</span>
                <span className="feature-tag">Monitoring</span>
                <span className="feature-tag">Tech Support</span>
                <span className="feature-tag">Strategy</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="container">
          <Reveal style={{ textAlign: "center" }}>
            <div className="section-label">How It Works</div>
            <div className="section-title">From first call to fully automated</div>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              A simple process to get your business running on autopilot.
            </p>
          </Reveal>
          <div className="steps">
            <Reveal className="step">
              <div className="step-number">01</div>
              <h3>Free Strategy Call</h3>
              <p>
                We learn about your business, identify missed opportunities, and
                map out what to build. No pressure, just a clear plan.
              </p>
              <div className="step-connector"></div>
            </Reveal>
            <Reveal className="step">
              <div className="step-number">02</div>
              <h3>Build & Launch</h3>
              <p>
                We design your website, set up AI systems, and wire all
                automations together. Most projects go live in 1-2 weeks.
              </p>
              <div className="step-connector"></div>
            </Reveal>
            <Reveal className="step">
              <div className="step-number">03</div>
              <h3>Grow on Autopilot</h3>
              <p>
                Your systems capture leads, follow up, and book appointments
                24/7. We monitor, optimize, and support you long-term.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <Reveal>
            <div className="section-label">About</div>
            <div className="section-title">The person behind the systems</div>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-photo">
              <img
                src="https:///stevie-photo.jpg"
                alt="Stevie Gudeman"
                loading="lazy"
              />
              <div className="overlay"></div>
            </Reveal>
            <Reveal className="about-text">
              <h3>Stevie Gudeman</h3>
              <div className="role">Founder & Automation Specialist</div>
              <p>
                I started Apex Frame Designs to help local businesses modernize
                and stop missing opportunities. Too many service companies lose
                customers simply because they miss calls or don't follow up
                properly.
              </p>
              <p>
                My focus is simple: build clean, high-converting websites and
                automation systems that help businesses capture more leads,
                respond faster, and grow consistently.
              </p>
              <p>We don't just build websites. We build systems that work 24/7.</p>
              <a
                className="btn btn-primary"
                href={CALENDLY_URL}
                style={{ marginTop: "16px" }}
              >
                Let's Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <Reveal style={{ textAlign: "center" }}>
            <div className="section-label">FAQ</div>
            <div className="section-title">Common questions</div>
          </Reveal>
          <div className="faq-list">
            <FaqItem question="How much does it cost?">
              <p>
                Every business is different. We build custom systems based on your
                needs, not templates. Pricing depends on the features, automation
                level, and integrations required. We offer a free consultation to
                determine what makes sense for your business.
              </p>
            </FaqItem>
            <FaqItem question="How long does it take to build?">
              <p>
                Most websites and AI systems are completed within 1-2 weeks
                depending on complexity. We focus on building efficiently while
                making sure everything is optimized for conversions and
                automation.
              </p>
            </FaqItem>
            <FaqItem question="Do I need to be tech-savvy?">
              <p>
                Not at all. We handle setup, automation, and integrations. You'll
                get a simple system that works in the background so you can focus
                on running your business.
              </p>
            </FaqItem>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Reveal className="cta-content">
          <h2>Ready to stop missing leads?</h2>
          <p>
            Book a free strategy call and we'll map out exactly how to automate
            your business and start closing more customers.
          </p>
          <a className="btn btn-primary" href={CALENDLY_URL}>
            Book Your Free Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            Apex <span>Frame</span>
          </div>
          <div className="footer-links">
            <a href="mailto:stevie.gudeman@icloud.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: "-2px", marginRight: "6px" }}
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              stevie.gudeman@icloud.com
            </a>
            <a href="tel:7045722255">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ verticalAlign: "-2px", marginRight: "6px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              704-572-2255
            </a>
          </div>
          <div className="footer-copy">
            &copy; 2026 Apex Frame Designs. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal Integration */}
      <CalendlyModal
        url={CALENDLY_URL}
        triggerSelector=".nav-cta, .btn-primary"
      />
    </>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Reveal className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </button>
      <div className="faq-a">{children}</div>
    </Reveal>
  );
}
