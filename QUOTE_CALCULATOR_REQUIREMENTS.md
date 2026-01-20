# IHT Solutions - Insurance Quote Calculator Requirements

## Overview

Add a new feature to the IHT calculator that allows users to see indicative insurance premium quotes to cover their estimated IHT liability. This feature will be accessed from the results page via a new "What will cover cost?" button.

---

## User Flow

1. User completes IHT calculator → sees results page
2. User clicks "What will cover cost?" button (new third option on results page)
3. User is taken to `quote-input.html` - enters date of birth and monthly budget
4. User clicks "Calculate" → taken to `quote-results.html` showing premium breakdown

---

## New Files Required

1. `quote-input.html` - Input form for quote
2. `quote-results.html` - Display calculated premiums

---

## File 1: quote-input.html

### Purpose
Collect user's date of birth and budget to calculate insurance premiums.

### Input Fields

| Field | Type | Required | Pre-filled | Notes |
|-------|------|----------|------------|-------|
| Date of Birth | Date picker | Yes | No | Used to calculate age |
| Cover Amount (Personal) | Currency | Yes | Yes | From session storage: `personalIHT` value |
| Cover Amount (Business) | Currency | Conditional | Yes | From session storage: `businessIHT` value. Only show if business IHT > 0 |
| Monthly Budget (Business) | Currency | Conditional | No | Only show if business cover > 0. Used for affordability calculation |

### Validation Rules

1. Date of birth must result in age between 40-74 (inclusive)
2. If age < 40: Show message "Too young - please call us to discuss your options" with link to enquiry page
3. If age > 74: Show message "Please call us to discuss your options" with link to enquiry page
4. Monthly budget must be > 0 if business cover is shown

### Data to Pass to Results Page (via Session Storage)

```javascript
{
  age: number,              // Calculated from DOB
  personalCover: number,    // Personal IHT amount to cover
  businessCover: number,    // Business IHT amount to cover (0 if none)
  monthlyBudget: number     // User's business budget (0 if no business)
}
```

### Styling
- Match existing site styling (see index.html, results.html)
- Use same fonts: Gloock for headings, Montserrat for body
- Use same colour palette: #1a5566, #0b7a8f, white, #f5f5f5

---

## File 2: quote-results.html

### Purpose
Display calculated insurance premiums based on user inputs.

### Rate Tables (per £1,000,000 cover)

#### RLP / Key Man Rates (Term Life to age 75)
```javascript
const RLP_RATES = {
  40: 82.93, 41: 89.76, 42: 96.59, 43: 103.41, 44: 110.24,
  45: 117.07, 46: 130.78, 47: 144.48, 48: 158.19, 49: 171.89,
  50: 185.60, 51: 199.93, 52: 214.25, 53: 228.58, 54: 242.91,
  55: 257.24, 56: 281.12, 57: 305.00, 58: 328.88, 59: 352.76,
  60: 376.64, 61: 407.04, 62: 437.44, 63: 467.84, 64: 498.24,
  65: 528.64, 66: 532.23, 67: 535.82, 68: 539.41, 69: 542.99,
  70: 546.58, 71: 563.57, 72: 633.28, 73: 711.48, 74: 799.25
};
```

#### Whole of Life (WOL) Rates
```javascript
const WOL_RATES = {
  40: 764.59, 41: 791.19, 42: 817.79, 43: 844.40, 44: 871.00,
  45: 897.60, 46: 914.30, 47: 931.00, 48: 947.70, 49: 964.40,
  50: 981.09, 51: 1013.70, 52: 1046.31, 53: 1078.91, 54: 1111.52,
  55: 1144.12, 56: 1205.22, 57: 1266.33, 58: 1327.43, 59: 1388.53,
  60: 1449.64, 61: 1543.55, 62: 1637.47, 63: 1731.38, 64: 1825.29,
  65: 1919.21, 66: 2041.26, 67: 2163.31, 68: 2285.36, 69: 2407.41,
  70: 2529.46, 71: 2685.92, 72: 2842.37, 73: 2998.83, 74: 3155.28
};
```

