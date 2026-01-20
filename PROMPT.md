# Insurance Quote Calculator Feature

Build an insurance quote calculator for the IHT Solutions website.

## Reference Documents
- `QUOTE_CALCULATOR_REQUIREMENTS.md` - Full specification with rate tables, calculation logic, and test cases
- `PROJECT_SETUP_GUIDE.md` - Technical context and code patterns

## Tasks

### Phase 1: Update Results Page
1. Update `results.html` to add a third CTA button "What Will Cover Cost?" linking to `quote-input.html`
2. Update `results.html` to save `personalIHT` and `businessIHT` separately in session storage (currently only saves `totalIHT`)

### Phase 2: Create Quote Input Page
3. Create `quote-input.html` with page structure and styling matching existing site (Gloock/Montserrat fonts, teal colour scheme)
4. Add date of birth input field with age calculation
5. Add cover amount fields pre-filled from session storage (`personalIHT`, `businessIHT`)
6. Add monthly budget field (only shown if business cover > 0)
7. Add age validation: must be 40-74 inclusive
8. Add "too young" message (age < 40) with link to enquiry page
9. Add "too old" message (age > 74) with link to enquiry page
10. Add form submission that saves age, covers, and budget to session storage

### Phase 3: Create Quote Results Page
11. Create `quote-results.html` with page structure and styling
12. Add RLP_RATES lookup table (rates per £1m cover for ages 40-74)
13. Add WOL_RATES lookup table (rates per £1m cover for ages 40-74)
14. Calculate and display personal WOL premium: `(personalCover / 1,000,000) × WOL_RATES[age]`
15. Calculate RLP tier: 100% of business IHT, net cost = gross × 0.75
16. Calculate Key Man tier: 50% of business IHT, net cost = gross × 0.75
17. Calculate P11D tier: remaining budget after RLP and Key Man
18. Add affordability check: warn if budget < RLP cost, calculate max cover possible
19. Display business cover breakdown table (RLP, Key Man, P11D columns)
20. Display affordability warning with alternative message when budget too low
21. Add summary totals section
22. Add disclaimer about indicative quotes
23. Add "Speak to an Expert" button linking to enquiry.html

### Phase 4: Testing
24. Test personal-only calculation (age 40, £500k personal, no business) - expect £382.30/month WOL
25. Test full business calculation (age 63, £500k personal, £3m business, £3k budget)
26. Test age boundaries: verify "too young" (age 25) and "too old" (age 85) messages appear
27. Test affordability warning with low budget (age 63, £3m business, £500 budget)

## Success Criteria
- All new pages match existing site styling
- Session storage data flows correctly between pages
- Premium calculations match the rate tables exactly
- Age validation prevents invalid submissions
- Affordability logic correctly prioritises RLP > Key Man > P11D
- Mobile responsive design works correctly

## Notes
- Use existing `formatGBP()` pattern for currency display
- Follow session storage patterns from existing code
- Keep all pages as standalone HTML (no build process)
