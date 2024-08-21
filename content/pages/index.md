---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: The simplest way to organize your finances.....
      color: text-primary
    subtitle: ''
    text: >
      Effortlessly manage your money with clear insights and real-time tracking.
      No complicated setups—just straightforward budgeting that works for you.
    actions:
      - type: Button
        label: Get started
        altText: ''
        url: 'https://app.lucrabudgeting.com/auth/register'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Coming Soon
      color: text-dark
    subtitle: ''
    text: ''
    actions: []
    media:
      type: ImageBlock
      url: >-
        http://res.cloudinary.com/dr8cg8xmb/image/upload/v1721145934/desktop-mobile-preview.png
      altText: Dope design preview
    badge:
      type: Badge
      label: Were excited for you to see
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
  - type: PricingSection
    title:
      type: TitleBlock
      text: Transparent Pricing
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    plans:
      - type: PricingPlan
        title: Basic
        price: $5
        details: Per Month (after 30 day trial)
        description: Transparent
        features:
          - Feature one
          - Feature two
          - Feature three
          - Feature four
        image:
          type: ImageBlock
          url: >-
            https://res.cloudinary.com/dr8cg8xmb/image/upload/v1716073594/site-images/login-mobile-banner.png
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Try Now
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Advanced
        price: $12
        details: Per Month (After 30 day trial)
        description: Transparent
        features:
          - Feature one
          - Feature two
          - Feature three
          - Feature four
        image:
          type: ImageBlock
          url: >-
            https://res.cloudinary.com/dr8cg8xmb/image/upload/v1716073594/site-images/login-mobile-banner.png
          altText: Pricing plan 2
        actions:
          - type: Button
            label: Sign Up Now
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: >-
        https://res.cloudinary.com/dr8cg8xmb/image/upload/v1716072498/site-images/login-desktop-banner.png
    elementId: pricing
seo:
  metaTitle: Lucra Budgeting
  metaDescription: Lucra Budgeting - Budgeting made simple
  socialImage: /images/Screenshot 2024-07-16 at 10.17.56 AM.png
  type: Seo
  addTitleSuffix: false
  metaTags:
    - type: MetaTag
      property: 'og:title'
      content: Lucra - The Simplest Way to Organize Your Finances
    - type: MetaTag
      property: ''
      content: >-
        budgeting app, manage finances, personal finance, expense tracker,
        financial management, budgeting tools, money management
    - type: MetaTag
      property: 'og:image'
      content: >-
        https://res.cloudinary.com/dr8cg8xmb/image/upload/v1721259232/logo-primary.png
    - type: MetaTag
      property: 'og:description'
      content: >-
        Lucra is the simplest way to manage your finances. Connect your
        accounts, set budgets, and track spending in real-time. Start organizing
        your money today.
    - type: MetaTag
      property: 'og:site_name'
      content: Lucra Budgeting
    - type: MetaTag
      property: 'og:locale'
      content: en_US
    - type: MetaTag
      property: 'og:url'
      content: 'https://www.lucrabudgeting.com/'
    - type: MetaTag
      property: 'og:type'
      content: website
type: PageLayout
---
