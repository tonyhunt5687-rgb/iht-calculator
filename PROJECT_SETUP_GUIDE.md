# IHT Calculator - Project Setup Guide for Claude Code

## Project Overview

This is an Inheritance Tax (IHT) calculator for IHT Solutions, a UK-based financial services company. The calculator helps users estimate their potential IHT liability and now needs a new insurance quote feature.

## Current Project Status

### Completed Features
1. **Main Calculator** (`index.html`) - Collects user's assets, debts, marital status, and optional business details
2. **Results Page** (`results.html`) - Shows IHT calculation with BPR (Business Property Relief) handling
3. **Education Page** (`education.html`) - Information about IHT planning strategies
4. **Enquiry Page** (`enquiry.html`) - Contact form for users to request consultation

### Key Technical Details
- Pure HTML/CSS/JavaScript (no frameworks)
- Session storage used for data persistence between pages
- Currency formatting with £ symbol and comma separators
- Responsive design for mobile/desktop
- Fonts: Gloock (headings), Montserrat (body)
- Colours: #1a5566 (dark teal), #0b7a8f (teal), white, #f5f5f5

### IHT Calculation Logic
- Personal assets: 40% tax rate above nil-rate bands
- Business assets: 20% tax rate above BPR allowance
- BPR allowance: £2.5m single, £5m married
- Nil-rate band: £325k single, £650k married
- Residence nil-rate band: £175k single, £350k married (if property owned)
- Protection amount: IHT × 1.1 (10% safety margin)

## New Feature Required

**Insurance Quote Calculator** - See `QUOTE_CALCULATOR_REQUIREMENTS.md` for full specification.

This adds two new pages:
1. `quote-input.html` - Collect DOB and budget
2. `quote-results.html` - Show premium calculations

And updates `results.html` to add a third CTA button.

## File List

### Existing Files (in /mnt/user-data/outputs/)
- `index.html` - Main calculator form
- `results.html` - Results display with IHT breakdown
- `education.html` - Educational content
- `enquiry.html` - Contact form

### Documentation
- `QUOTE_CALCULATOR_REQUIREMENTS.md` - Full requirements for the new feature

## Getting Started with Claude Code

1. Create a new project folder:
   ```bash
   mkdir iht-calculator
   cd iht-calculator
   ```

2. Copy all the existing HTML files into the folder

3. Read the requirements document:
   ```
   Read QUOTE_CALCULATOR_REQUIREMENTS.md and summarise the key tasks
   ```

4. Start building:
   ```
   Create quote-input.html following the requirements specification
   ```

## For Ralph (Automated Building)

If using Ralph for automated development, here's a suggested task breakdown:

### Task List for Ralph

1. **Update results.html** - Add third button "What Will Cover Cost?" linking to quote-input.html
2. **Update results.html** - Modify session storage to save personalIHT and businessIHT separately
3. **Create quote-input.html** - Basic page structure with styling matching existing site
4. **Create quote-input.html** - Add date of birth input field
5. **Create quote-input.html** - Add cover amount fields (pre-filled from session storage)
6. **Create quote-input.html** - Add monthly budget field (conditional on business cover)
7. **Create quote-input.html** - Add age validation (40-74 range)
8. **Create quote-input.html** - Add "too young/old" messages with enquiry link
9. **Create quote-input.html** - Add form submission saving to session storage
10. **Create quote-results.html** - Basic page structure with styling
11. **Create quote-results.html** - Add RLP rate lookup table
12. **Create quote-results.html** - Add WOL rate lookup table
13. **Create quote-results.html** - Calculate and display personal WOL premium
14. **Create quote-results.html** - Calculate RLP tier (100% business cover)
15. **Create quote-results.html** - Calculate Key Man tier (50% business cover)
16. **Create quote-results.html** - Calculate P11D tier (remaining budget)
17. **Create quote-results.html** - Add affordability check logic
18. **Create quote-results.html** - Display affordability warning when budget too low
19. **Create quote-results.html** - Add summary totals section
20. **Create quote-results.html** - Add disclaimer text
21. **Create quote-results.html** - Add "Speak to an Expert" CTA button
22. **Test** - Verify personal-only calculation (Test Case 1)
23. **Test** - Verify full business calculation (Test Case 2)
24. **Test** - Verify age boundary messages (Test Cases 3 & 4)
25. **Test** - Verify affordability warning (Test Case 5)

Each task should be completable in a single Claude Code session and has a clear pass/fail criteria.

## Useful Code Snippets

### Currency Formatting (used throughout)
```javascript
function formatGBP(value) {
    return '£' + value.toLocaleString('en-GB', {maximumFractionDigits: 0});
}
```

### Session Storage Pattern
```javascript
// Saving
const data = { key: value };
sessionStorage.setItem('ihtData', JSON.stringify(data));

// Loading
const stored = sessionStorage.getItem('ihtData');
if (stored) {
    const data = JSON.parse(stored);
}
```

### Age Calculation
```javascript
function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
```

## Contact

If you need clarification on any requirements, the key stakeholder is the client (Steve Hunt) who can be reached via the main project contact.
