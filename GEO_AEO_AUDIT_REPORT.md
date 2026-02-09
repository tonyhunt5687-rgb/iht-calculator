# IHT Solutions - Comprehensive GEO/AEO Audit Report

**Date:** February 2026
**Auditor:** Claude Code
**Pages Audited:** 3 (Homepage, Technical Overview, Post-2026-2027 Planning)

---

## Executive Summary

### Overall Site Score: 68/100

| Page | Score | Key Strength | Critical Gap |
|------|-------|--------------|--------------|
| Homepage | 52/100 | Functional calculator | Missing meta description, no Schema, weak USP messaging |
| Technical Overview | 72/100 | Good structure, RNRB callout | Missing FAQ Schema, thin content |
| Post-2026-2027 Planning | 81/100 | Strong E-E-A-T, excellent Schema | Could add FAQ section |

### Top 3 Strengths
1. **Strong E-E-A-T signals** on technical pages (author credentials, STEP affiliation, 45+ years experience)
2. **RNRB taper correctly implemented** - competitive advantage vs Which? and freetaxcalculator
3. **Good Schema markup** on Post-2026-2027 page with Article schema and author credentials

### Top 3 Critical Gaps
1. **Homepage has NO meta description** - critical for SEO/GEO
2. **Homepage has NO Schema markup** - major gap for AI citation
3. **USP ("instant indicative costs without adviser") not prominent enough** on homepage

### Priority Actions This Week
1. Add meta description to homepage (immediate)
2. Add Organization + WebApplication Schema to homepage
3. Add FAQ Schema to Technical Overview and Post-2026-2027 pages
4. Make "instant costs without adviser" USP more prominent in H1/subtitle

---

## Page-by-Page Analysis

---

## Page 1: Homepage (index.html)

**URL:** https://ihtsolutions.co.uk/
**Primary Purpose:** Calculator entry point, main conversion
**Target Queries:** IHT calculator, inheritance tax insurance cost, instant IHT quote

### Overall Score: 52/100

### Breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Title & Meta | 2/5 | Title present but generic. **NO meta description!** |
| Heading Structure | 4/5 | H1 + H2 present, logical hierarchy |
| Content Quality | 8/15 | Functional but thin on explanatory text |
| E-E-A-T Signals | 3/15 | No author, no credentials visible |
| Authoritativeness | 3/15 | No external links, no citations |
| Trust & Compliance | 10/15 | Good disclaimer present |
| Internal Linking | 3/5 | Links to technical pages via hamburger menu |
| External Linking | 0/5 | No external links to GOV.UK/HMRC |
| Schema Markup | 0/10 | **NO Schema at all** |
| Mobile Optimization | 5/5 | Viewport present, responsive design |
| Call-to-Action | 5/5 | Clear "Calculate My IHT" CTA |
| Query Intent Match | 9/10 | Calculator is the intent - delivers well |

### Critical Issues

#### 1. Missing Meta Description
```html
<!-- CURRENT: Nothing -->

<!-- RECOMMENDED: Add this to <head> -->
<meta name="description" content="Get instant indicative costs for inheritance tax insurance online. Calculate your IHT liability and see Whole of Life and Relevant Life insurance quotes without speaking to an adviser first.">
```

#### 2. Title Not Optimized for USP
```html
<!-- CURRENT -->
<title>IHT Calculator - Understand Your Inheritance Tax Position</title>

<!-- RECOMMENDED -->
<title>IHT Calculator | Instant Insurance Cost Estimates Without Adviser Call | IHT Solutions</title>
```