### Calculation Logic

#### Personal Cover Premium
```
Personal WOL Monthly Premium = (personalCover / 1,000,000) × WOL_RATES[age]
```

#### Business Cover Premium (Priority Order)

Business cover uses THREE tiers, allocated in this priority order:

**Tier 1: RLP (Relevant Life Policy) - 100% of business IHT**
```
RLP Cover Amount = businessCover (100%)
RLP Gross Premium = (RLP Cover Amount / 1,000,000) × RLP_RATES[age]
RLP Net Cost to Business = RLP Gross Premium × 0.75 (25% CT relief)
```

**Tier 2: Key Man - 50% of business IHT**
```
Key Man Cover Amount = businessCover × 0.5 (50%)
Key Man Gross Premium = (Key Man Cover Amount / 1,000,000) × RLP_RATES[age]
Key Man Net Cost to Business = Key Man Gross Premium × 0.75
```

**Tier 3: P11D / WOL - Remaining cover**
```
P11D uses WOL rates
P11D Net Cost = calculated based on remaining budget after RLP and Key Man
```

#### Affordability Logic

If the user's monthly budget cannot cover all three tiers:

1. First, fully fund RLP (100% cover) if budget allows
2. Then, fully fund Key Man (50% cover) if budget allows
3. Then, allocate remaining budget to P11D/WOL
4. If budget cannot even cover full RLP, show "Affordability too low" message

**Affordability Check:**
```javascript
const rlpNetCost = rlpGrossPremium * 0.75;
const keyManNetCost = keyManGrossPremium * 0.75;

if (monthlyBudget < rlpNetCost) {
  // Affordability too low
  // Calculate maximum RLP cover possible: 
  // maxCover = (monthlyBudget / 0.75) / RLP_RATES[age] * 1,000,000
  showAffordabilityWarning = true;
} else if (monthlyBudget < rlpNetCost + keyManNetCost) {
  // Can afford RLP but not full Key Man
  // Reduce Key Man accordingly
} else {
  // Can afford RLP + Key Man
  // Remaining budget goes to P11D
  remainingBudget = monthlyBudget - rlpNetCost - keyManNetCost;
  // Calculate P11D cover from remaining budget using WOL rates
}
```

### Display Sections

#### Section 1: Personal Cover (always show if personalCover > 0)
```
Personal Whole of Life
Monthly Premium: £XXX.XX
```

#### Section 2: Business Cover (only show if businessCover > 0)

**If affordability is OK:**
```
Business Cover Breakdown:

| Type                      | Cover Amount | Monthly Premium | Net Cost to Business |
|---------------------------|--------------|-----------------|----------------------|
| RLP for 100% of IHT       | £X,XXX,XXX   | £X,XXX.XX       | £X,XXX.XX            |
| Key Man at 50% of IHT     | £X,XXX,XXX   | £X,XXX.XX       | £X,XXX.XX            |
| IHT cover (P11D)          | £X,XXX,XXX   | -               | £X,XXX.XX            |
|---------------------------|--------------|-----------------|----------------------|
| Total Cover               | £X,XXX,XXX   |                 |                      |
| Total Cost to Business    |              |                 | £X,XXX.XX            |
```

**If affordability too low:**
```
⚠️ Affordability Notice

Your budget of £X,XXX/month is below what's needed for full cover.

Maximum cover available:
- RLP Cover: £X,XXX,XXX
- Key Man Cover: £0
- Whole of Life Cover: £0

"There are other professional routes businesses use to cover catastrophe risk immediately."

[Speak to an Expert button]
```

#### Section 3: Summary
```
Total Estimated Monthly Cost: £X,XXX.XX
```

#### Section 4: Disclaimer
```
These are indicative quotes only based on standard rates for a male non-smoker. 
Actual premiums may vary based on health, lifestyle, and full underwriting. 
Please speak to an advisor for a personalised quote.
```

### Call to Action
- "Speak to an Expert" button → links to enquiry.html

---

