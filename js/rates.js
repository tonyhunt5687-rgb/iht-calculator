/**
 * IHT Solutions — Shared Rate Calculation Module
 * Zurich indicative rates (male, Jan 2026), MONTHLY per £1,000,000 cover
 */

// Rate tables
const RLP_RATES = {
    40: 82.93, 41: 89.76, 42: 96.59, 43: 103.41, 44: 110.24,
    45: 117.07, 46: 130.78, 47: 144.48, 48: 158.19, 49: 171.89,
    50: 185.60, 51: 199.93, 52: 214.25, 53: 228.58, 54: 242.91,
    55: 257.24, 56: 281.12, 57: 305.00, 58: 328.88, 59: 352.76,
    60: 376.64, 61: 407.04, 62: 437.44, 63: 467.84, 64: 498.24,
    65: 528.64, 66: 532.23, 67: 535.82, 68: 539.41, 69: 542.99,
    70: 546.58, 71: 563.57, 72: 633.28, 73: 711.48, 74: 799.25
};

const WOL_RATES = {
    40: 764.59, 41: 791.19, 42: 817.79, 43: 844.40, 44: 871.00,
    45: 897.60, 46: 914.30, 47: 931.00, 48: 947.70, 49: 964.40,
    50: 981.09, 51: 1013.70, 52: 1046.31, 53: 1078.91, 54: 1111.52,
    55: 1144.12, 56: 1205.22, 57: 1266.33, 58: 1327.43, 59: 1388.53,
    60: 1449.64, 61: 1543.55, 62: 1637.47, 63: 1731.38, 64: 1825.29,
    65: 1919.21, 66: 2041.26, 67: 2163.31, 68: 2285.36, 69: 2407.41,
    70: 2529.46, 71: 2685.92, 72: 2842.37, 73: 2998.83, 74: 3155.28,
    75: 3311.74, 76: 3612.79, 77: 3913.83, 78: 4214.88, 79: 4515.92
};

var FEMALE_DISCOUNT = 0.85;

function formatGBP(value) {
    return '£' + value.toLocaleString('en-GB', {maximumFractionDigits: 2, minimumFractionDigits: 2});
}

function formatGBPWhole(value) {
    return '£' + value.toLocaleString('en-GB', {maximumFractionDigits: 0});
}

function calculateAge(dob) {
    var today = new Date();
    var birth = new Date(dob);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function getWOLPremium(age, sumAssured, sex) {
    var rate = WOL_RATES[age];
    if (!rate) return null;
    var monthlyPer1M = rate;
    if (sex === 'female') {
        monthlyPer1M = monthlyPer1M * FEMALE_DISCOUNT;
    }
    var monthly = (sumAssured / 1000000) * monthlyPer1M;
    var annual = monthly * 12;
    return { monthly: monthly, annual: annual };
}

function getRLPPremium(age, sumAssured, sex) {
    var rate = RLP_RATES[age];
    if (!rate) return null;
    var monthlyPer1M = rate;
    if (sex === 'female') {
        monthlyPer1M = monthlyPer1M * FEMALE_DISCOUNT;
    }
    var monthly = (sumAssured / 1000000) * monthlyPer1M;
    var grossAnnual = monthly * 12;
    var ctRelief = grossAnnual * 0.25;
    var netCost = grossAnnual * 0.75;
    return {
        monthly: monthly,
        annual: grossAnnual,
        grossAnnual: grossAnnual,
        ctRelief: ctRelief,
        netCost: netCost
    };
}