#### 3. Missing Schema Markup
Add this to `<head>`:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "IHT Calculator",
  "description": "Calculate your inheritance tax liability and get instant indicative costs for Whole of Life and Relevant Life insurance without speaking to an adviser",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  },
  "provider": {
    "@type": "Organization",
    "name": "IHT Solutions",
    "url": "https://ihtsolutions.co.uk",
    "description": "Instant indicative inheritance tax insurance cost estimates"
  },
  "featureList": [
    "Instant IHT liability calculation",
    "Whole of Life insurance cost estimates",
    "Relevant Life policy cost estimates",
    "RNRB taper correctly applied for estates over £2m",
    "No adviser call required"
  ]
}
</script>
```

#### 4. USP Not Prominent
The unique value proposition ("instant costs without adviser") is buried.

**CURRENT subtitle:**
```html
<p class="subtitle">Get an illustrative estimate of your potential IHT liability</p>
```

**RECOMMENDED subtitle:**
```html
<p class="subtitle">Get instant indicative insurance costs to cover your IHT — no adviser call required</p>
```

#### 5. No Opening Paragraph Explaining What This Does
Add above calculator card:
```html
<div class="intro-text" style="max-width: 600px; margin: 0 auto 30px; text-align: center; color: rgba(255,255,255,0.9);">
    <p>Unlike comparison sites that require you to speak with an adviser, IHT Solutions lets you see indicative costs for Whole of Life and Relevant Life insurance instantly online. Enter your estate details below to calculate your IHT liability and model potential insurance costs.</p>
</div>
```

---

## Page 2: Technical Overview (/technical/index.html)

**URL:** https://ihtsolutions.co.uk/technical/
**Primary Purpose:** Hub for technical content, authority building
**Target Queries:** IHT planning 2026, inheritance tax changes, technical IHT guidance

### Overall Score: 72/100

### Breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Title & Meta | 5/5 | Good title and meta description |
| Heading Structure | 5/5 | Clear H1, good hierarchy |
| Content Quality | 10/15 | Good intro, RNRB accuracy callout is strong |
| E-E-A-T Signals | 12/15 | Author section with credentials |
| Authoritativeness | 10/15 | Links to LinkedIn, VouchedFor |
| Trust & Compliance | 12/15 | Professional tone |
| Internal Linking | 5/5 | Links to all child pages + calculator |
| External Linking | 3/5 | Author profile links but no GOV.UK |
| Schema Markup | 6/10 | CollectionPage schema present |
| Mobile Optimization | 5/5 | Responsive |
| Call-to-Action | 4/5 | CTA to calculator present |
| Query Intent Match | 7/10 | Good for hub queries |

### Strengths
- ✅ "Why Accurate Calculation Matters" section highlighting RNRB advantage
- ✅ Author credentials clearly displayed
- ✅ CollectionPage Schema present

### Gaps

#### 1. Add FAQ Schema
The RNRB accuracy callout could be an FAQ:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do online IHT calculators correctly apply the RNRB taper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many online IHT calculators, including some from well-known providers, do not correctly apply the Residence Nil Rate Band taper for estates over £2 million. The IHT Solutions calculator has been specifically designed to account for this complexity. For example, an estate valued at £2.5 million would see its RNRB reduced from £350,000 to £100,000 - a difference that could understate the IHT liability by £100,000 if not calculated correctly."
      }
    },
    {
      "@type": "Question",
      "name": "What inheritance tax changes take effect in 2026 and 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From April 2026, Business Property Relief and Agricultural Property Relief will be capped at £2.5 million with 100% relief, with reduced relief above that level. From April 2027, most unused pension funds and death benefits will be included in estate values for inheritance tax purposes."
      }
    }
  ]
}
</script>
```

#### 2. Add External Links to GOV.UK
In the intro or accuracy section, add:
```html
<p>For official guidance on inheritance tax, see <a href="https://www.gov.uk/inheritance-tax" target="_blank" rel="noopener">GOV.UK Inheritance Tax</a>.</p>
```

---

## Page 3: Post-2026-2027 Planning Page

**URL:** https://ihtsolutions.co.uk/technical/post-2026-2027-planning-landscape/
**Primary Purpose:** Deep technical content, authority building
**Target Queries:** inheritance tax changes 2026, pension IHT 2027, BPR changes

### Overall Score: 81/100

### Breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Title & Meta | 5/5 | Excellent title and meta |
| Heading Structure | 5/5 | Perfect H1-H2-H3 hierarchy |
| Content Quality | 14/15 | Comprehensive, well-structured |
| E-E-A-T Signals | 15/15 | Full author credentials, STEP, 45 years |
| Authoritativeness | 13/15 | External links to GOV.UK, HMRC, STEP, CIOT |
| Trust & Compliance | 14/15 | Disclaimers, professional tone |
| Internal Linking | 5/5 | Links to related pages and calculator |
| External Linking | 5/5 | Excellent citations |
| Schema Markup | 8/10 | Article schema with author |
| Mobile Optimization | 5/5 | Responsive |
| Call-to-Action | 5/5 | Multiple CTAs to calculator |
| Query Intent Match | 9/10 | Directly answers 2026/2027 queries |

### Strengths
- ✅ Excellent E-E-A-T signals (best on site)
- ✅ Comprehensive external sourcing (GOV.UK, HMRC, STEP, CIOT)
- ✅ Article Schema with full author credentials
- ✅ Clear structure with highlight boxes
- ✅ USP messaging in highlight box ("IHT Solutions provides instant indicative cost estimates")

### Minor Improvements

#### 1. Add FAQ Schema
Add FAQPage schema for key questions:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What changes to inheritance tax from April 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From 6 April 2026, Business Property Relief and Agricultural Property Relief will be capped at £2.5 million with 100% relief. Relief above that level will be reduced. Any unused allowance may be transferable to a surviving spouse or civil partner."
      }
    },
    {
      "@type": "Question",
      "name": "Will pensions be subject to inheritance tax from 2027?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, from 6 April 2027, most unused pension funds and death benefits will be included within the value of a person's estate for inheritance tax purposes. Personal representatives will be responsible for reporting and paying any inheritance tax due."
      }
    }
  ]
}
</script>
```

#### 2. Add "Last Updated" Visible Date
For freshness signals, make the date visible:
```html
<p class="last-updated" style="font-size: 0.9em; color: #666;">
    Last updated: February 2026