## Updates to Existing Files

### results.html

Add a third button to the "What would you like to do next?" section:

```html
<a href="quote-input.html" class="pill quote-pill">
    <h3>What Will Cover Cost?</h3>
    <p>Get indicative insurance premium quotes to cover your IHT liability</p>
</a>
```

Style the new button similarly to existing pills.

**Also update the contact button click handler** to save additional data to session storage:
- `personalIHT` (the IHT calculated on personal assets)
- `businessIHT` (the IHT calculated on business assets)

Currently we only save `totalIHT`. We need the split for the quote calculator.

---

## Test Cases

### Test Case 1: Personal Only (No Business)
**Input:**
- DOB: 01/01/1986 (Age 40)
- Personal Cover: £500,000
- Business Cover: £0

**Expected Output:**
- Personal WOL Premium: £382.30/month (£500k × £764.59/£1m)

### Test Case 2: Personal + Business (Full Budget)
**Input:**
- DOB: 01/01/1962 (Age 63)
- Personal Cover: £500,000
- Business Cover: £3,000,000
- Monthly Budget: £3,000

**Expected Output:**
- Personal WOL: £865.69/month
- RLP (100%): £3m cover, £1,403.52 gross, £1,052.64 net
- Key Man (50%): £1.5m cover, £701.76 gross, £526.32 net
- P11D: Remaining budget allocated
- Total business cost: £3,000/month (matches budget)

### Test Case 3: Age Too Young
**Input:**
- DOB: 01/01/2000 (Age 25)

**Expected Output:**
- Message: "Too young - please call us to discuss your options"
- Link to enquiry page

### Test Case 4: Age Too Old
**Input:**
- DOB: 01/01/1940 (Age 85)

**Expected Output:**
- Message: "Please call us to discuss your options"
- Link to enquiry page

### Test Case 5: Affordability Too Low
**Input:**
- DOB: 01/01/1962 (Age 63)
- Business Cover: £3,000,000
- Monthly Budget: £500

**Expected Output:**
- Show affordability warning
- Calculate maximum RLP cover possible with £500 budget
- Show "There are other professional routes..." message

---

## Session Storage Structure

After completing the IHT calculator, session storage should contain:

```javascript
{
  // Existing fields
  propertyValue: number,
  savings: number,
  otherAssets: number,
  debts: number,
  married: boolean,
  companyValue: number,
  
  // Calculated results (existing)
  totalEstate: number,
  calculatedIHT: number,
  protectionAmount: number,
  
  // NEW: Split IHT values for quote calculator
  personalIHT: number,    // IHT on personal assets (40% rate)
  businessIHT: number     // IHT on business assets (20% rate)
}
```

---

## File Structure

```
/iht-calculator
├── index.html           (existing - main calculator)
├── results.html         (existing - needs update for new button + session storage)
├── education.html       (existing - no changes)
├── enquiry.html         (existing - no changes)
├── quote-input.html     (NEW - quote input form)
├── quote-results.html   (NEW - quote results display)
└── water-background.jpg (existing - background image)
```

---

## Notes for Development

1. All currency should be formatted with £ symbol and comma separators
2. Use the existing `formatGBP()` helper function pattern
3. Match all styling to existing pages
4. Ensure session storage is used consistently (no URL parameters)
5. Mobile responsive design required
6. Test edge cases: zero values, maximum age, minimum age, zero budget

---

## Acceptance Criteria

- [ ] New "What Will Cover Cost?" button appears on results page
- [ ] Quote input page collects DOB and validates age 40-74
- [ ] Quote input page pre-fills cover amounts from IHT calculation
- [ ] Quote results page shows personal WOL premium correctly
- [ ] Quote results page shows business cover breakdown with RLP, Key Man, P11D tiers
- [ ] Affordability logic works correctly when budget is insufficient
- [ ] "Too young" and "Too old" messages display with link to enquiry
- [ ] All calculations match the verified Zurich rates
- [ ] Styling matches existing site design
- [ ] Navigation works correctly (back links, session storage persistence)