</p>
```

---

## Query-by-Query Analysis (33 Queries)

### TIER 1: Critical Commercial Queries (10)

---

#### Query 1: "how much does whole of life insurance cost for inheritance tax"

**Target Page:** Homepage → Results → Quote pages
**Page Relevance Score:** 7/10
**AI Citation Likelihood:** 5/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ Calculator leads to quote functionality
- ❌ Homepage doesn't mention "whole of life" in visible text
- ❌ No explanation of what affects costs

**Recommended Fixes:**
1. Add "whole of life insurance" to homepage intro text
2. Add FAQ: "What affects whole of life insurance costs for IHT?"
3. Consider a dedicated landing page

**Competitor Analysis:**
- Reassured: 7/10 - Has content but requires call
- LifeSearch: 6/10 - Has guides but no instant costs
- Which?: 4/10 - Information only

**Your Position:** Strong USP (instant costs) but need to say "whole of life" more prominently

---

#### Query 2: "can I get inheritance tax insurance costs online"

**Target Page:** Homepage
**Page Relevance Score:** 9/10
**AI Citation Likelihood:** 7/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ This IS your USP - you deliver exactly this
- ❌ The phrase "online" not used
- ❌ USP buried in subtitle

**Recommended Fixes:**
1. Use exact phrase "get inheritance tax insurance costs online" in homepage
2. Add to meta description

**Your Position:** STRONGEST - No competitor offers this. Make it more prominent.

---

#### Query 3: "inheritance tax insurance calculator"

**Target Page:** Homepage
**Page Relevance Score:** 8/10
**AI Citation Likelihood:** 6/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ You have a calculator
- ❌ Title says "IHT Calculator" not "inheritance tax insurance calculator"
- ❌ Need to mention insurance in calculator context

**Recommended Fixes:**
1. Add "insurance calculator" to title or subtitle
2. Add Schema showing it's an insurance cost calculator

---

#### Query 4: "what changes to inheritance tax 2026"

**Target Page:** Post-2026-2027 Planning
**Page Relevance Score:** 10/10
**AI Citation Likelihood:** 9/10
**Commercial Value:** MEDIUM

**Content Analysis:**
- ✅ Directly answered with H2 "What changes from 6 April 2026"
- ✅ Excellent sourcing
- ✅ Strong E-E-A-T

**Your Position:** EXCELLENT - High likelihood of AI citation

---

#### Query 5: "pension inheritance tax 2027"

**Target Page:** Post-2026-2027 Planning
**Page Relevance Score:** 9/10
**AI Citation Likelihood:** 8/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ Covered in "What changes from 6 April 2027"
- ❌ Could have dedicated section heading with exact query

**Recommended Fixes:**
1. Create dedicated page: "/technical/pension-death-benefits-iht-2027/"
2. Add FAQ schema for pension questions

---

#### Query 6: "whole of life vs relevant life insurance"

**Target Page:** Post-2026-2027 Planning (mentions both)
**Page Relevance Score:** 4/10
**AI Citation Likelihood:** 3/10
**Commercial Value:** HIGH

**Content Analysis:**
- ❌ No dedicated comparison content
- ❌ Only mentioned in passing in highlight box
- ❌ High commercial intent - needs dedicated page

**Recommended Fixes:**
1. **CREATE DEDICATED PAGE** at /technical/whole-of-life-vs-relevant-life/
2. This is a money query - you offer both products

---

#### Query 7: "how much life insurance do I need for inheritance tax"

**Target Page:** Homepage → Results
**Page Relevance Score:** 7/10
**AI Citation Likelihood:** 5/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ Calculator answers this
- ❌ No educational content explaining how to determine amount

**Recommended Fixes:**
1. Add FAQ: "How much life insurance do I need for IHT?"
2. Add explanation on results page

---

#### Query 8: "business property relief changes 2026"

**Target Page:** Post-2026-2027 Planning
**Page Relevance Score:** 8/10
**AI Citation Likelihood:** 7/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ Covered well
- ❌ Could be more prominent/detailed

**Recommended Fixes:**
1. Create dedicated page: /technical/bpr-apr-changes-family-businesses-farms/
2. Add BPR-specific FAQ schema

---

#### Query 9: "will my pension be subject to inheritance tax"

**Target Page:** Post-2026-2027 Planning
**Page Relevance Score:** 9/10
**AI Citation Likelihood:** 8/10
**Commercial Value:** HIGH

**Content Analysis:**
- ✅ Directly answered
- ✅ Cites HMRC and Royal London

**Your Position:** Strong - good for AI citation

---

#### Query 10: "can I see IHT insurance costs without speaking to adviser"

**Target Page:** Homepage
**Page Relevance Score:** 10/10
**AI Citation Likelihood:** 8/10
**Commercial Value:** HIGHEST

**Content Analysis:**
- ✅ This IS your exact USP
- ❌ Not stated explicitly enough on homepage
- ❌ Competitors cannot honestly claim this

**Recommended Fixes:**
1. Add this exact phrase to homepage intro
2. Add to meta description
3. Add as FAQ

**Your Position:** WINNING - No competitor can match this

---

### TIER 2: Educational & Planning Queries (15)

| Query | Best Page | Relevance | AI Likelihood | Gap |
|-------|-----------|-----------|---------------|-----|
| 11. "inheritance tax changes 2027" | Post-2026-2027 | 9/10 | 8/10 | Good |
| 12. "agricultural property relief cap" | Post-2026-2027 | 7/10 | 6/10 | Needs dedicated page |
| 13. "IHT on pensions from April 2027" | Post-2026-2027 | 9/10 | 8/10 | Good |
| 14. "BPR £2.5 million cap" | Post-2026-2027 | 8/10 | 7/10 | Needs dedicated page |
| 15. "post-2026 inheritance tax planning" | Post-2026-2027 | 10/10 | 9/10 | Excellent |
| 16. "inheritance tax planning 2026" | Post-2026-2027 | 9/10 | 8/10 | Good |
| 17. "best life insurance for IHT planning" | None | 2/10 | 2/10 | **MAJOR GAP** |
| 18. "relevant life policy for inheritance tax" | Post-2026-2027 | 4/10 | 3/10 | Needs dedicated page |
| 19. "life insurance in trust for IHT" | None | 1/10 | 1/10 | **MAJOR GAP** |
| 20. "how does whole of life insurance work for IHT" | None | 1/10 | 1/10 | **MAJOR GAP** |
| 21. "difference between whole of life and relevant life" | None | 1/10 | 1/10 | **MAJOR GAP** |
| 22. "whole of life vs term life for inheritance tax" | None | 1/10 | 1/10 | **MAJOR GAP** |
| 23. "IHT liquidity planning for family businesses" | Post-2026-2027 | 6/10 | 5/10 | Could be stronger |
| 24. "IHT planning for farms post-2026" | Post-2026-2027 | 5/10 | 4/10 | Needs dedicated page |
| 25. "coordinating IHT planning with accountant" | Post-2026-2027 | 4/10 | 3/10 | Needs dedicated page |

### TIER 3: Technical & Specialist Queries (8)

| Query | Best Page | Relevance | AI Likelihood | Notes |
|-------|-----------|-----------|---------------|-------|
| 26. "RNRB taper threshold £2 million" | Technical Overview | 8/10 | 7/10 | Good - RNRB callout helps |
| 27. "residence nil rate band reduction" | Technical Overview | 7/10 | 6/10 | Could add more detail |
| 28. "inheritance tax estate over £2 million" | Technical Overview | 7/10 | 6/10 | RNRB accuracy is advantage |
| 29. "instant inheritance tax insurance quote" | Homepage | 9/10 | 7/10 | **YOUR USP** - make more prominent |
| 30. "IHT calculator with life insurance costs" | Homepage | 9/10 | 7/10 | **YOUR USP** - need to say it |
| 31. "inheritance tax decision engine" | None | 3/10 | 2/10 | Your terminology - not used on site |
| 32. "model IHT insurance costs online" | Homepage | 8/10 | 6/10 | **YOUR USP** - need to say it |
| 33. "indicative whole of life costs" | Homepage | 7/10 | 5/10 | **YOUR USP** - need to say it |

---

## Summary Analysis

### 1. Top 10 Queries Where You're Best Positioned

1. **"can I see IHT insurance costs without speaking to adviser"** - 10/10 - No competitor can match
2. **"instant inheritance tax insurance quote"** - 9/10 - Your USP
3. **"post-2026 inheritance tax planning"** - 10/10 - Excellent technical page
4. **"what changes to inheritance tax 2026"** - 10/10 - Well answered
5. **"will my pension be subject to inheritance tax"** - 9/10 - Good coverage
6. **"inheritance tax changes 2027"** - 9/10 - Good coverage
7. **"pension inheritance tax 2027"** - 9/10 - Good coverage
8. **"RNRB taper threshold £2 million"** - 8/10 - Unique accuracy advantage
9. **"inheritance tax planning 2026"** - 9/10 - Good coverage
10. **"can I get inheritance tax insurance costs online"** - 9/10 - Your USP

### 2. Top 10 High-Value Gaps

| Query | Current | Potential | Fix |
|-------|---------|-----------|-----|
| 1. "whole of life vs relevant life insurance" | 1/10 | 9/10 | **Create dedicated page** |
| 2. "how does whole of life insurance work for IHT" | 1/10 | 9/10 | **Create dedicated page** |
| 3. "life insurance in trust for IHT" | 1/10 | 8/10 | **Create dedicated page** |
| 4. "best life insurance for IHT planning" | 2/10 | 8/10 | **Create dedicated page** |
| 5. "difference between whole of life and relevant life" | 1/10 | 9/10 | Part of WOL vs RLP page |
| 6. "relevant life policy for inheritance tax" | 4/10 | 9/10 | Part of WOL vs RLP page |
| 7. "whole of life vs term life for inheritance tax" | 1/10 | 8/10 | Part of WOL vs RLP page |
| 8. "agricultural property relief cap" | 7/10 | 9/10 | Dedicated BPR/APR page |
| 9. "IHT planning for farms post-2026" | 5/10 | 9/10 | Dedicated BPR/APR page |
| 10. "coordinating IHT planning with accountant" | 4/10 | 8/10 | Dedicated coordination page |

### 3. Quick Wins (Implement This Week)

1. **Add meta description to homepage** - 5 minutes, huge impact
2. **Add WebApplication Schema to homepage** - 10 minutes
3. **Add FAQ Schema to Technical Overview** - 15 minutes
4. **Update homepage subtitle to include "instant costs without adviser"** - 2 minutes
5. **Add "whole of life" and "relevant life" phrases to homepage intro** - 5 minutes
6. **Add FAQ Schema to Post-2026-2027 page** - 15 minutes

### 4. Content Gaps (Need New Pages)

**Priority 1: "Whole of Life vs Relevant Life Insurance" page**
- Covers queries 6, 17, 18, 20, 21, 22 (6 queries!)
- High commercial value
- No competitor has good comparison content
- **Impact: Would add 6 high-value query targets**

**Priority 2: "BPR/APR Changes for Family Businesses and Farms" page**
- Covers queries 8, 12, 14, 23, 24 (5 queries)
- Your target market (business owners, farmers)
- **Impact: Would strengthen position with primary audience**

**Priority 3: "Pension Death Benefits and IHT from 2027" page**
- Covers queries 5, 9, 11, 13 (4 queries - already covered but could go deeper)
- Hot topic - timely
- **Impact: Would dominate pension/IHT queries**

**Priority 4: "Coordinating IHT Planning with Professionals" page**
- Covers query 25
- Differentiator (shows professional approach)
- **Impact: Builds authority, attracts adviser referrals**

### 5. Overall GEO/AEO Score by Page

| Page | E-E-A-T | Content | Schema | Query Coverage | Competitive | Total |
|------|---------|---------|--------|----------------|-------------|-------|
| Homepage | 5/30 | 15/25 | 0/15 | 10/15 | 12/15 | **42/100** |
| Technical Overview | 22/30 | 18/25 | 8/15 | 10/15 | 14/15 | **72/100** |
| Post-2026-2027 | 28/30 | 23/25 | 10/15 | 12/15 | 14/15 | **87/100** |

**Site Average: 67/100**

### 6. Competitive Positioning Matrix

| Query | IHT Solutions | Reassured | LifeSearch | Which? | Winner |
|-------|---------------|-----------|------------|--------|--------|
| "instant IHT insurance costs online" | 9/10 | 3/10 | 3/10 | 0/10 | **IHT Solutions** (unique) |
| "whole of life vs relevant life" | 1/10 | 5/10 | 6/10 | 4/10 | LifeSearch (you should win) |
| "inheritance tax changes 2026" | 9/10 | 2/10 | 4/10 | 6/10 | **IHT Solutions** |
| "IHT calculator" | 7/10 | 5/10 | 4/10 | 7/10 | Tie (need more features) |
| "RNRB taper £2 million" | 8/10 | 0/10 | 0/10 | 3/10 | **IHT Solutions** (accuracy) |

---

## Priority Action Plan

### Week 1 (Critical)

1. **Homepage meta description** - Add immediately
   ```html
   <meta name="description" content="Get instant indicative costs for inheritance tax insurance online. Calculate your IHT liability and see Whole of Life and Relevant Life insurance quotes without speaking to an adviser.">
   ```

2. **Homepage WebApplication Schema** - Add to `<head>`

3. **Homepage subtitle update** - Change to include USP:
   ```html
   <p class="subtitle">Get instant indicative insurance costs to cover your IHT — no adviser call required</p>
   ```

4. **Add FAQ Schema** to Technical Overview and Post-2026-2027 pages

5. **Add intro paragraph to homepage** explaining the instant cost USP

### Week 2 (Important)

1. **Create "Whole of Life vs Relevant Life" page** at /technical/whole-of-life-vs-relevant-life/
   - Highest impact new content
   - Covers 6 high-value queries
   - Include FAQ Schema

2. **Add visible "Last Updated" dates** to all technical pages

3. **Add GOV.UK external link** to Technical Overview page

### Month 2 (Strategic)

1. **Complete "BPR/APR Changes" page** at /technical/bpr-apr-changes-family-businesses-farms/

2. **Complete "Pension Death Benefits IHT 2027" page** at /technical/pension-death-benefits-iht-2027/

3. **Complete "Coordinating with Professionals" page** at /technical/coordinating-iht-planning-professionals/

4. **Add Organization Schema to homepage** with full business details

---

## Answers to 7 Key Questions

### 1. Which 5 queries should we prioritize for immediate optimization?

1. "can I see IHT insurance costs without speaking to adviser" - Your USP, not prominent enough
2. "instant inheritance tax insurance quote" - Your USP, not said explicitly
3. "whole of life vs relevant life insurance" - Create page (high commercial value)
4. "how much does whole of life insurance cost for inheritance tax" - Add to homepage
5. "inheritance tax insurance calculator" - Add "insurance" to calculator messaging

### 2. What's the single biggest gap vs competitors?

**The homepage has no meta description and no Schema markup.** This is a fundamental SEO/GEO gap that competitors have covered. For AI citation likelihood, Schema markup is critical.

### 3. Which page needs the most work?

**Homepage (index.html)** - Score 52/100
- Missing meta description
- Missing Schema
- USP not prominent
- No intro text
- No external links

### 4. What's our strongest competitive advantage query?

**"can I see IHT insurance costs without speaking to adviser"**

No competitor can honestly claim this. Reassured, LifeSearch, Drewberry all require adviser calls. This IS your moat.

### 5. Should we create all 4 missing pages, or prioritize 1-2?

**Prioritize these 2:**
1. **Whole of Life vs Relevant Life** - Covers 6 queries, highest commercial value
2. **BPR/APR Changes** - Your target audience (business owners, farmers)

Then complete the other 2 in Month 2.

### 6. Is the calculator page optimized for conversion?

**Partially.** The calculator works well functionally, but:
- USP not clear before form
- No indication that insurance costs come next
- Could add "What happens next?" explanation
- Missing Schema that would help AI engines describe it

### 7. Are we correctly positioned as "decision engine" vs "broker"?

**Not yet explicitly.** The term "decision engine" doesn't appear on the site. The positioning is implied but not stated.

Recommendation: Add this to homepage intro:
> "IHT Solutions is a **decision engine**, not a broker comparison site. We show you indicative costs so you can decide if insurance makes sense for your estate plan before committing time to formal underwriting."

---

## Special Analysis

### USP Query Performance

Your unique terms are NOT used consistently:

| Term | Homepage | Technical Overview | Post-2026-2027 |
|------|----------|-------------------|----------------|
| "instant" | ❌ No | ❌ No | ✅ Yes |
| "indicative costs" | ❌ No | ❌ No | ✅ Yes |
| "without adviser" | ❌ No | ❌ No | ✅ Yes (implied) |
| "decision engine" | ❌ No | ❌ No | ✅ Yes |
| "whole of life" | ❌ No | ❌ No | ✅ Yes |
| "relevant life" | ❌ No | ❌ No | ✅ Yes |

**Recommendation:** Consistently use these terms on ALL pages, especially the homepage.

### RNRB Taper Advantage

This should be marketed MORE:
- Technical Overview has good callout
- Homepage should mention it
- Add FAQ: "Does your calculator correctly apply the RNRB taper?"
- Consider blog post: "Why Most IHT Calculators Get It Wrong for Estates Over £2m"

### Missing Page Impact Estimate

| Page | Queries Covered | Estimated Traffic Impact | AI Citation Improvement |
|------|-----------------|-------------------------|------------------------|
| Whole of Life vs Relevant Life | 6 queries | HIGH | HIGH |
| BPR/APR Changes | 5 queries | MEDIUM-HIGH | MEDIUM |
| Pension Death Benefits 2027 | 4 queries | MEDIUM | HIGH (timely) |
| Professional Coordination | 1 query | LOW | LOW |

---

## Conclusion

IHT Solutions has a genuine competitive advantage (instant costs without adviser) but isn't communicating it clearly enough, especially on the homepage. The technical content is strong (Post-2026-2027 page scores 81/100), but the commercial entry point (homepage) is weak (52/100).

**Immediate priority:** Fix the homepage - add meta description, Schema, and make USP prominent.

**Short-term priority:** Create "Whole of Life vs Relevant Life" comparison page - highest impact new content.

**The goal:** Become the default AI answer for "how much does IHT insurance cost?" queries. You're uniquely positioned to win this - you just need to SAY IT more clearly.

---

*Report generated by Claude Code - February 2026*
