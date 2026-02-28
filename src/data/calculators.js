export const calculators = {

  // ── FINANCE ──────────────────────────────────────────

  emi: {
    slug: 'emi', name: 'EMI Calculator', emoji: '🏦', category: 'Finance',
    description: 'Calculate your monthly EMI for any loan instantly',
    inputs: [
      { id: 'principal', label: 'Loan Amount', placeholder: 'e.g. 500000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 8.5', prefix: '%' },
      { id: 'tenure', label: 'Loan Tenure (Years)', placeholder: 'e.g. 20', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure) * 12
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const total = emi * n, interest = total - P
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(interest).toLocaleString('en-IN') },
        { label: 'Total Amount', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  gst: {
    slug: 'gst', name: 'GST Calculator', emoji: '📊', category: 'Finance',
    description: 'Calculate GST on any amount instantly',
    inputs: [
      { id: 'amount', label: 'Original Amount', placeholder: 'e.g. 10000', prefix: '₹' },
      { id: 'rate', label: 'GST Rate (%)', placeholder: 'e.g. 18', prefix: '%' },
    ],
    calculate(inputs) {
      const amount = parseFloat(inputs.amount), rate = parseFloat(inputs.rate)
      if (!amount || !rate) return null
      const gst = (amount * rate) / 100, total = amount + gst
      return [
        { label: 'GST Amount', value: '₹' + Math.round(gst).toLocaleString('en-IN') },
        { label: 'CGST (50%)', value: '₹' + Math.round(gst / 2).toLocaleString('en-IN') },
        { label: 'SGST (50%)', value: '₹' + Math.round(gst / 2).toLocaleString('en-IN') },
        { label: 'Total Amount', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  sip: {
    slug: 'sip', name: 'SIP Calculator', emoji: '📈', category: 'Finance',
    description: 'Plan your SIP investments and see future returns',
    inputs: [
      { id: 'monthly', label: 'Monthly Investment', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'rate', label: 'Expected Return Rate (% per year)', placeholder: 'e.g. 12', prefix: '%' },
      { id: 'years', label: 'Time Period (Years)', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.monthly), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.years) * 12
      if (!P || !r || !n) return null
      const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r), invested = P * n
      return [
        { label: 'Invested Amount', value: '₹' + Math.round(invested).toLocaleString('en-IN') },
        { label: 'Est. Returns', value: '₹' + Math.round(total - invested).toLocaleString('en-IN') },
        { label: 'Total Value', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  incometax: {
    slug: 'incometax', name: 'Income Tax Calculator', emoji: '💵', category: 'Finance',
    description: 'Estimate your income tax for FY 2024-25 (New Regime)',
    inputs: [
      { id: 'income', label: 'Annual Income', placeholder: 'e.g. 800000', prefix: '₹' },
      { id: 'deductions', label: 'Deductions (80C, HRA etc.)', placeholder: 'e.g. 150000', prefix: '₹' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), deductions = parseFloat(inputs.deductions) || 0
      if (!income) return null
      const taxable = Math.max(0, income - deductions)
      let tax = 0
      if (taxable <= 300000) tax = 0
      else if (taxable <= 600000) tax = (taxable - 300000) * 0.05
      else if (taxable <= 900000) tax = 15000 + (taxable - 600000) * 0.10
      else if (taxable <= 1200000) tax = 45000 + (taxable - 900000) * 0.15
      else if (taxable <= 1500000) tax = 90000 + (taxable - 1200000) * 0.20
      else tax = 150000 + (taxable - 1500000) * 0.30
      const totalTax = tax + tax * 0.04
      return [
        { label: 'Taxable Income', value: '₹' + Math.round(taxable).toLocaleString('en-IN') },
        { label: 'Total Tax', value: '₹' + Math.round(totalTax).toLocaleString('en-IN') },
        { label: 'In-Hand Income', value: '₹' + Math.round(income - totalTax).toLocaleString('en-IN') },
      ]
    }
  },

  homeloan: {
    slug: 'homeloan', name: 'Home Loan Calculator', emoji: '🏠', category: 'Finance',
    description: 'Calculate EMI and total cost for your home loan',
    inputs: [
      { id: 'principal', label: 'Loan Amount', placeholder: 'e.g. 5000000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 8.5', prefix: '%' },
      { id: 'tenure', label: 'Loan Tenure (Years)', placeholder: 'e.g. 20', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure) * 12
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1), total = emi * n
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(total - P).toLocaleString('en-IN') },
        { label: 'Total Payment', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  fd: {
    slug: 'fd', name: 'FD Calculator', emoji: '🏛️', category: 'Finance',
    description: 'Calculate maturity amount for your Fixed Deposit',
    inputs: [
      { id: 'principal', label: 'Deposit Amount', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 7', prefix: '%' },
      { id: 'years', label: 'Tenure (Years)', placeholder: 'e.g. 3', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), r = parseFloat(inputs.rate) / 100, t = parseFloat(inputs.years)
      if (!P || !r || !t) return null
      const maturity = P * Math.pow(1 + r / 4, 4 * t)
      return [
        { label: 'Maturity Amount', value: '₹' + Math.round(maturity).toLocaleString('en-IN') },
        { label: 'Interest Earned', value: '₹' + Math.round(maturity - P).toLocaleString('en-IN') },
        { label: 'Total Invested', value: '₹' + Math.round(P).toLocaleString('en-IN') },
      ]
    }
  },

  ppf: {
    slug: 'ppf', name: 'PPF Calculator', emoji: '💰', category: 'Finance',
    description: 'Calculate your PPF maturity amount',
    inputs: [
      { id: 'yearly', label: 'Yearly Investment', placeholder: 'e.g. 150000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 7.1', prefix: '%' },
      { id: 'years', label: 'Tenure (Years)', placeholder: 'e.g. 15', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.yearly), r = parseFloat(inputs.rate) / 100, n = parseFloat(inputs.years)
      if (!P || !r || !n) return null
      const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      return [
        { label: 'Maturity Amount', value: '₹' + Math.round(maturity).toLocaleString('en-IN') },
        { label: 'Total Invested', value: '₹' + Math.round(P * n).toLocaleString('en-IN') },
        { label: 'Interest Earned', value: '₹' + Math.round(maturity - P * n).toLocaleString('en-IN') },
      ]
    }
  },

  compound: {
    slug: 'compound', name: 'Compound Interest', emoji: '💹', category: 'Finance',
    description: 'See the power of compound interest on your investment',
    inputs: [
      { id: 'principal', label: 'Principal Amount', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'rate', label: 'Annual Interest Rate (%)', placeholder: 'e.g. 10', prefix: '%' },
      { id: 'years', label: 'Time Period (Years)', placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), r = parseFloat(inputs.rate) / 100, t = parseFloat(inputs.years)
      if (!P || !r || !t) return null
      const amount = P * Math.pow(1 + r, t)
      return [
        { label: 'Final Amount', value: '₹' + Math.round(amount).toLocaleString('en-IN') },
        { label: 'Interest Earned', value: '₹' + Math.round(amount - P).toLocaleString('en-IN') },
        { label: 'Growth', value: (((amount - P) / P) * 100).toFixed(1) + '%' },
      ]
    }
  },

  simple_interest: {
    slug: 'simple_interest', name: 'Simple Interest', emoji: '🧾', category: 'Finance',
    description: 'Calculate simple interest on any principal amount',
    inputs: [
      { id: 'principal', label: 'Principal Amount', placeholder: 'e.g. 10000', prefix: '₹' },
      { id: 'rate', label: 'Rate of Interest (% per year)', placeholder: 'e.g. 8', prefix: '%' },
      { id: 'time', label: 'Time Period (Years)', placeholder: 'e.g. 3', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), R = parseFloat(inputs.rate), T = parseFloat(inputs.time)
      if (!P || !R || !T) return null
      const SI = (P * R * T) / 100
      return [
        { label: 'Simple Interest', value: '₹' + Math.round(SI).toLocaleString('en-IN') },
        { label: 'Total Amount', value: '₹' + Math.round(P + SI).toLocaleString('en-IN') },
        { label: 'Principal', value: '₹' + Math.round(P).toLocaleString('en-IN') },
      ]
    }
  },

  gratuity: {
    slug: 'gratuity', name: 'Gratuity Calculator', emoji: '🏅', category: 'Finance',
    description: 'Calculate your gratuity amount as per Indian law',
    inputs: [
      { id: 'salary', label: 'Last Drawn Basic Salary', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'years', label: 'Years of Service', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const salary = parseFloat(inputs.salary), years = parseFloat(inputs.years)
      if (!salary || !years) return null
      const gratuity = (salary * years * 15) / 26
      return [
        { label: 'Gratuity Amount', value: '₹' + Math.round(gratuity).toLocaleString('en-IN') },
        { label: 'Years of Service', value: years + ' years' },
        { label: 'Monthly Salary', value: '₹' + Math.round(salary).toLocaleString('en-IN') },
      ]
    }
  },

  hra: {
    slug: 'hra', name: 'HRA Calculator', emoji: '🏘️', category: 'Finance',
    description: 'Calculate your HRA exemption for tax savings',
    inputs: [
      { id: 'basic', label: 'Basic Salary (Monthly)', placeholder: 'e.g. 40000', prefix: '₹' },
      { id: 'hra_received', label: 'HRA Received (Monthly)', placeholder: 'e.g. 20000', prefix: '₹' },
      { id: 'rent', label: 'Rent Paid (Monthly)', placeholder: 'e.g. 15000', prefix: '₹' },
    ],
    calculate(inputs) {
      const basic = parseFloat(inputs.basic), hra = parseFloat(inputs.hra_received), rent = parseFloat(inputs.rent)
      if (!basic || !hra || !rent) return null
      const exemption = Math.max(0, Math.min(hra, rent - 0.1 * basic, 0.5 * basic))
      return [
        { label: 'HRA Exemption', value: '₹' + Math.round(exemption).toLocaleString('en-IN') },
        { label: 'Taxable HRA', value: '₹' + Math.round(hra - exemption).toLocaleString('en-IN') },
        { label: 'HRA Received', value: '₹' + Math.round(hra).toLocaleString('en-IN') },
      ]
    }
  },

  roi: {
    slug: 'roi', name: 'ROI Calculator', emoji: '📉', category: 'Finance',
    description: 'Calculate Return on Investment for any deal',
    inputs: [
      { id: 'investment', label: 'Initial Investment', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'returns', label: 'Final Value / Returns', placeholder: 'e.g. 150000', prefix: '₹' },
    ],
    calculate(inputs) {
      const invested = parseFloat(inputs.investment), returned = parseFloat(inputs.returns)
      if (!invested || !returned) return null
      const profit = returned - invested, roi = (profit / invested) * 100
      return [
        { label: 'ROI', value: roi.toFixed(2) + '%' },
        { label: 'Net Profit', value: '₹' + Math.round(profit).toLocaleString('en-IN') },
        { label: 'Total Returns', value: '₹' + Math.round(returned).toLocaleString('en-IN') },
      ]
    }
  },

  salary: {
    slug: 'salary', name: 'Salary Calculator', emoji: '💼', category: 'Finance',
    description: 'Calculate your take-home salary after all deductions',
    inputs: [
      { id: 'ctc', label: 'Annual CTC', placeholder: 'e.g. 1200000', prefix: '₹' },
      { id: 'pf', label: 'PF Contribution (%)', placeholder: 'e.g. 12', prefix: '%' },
      { id: 'tax', label: 'Annual Tax (approx)', placeholder: 'e.g. 50000', prefix: '₹' },
    ],
    calculate(inputs) {
      const ctc = parseFloat(inputs.ctc), pf = parseFloat(inputs.pf) || 12, tax = parseFloat(inputs.tax) || 0
      if (!ctc) return null
      const pfAmount = (ctc * 0.4 * pf) / 100 * 12, inHand = ctc - pfAmount - tax
      return [
        { label: 'Monthly Take-Home', value: '₹' + Math.round(inHand / 12).toLocaleString('en-IN') },
        { label: 'Annual Take-Home', value: '₹' + Math.round(inHand).toLocaleString('en-IN') },
        { label: 'Annual PF', value: '₹' + Math.round(pfAmount).toLocaleString('en-IN') },
      ]
    }
  },

  rd: {
    slug: 'rd', name: 'RD Calculator', emoji: '🏧', category: 'Finance',
    description: 'Calculate maturity amount for Recurring Deposit',
    inputs: [
      { id: 'monthly', label: 'Monthly Deposit', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 6.5', prefix: '%' },
      { id: 'years', label: 'Tenure (Years)', placeholder: 'e.g. 2', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.monthly), r = parseFloat(inputs.rate) / 4 / 100, n = parseFloat(inputs.years) * 4
      if (!P || !r || !n) return null
      const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      const invested = P * parseFloat(inputs.years) * 12
      return [
        { label: 'Maturity Amount', value: '₹' + Math.round(maturity).toLocaleString('en-IN') },
        { label: 'Total Invested', value: '₹' + Math.round(invested).toLocaleString('en-IN') },
        { label: 'Interest Earned', value: '₹' + Math.round(maturity - invested).toLocaleString('en-IN') },
      ]
    }
  },

  inflation: {
    slug: 'inflation', name: 'Inflation Calculator', emoji: '📊', category: 'Finance',
    description: 'See how inflation affects the value of your money',
    inputs: [
      { id: 'amount', label: 'Current Amount', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'rate', label: 'Inflation Rate (% per year)', placeholder: 'e.g. 6', prefix: '%' },
      { id: 'years', label: 'Years', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const amount = parseFloat(inputs.amount), rate = parseFloat(inputs.rate) / 100, years = parseFloat(inputs.years)
      if (!amount || !rate || !years) return null
      const futureValue = amount * Math.pow(1 + rate, years)
      return [
        { label: 'Future Cost', value: '₹' + Math.round(futureValue).toLocaleString('en-IN') },
        { label: 'Value Lost', value: '₹' + Math.round(futureValue - amount).toLocaleString('en-IN') },
        { label: 'Purchasing Power', value: ((amount / futureValue) * 100).toFixed(1) + '%' },
      ]
    }
  },

  breakeven: {
    slug: 'breakeven', name: 'Break Even Calculator', emoji: '⚖️', category: 'Finance',
    description: 'Find out when your business will break even',
    inputs: [
      { id: 'fixed', label: 'Fixed Costs (Monthly)', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'price', label: 'Selling Price Per Unit', placeholder: 'e.g. 500', prefix: '₹' },
      { id: 'variable', label: 'Variable Cost Per Unit', placeholder: 'e.g. 200', prefix: '₹' },
    ],
    calculate(inputs) {
      const fixed = parseFloat(inputs.fixed), price = parseFloat(inputs.price), variable = parseFloat(inputs.variable)
      if (!fixed || !price || !variable) return null
      const contribution = price - variable
      if (contribution <= 0) return null
      const units = Math.ceil(fixed / contribution)
      return [
        { label: 'Break-Even Units', value: units + ' units/month' },
        { label: 'Break-Even Revenue', value: '₹' + Math.round(units * price).toLocaleString('en-IN') },
        { label: 'Contribution Margin', value: '₹' + contribution + ' per unit' },
      ]
    }
  },

  currency: {
    slug: 'currency', name: 'Currency Converter', emoji: '💱', category: 'Finance',
    description: 'Convert Indian Rupees to major world currencies',
    inputs: [
      { id: 'amount', label: 'Amount in INR', placeholder: 'e.g. 10000', prefix: '₹' },
    ],
    calculate(inputs) {
      const amount = parseFloat(inputs.amount)
      if (!amount) return null
      return [
        { label: 'USD (approx)', value: '$' + (amount / 84).toFixed(2) },
        { label: 'EUR (approx)', value: '€' + (amount / 90).toFixed(2) },
        { label: 'GBP (approx)', value: '£' + (amount / 107).toFixed(2) },
      ]
    }
  },

  nps: {
    slug: 'nps', name: 'NPS Calculator', emoji: '🧓', category: 'Finance',
    description: 'Estimate your National Pension Scheme corpus',
    inputs: [
      { id: 'monthly', label: 'Monthly Contribution', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'age', label: 'Current Age', placeholder: 'e.g. 30', prefix: 'Yr' },
      { id: 'rate', label: 'Expected Return (%)', placeholder: 'e.g. 10', prefix: '%' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.monthly), age = parseFloat(inputs.age), r = parseFloat(inputs.rate) / 12 / 100
      if (!P || !age || !r) return null
      const n = (60 - age) * 12
      if (n <= 0) return null
      const corpus = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      return [
        { label: 'Total Corpus', value: '₹' + Math.round(corpus).toLocaleString('en-IN') },
        { label: 'Lump Sum (60%)', value: '₹' + Math.round(corpus * 0.6).toLocaleString('en-IN') },
        { label: 'Annuity (40%)', value: '₹' + Math.round(corpus * 0.4).toLocaleString('en-IN') },
      ]
    }
  },

  car_loan: {
    slug: 'car_loan', name: 'Car Loan Calculator', emoji: '🚗', category: 'Finance',
    description: 'Calculate monthly EMI for your car loan',
    inputs: [
      { id: 'principal', label: 'Car Loan Amount', placeholder: 'e.g. 800000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 9', prefix: '%' },
      { id: 'tenure', label: 'Loan Tenure (Years)', placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure) * 12
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1), total = emi * n
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(total - P).toLocaleString('en-IN') },
        { label: 'Total Payment', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  mutual_fund: {
    slug: 'mutual_fund', name: 'Mutual Fund Returns', emoji: '📦', category: 'Finance',
    description: 'Calculate returns on your mutual fund investment',
    inputs: [
      { id: 'amount', label: 'Investment Amount', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'rate', label: 'Expected Annual Return (%)', placeholder: 'e.g. 15', prefix: '%' },
      { id: 'years', label: 'Investment Period (Years)', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.amount), r = parseFloat(inputs.rate) / 100, t = parseFloat(inputs.years)
      if (!P || !r || !t) return null
      const final = P * Math.pow(1 + r, t)
      return [
        { label: 'Final Value', value: '₹' + Math.round(final).toLocaleString('en-IN') },
        { label: 'Profit', value: '₹' + Math.round(final - P).toLocaleString('en-IN') },
        { label: 'CAGR', value: r * 100 + '%' },
      ]
    }
  },

  // ── HEALTH ───────────────────────────────────────────

  bmi: {
    slug: 'bmi', name: 'BMI Calculator', emoji: '❤️', category: 'Health',
    description: 'Calculate your Body Mass Index and check your health',
    inputs: [
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 175', prefix: 'cm' },
    ],
    calculate(inputs) {
      const weight = parseFloat(inputs.weight), height = parseFloat(inputs.height) / 100
      if (!weight || !height) return null
      const bmi = weight / (height * height)
      let category = bmi < 18.5 ? '😟 Underweight' : bmi < 25 ? '✅ Normal' : bmi < 30 ? '⚠️ Overweight' : '🔴 Obese'
      return [
        { label: 'Your BMI', value: bmi.toFixed(1) },
        { label: 'Category', value: category },
        { label: 'Ideal Weight', value: Math.round(18.5 * height * height) + '-' + Math.round(24.9 * height * height) + ' kg' },
      ]
    }
  },

  bmr: {
    slug: 'bmr', name: 'BMR Calculator', emoji: '🔥', category: 'Health',
    description: 'Calculate your Basal Metabolic Rate',
    inputs: [
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 175', prefix: 'cm' },
      { id: 'age', label: 'Age (years)', placeholder: 'e.g. 25', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const w = parseFloat(inputs.weight), h = parseFloat(inputs.height), a = parseFloat(inputs.age)
      if (!w || !h || !a) return null
      const bmr = 10 * w + 6.25 * h - 5 * a + 5
      return [
        { label: 'BMR (calories/day)', value: Math.round(bmr) + ' kcal' },
        { label: 'Sedentary (x1.2)', value: Math.round(bmr * 1.2) + ' kcal' },
        { label: 'Active (x1.55)', value: Math.round(bmr * 1.55) + ' kcal' },
      ]
    }
  },

  calorie: {
    slug: 'calorie', name: 'Calorie Calculator', emoji: '🥗', category: 'Health',
    description: 'Find your daily calorie intake for weight goals',
    inputs: [
      { id: 'weight', label: 'Current Weight (kg)', placeholder: 'e.g. 75', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 170', prefix: 'cm' },
      { id: 'age', label: 'Age (years)', placeholder: 'e.g. 28', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const w = parseFloat(inputs.weight), h = parseFloat(inputs.height), a = parseFloat(inputs.age)
      if (!w || !h || !a) return null
      const bmr = 10 * w + 6.25 * h - 5 * a + 5
      return [
        { label: 'Lose Weight', value: Math.round(bmr * 1.2 - 500) + ' kcal/day' },
        { label: 'Maintain Weight', value: Math.round(bmr * 1.55) + ' kcal/day' },
        { label: 'Gain Weight', value: Math.round(bmr * 1.55 + 500) + ' kcal/day' },
      ]
    }
  },

  ideal_weight: {
    slug: 'ideal_weight', name: 'Ideal Weight Calculator', emoji: '⚖️', category: 'Health',
    description: 'Find your ideal body weight based on height',
    inputs: [{ id: 'height', label: 'Height (cm)', placeholder: 'e.g. 170', prefix: 'cm' }],
    calculate(inputs) {
      const h = parseFloat(inputs.height) / 100
      if (!h) return null
      return [
        { label: 'Ideal Weight', value: Math.round(22 * h * h) + ' kg' },
        { label: 'Healthy Range', value: Math.round(18.5 * h * h) + ' - ' + Math.round(24.9 * h * h) + ' kg' },
        { label: 'BMI Target', value: '18.5 - 24.9' },
      ]
    }
  },

  water_intake: {
    slug: 'water_intake', name: 'Water Intake Calculator', emoji: '💧', category: 'Health',
    description: 'Know how much water you should drink daily',
    inputs: [
      { id: 'weight', label: 'Body Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'activity', label: 'Exercise (hours/day)', placeholder: 'e.g. 1', prefix: 'hr' },
    ],
    calculate(inputs) {
      const weight = parseFloat(inputs.weight), activity = parseFloat(inputs.activity) || 0
      if (!weight) return null
      const total = weight * 35 + activity * 500
      return [
        { label: 'Daily Water Intake', value: Math.round(total) + ' ml' },
        { label: 'In Litres', value: (total / 1000).toFixed(1) + ' L' },
        { label: 'Glasses (250ml)', value: Math.round(total / 250) + ' glasses' },
      ]
    }
  },

  body_fat: {
    slug: 'body_fat', name: 'Body Fat Calculator', emoji: '🏋️', category: 'Health',
    description: 'Estimate your body fat percentage',
    inputs: [
      { id: 'bmi', label: 'Your BMI', placeholder: 'e.g. 22', prefix: '✦' },
      { id: 'age', label: 'Age (years)', placeholder: 'e.g. 30', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const bmi = parseFloat(inputs.bmi), age = parseFloat(inputs.age)
      if (!bmi || !age) return null
      const bodyFat = (1.2 * bmi) + (0.23 * age) - 16.2
      let cat = bodyFat < 8 ? 'Essential Fat' : bodyFat < 20 ? '✅ Athletic' : bodyFat < 25 ? '✅ Fitness' : bodyFat < 30 ? '⚠️ Average' : '🔴 Obese'
      return [
        { label: 'Body Fat %', value: bodyFat.toFixed(1) + '%' },
        { label: 'Category', value: cat },
        { label: 'Lean Mass %', value: (100 - bodyFat).toFixed(1) + '%' },
      ]
    }
  },

  pregnancy: {
    slug: 'pregnancy', name: 'Pregnancy Due Date', emoji: '🤰', category: 'Health',
    description: 'Calculate your estimated due date',
    inputs: [
      { id: 'day', label: 'Last Period Day', placeholder: 'e.g. 1', prefix: 'DD' },
      { id: 'month', label: 'Last Period Month', placeholder: 'e.g. 1', prefix: 'MM' },
      { id: 'year', label: 'Last Period Year', placeholder: 'e.g. 2025', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const lmp = new Date(year, month - 1, day)
      const due = new Date(lmp); due.setDate(due.getDate() + 280)
      const today = new Date()
      const weeks = Math.floor((today - lmp) / (7 * 24 * 60 * 60 * 1000))
      const opts = { day: 'numeric', month: 'long', year: 'numeric' }
      return [
        { label: 'Due Date', value: due.toLocaleDateString('en-IN', opts) },
        { label: 'Weeks Pregnant', value: Math.max(0, weeks) + ' weeks' },
        { label: 'Trimester', value: weeks <= 12 ? '1st Trimester' : weeks <= 27 ? '2nd Trimester' : '3rd Trimester' },
      ]
    }
  },

  sleep: {
    slug: 'sleep', name: 'Sleep Calculator', emoji: '😴', category: 'Health',
    description: 'Find the best time to wake up based on sleep cycles',
    inputs: [
      { id: 'hour', label: 'Bedtime Hour (24hr)', placeholder: 'e.g. 23', prefix: 'Hr' },
      { id: 'min', label: 'Bedtime Minutes', placeholder: 'e.g. 30', prefix: 'Min' },
    ],
    calculate(inputs) {
      const hour = parseInt(inputs.hour) || 23, min = parseInt(inputs.min) || 0
      const bedtime = hour * 60 + min + 15
      const fmt = (m) => { const h = Math.floor((m % 1440) / 60), mm = m % 60; return (h % 12 || 12) + ':' + String(mm).padStart(2, '0') + (h < 12 ? ' AM' : ' PM') }
      return [
        { label: 'Wake at (4.5hr)', value: fmt(bedtime + 270) },
        { label: 'Wake at (6hr)', value: fmt(bedtime + 360) },
        { label: 'Wake at (7.5hr)', value: fmt(bedtime + 450) },
      ]
    }
  },

  heart_rate: {
    slug: 'heart_rate', name: 'Target Heart Rate', emoji: '💓', category: 'Health',
    description: 'Calculate your target heart rate zones for exercise',
    inputs: [{ id: 'age', label: 'Your Age', placeholder: 'e.g. 30', prefix: 'Yr' }],
    calculate(inputs) {
      const age = parseFloat(inputs.age)
      if (!age) return null
      const maxHR = 220 - age
      return [
        { label: 'Max Heart Rate', value: maxHR + ' bpm' },
        { label: 'Fat Burn Zone (60%)', value: Math.round(maxHR * 0.6) + ' - ' + Math.round(maxHR * 0.7) + ' bpm' },
        { label: 'Cardio Zone (80%)', value: Math.round(maxHR * 0.8) + ' - ' + Math.round(maxHR * 0.9) + ' bpm' },
      ]
    }
  },

  steps_calories: {
    slug: 'steps_calories', name: 'Steps to Calories', emoji: '👟', category: 'Health',
    description: 'Convert your daily steps into calories burned',
    inputs: [
      { id: 'steps', label: 'Steps Walked', placeholder: 'e.g. 8000', prefix: '👟' },
      { id: 'weight', label: 'Your Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
    ],
    calculate(inputs) {
      const steps = parseFloat(inputs.steps), weight = parseFloat(inputs.weight)
      if (!steps || !weight) return null
      const calories = steps * 0.04 * (weight / 70)
      return [
        { label: 'Calories Burned', value: Math.round(calories) + ' kcal' },
        { label: 'Distance', value: ((steps * 0.762) / 1000).toFixed(2) + ' km' },
        { label: 'Active Minutes', value: Math.round(steps / 100) + ' min' },
      ]
    }
  },

  ovulation: {
    slug: 'ovulation', name: 'Ovulation Calculator', emoji: '🌸', category: 'Health',
    description: 'Find your fertile window and ovulation date',
    inputs: [
      { id: 'day', label: 'First Day of Last Period', placeholder: 'e.g. 1', prefix: 'DD' },
      { id: 'month', label: 'Month', placeholder: 'e.g. 3', prefix: 'MM' },
      { id: 'cycle', label: 'Cycle Length (days)', placeholder: 'e.g. 28', prefix: 'days' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), cycle = parseInt(inputs.cycle) || 28
      if (!day || !month) return null
      const lmp = new Date(new Date().getFullYear(), month - 1, day)
      const ovulation = new Date(lmp); ovulation.setDate(ovulation.getDate() + cycle - 14)
      const fertileStart = new Date(ovulation); fertileStart.setDate(fertileStart.getDate() - 5)
      const opts = { day: 'numeric', month: 'short' }
      return [
        { label: 'Ovulation Date', value: ovulation.toLocaleDateString('en-IN', opts) },
        { label: 'Fertile Window', value: fertileStart.toLocaleDateString('en-IN', opts) + ' - ' + ovulation.toLocaleDateString('en-IN', opts) },
        { label: 'Next Period', value: new Date(lmp.setDate(lmp.getDate() + cycle)).toLocaleDateString('en-IN', opts) },
      ]
    }
  },

  // ── EDUCATION ────────────────────────────────────────

  cgpa: {
    slug: 'cgpa', name: 'CGPA Calculator', emoji: '🎓', category: 'Education',
    description: 'Convert your CGPA to percentage and check your grade',
    inputs: [
      { id: 'cgpa', label: 'Your CGPA', placeholder: 'e.g. 8.5', prefix: '✦' },
      { id: 'scale', label: 'Grading Scale (out of)', placeholder: 'e.g. 10', prefix: '/' },
    ],
    calculate(inputs) {
      const cgpa = parseFloat(inputs.cgpa), scale = parseFloat(inputs.scale)
      if (!cgpa || !scale || cgpa > scale) return null
      const percentage = (cgpa / scale) * 100
      let grade = percentage >= 90 ? '🏆 Outstanding' : percentage >= 75 ? '⭐ Distinction' : percentage >= 60 ? '✅ First Class' : percentage >= 50 ? '👍 Second Class' : '⚠️ Pass'
      return [
        { label: 'Percentage', value: percentage.toFixed(2) + '%' },
        { label: 'Grade', value: grade },
        { label: 'Out of 100', value: percentage.toFixed(1) + ' / 100' },
      ]
    }
  },

  percentage: {
    slug: 'percentage', name: 'Percentage Calculator', emoji: '📝', category: 'Education',
    description: 'Calculate percentage of marks scored',
    inputs: [
      { id: 'obtained', label: 'Marks Obtained', placeholder: 'e.g. 450', prefix: '✦' },
      { id: 'total', label: 'Total Marks', placeholder: 'e.g. 600', prefix: '/' },
    ],
    calculate(inputs) {
      const obtained = parseFloat(inputs.obtained), total = parseFloat(inputs.total)
      if (!obtained || !total) return null
      const pct = (obtained / total) * 100
      let grade = pct >= 90 ? 'A+ (Outstanding)' : pct >= 80 ? 'A (Excellent)' : pct >= 70 ? 'B (Very Good)' : pct >= 60 ? 'C (Good)' : pct >= 50 ? 'D (Average)' : 'F (Fail)'
      return [
        { label: 'Percentage', value: pct.toFixed(2) + '%' },
        { label: 'Grade', value: grade },
        { label: 'Marks Left', value: (total - obtained) + ' marks' },
      ]
    }
  },

  attendance: {
    slug: 'attendance', name: 'Attendance Calculator', emoji: '📅', category: 'Education',
    description: 'Check if your attendance meets the required percentage',
    inputs: [
      { id: 'attended', label: 'Classes Attended', placeholder: 'e.g. 60', prefix: '✦' },
      { id: 'total', label: 'Total Classes Held', placeholder: 'e.g. 80', prefix: '/' },
      { id: 'required', label: 'Required Attendance (%)', placeholder: 'e.g. 75', prefix: '%' },
    ],
    calculate(inputs) {
      const attended = parseFloat(inputs.attended), total = parseFloat(inputs.total), required = parseFloat(inputs.required) || 75
      if (!attended || !total) return null
      const current = (attended / total) * 100
      const classesNeeded = Math.max(0, Math.ceil((required * total - 100 * attended) / (100 - required)))
      const canSkip = current >= required ? Math.floor((attended - (required / 100) * total) / (required / 100)) : 0
      return [
        { label: 'Current Attendance', value: current.toFixed(1) + '%' },
        { label: canSkip > 0 ? 'Can Skip' : 'Need to Attend', value: canSkip > 0 ? canSkip + ' classes' : classesNeeded + ' more classes' },
        { label: 'Status', value: current >= required ? '✅ Safe' : '⚠️ Short' },
      ]
    }
  },

  gpa: {
    slug: 'gpa', name: 'GPA Calculator', emoji: '🏫', category: 'Education',
    description: 'Calculate your GPA from subject grades',
    inputs: [
      { id: 'grade1', label: 'Subject 1 Grade (out of 10)', placeholder: 'e.g. 9', prefix: '✦' },
      { id: 'grade2', label: 'Subject 2 Grade (out of 10)', placeholder: 'e.g. 8', prefix: '✦' },
      { id: 'grade3', label: 'Subject 3 Grade (out of 10)', placeholder: 'e.g. 7', prefix: '✦' },
    ],
    calculate(inputs) {
      const grades = [parseFloat(inputs.grade1), parseFloat(inputs.grade2), parseFloat(inputs.grade3)].filter(g => g > 0)
      if (!grades.length) return null
      const gpa = grades.reduce((a, b) => a + b, 0) / grades.length
      return [
        { label: 'Your GPA', value: gpa.toFixed(2) + ' / 10' },
        { label: 'Equivalent %', value: ((gpa / 10) * 100).toFixed(1) + '%' },
        { label: 'Grade', value: gpa >= 9 ? '🏆 O' : gpa >= 8 ? '⭐ A+' : gpa >= 7 ? '✅ A' : gpa >= 6 ? '👍 B+' : '⚠️ B' },
      ]
    }
  },

  study_hours: {
    slug: 'study_hours', name: 'Study Hours Planner', emoji: '📚', category: 'Education',
    description: 'Plan daily study hours to cover your syllabus',
    inputs: [
      { id: 'chapters', label: 'Total Chapters/Topics', placeholder: 'e.g. 40', prefix: '📖' },
      { id: 'hours_per', label: 'Hours per Chapter', placeholder: 'e.g. 3', prefix: 'hr' },
      { id: 'days', label: 'Days Until Exam', placeholder: 'e.g. 30', prefix: 'days' },
    ],
    calculate(inputs) {
      const chapters = parseFloat(inputs.chapters), hpc = parseFloat(inputs.hours_per), days = parseFloat(inputs.days)
      if (!chapters || !hpc || !days) return null
      const total = chapters * hpc, daily = total / days
      return [
        { label: 'Total Study Hours', value: Math.round(total) + ' hours' },
        { label: 'Daily Study Hours', value: daily.toFixed(1) + ' hrs/day' },
        { label: 'Per Week', value: (daily * 7).toFixed(1) + ' hrs/week' },
      ]
    }
  },

  marks_needed: {
    slug: 'marks_needed', name: 'Marks Needed Calculator', emoji: '🎯', category: 'Education',
    description: 'Find marks needed in remaining subjects to reach your target',
    inputs: [
      { id: 'obtained', label: 'Marks Obtained So Far', placeholder: 'e.g. 320', prefix: '✦' },
      { id: 'total_so_far', label: 'Total Marks So Far', placeholder: 'e.g. 400', prefix: '/' },
      { id: 'remaining', label: 'Remaining Marks Available', placeholder: 'e.g. 200', prefix: '✦' },
      { id: 'target', label: 'Target Percentage (%)', placeholder: 'e.g. 75', prefix: '%' },
    ],
    calculate(inputs) {
      const obtained = parseFloat(inputs.obtained), totalSoFar = parseFloat(inputs.total_so_far), remaining = parseFloat(inputs.remaining), target = parseFloat(inputs.target)
      if (!obtained || !totalSoFar || !remaining || !target) return null
      const needed = (target / 100) * (totalSoFar + remaining) - obtained
      const pctNeeded = (needed / remaining) * 100
      return [
        { label: 'Marks Needed', value: Math.ceil(needed) + ' / ' + remaining },
        { label: '% Needed in Remaining', value: pctNeeded.toFixed(1) + '%' },
        { label: 'Status', value: pctNeeded <= 100 ? '✅ Achievable' : '⚠️ Very Tough' },
      ]
    }
  },

  // ── GENERAL ──────────────────────────────────────────

  age: {
    slug: 'age', name: 'Age Calculator', emoji: '🎂', category: 'General',
    description: 'Calculate your exact age in years, months and days',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const birth = new Date(year, month - 1, day), today = new Date()
      let years = today.getFullYear() - birth.getFullYear()
      let months = today.getMonth() - birth.getMonth()
      let days = today.getDate() - birth.getDate()
      if (days < 0) { months--; days += 30 }
      if (months < 0) { years--; months += 12 }
      const totalDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))
      return [
        { label: 'Age', value: years + ' years ' + months + ' months' },
        { label: 'Total Days Lived', value: totalDays.toLocaleString('en-IN') + ' days' },
        { label: 'Next Birthday', value: (12 - months) + ' months away' },
      ]
    }
  },

  tip: {
    slug: 'tip', name: 'Tip Calculator', emoji: '🍽️', category: 'General',
    description: 'Calculate tip and split bill among friends',
    inputs: [
      { id: 'bill', label: 'Total Bill Amount', placeholder: 'e.g. 2500', prefix: '₹' },
      { id: 'tip', label: 'Tip Percentage (%)', placeholder: 'e.g. 10', prefix: '%' },
      { id: 'people', label: 'Number of People', placeholder: 'e.g. 4', prefix: '👤' },
    ],
    calculate(inputs) {
      const bill = parseFloat(inputs.bill), tipPct = parseFloat(inputs.tip) || 10, people = parseFloat(inputs.people) || 1
      if (!bill) return null
      const tipAmount = (bill * tipPct) / 100, total = bill + tipAmount
      return [
        { label: 'Tip Amount', value: '₹' + Math.round(tipAmount).toLocaleString('en-IN') },
        { label: 'Total Bill', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Per Person', value: '₹' + Math.round(total / people).toLocaleString('en-IN') },
      ]
    }
  },

  discount: {
    slug: 'discount', name: 'Discount Calculator', emoji: '🏷️', category: 'General',
    description: 'Calculate discounted price and amount saved',
    inputs: [
      { id: 'original', label: 'Original Price', placeholder: 'e.g. 2000', prefix: '₹' },
      { id: 'discount', label: 'Discount (%)', placeholder: 'e.g. 20', prefix: '%' },
    ],
    calculate(inputs) {
      const original = parseFloat(inputs.original), discount = parseFloat(inputs.discount)
      if (!original || !discount) return null
      const saved = (original * discount) / 100
      return [
        { label: 'Final Price', value: '₹' + Math.round(original - saved).toLocaleString('en-IN') },
        { label: 'You Save', value: '₹' + Math.round(saved).toLocaleString('en-IN') },
        { label: 'Discount', value: discount + '% off' },
      ]
    }
  },

  speed: {
    slug: 'speed', name: 'Speed Calculator', emoji: '🏎️', category: 'General',
    description: 'Calculate speed, distance or time for any journey',
    inputs: [
      { id: 'distance', label: 'Distance (km)', placeholder: 'e.g. 100', prefix: 'km' },
      { id: 'time', label: 'Time (hours)', placeholder: 'e.g. 2', prefix: 'hr' },
    ],
    calculate(inputs) {
      const distance = parseFloat(inputs.distance), time = parseFloat(inputs.time)
      if (!distance || !time) return null
      return [
        { label: 'Speed', value: (distance / time).toFixed(1) + ' km/h' },
        { label: 'Total Time', value: Math.floor(time) + 'h ' + Math.round((time % 1) * 60) + 'm' },
        { label: 'Distance', value: distance + ' km' },
      ]
    }
  },

  unit_converter: {
    slug: 'unit_converter', name: 'Unit Converter', emoji: '📐', category: 'General',
    description: 'Convert between km/miles, kg/lbs, celsius/fahrenheit',
    inputs: [
      { id: 'km', label: 'Kilometres', placeholder: 'e.g. 10', prefix: 'km' },
      { id: 'kg', label: 'Kilograms', placeholder: 'e.g. 70', prefix: 'kg' },
    ],
    calculate(inputs) {
      const km = parseFloat(inputs.km) || 0, kg = parseFloat(inputs.kg) || 0
      if (!km && !kg) return null
      return [
        { label: km + ' km =', value: (km * 0.621371).toFixed(2) + ' miles' },
        { label: kg + ' kg =', value: (kg * 2.20462).toFixed(2) + ' lbs' },
        { label: '37°C =', value: '98.6°F' },
      ]
    }
  },

  days_between: {
    slug: 'days_between', name: 'Days Between Dates', emoji: '📆', category: 'General',
    description: 'Calculate number of days between two dates',
    inputs: [
      { id: 'day1', label: 'Start Day', placeholder: 'e.g. 1', prefix: 'DD' },
      { id: 'month1', label: 'Start Month', placeholder: 'e.g. 1', prefix: 'MM' },
      { id: 'day2', label: 'End Day', placeholder: 'e.g. 31', prefix: 'DD' },
      { id: 'month2', label: 'End Month', placeholder: 'e.g. 12', prefix: 'MM' },
    ],
    calculate(inputs) {
      const year = new Date().getFullYear()
      const d1 = new Date(year, parseInt(inputs.month1) - 1, parseInt(inputs.day1))
      const d2 = new Date(year, parseInt(inputs.month2) - 1, parseInt(inputs.day2))
      if (isNaN(d1) || isNaN(d2)) return null
      const days = Math.round(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24))
      return [
        { label: 'Days Between', value: days + ' days' },
        { label: 'Weeks', value: Math.floor(days / 7) + ' weeks ' + (days % 7) + ' days' },
        { label: 'Months (approx)', value: (days / 30).toFixed(1) + ' months' },
      ]
    }
  },

  fuel_cost: {
    slug: 'fuel_cost', name: 'Fuel Cost Calculator', emoji: '⛽', category: 'General',
    description: 'Calculate fuel cost for your trip',
    inputs: [
      { id: 'distance', label: 'Trip Distance (km)', placeholder: 'e.g. 200', prefix: 'km' },
      { id: 'mileage', label: 'Vehicle Mileage (km/L)', placeholder: 'e.g. 15', prefix: 'km/L' },
      { id: 'price', label: 'Fuel Price (per litre)', placeholder: 'e.g. 100', prefix: '₹' },
    ],
    calculate(inputs) {
      const distance = parseFloat(inputs.distance), mileage = parseFloat(inputs.mileage), price = parseFloat(inputs.price)
      if (!distance || !mileage || !price) return null
      const litres = distance / mileage, cost = litres * price
      return [
        { label: 'Fuel Cost', value: '₹' + Math.round(cost).toLocaleString('en-IN') },
        { label: 'Fuel Needed', value: litres.toFixed(2) + ' litres' },
        { label: 'Cost per km', value: '₹' + (cost / distance).toFixed(2) },
      ]
    }
  },

  temperature: {
    slug: 'temperature', name: 'Temperature Converter', emoji: '🌡️', category: 'General',
    description: 'Convert between Celsius, Fahrenheit and Kelvin',
    inputs: [{ id: 'celsius', label: 'Temperature in Celsius', placeholder: 'e.g. 37', prefix: '°C' }],
    calculate(inputs) {
      const c = parseFloat(inputs.celsius)
      if (isNaN(c)) return null
      return [
        { label: 'Fahrenheit', value: (c * 9 / 5 + 32).toFixed(2) + ' °F' },
        { label: 'Kelvin', value: (c + 273.15).toFixed(2) + ' K' },
        { label: 'Celsius', value: c + ' °C' },
      ]
    }
  },

  data_storage: {
    slug: 'data_storage', name: 'Data Storage Converter', emoji: '💾', category: 'General',
    description: 'Convert between KB, MB, GB and TB',
    inputs: [{ id: 'gb', label: 'Size in GB', placeholder: 'e.g. 5', prefix: 'GB' }],
    calculate(inputs) {
      const gb = parseFloat(inputs.gb)
      if (!gb) return null
      return [
        { label: 'Megabytes', value: (gb * 1024).toFixed(0) + ' MB' },
        { label: 'Kilobytes', value: (gb * 1024 * 1024).toFixed(0) + ' KB' },
        { label: 'Terabytes', value: (gb / 1024).toFixed(4) + ' TB' },
      ]
    }
  },

  loan_eligibility: {
    slug: 'loan_eligibility', name: 'Loan Eligibility', emoji: '🏦', category: 'General',
    description: 'Check how much loan you are eligible for',
    inputs: [
      { id: 'salary', label: 'Monthly Net Salary', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 9', prefix: '%' },
      { id: 'tenure', label: 'Loan Tenure (Years)', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const salary = parseFloat(inputs.salary), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure) * 12
      if (!salary || !r || !n) return null
      const maxEMI = salary * 0.5
      const eligible = maxEMI * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n))
      return [
        { label: 'Loan Eligible', value: '₹' + Math.round(eligible).toLocaleString('en-IN') },
        { label: 'Max EMI (50%)', value: '₹' + Math.round(maxEMI).toLocaleString('en-IN') },
        { label: 'Based on Salary', value: '₹' + Math.round(salary).toLocaleString('en-IN') + '/mo' },
      ]
    }
  },

  // ── LEGAL ────────────────────────────────────────────

  tds: {
    slug: 'tds', name: 'TDS Calculator', emoji: '📋', category: 'Legal',
    description: 'Calculate TDS deduction on salary or payments',
    inputs: [
      { id: 'income', label: 'Annual Income', placeholder: 'e.g. 800000', prefix: '₹' },
      { id: 'tds_rate', label: 'TDS Rate (%)', placeholder: 'e.g. 10', prefix: '%' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), rate = parseFloat(inputs.tds_rate)
      if (!income || !rate) return null
      const tds = (income * rate) / 100
      return [
        { label: 'Annual TDS', value: '₹' + Math.round(tds).toLocaleString('en-IN') },
        { label: 'Monthly TDS', value: '₹' + Math.round(tds / 12).toLocaleString('en-IN') },
        { label: 'Net Income', value: '₹' + Math.round(income - tds).toLocaleString('en-IN') },
      ]
    }
  },

  notice_period: {
    slug: 'notice_period', name: 'Notice Period Calculator', emoji: '📆', category: 'Legal',
    description: 'Calculate your last working day based on notice period',
    inputs: [
      { id: 'day', label: 'Resignation Day', placeholder: 'e.g. 1', prefix: 'DD' },
      { id: 'month', label: 'Resignation Month', placeholder: 'e.g. 3', prefix: 'MM' },
      { id: 'notice_days', label: 'Notice Period (days)', placeholder: 'e.g. 90', prefix: 'days' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), noticeDays = parseInt(inputs.notice_days)
      if (!day || !month || !noticeDays) return null
      const resign = new Date(new Date().getFullYear(), month - 1, day)
      const lastDay = new Date(resign); lastDay.setDate(lastDay.getDate() + noticeDays)
      const opts = { day: 'numeric', month: 'long', year: 'numeric' }
      return [
        { label: 'Last Working Day', value: lastDay.toLocaleDateString('en-IN', opts) },
        { label: 'Notice Period', value: noticeDays + ' days' },
        { label: 'Weeks', value: Math.round(noticeDays / 7) + ' weeks' },
      ]
    }
  },

  stamp_duty: {
    slug: 'stamp_duty', name: 'Stamp Duty Calculator', emoji: '🏡', category: 'Legal',
    description: 'Estimate stamp duty on property purchase in India',
    inputs: [
      { id: 'value', label: 'Property Value', placeholder: 'e.g. 5000000', prefix: '₹' },
      { id: 'rate', label: 'Stamp Duty Rate (%)', placeholder: 'e.g. 5', prefix: '%' },
    ],
    calculate(inputs) {
      const value = parseFloat(inputs.value), rate = parseFloat(inputs.rate)
      if (!value || !rate) return null
      const duty = (value * rate) / 100, registration = value * 0.01
      return [
        { label: 'Stamp Duty', value: '₹' + Math.round(duty).toLocaleString('en-IN') },
        { label: 'Registration Fee (1%)', value: '₹' + Math.round(registration).toLocaleString('en-IN') },
        { label: 'Total Cost', value: '₹' + Math.round(duty + registration).toLocaleString('en-IN') },
      ]
    }
  },

  freelance_tax: {
    slug: 'freelance_tax', name: 'Freelancer Tax Calculator', emoji: '💻', category: 'Legal',
    description: 'Estimate taxes for freelancers in India',
    inputs: [
      { id: 'income', label: 'Annual Freelance Income', placeholder: 'e.g. 600000', prefix: '₹' },
      { id: 'expenses', label: 'Business Expenses', placeholder: 'e.g. 100000', prefix: '₹' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), expenses = parseFloat(inputs.expenses) || 0
      if (!income) return null
      const taxable = Math.max(0, income - expenses)
      let tax = 0
      if (taxable <= 300000) tax = 0
      else if (taxable <= 600000) tax = (taxable - 300000) * 0.05
      else if (taxable <= 900000) tax = 15000 + (taxable - 600000) * 0.10
      else tax = 45000 + (taxable - 900000) * 0.15
      const total = tax * 1.04
      return [
        { label: 'Taxable Income', value: '₹' + Math.round(taxable).toLocaleString('en-IN') },
        { label: 'Estimated Tax', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Net Income', value: '₹' + Math.round(income - total).toLocaleString('en-IN') },
      ]
    }
  },

  leave_encashment: {
    slug: 'leave_encashment', name: 'Leave Encashment', emoji: '🌴', category: 'Legal',
    description: 'Calculate your leave encashment amount',
    inputs: [
      { id: 'salary', label: 'Basic + DA (Monthly)', placeholder: 'e.g. 40000', prefix: '₹' },
      { id: 'leaves', label: 'Pending Leaves', placeholder: 'e.g. 30', prefix: 'days' },
    ],
    calculate(inputs) {
      const salary = parseFloat(inputs.salary), leaves = parseFloat(inputs.leaves)
      if (!salary || !leaves) return null
      const daily = salary / 26, amount = daily * leaves
      return [
        { label: 'Leave Encashment', value: '₹' + Math.round(amount).toLocaleString('en-IN') },
        { label: 'Daily Wage', value: '₹' + Math.round(daily).toLocaleString('en-IN') },
        { label: 'Pending Leaves', value: leaves + ' days' },
      ]
    }
  },

  // ── ASTROLOGY ────────────────────────────────────────

  numerology: {
    slug: 'numerology', name: 'Numerology Calculator', emoji: '🔢', category: 'Astrology',
    description: 'Find your life path number and its meaning',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const sum = (n) => { let s = String(n).split('').reduce((a, b) => a + parseInt(b), 0); return s > 9 && s !== 11 && s !== 22 ? sum(s) : s }
      const lifePathNum = sum(day + month + String(year).split('').reduce((a, b) => a + parseInt(b), 0))
      const meanings = { 1: 'Leader & Pioneer 🦁', 2: 'Diplomat & Peacemaker 🕊️', 3: 'Creative & Expressive 🎨', 4: 'Practical & Disciplined 🏗️', 5: 'Adventurer & Freedom Seeker ✈️', 6: 'Nurturer & Caregiver ❤️', 7: 'Seeker & Thinker 🔭', 8: 'Achiever & Powerhouse 💎', 9: 'Humanitarian & Wise 🌍', 11: 'Intuitive Master 🌟', 22: 'Master Builder 🏛️' }
      const colours = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Pink', 'Gold']
      return [
        { label: 'Life Path Number', value: String(lifePathNum) },
        { label: 'Personality', value: meanings[lifePathNum] || 'Unique Path ✨' },
        { label: 'Lucky Colour', value: colours[lifePathNum % 9] },
      ]
    }
  },

  sun_sign: {
    slug: 'sun_sign', name: 'Sun Sign Calculator', emoji: '☀️', category: 'Astrology',
    description: 'Find your zodiac sun sign based on your birthday',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month)
      if (!day || !month) return null
      const signs = ['Capricorn ♑', 'Aquarius ♒', 'Pisces ♓', 'Aries ♈', 'Taurus ♉', 'Gemini ♊', 'Cancer ♋', 'Leo ♌', 'Virgo ♍', 'Libra ♎', 'Scorpio ♏', 'Sagittarius ♐', 'Capricorn ♑']
      const dates = ['Dec 22 - Jan 19', 'Jan 20 - Feb 18', 'Feb 19 - Mar 20', 'Mar 21 - Apr 19', 'Apr 20 - May 20', 'May 21 - Jun 20', 'Jun 21 - Jul 22', 'Jul 23 - Aug 22', 'Aug 23 - Sep 22', 'Sep 23 - Oct 22', 'Oct 23 - Nov 21', 'Nov 22 - Dec 21', 'Dec 22 - Jan 19']
      const limits = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21]
      const idx = day <= limits[month - 1] ? month - 1 : month
      return [
        { label: 'Your Sun Sign', value: signs[idx] },
        { label: 'Dates', value: dates[idx] },
        { label: 'Element', value: [0,3,7,11].includes(idx) ? '🔥 Fire' : [1,5,9].includes(idx) ? '🌍 Earth' : [2,6,10].includes(idx) ? '💨 Air' : '💧 Water' },
      ]
    }
  },

  lucky_number: {
    slug: 'lucky_number', name: 'Lucky Number Calculator', emoji: '🍀', category: 'Astrology',
    description: 'Find your lucky numbers based on your name',
    inputs: [{ id: 'name', label: 'Your Full Name', placeholder: 'e.g. Rahul Sharma', prefix: '✦' }],
    calculate(inputs) {
      const name = (inputs.name || '').toLowerCase().replace(/\s/g, '')
      if (!name) return null
      const vals = { a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:1,k:2,l:3,m:4,n:5,o:6,p:7,q:8,r:9,s:1,t:2,u:3,v:4,w:5,x:6,y:7,z:8 }
      let sum = name.split('').reduce((a, c) => a + (vals[c] || 0), 0)
      while (sum > 9) sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0)
      return [
        { label: 'Lucky Number', value: String(sum) },
        { label: 'Secondary Lucky', value: String((sum % 9) + 1) },
        { label: 'Lucky Day', value: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][sum % 7] },
      ]
    }
  },

  chinese_zodiac: {
    slug: 'chinese_zodiac', name: 'Chinese Zodiac', emoji: '🐉', category: 'Astrology',
    description: 'Find your Chinese zodiac animal',
    inputs: [{ id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' }],
    calculate(inputs) {
      const year = parseInt(inputs.year)
      if (!year) return null
      const animals = ['Monkey 🐒','Rooster 🐓','Dog 🐕','Pig 🐖','Rat 🐀','Ox 🐂','Tiger 🐅','Rabbit 🐇','Dragon 🐉','Snake 🐍','Horse 🐴','Goat 🐐']
      const elements = ['Metal','Water','Wood','Fire','Earth']
      return [
        { label: 'Chinese Zodiac', value: animals[year % 12] },
        { label: 'Element', value: elements[Math.floor((year - 4) / 2) % 5] },
        { label: 'Year', value: String(year) },
      ]
    }
  },

  compatibility: {
    slug: 'compatibility', name: 'Zodiac Compatibility', emoji: '💑', category: 'Astrology',
    description: 'Check love compatibility between two zodiac signs',
    inputs: [
      { id: 'sign1', label: 'Your Sign (1=Aries...12=Pisces)', placeholder: 'e.g. 5', prefix: '✦' },
      { id: 'sign2', label: 'Partner Sign (1=Aries...12=Pisces)', placeholder: 'e.g. 9', prefix: '✦' },
    ],
    calculate(inputs) {
      const s1 = parseInt(inputs.sign1), s2 = parseInt(inputs.sign2)
      if (!s1 || !s2 || s1 > 12 || s2 > 12) return null
      const signs = ['','Aries ♈','Taurus ♉','Gemini ♊','Cancer ♋','Leo ♌','Virgo ♍','Libra ♎','Scorpio ♏','Sagittarius ♐','Capricorn ♑','Aquarius ♒','Pisces ♓']
      const diff = Math.abs(s1 - s2)
      const score = diff === 0 ? 85 : diff === 4 || diff === 8 ? 95 : diff === 3 || diff === 9 ? 80 : diff === 2 || diff === 10 ? 60 : 50
      return [
        { label: 'Sign 1', value: signs[s1] },
        { label: 'Sign 2', value: signs[s2] },
        { label: 'Compatibility', value: score + '% ' + (score >= 85 ? '❤️ Great Match' : score >= 70 ? '💛 Good Match' : '💙 Moderate') },
      ]
    }
  },

  moon_sign: {
    slug: 'moon_sign', name: 'Moon Sign Calculator', emoji: '🌙', category: 'Astrology',
    description: 'Estimate your moon sign based on birth details',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
      const idx = Math.abs((year * 12 + month * 3 + day)) % 12
      const traits = ['Bold','Calm','Curious','Nurturing','Confident','Analytical','Balanced','Intense','Free-spirited','Disciplined','Visionary','Empathetic']
      return [
        { label: 'Moon Sign', value: signs[idx] + ' 🌙' },
        { label: 'Emotional Trait', value: traits[idx] },
        { label: 'Element', value: [0,3,7,11].includes(idx) ? '🔥 Fire' : [1,5,9].includes(idx) ? '🌍 Earth' : [2,6,10].includes(idx) ? '💨 Air' : '💧 Water' },
      ]
    }
  },

// ── PASTE THESE INSIDE THE calculators object, before the closing }
// ── Add after the moon_sign entry ──────────────────────────────────

  // ── FINANCE (25 more) ────────────────────────────────

  personal_loan: {
    slug: 'personal_loan', name: 'Personal Loan EMI', emoji: '💳', category: 'Finance',
    description: 'Calculate EMI for your personal loan instantly',
    inputs: [
      { id: 'amount', label: 'Loan Amount', placeholder: 'e.g. 200000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 14', prefix: '%' },
      { id: 'tenure', label: 'Tenure (Months)', placeholder: 'e.g. 36', prefix: 'Mo' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.amount), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure)
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const total = emi * n
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(total - P).toLocaleString('en-IN') },
        { label: 'Total Payment', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  education_loan: {
    slug: 'education_loan', name: 'Education Loan EMI', emoji: '🎓', category: 'Finance',
    description: 'Calculate EMI for your education loan',
    inputs: [
      { id: 'amount', label: 'Loan Amount', placeholder: 'e.g. 1000000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 10', prefix: '%' },
      { id: 'tenure', label: 'Tenure (Years)', placeholder: 'e.g. 7', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.amount), r = parseFloat(inputs.rate) / 12 / 100, n = parseFloat(inputs.tenure) * 12
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const total = emi * n
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(total - P).toLocaleString('en-IN') },
        { label: 'Total Payment', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  swp: {
    slug: 'swp', name: 'SWP Calculator', emoji: '💸', category: 'Finance',
    description: 'Systematic Withdrawal Plan — plan your monthly withdrawals',
    inputs: [
      { id: 'corpus', label: 'Total Corpus', placeholder: 'e.g. 5000000', prefix: '₹' },
      { id: 'withdrawal', label: 'Monthly Withdrawal', placeholder: 'e.g. 20000', prefix: '₹' },
      { id: 'rate', label: 'Expected Return (% per year)', placeholder: 'e.g. 8', prefix: '%' },
    ],
    calculate(inputs) {
      const corpus = parseFloat(inputs.corpus), withdrawal = parseFloat(inputs.withdrawal), r = parseFloat(inputs.rate) / 12 / 100
      if (!corpus || !withdrawal || !r) return null
      const months = Math.log(withdrawal / (withdrawal - corpus * r)) / Math.log(1 + r)
      const years = Math.floor(months / 12)
      return [
        { label: 'Corpus Lasts', value: years + ' years ' + Math.floor(months % 12) + ' months' },
        { label: 'Monthly Withdrawal', value: '₹' + Math.round(withdrawal).toLocaleString('en-IN') },
        { label: 'Annual Withdrawal', value: '₹' + Math.round(withdrawal * 12).toLocaleString('en-IN') },
      ]
    }
  },

  elss: {
    slug: 'elss', name: 'ELSS Tax Saving Calculator', emoji: '🧾', category: 'Finance',
    description: 'Calculate tax savings with ELSS mutual funds under 80C',
    inputs: [
      { id: 'investment', label: 'Annual ELSS Investment', placeholder: 'e.g. 150000', prefix: '₹' },
      { id: 'tax_bracket', label: 'Your Tax Bracket (%)', placeholder: 'e.g. 30', prefix: '%' },
      { id: 'years', label: 'Investment Period (Years)', placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const inv = parseFloat(inputs.investment), bracket = parseFloat(inputs.tax_bracket), years = parseFloat(inputs.years)
      if (!inv || !bracket || !years) return null
      const taxSaved = Math.min(inv, 150000) * bracket / 100
      const futureValue = inv * ((Math.pow(1 + 0.12, years) - 1) / 0.12) * 1.12
      return [
        { label: 'Tax Saved (Annual)', value: '₹' + Math.round(taxSaved).toLocaleString('en-IN') },
        { label: 'Est. Returns (12%)', value: '₹' + Math.round(futureValue).toLocaleString('en-IN') },
        { label: 'Lock-in Period', value: '3 years' },
      ]
    }
  },

  gold_return: {
    slug: 'gold_return', name: 'Gold Return Calculator', emoji: '🥇', category: 'Finance',
    description: 'Calculate returns on your gold investment',
    inputs: [
      { id: 'grams', label: 'Gold Quantity (grams)', placeholder: 'e.g. 10', prefix: 'g' },
      { id: 'buy_price', label: 'Buy Price (per gram)', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'current_price', label: 'Current Price (per gram)', placeholder: 'e.g. 6500', prefix: '₹' },
    ],
    calculate(inputs) {
      const grams = parseFloat(inputs.grams), buy = parseFloat(inputs.buy_price), current = parseFloat(inputs.current_price)
      if (!grams || !buy || !current) return null
      const invested = grams * buy, currentVal = grams * current, profit = currentVal - invested
      return [
        { label: 'Current Value', value: '₹' + Math.round(currentVal).toLocaleString('en-IN') },
        { label: 'Profit / Loss', value: '₹' + Math.round(profit).toLocaleString('en-IN') },
        { label: 'Return %', value: ((profit / invested) * 100).toFixed(2) + '%' },
      ]
    }
  },

  rental_yield: {
    slug: 'rental_yield', name: 'Rental Yield Calculator', emoji: '🏢', category: 'Finance',
    description: 'Calculate rental yield on your property investment',
    inputs: [
      { id: 'property_value', label: 'Property Value', placeholder: 'e.g. 5000000', prefix: '₹' },
      { id: 'monthly_rent', label: 'Monthly Rent', placeholder: 'e.g. 20000', prefix: '₹' },
    ],
    calculate(inputs) {
      const value = parseFloat(inputs.property_value), rent = parseFloat(inputs.monthly_rent)
      if (!value || !rent) return null
      const annual = rent * 12, yield_ = (annual / value) * 100
      return [
        { label: 'Annual Rental Income', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Rental Yield', value: yield_.toFixed(2) + '%' },
        { label: 'Payback Period', value: Math.round(100 / yield_) + ' years' },
      ]
    }
  },

  business_profit: {
    slug: 'business_profit', name: 'Business Profit Calculator', emoji: '📈', category: 'Finance',
    description: 'Calculate net profit and profit margin for your business',
    inputs: [
      { id: 'revenue', label: 'Total Revenue', placeholder: 'e.g. 500000', prefix: '₹' },
      { id: 'cogs', label: 'Cost of Goods Sold', placeholder: 'e.g. 200000', prefix: '₹' },
      { id: 'expenses', label: 'Operating Expenses', placeholder: 'e.g. 100000', prefix: '₹' },
    ],
    calculate(inputs) {
      const revenue = parseFloat(inputs.revenue), cogs = parseFloat(inputs.cogs), expenses = parseFloat(inputs.expenses)
      if (!revenue || !cogs) return null
      const gross = revenue - cogs, net = gross - (expenses || 0)
      return [
        { label: 'Gross Profit', value: '₹' + Math.round(gross).toLocaleString('en-IN') },
        { label: 'Net Profit', value: '₹' + Math.round(net).toLocaleString('en-IN') },
        { label: 'Net Margin', value: ((net / revenue) * 100).toFixed(1) + '%' },
      ]
    }
  },

  cagr: {
    slug: 'cagr', name: 'CAGR Calculator', emoji: '📊', category: 'Finance',
    description: 'Calculate Compound Annual Growth Rate of any investment',
    inputs: [
      { id: 'initial', label: 'Initial Value', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'final', label: 'Final Value', placeholder: 'e.g. 250000', prefix: '₹' },
      { id: 'years', label: 'Number of Years', placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const initial = parseFloat(inputs.initial), final = parseFloat(inputs.final), years = parseFloat(inputs.years)
      if (!initial || !final || !years) return null
      const cagr = (Math.pow(final / initial, 1 / years) - 1) * 100
      return [
        { label: 'CAGR', value: cagr.toFixed(2) + '% per year' },
        { label: 'Total Growth', value: (((final - initial) / initial) * 100).toFixed(1) + '%' },
        { label: 'Absolute Return', value: '₹' + Math.round(final - initial).toLocaleString('en-IN') },
      ]
    }
  },

  step_up_sip: {
    slug: 'step_up_sip', name: 'Step-Up SIP Calculator', emoji: '📉', category: 'Finance',
    description: 'Calculate SIP returns with annual step-up',
    inputs: [
      { id: 'monthly', label: 'Starting Monthly SIP', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'stepup', label: 'Annual Step-Up (%)', placeholder: 'e.g. 10', prefix: '%' },
      { id: 'years', label: 'Investment Period (Years)', placeholder: 'e.g. 10', prefix: 'Yr' },
      { id: 'rate', label: 'Expected Return (% per year)', placeholder: 'e.g. 12', prefix: '%' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.monthly), stepup = parseFloat(inputs.stepup) / 100, years = parseFloat(inputs.years), r = parseFloat(inputs.rate) / 12 / 100
      if (!P || !years || !r) return null
      let total = 0, invested = 0, monthly = P
      for (let y = 0; y < years; y++) {
        for (let m = 0; m < 12; m++) {
          total = (total + monthly) * (1 + r)
          invested += monthly
        }
        monthly *= (1 + stepup)
      }
      return [
        { label: 'Total Value', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Total Invested', value: '₹' + Math.round(invested).toLocaleString('en-IN') },
        { label: 'Wealth Gained', value: '₹' + Math.round(total - invested).toLocaleString('en-IN') },
      ]
    }
  },

  dividend_yield: {
    slug: 'dividend_yield', name: 'Dividend Yield Calculator', emoji: '🏦', category: 'Finance',
    description: 'Calculate dividend yield on your stock investment',
    inputs: [
      { id: 'dividend', label: 'Annual Dividend Per Share', placeholder: 'e.g. 20', prefix: '₹' },
      { id: 'price', label: 'Share Price', placeholder: 'e.g. 500', prefix: '₹' },
      { id: 'shares', label: 'Number of Shares', placeholder: 'e.g. 100', prefix: '✦' },
    ],
    calculate(inputs) {
      const dividend = parseFloat(inputs.dividend), price = parseFloat(inputs.price), shares = parseFloat(inputs.shares)
      if (!dividend || !price) return null
      const yield_ = (dividend / price) * 100, annual = dividend * (shares || 1)
      return [
        { label: 'Dividend Yield', value: yield_.toFixed(2) + '%' },
        { label: 'Annual Income', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Monthly Income', value: '₹' + Math.round(annual / 12).toLocaleString('en-IN') },
      ]
    }
  },

  payback_period: {
    slug: 'payback_period', name: 'Payback Period Calculator', emoji: '⏱️', category: 'Finance',
    description: 'Calculate how long to recover your investment',
    inputs: [
      { id: 'investment', label: 'Initial Investment', placeholder: 'e.g. 500000', prefix: '₹' },
      { id: 'annual_return', label: 'Annual Cash Return', placeholder: 'e.g. 100000', prefix: '₹' },
    ],
    calculate(inputs) {
      const investment = parseFloat(inputs.investment), annual = parseFloat(inputs.annual_return)
      if (!investment || !annual) return null
      const years = investment / annual
      return [
        { label: 'Payback Period', value: years.toFixed(1) + ' years' },
        { label: 'Monthly Return', value: '₹' + Math.round(annual / 12).toLocaleString('en-IN') },
        { label: 'Total Investment', value: '₹' + Math.round(investment).toLocaleString('en-IN') },
      ]
    }
  },

  net_worth: {
    slug: 'net_worth', name: 'Net Worth Calculator', emoji: '💎', category: 'Finance',
    description: 'Calculate your total net worth',
    inputs: [
      { id: 'assets', label: 'Total Assets (savings, property, etc.)', placeholder: 'e.g. 2000000', prefix: '₹' },
      { id: 'liabilities', label: 'Total Liabilities (loans, debts)', placeholder: 'e.g. 500000', prefix: '₹' },
    ],
    calculate(inputs) {
      const assets = parseFloat(inputs.assets), liabilities = parseFloat(inputs.liabilities) || 0
      if (!assets) return null
      const netWorth = assets - liabilities
      return [
        { label: 'Net Worth', value: '₹' + Math.round(netWorth).toLocaleString('en-IN') },
        { label: 'Total Assets', value: '₹' + Math.round(assets).toLocaleString('en-IN') },
        { label: 'Total Liabilities', value: '₹' + Math.round(liabilities).toLocaleString('en-IN') },
      ]
    }
  },

  emi_prepayment: {
    slug: 'emi_prepayment', name: 'EMI Prepayment Savings', emoji: '🏃', category: 'Finance',
    description: 'Calculate how much you save by prepaying your loan',
    inputs: [
      { id: 'outstanding', label: 'Outstanding Loan Amount', placeholder: 'e.g. 2000000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 8.5', prefix: '%' },
      { id: 'remaining', label: 'Remaining Tenure (Years)', placeholder: 'e.g. 15', prefix: 'Yr' },
      { id: 'prepay', label: 'Prepayment Amount', placeholder: 'e.g. 200000', prefix: '₹' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.outstanding), r = parseFloat(inputs.rate) / 12 / 100
      const n = parseFloat(inputs.remaining) * 12, prepay = parseFloat(inputs.prepay)
      if (!P || !r || !n || !prepay) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const newP = P - prepay
      const newN = Math.log(emi / (emi - newP * r)) / Math.log(1 + r)
      const savedMonths = n - newN
      return [
        { label: 'Months Saved', value: Math.round(savedMonths) + ' months' },
        { label: 'Interest Saved', value: '₹' + Math.round(savedMonths * emi).toLocaleString('en-IN') },
        { label: 'New Tenure', value: Math.round(newN / 12) + ' years' },
      ]
    }
  },

  escrow: {
    slug: 'escrow', name: 'Savings Goal Calculator', emoji: '🎯', category: 'Finance',
    description: 'Plan monthly savings to reach your financial goal',
    inputs: [
      { id: 'goal', label: 'Savings Goal', placeholder: 'e.g. 1000000', prefix: '₹' },
      { id: 'current', label: 'Current Savings', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'months', label: 'Target in (Months)', placeholder: 'e.g. 24', prefix: 'Mo' },
    ],
    calculate(inputs) {
      const goal = parseFloat(inputs.goal), current = parseFloat(inputs.current) || 0, months = parseFloat(inputs.months)
      if (!goal || !months) return null
      const needed = goal - current, monthly = needed / months
      return [
        { label: 'Monthly Savings Needed', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
        { label: 'Amount Remaining', value: '₹' + Math.round(needed).toLocaleString('en-IN') },
        { label: 'Target Date', value: months + ' months from now' },
      ]
    }
  },

  sukanya: {
    slug: 'sukanya', name: 'Sukanya Samriddhi Calculator', emoji: '👧', category: 'Finance',
    description: 'Calculate maturity amount for Sukanya Samriddhi Yojana',
    inputs: [
      { id: 'yearly', label: 'Yearly Deposit', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'age', label: "Girl Child's Current Age", placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const yearly = parseFloat(inputs.yearly), age = parseFloat(inputs.age)
      if (!yearly || !age) return null
      const depositYears = Math.min(15, 21 - age), r = 0.082
      let corpus = 0
      for (let i = 0; i < depositYears; i++) corpus = (corpus + yearly) * (1 + r)
      for (let i = depositYears; i < 21 - age; i++) corpus *= (1 + r)
      return [
        { label: 'Maturity Amount', value: '₹' + Math.round(corpus).toLocaleString('en-IN') },
        { label: 'Total Deposited', value: '₹' + Math.round(yearly * depositYears).toLocaleString('en-IN') },
        { label: 'Matures at Age 21', value: 'After ' + (21 - age) + ' years' },
      ]
    }
  },

  tax_refund: {
    slug: 'tax_refund', name: 'Tax Refund Estimator', emoji: '💰', category: 'Finance',
    description: 'Estimate your income tax refund amount',
    inputs: [
      { id: 'tds_paid', label: 'TDS Already Paid', placeholder: 'e.g. 80000', prefix: '₹' },
      { id: 'actual_tax', label: 'Actual Tax Liability', placeholder: 'e.g. 55000', prefix: '₹' },
    ],
    calculate(inputs) {
      const tds = parseFloat(inputs.tds_paid), actual = parseFloat(inputs.actual_tax)
      if (!tds || !actual) return null
      const refund = tds - actual
      return [
        { label: refund >= 0 ? 'Tax Refund' : 'Tax Due', value: '₹' + Math.abs(Math.round(refund)).toLocaleString('en-IN') },
        { label: 'TDS Paid', value: '₹' + Math.round(tds).toLocaleString('en-IN') },
        { label: 'Actual Tax', value: '₹' + Math.round(actual).toLocaleString('en-IN') },
      ]
    }
  },

  insurance_premium: {
    slug: 'insurance_premium', name: 'Insurance Premium Estimator', emoji: '🛡️', category: 'Finance',
    description: 'Estimate life insurance premium based on your age and cover',
    inputs: [
      { id: 'cover', label: 'Life Cover Required', placeholder: 'e.g. 10000000', prefix: '₹' },
      { id: 'age', label: 'Your Current Age', placeholder: 'e.g. 30', prefix: 'Yr' },
      { id: 'tenure', label: 'Policy Term (Years)', placeholder: 'e.g. 30', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const cover = parseFloat(inputs.cover), age = parseFloat(inputs.age), tenure = parseFloat(inputs.tenure)
      if (!cover || !age || !tenure) return null
      const baseRate = age < 30 ? 0.0006 : age < 40 ? 0.0009 : age < 50 ? 0.0015 : 0.0025
      const annual = cover * baseRate * (tenure / 30)
      return [
        { label: 'Est. Annual Premium', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Monthly Premium', value: '₹' + Math.round(annual / 12).toLocaleString('en-IN') },
        { label: 'Life Cover', value: '₹' + cover.toLocaleString('en-IN') },
      ]
    }
  },

  crypto_profit: {
    slug: 'crypto_profit', name: 'Crypto Profit Calculator', emoji: '₿', category: 'Finance',
    description: 'Calculate profit or loss on your crypto investment',
    inputs: [
      { id: 'buy_price', label: 'Buy Price (₹ per coin)', placeholder: 'e.g. 2500000', prefix: '₹' },
      { id: 'sell_price', label: 'Sell Price (₹ per coin)', placeholder: 'e.g. 3000000', prefix: '₹' },
      { id: 'coins', label: 'Number of Coins', placeholder: 'e.g. 0.1', prefix: '✦' },
    ],
    calculate(inputs) {
      const buy = parseFloat(inputs.buy_price), sell = parseFloat(inputs.sell_price), coins = parseFloat(inputs.coins)
      if (!buy || !sell || !coins) return null
      const invested = buy * coins, currentVal = sell * coins, profit = currentVal - invested
      const tax = profit > 0 ? profit * 0.30 : 0
      return [
        { label: 'Profit / Loss', value: '₹' + Math.round(profit).toLocaleString('en-IN') },
        { label: 'Tax (30% flat)', value: '₹' + Math.round(tax).toLocaleString('en-IN') },
        { label: 'Return %', value: ((profit / invested) * 100).toFixed(2) + '%' },
      ]
    }
  },

  home_budget: {
    slug: 'home_budget', name: 'Home Budget Planner', emoji: '🏠', category: 'Finance',
    description: 'Plan your monthly household budget',
    inputs: [
      { id: 'income', label: 'Monthly Income', placeholder: 'e.g. 80000', prefix: '₹' },
      { id: 'rent', label: 'Rent / EMI', placeholder: 'e.g. 20000', prefix: '₹' },
      { id: 'expenses', label: 'Other Monthly Expenses', placeholder: 'e.g. 30000', prefix: '₹' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), rent = parseFloat(inputs.rent) || 0, expenses = parseFloat(inputs.expenses) || 0
      if (!income) return null
      const total = rent + expenses, savings = income - total
      return [
        { label: 'Monthly Savings', value: '₹' + Math.round(savings).toLocaleString('en-IN') },
        { label: 'Savings Rate', value: ((savings / income) * 100).toFixed(1) + '%' },
        { label: 'Total Expenses', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  f_and_o: {
    slug: 'f_and_o', name: 'F&O Profit Calculator', emoji: '📉', category: 'Finance',
    description: 'Calculate profit/loss on Futures & Options trading',
    inputs: [
      { id: 'buy', label: 'Buy Price', placeholder: 'e.g. 150', prefix: '₹' },
      { id: 'sell', label: 'Sell Price', placeholder: 'e.g. 170', prefix: '₹' },
      { id: 'lots', label: 'Lot Size', placeholder: 'e.g. 50', prefix: '✦' },
    ],
    calculate(inputs) {
      const buy = parseFloat(inputs.buy), sell = parseFloat(inputs.sell), lots = parseFloat(inputs.lots)
      if (!buy || !sell || !lots) return null
      const pnl = (sell - buy) * lots, brokerage = Math.max(20, pnl * 0.0003)
      return [
        { label: 'Gross P&L', value: '₹' + Math.round(pnl).toLocaleString('en-IN') },
        { label: 'Brokerage (est.)', value: '₹' + Math.round(brokerage).toLocaleString('en-IN') },
        { label: 'Net P&L', value: '₹' + Math.round(pnl - brokerage).toLocaleString('en-IN') },
      ]
    }
  },

  post_office_mis: {
    slug: 'post_office_mis', name: 'Post Office MIS Calculator', emoji: '📮', category: 'Finance',
    description: 'Calculate monthly income from Post Office MIS scheme',
    inputs: [
      { id: 'investment', label: 'Investment Amount', placeholder: 'e.g. 450000', prefix: '₹' },
    ],
    calculate(inputs) {
      const inv = parseFloat(inputs.investment)
      if (!inv) return null
      const rate = 0.074, monthly = (inv * rate) / 12
      return [
        { label: 'Monthly Income', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
        { label: 'Annual Income', value: '₹' + Math.round(monthly * 12).toLocaleString('en-IN') },
        { label: 'Interest Rate', value: '7.4% per annum' },
      ]
    }
  },

  senior_citizen_savings: {
    slug: 'senior_citizen_savings', name: 'SCSS Calculator', emoji: '👴', category: 'Finance',
    description: 'Senior Citizen Savings Scheme returns calculator',
    inputs: [
      { id: 'investment', label: 'Investment Amount (max 30L)', placeholder: 'e.g. 1500000', prefix: '₹' },
    ],
    calculate(inputs) {
      const inv = Math.min(parseFloat(inputs.investment), 3000000)
      if (!inv) return null
      const rate = 0.082, quarterly = (inv * rate) / 4, annual = inv * rate
      return [
        { label: 'Quarterly Interest', value: '₹' + Math.round(quarterly).toLocaleString('en-IN') },
        { label: 'Annual Interest', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Rate (SCSS)', value: '8.2% per annum' },
      ]
    }
  },

  marriage_fund: {
    slug: 'marriage_fund', name: 'Marriage Fund Planner', emoji: '💍', category: 'Finance',
    description: 'Plan savings for your or your child\'s wedding',
    inputs: [
      { id: 'budget', label: 'Wedding Budget', placeholder: 'e.g. 2000000', prefix: '₹' },
      { id: 'saved', label: 'Already Saved', placeholder: 'e.g. 200000', prefix: '₹' },
      { id: 'years', label: 'Years to Wedding', placeholder: 'e.g. 5', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const budget = parseFloat(inputs.budget), saved = parseFloat(inputs.saved) || 0, years = parseFloat(inputs.years)
      if (!budget || !years) return null
      const remaining = budget - saved, monthly = remaining / (years * 12)
      return [
        { label: 'Monthly Savings Needed', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
        { label: 'Amount Remaining', value: '₹' + Math.round(remaining).toLocaleString('en-IN') },
        { label: 'Years to Save', value: years + ' years' },
      ]
    }
  },

  retirement: {
    slug: 'retirement', name: 'Retirement Planner', emoji: '🌅', category: 'Finance',
    description: 'Plan how much you need to save for a comfortable retirement',
    inputs: [
      { id: 'current_age', label: 'Current Age', placeholder: 'e.g. 30', prefix: 'Yr' },
      { id: 'monthly_expense', label: 'Current Monthly Expenses', placeholder: 'e.g. 40000', prefix: '₹' },
      { id: 'rate', label: 'Expected Investment Return (%)', placeholder: 'e.g. 10', prefix: '%' },
    ],
    calculate(inputs) {
      const age = parseFloat(inputs.current_age), expense = parseFloat(inputs.monthly_expense), rate = parseFloat(inputs.rate) / 100
      if (!age || !expense || !rate) return null
      const yearsToRetire = 60 - age, futureExpense = expense * Math.pow(1.06, yearsToRetire)
      const corpus = (futureExpense * 12 * 25)
      const monthlySIP = corpus * (rate / 12) / (Math.pow(1 + rate / 12, yearsToRetire * 12) - 1)
      return [
        { label: 'Retirement Corpus Needed', value: '₹' + Math.round(corpus).toLocaleString('en-IN') },
        { label: 'Monthly SIP Required', value: '₹' + Math.round(monthlySIP).toLocaleString('en-IN') },
        { label: 'Years to Retire', value: yearsToRetire + ' years' },
      ]
    }
  },

  // ── HEALTH (24 more) ─────────────────────────────────

  protein_intake: {
    slug: 'protein_intake', name: 'Protein Intake Calculator', emoji: '💪', category: 'Health',
    description: 'Calculate your daily protein requirement',
    inputs: [
      { id: 'weight', label: 'Body Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'activity', label: 'Activity Level (1=Sedentary 2=Active 3=Athlete)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const weight = parseFloat(inputs.weight), activity = parseFloat(inputs.activity) || 1
      if (!weight) return null
      const multiplier = activity <= 1 ? 0.8 : activity <= 2 ? 1.2 : 1.8
      const protein = weight * multiplier
      return [
        { label: 'Daily Protein', value: Math.round(protein) + ' grams' },
        { label: 'Per Meal (3 meals)', value: Math.round(protein / 3) + ' grams' },
        { label: 'Protein Calories', value: Math.round(protein * 4) + ' kcal' },
      ]
    }
  },

  blood_pressure: {
    slug: 'blood_pressure', name: 'Blood Pressure Checker', emoji: '🩺', category: 'Health',
    description: 'Check if your blood pressure reading is normal',
    inputs: [
      { id: 'systolic', label: 'Systolic Pressure (upper)', placeholder: 'e.g. 120', prefix: 'mmHg' },
      { id: 'diastolic', label: 'Diastolic Pressure (lower)', placeholder: 'e.g. 80', prefix: 'mmHg' },
    ],
    calculate(inputs) {
      const sys = parseFloat(inputs.systolic), dia = parseFloat(inputs.diastolic)
      if (!sys || !dia) return null
      let status = sys < 120 && dia < 80 ? '✅ Normal' : sys < 130 && dia < 80 ? '⚠️ Elevated' : sys < 140 || dia < 90 ? '🟠 High Stage 1' : '🔴 High Stage 2'
      return [
        { label: 'Blood Pressure', value: sys + '/' + dia + ' mmHg' },
        { label: 'Status', value: status },
        { label: 'Normal Range', value: 'Below 120/80' },
      ]
    }
  },

  sugar_intake: {
    slug: 'sugar_intake', name: 'Sugar Intake Calculator', emoji: '🍬', category: 'Health',
    description: 'Check if your daily sugar intake is healthy',
    inputs: [
      { id: 'sugar', label: 'Daily Sugar Intake (grams)', placeholder: 'e.g. 50', prefix: 'g' },
      { id: 'weight', label: 'Your Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
    ],
    calculate(inputs) {
      const sugar = parseFloat(inputs.sugar), weight = parseFloat(inputs.weight)
      if (!sugar || !weight) return null
      const recommended = weight < 60 ? 25 : 50, status = sugar <= recommended ? '✅ Within Limit' : '⚠️ Too Much'
      return [
        { label: 'Your Sugar Intake', value: sugar + 'g per day' },
        { label: 'WHO Recommended', value: recommended + 'g per day' },
        { label: 'Status', value: status },
      ]
    }
  },

  running_pace: {
    slug: 'running_pace', name: 'Running Pace Calculator', emoji: '🏃', category: 'Health',
    description: 'Calculate your running pace and finish time',
    inputs: [
      { id: 'distance', label: 'Distance (km)', placeholder: 'e.g. 5', prefix: 'km' },
      { id: 'minutes', label: 'Time Taken (minutes)', placeholder: 'e.g. 30', prefix: 'min' },
    ],
    calculate(inputs) {
      const distance = parseFloat(inputs.distance), minutes = parseFloat(inputs.minutes)
      if (!distance || !minutes) return null
      const paceMin = minutes / distance
      const speed = (distance / minutes) * 60
      return [
        { label: 'Pace', value: Math.floor(paceMin) + ':' + String(Math.round((paceMin % 1) * 60)).padStart(2, '0') + ' min/km' },
        { label: 'Speed', value: speed.toFixed(1) + ' km/h' },
        { label: 'Calories Burned', value: Math.round(minutes * 8) + ' kcal (est.)' },
      ]
    }
  },

  macro_calculator: {
    slug: 'macro_calculator', name: 'Macro Calculator', emoji: '🥩', category: 'Health',
    description: 'Calculate your ideal macros — protein, carbs and fat',
    inputs: [
      { id: 'calories', label: 'Daily Calorie Goal', placeholder: 'e.g. 2000', prefix: 'kcal' },
      { id: 'goal', label: 'Goal (1=Loss 2=Maintain 3=Gain)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const cal = parseFloat(inputs.calories), goal = parseFloat(inputs.goal) || 2
      if (!cal) return null
      const proteinPct = goal === 3 ? 0.30 : 0.25, carbPct = goal === 1 ? 0.35 : 0.45, fatPct = 1 - proteinPct - carbPct
      return [
        { label: 'Protein', value: Math.round((cal * proteinPct) / 4) + 'g (' + Math.round(proteinPct * 100) + '%)' },
        { label: 'Carbs', value: Math.round((cal * carbPct) / 4) + 'g (' + Math.round(carbPct * 100) + '%)' },
        { label: 'Fat', value: Math.round((cal * fatPct) / 9) + 'g (' + Math.round(fatPct * 100) + '%)' },
      ]
    }
  },

  iv_drip: {
    slug: 'iv_drip', name: 'IV Drip Rate Calculator', emoji: '💉', category: 'Health',
    description: 'Calculate IV drip rate in drops per minute',
    inputs: [
      { id: 'volume', label: 'Total Volume (ml)', placeholder: 'e.g. 500', prefix: 'ml' },
      { id: 'hours', label: 'Duration (hours)', placeholder: 'e.g. 4', prefix: 'hr' },
      { id: 'drop_factor', label: 'Drop Factor (drops/ml)', placeholder: 'e.g. 15', prefix: '✦' },
    ],
    calculate(inputs) {
      const volume = parseFloat(inputs.volume), hours = parseFloat(inputs.hours), df = parseFloat(inputs.drop_factor) || 15
      if (!volume || !hours) return null
      const dropsPerMin = (volume * df) / (hours * 60)
      return [
        { label: 'Drip Rate', value: Math.round(dropsPerMin) + ' drops/min' },
        { label: 'ml per Hour', value: Math.round(volume / hours) + ' ml/hr' },
        { label: 'Total Duration', value: hours + ' hours' },
      ]
    }
  },

  bsa: {
    slug: 'bsa', name: 'Body Surface Area Calculator', emoji: '🧍', category: 'Health',
    description: 'Calculate body surface area used in medical dosing',
    inputs: [
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 175', prefix: 'cm' },
    ],
    calculate(inputs) {
      const w = parseFloat(inputs.weight), h = parseFloat(inputs.height)
      if (!w || !h) return null
      const bsa = Math.sqrt((h * w) / 3600)
      return [
        { label: 'Body Surface Area', value: bsa.toFixed(2) + ' m²' },
        { label: 'Normal Range', value: '1.6 - 1.9 m²' },
        { label: 'Formula Used', value: 'Mosteller Formula' },
      ]
    }
  },

  alcohol_units: {
    slug: 'alcohol_units', name: 'Alcohol Units Calculator', emoji: '🍺', category: 'Health',
    description: 'Calculate alcohol units consumed and safe limits',
    inputs: [
      { id: 'drinks', label: 'Number of Drinks', placeholder: 'e.g. 3', prefix: '🍺' },
      { id: 'strength', label: 'Alcohol Strength (%)', placeholder: 'e.g. 5', prefix: '%' },
      { id: 'volume', label: 'Volume per Drink (ml)', placeholder: 'e.g. 330', prefix: 'ml' },
    ],
    calculate(inputs) {
      const drinks = parseFloat(inputs.drinks), strength = parseFloat(inputs.strength), volume = parseFloat(inputs.volume)
      if (!drinks || !strength || !volume) return null
      const units = (strength * volume * drinks) / 1000
      const limit = 14
      return [
        { label: 'Total Units', value: units.toFixed(1) + ' units' },
        { label: 'Weekly Safe Limit', value: limit + ' units/week' },
        { label: 'Status', value: units <= limit / 7 ? '✅ Within daily limit' : '⚠️ Above daily limit' },
      ]
    }
  },

  vitamin_d: {
    slug: 'vitamin_d', name: 'Vitamin D Sun Exposure', emoji: '☀️', category: 'Health',
    description: 'Estimate sun exposure needed for Vitamin D',
    inputs: [
      { id: 'skin_type', label: 'Skin Type (1=Fair 2=Medium 3=Dark)', placeholder: 'e.g. 2', prefix: '✦' },
      { id: 'season', label: 'Season (1=Summer 2=Winter)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const skin = parseFloat(inputs.skin_type) || 2, season = parseFloat(inputs.season) || 1
      const base = skin === 1 ? 10 : skin === 2 ? 20 : 35
      const minutes = season === 2 ? base * 3 : base
      return [
        { label: 'Sun Exposure Needed', value: minutes + ' minutes/day' },
        { label: 'Best Time', value: '10 AM - 2 PM' },
        { label: 'Body Area', value: 'Arms & Legs exposed' },
      ]
    }
  },

  waist_hip_ratio: {
    slug: 'waist_hip_ratio', name: 'Waist-Hip Ratio', emoji: '📏', category: 'Health',
    description: 'Calculate waist-to-hip ratio and health risk',
    inputs: [
      { id: 'waist', label: 'Waist Circumference (cm)', placeholder: 'e.g. 80', prefix: 'cm' },
      { id: 'hip', label: 'Hip Circumference (cm)', placeholder: 'e.g. 95', prefix: 'cm' },
    ],
    calculate(inputs) {
      const waist = parseFloat(inputs.waist), hip = parseFloat(inputs.hip)
      if (!waist || !hip) return null
      const ratio = waist / hip
      const risk = ratio < 0.85 ? '✅ Low Risk' : ratio < 0.95 ? '⚠️ Moderate Risk' : '🔴 High Risk'
      return [
        { label: 'WHR', value: ratio.toFixed(2) },
        { label: 'Health Risk', value: risk },
        { label: 'Healthy Range', value: 'Below 0.85 (women) / 0.90 (men)' },
      ]
    }
  },

  cholesterol: {
    slug: 'cholesterol', name: 'Cholesterol Calculator', emoji: '🫀', category: 'Health',
    description: 'Check your cholesterol levels and health status',
    inputs: [
      { id: 'total', label: 'Total Cholesterol (mg/dL)', placeholder: 'e.g. 200', prefix: 'mg' },
      { id: 'hdl', label: 'HDL (Good) Cholesterol', placeholder: 'e.g. 55', prefix: 'mg' },
      { id: 'ldl', label: 'LDL (Bad) Cholesterol', placeholder: 'e.g. 130', prefix: 'mg' },
    ],
    calculate(inputs) {
      const total = parseFloat(inputs.total), hdl = parseFloat(inputs.hdl), ldl = parseFloat(inputs.ldl)
      if (!total || !hdl || !ldl) return null
      const ratio = total / hdl
      const status = ldl < 100 ? '✅ Optimal LDL' : ldl < 130 ? '👍 Near Optimal' : ldl < 160 ? '⚠️ Borderline' : '🔴 High LDL'
      return [
        { label: 'Total/HDL Ratio', value: ratio.toFixed(1) + (ratio < 5 ? ' ✅ Good' : ' ⚠️ High') },
        { label: 'LDL Status', value: status },
        { label: 'HDL Status', value: hdl >= 60 ? '✅ Protective' : hdl >= 40 ? '👍 Normal' : '⚠️ Low' },
      ]
    }
  },

  menstrual_cycle: {
    slug: 'menstrual_cycle', name: 'Period Tracker', emoji: '🗓️', category: 'Health',
    description: 'Track and predict your next period date',
    inputs: [
      { id: 'day', label: 'Last Period Start Day', placeholder: 'e.g. 1', prefix: 'DD' },
      { id: 'month', label: 'Last Period Month', placeholder: 'e.g. 3', prefix: 'MM' },
      { id: 'cycle', label: 'Cycle Length (days)', placeholder: 'e.g. 28', prefix: 'days' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), cycle = parseInt(inputs.cycle) || 28
      if (!day || !month) return null
      const last = new Date(new Date().getFullYear(), month - 1, day)
      const next = new Date(last); next.setDate(next.getDate() + cycle)
      const next2 = new Date(next); next2.setDate(next2.getDate() + cycle)
      const opts = { day: 'numeric', month: 'short' }
      return [
        { label: 'Next Period', value: next.toLocaleDateString('en-IN', opts) },
        { label: 'Following Period', value: next2.toLocaleDateString('en-IN', opts) },
        { label: 'Cycle Length', value: cycle + ' days' },
      ]
    }
  },

  calories_burned: {
    slug: 'calories_burned', name: 'Exercise Calories Burned', emoji: '🏊', category: 'Health',
    description: 'Calories burned during different exercises',
    inputs: [
      { id: 'weight', label: 'Body Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'duration', label: 'Exercise Duration (minutes)', placeholder: 'e.g. 30', prefix: 'min' },
      { id: 'exercise', label: 'Exercise (1=Walk 2=Run 3=Swim 4=Cycle)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const weight = parseFloat(inputs.weight), duration = parseFloat(inputs.duration), ex = parseFloat(inputs.exercise) || 1
      if (!weight || !duration) return null
      const mets = ex === 1 ? 3.5 : ex === 2 ? 8.0 : ex === 3 ? 7.0 : 6.0
      const calories = (mets * weight * duration) / 60
      return [
        { label: 'Calories Burned', value: Math.round(calories) + ' kcal' },
        { label: 'Duration', value: duration + ' minutes' },
        { label: 'Intensity', value: mets < 4 ? '🟢 Low' : mets < 7 ? '🟡 Moderate' : '🔴 High' },
      ]
    }
  },

  fiber_intake: {
    slug: 'fiber_intake', name: 'Fiber Intake Calculator', emoji: '🥦', category: 'Health',
    description: 'Calculate recommended daily fiber intake',
    inputs: [
      { id: 'age', label: 'Your Age', placeholder: 'e.g. 30', prefix: 'Yr' },
      { id: 'calories', label: 'Daily Calories', placeholder: 'e.g. 2000', prefix: 'kcal' },
    ],
    calculate(inputs) {
      const age = parseFloat(inputs.age), calories = parseFloat(inputs.calories)
      if (!age || !calories) return null
      const recommended = Math.round(calories / 1000 * 14)
      return [
        { label: 'Recommended Fiber', value: recommended + 'g per day' },
        { label: 'Per Meal (3 meals)', value: Math.round(recommended / 3) + 'g per meal' },
        { label: 'Good Sources', value: 'Veggies, Fruits, Dal, Oats' },
      ]
    }
  },

  bmi_children: {
    slug: 'bmi_children', name: 'Child BMI Calculator', emoji: '👶', category: 'Health',
    description: 'Calculate BMI for children aged 2-18 years',
    inputs: [
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 30', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 130', prefix: 'cm' },
      { id: 'age', label: 'Age (years)', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const w = parseFloat(inputs.weight), h = parseFloat(inputs.height) / 100, age = parseFloat(inputs.age)
      if (!w || !h || !age) return null
      const bmi = w / (h * h)
      const status = bmi < 14 ? '⚠️ Underweight' : bmi < 18 ? '✅ Healthy' : bmi < 21 ? '⚠️ Overweight' : '🔴 Obese'
      return [
        { label: "Child's BMI", value: bmi.toFixed(1) },
        { label: 'Status', value: status },
        { label: 'Age Group', value: age + ' years old' },
      ]
    }
  },

  creatinine: {
    slug: 'creatinine', name: 'Kidney Function (eGFR)', emoji: '🫘', category: 'Health',
    description: 'Estimate kidney function using creatinine level',
    inputs: [
      { id: 'creatinine', label: 'Serum Creatinine (mg/dL)', placeholder: 'e.g. 1.0', prefix: 'mg' },
      { id: 'age', label: 'Age (years)', placeholder: 'e.g. 40', prefix: 'Yr' },
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
    ],
    calculate(inputs) {
      const cr = parseFloat(inputs.creatinine), age = parseFloat(inputs.age), weight = parseFloat(inputs.weight)
      if (!cr || !age || !weight) return null
      const egfr = ((140 - age) * weight) / (72 * cr)
      const stage = egfr >= 90 ? '✅ Normal (G1)' : egfr >= 60 ? '🟡 Mildly Reduced (G2)' : egfr >= 45 ? '🟠 Mild-Moderate (G3a)' : '🔴 Reduced (G3b+)'
      return [
        { label: 'eGFR', value: Math.round(egfr) + ' mL/min/1.73m²' },
        { label: 'Kidney Stage', value: stage },
        { label: 'Normal eGFR', value: 'Above 90' },
      ]
    }
  },

  oxygen_saturation: {
    slug: 'oxygen_saturation', name: 'SpO2 Checker', emoji: '🫁', category: 'Health',
    description: 'Check if your oxygen saturation level is healthy',
    inputs: [
      { id: 'spo2', label: 'SpO2 Reading (%)', placeholder: 'e.g. 98', prefix: '%' },
      { id: 'pulse', label: 'Pulse Rate (bpm)', placeholder: 'e.g. 75', prefix: 'bpm' },
    ],
    calculate(inputs) {
      const spo2 = parseFloat(inputs.spo2), pulse = parseFloat(inputs.pulse)
      if (!spo2) return null
      const o2Status = spo2 >= 95 ? '✅ Normal' : spo2 >= 90 ? '⚠️ Low — See Doctor' : '🔴 Critical — Emergency'
      const pulseStatus = !pulse ? 'N/A' : pulse < 60 ? '⚠️ Low (Bradycardia)' : pulse <= 100 ? '✅ Normal' : '⚠️ High (Tachycardia)'
      return [
        { label: 'SpO2 Status', value: spo2 + '% — ' + o2Status },
        { label: 'Pulse Status', value: pulse + ' bpm — ' + pulseStatus },
        { label: 'Normal SpO2', value: '95% - 100%' },
      ]
    }
  },

  hospital_cost: {
    slug: 'hospital_cost', name: 'Hospital Cost Estimator', emoji: '🏥', category: 'Health',
    description: 'Estimate hospital stay cost in India',
    inputs: [
      { id: 'days', label: 'Hospital Stay (days)', placeholder: 'e.g. 3', prefix: 'days' },
      { id: 'type', label: 'Hospital Type (1=Govt 2=Private 3=Super Spec)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const days = parseFloat(inputs.days), type = parseFloat(inputs.type) || 2
      if (!days) return null
      const roomPerDay = type === 1 ? 500 : type === 2 ? 5000 : 15000
      const misc = days * (type === 1 ? 1000 : type === 2 ? 5000 : 20000)
      const total = roomPerDay * days + misc
      return [
        { label: 'Estimated Cost', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Room Cost', value: '₹' + Math.round(roomPerDay * days).toLocaleString('en-IN') },
        { label: 'Duration', value: days + ' days' },
      ]
    }
  },

  sleep_debt: {
    slug: 'sleep_debt', name: 'Sleep Debt Calculator', emoji: '💤', category: 'Health',
    description: 'Calculate your weekly sleep debt',
    inputs: [
      { id: 'actual_sleep', label: 'Avg. Sleep Per Night (hours)', placeholder: 'e.g. 6', prefix: 'hr' },
      { id: 'days', label: 'Number of Days', placeholder: 'e.g. 7', prefix: 'days' },
    ],
    calculate(inputs) {
      const actual = parseFloat(inputs.actual_sleep), days = parseFloat(inputs.days) || 7
      if (!actual) return null
      const recommended = 8, debt = Math.max(0, (recommended - actual) * days)
      return [
        { label: 'Sleep Debt', value: debt.toFixed(1) + ' hours' },
        { label: 'You Sleep', value: actual + ' hrs/night vs ' + recommended + ' hrs recommended' },
        { label: 'Status', value: debt === 0 ? '✅ Well Rested' : debt < 7 ? '⚠️ Mild Debt' : '🔴 High Debt' },
      ]
    }
  },

  caffeine: {
    slug: 'caffeine', name: 'Caffeine Intake Calculator', emoji: '☕', category: 'Health',
    description: 'Check if your daily caffeine intake is safe',
    inputs: [
      { id: 'cups', label: 'Cups of Coffee / Tea per day', placeholder: 'e.g. 3', prefix: '☕' },
      { id: 'type', label: 'Type (1=Espresso 2=Filter 3=Tea)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const cups = parseFloat(inputs.cups), type = parseFloat(inputs.type) || 2
      if (!cups) return null
      const mgPerCup = type === 1 ? 63 : type === 2 ? 100 : 47
      const total = cups * mgPerCup, limit = 400
      return [
        { label: 'Daily Caffeine', value: total + ' mg' },
        { label: 'Safe Limit', value: limit + ' mg/day' },
        { label: 'Status', value: total <= limit ? '✅ Safe' : '⚠️ Too Much' },
      ]
    }
  },

  eyesight: {
    slug: 'eyesight', name: 'Screen Time Eye Health', emoji: '👁️', category: 'Health',
    description: 'Calculate safe screen time for your eyes',
    inputs: [
      { id: 'screen_hours', label: 'Daily Screen Time (hours)', placeholder: 'e.g. 8', prefix: 'hr' },
    ],
    calculate(inputs) {
      const hours = parseFloat(inputs.screen_hours)
      if (!hours) return null
      const breaks = Math.ceil(hours * 60 / 20)
      return [
        { label: 'Screen Time', value: hours + ' hours/day' },
        { label: '20-20-20 Breaks', value: breaks + ' breaks needed' },
        { label: 'Status', value: hours <= 4 ? '✅ Healthy' : hours <= 8 ? '⚠️ Moderate' : '🔴 High — Take Breaks' },
      ]
    }
  },

  vaccine_schedule: {
    slug: 'vaccine_schedule', name: 'Baby Vaccine Scheduler', emoji: '💉', category: 'Health',
    description: 'Get vaccine schedule for your baby based on birth month',
    inputs: [
      { id: 'month', label: 'Baby Birth Month', placeholder: 'e.g. 1', prefix: 'MM' },
      { id: 'year', label: 'Baby Birth Year', placeholder: 'e.g. 2025', prefix: 'YY' },
    ],
    calculate(inputs) {
      const month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!month || !year) return null
      const birth = new Date(year, month - 1, 1)
      const at6weeks = new Date(birth); at6weeks.setDate(at6weeks.getDate() + 42)
      const at10weeks = new Date(birth); at10weeks.setDate(at10weeks.getDate() + 70)
      const at14weeks = new Date(birth); at14weeks.setDate(at14weeks.getDate() + 98)
      const opts = { month: 'short', year: 'numeric' }
      return [
        { label: 'At Birth', value: 'BCG, Hep-B, OPV-0' },
        { label: '6 Weeks — ' + at6weeks.toLocaleDateString('en-IN', opts), value: 'DTwP, IPV, Hib, Hep-B, OPV-1' },
        { label: '10 Weeks — ' + at10weeks.toLocaleDateString('en-IN', opts), value: 'DTwP, IPV, Hib, OPV-2' },
      ]
    }
  },

  meditation_timer: {
    slug: 'meditation_timer', name: 'Meditation Benefits Calculator', emoji: '🧘', category: 'Health',
    description: 'See health benefits based on your meditation habit',
    inputs: [
      { id: 'minutes', label: 'Daily Meditation (minutes)', placeholder: 'e.g. 20', prefix: 'min' },
      { id: 'weeks', label: 'Weeks of Practice', placeholder: 'e.g. 8', prefix: 'wk' },
    ],
    calculate(inputs) {
      const minutes = parseFloat(inputs.minutes), weeks = parseFloat(inputs.weeks)
      if (!minutes || !weeks) return null
      const totalHours = (minutes * 7 * weeks) / 60
      const stressReduction = Math.min(40, weeks * 3)
      return [
        { label: 'Total Meditation', value: totalHours.toFixed(1) + ' hours' },
        { label: 'Stress Reduction', value: stressReduction + '% (est.)' },
        { label: 'Benefit Level', value: weeks >= 8 ? '🌟 Strong Benefits' : weeks >= 4 ? '✅ Moderate Benefits' : '🌱 Building Habit' },
      ]
    }
  },

  // ── EDUCATION (19 more) ──────────────────────────────

  semester_gpa: {
    slug: 'semester_gpa', name: 'Semester GPA Calculator', emoji: '📖', category: 'Education',
    description: 'Calculate weighted GPA for the semester with credits',
    inputs: [
      { id: 'grade1', label: 'Subject 1 Grade Points (0-10)', placeholder: 'e.g. 9', prefix: '✦' },
      { id: 'credits1', label: 'Subject 1 Credits', placeholder: 'e.g. 4', prefix: 'cr' },
      { id: 'grade2', label: 'Subject 2 Grade Points', placeholder: 'e.g. 8', prefix: '✦' },
      { id: 'credits2', label: 'Subject 2 Credits', placeholder: 'e.g. 3', prefix: 'cr' },
    ],
    calculate(inputs) {
      const g1 = parseFloat(inputs.grade1), c1 = parseFloat(inputs.credits1)
      const g2 = parseFloat(inputs.grade2), c2 = parseFloat(inputs.credits2)
      if (!g1 || !c1) return null
      const totalPoints = (g1 * c1) + ((g2 && c2) ? g2 * c2 : 0)
      const totalCredits = c1 + ((c2) ? c2 : 0)
      const gpa = totalPoints / totalCredits
      return [
        { label: 'Semester GPA', value: gpa.toFixed(2) + ' / 10' },
        { label: 'Total Credits', value: totalCredits + ' credits' },
        { label: 'Percentage', value: (gpa * 10).toFixed(1) + '%' },
      ]
    }
  },

  ielts_score: {
    slug: 'ielts_score', name: 'IELTS Band Calculator', emoji: '🌍', category: 'Education',
    description: 'Calculate your overall IELTS band score',
    inputs: [
      { id: 'listening', label: 'Listening Score', placeholder: 'e.g. 7.5', prefix: '✦' },
      { id: 'reading', label: 'Reading Score', placeholder: 'e.g. 7.0', prefix: '✦' },
      { id: 'writing', label: 'Writing Score', placeholder: 'e.g. 6.5', prefix: '✦' },
      { id: 'speaking', label: 'Speaking Score', placeholder: 'e.g. 7.0', prefix: '✦' },
    ],
    calculate(inputs) {
      const l = parseFloat(inputs.listening), r = parseFloat(inputs.reading), w = parseFloat(inputs.writing), s = parseFloat(inputs.speaking)
      if (!l || !r || !w || !s) return null
      const avg = (l + r + w + s) / 4
      const band = Math.round(avg * 2) / 2
      return [
        { label: 'Overall Band', value: band.toFixed(1) },
        { label: 'Level', value: band >= 8 ? '🏆 Expert' : band >= 7 ? '⭐ Good User' : band >= 6 ? '✅ Competent' : '📚 Modest' },
        { label: 'Average', value: avg.toFixed(2) },
      ]
    }
  },

  school_grade: {
    slug: 'school_grade', name: 'School Grade Calculator', emoji: '📝', category: 'Education',
    description: 'Calculate grades for school exams (CBSE / ICSE)',
    inputs: [
      { id: 'marks', label: 'Marks Obtained', placeholder: 'e.g. 85', prefix: '✦' },
      { id: 'total', label: 'Total Marks', placeholder: 'e.g. 100', prefix: '/' },
    ],
    calculate(inputs) {
      const marks = parseFloat(inputs.marks), total = parseFloat(inputs.total)
      if (!marks || !total) return null
      const pct = (marks / total) * 100
      const grade = pct >= 91 ? 'A1' : pct >= 81 ? 'A2' : pct >= 71 ? 'B1' : pct >= 61 ? 'B2' : pct >= 51 ? 'C1' : pct >= 41 ? 'C2' : pct >= 33 ? 'D' : 'E (Fail)'
      return [
        { label: 'Percentage', value: pct.toFixed(1) + '%' },
        { label: 'CBSE Grade', value: grade },
        { label: 'Marks', value: marks + ' / ' + total },
      ]
    }
  },

  jee_rank: {
    slug: 'jee_rank', name: 'JEE Marks vs Rank', emoji: '🏛️', category: 'Education',
    description: 'Estimate JEE Main rank based on your expected marks',
    inputs: [
      { id: 'marks', label: 'Expected Marks (out of 300)', placeholder: 'e.g. 200', prefix: '✦' },
    ],
    calculate(inputs) {
      const marks = parseFloat(inputs.marks)
      if (!marks || marks > 300) return null
      const pct = (marks / 300) * 100
      let rank = marks >= 280 ? '< 100' : marks >= 260 ? '100 - 500' : marks >= 240 ? '500 - 2000' : marks >= 200 ? '2000 - 10000' : marks >= 150 ? '10000 - 50000' : '50000+'
      return [
        { label: 'Expected Rank', value: rank },
        { label: 'Percentile (est.)', value: pct.toFixed(1) + 'th' },
        { label: 'Eligible For', value: marks >= 240 ? '🏆 Old IITs' : marks >= 180 ? '⭐ New IITs / NITs' : '✅ State Colleges' },
      ]
    }
  },

  neet_score: {
    slug: 'neet_score', name: 'NEET Score Calculator', emoji: '🩺', category: 'Education',
    description: 'Calculate NEET score and estimate rank',
    inputs: [
      { id: 'correct', label: 'Correct Answers', placeholder: 'e.g. 140', prefix: '✦' },
      { id: 'incorrect', label: 'Incorrect Answers', placeholder: 'e.g. 20', prefix: '✦' },
    ],
    calculate(inputs) {
      const correct = parseFloat(inputs.correct), incorrect = parseFloat(inputs.incorrect) || 0
      if (!correct) return null
      const score = (correct * 4) - (incorrect * 1)
      const rank = score >= 700 ? '< 100' : score >= 650 ? '100 - 1000' : score >= 600 ? '1000 - 10000' : score >= 500 ? '10000 - 50000' : '50000+'
      return [
        { label: 'NEET Score', value: score + ' / 720' },
        { label: 'Estimated Rank', value: rank },
        { label: 'Status', value: score >= 720 * 0.5 ? '✅ Likely Eligible' : '⚠️ Below Cutoff' },
      ]
    }
  },

  cat_percentile: {
    slug: 'cat_percentile', name: 'CAT Percentile Estimator', emoji: '💼', category: 'Education',
    description: 'Estimate CAT percentile from your raw score',
    inputs: [
      { id: 'score', label: 'Expected CAT Score (out of 198)', placeholder: 'e.g. 120', prefix: '✦' },
    ],
    calculate(inputs) {
      const score = parseFloat(inputs.score)
      if (!score || score > 198) return null
      const percentile = Math.min(99.9, (score / 198) * 100 * 1.1)
      const college = percentile >= 99 ? '🏆 IIM A/B/C' : percentile >= 97 ? '⭐ IIM L/K/I' : percentile >= 90 ? '✅ New IIMs' : percentile >= 80 ? '📚 Good B-Schools' : 'State B-Schools'
      return [
        { label: 'Est. Percentile', value: percentile.toFixed(1) + 'th' },
        { label: 'Likely Colleges', value: college },
        { label: 'Score', value: score + ' / 198' },
      ]
    }
  },

  reading_speed: {
    slug: 'reading_speed', name: 'Reading Speed Calculator', emoji: '📚', category: 'Education',
    description: 'Calculate your reading speed and book completion time',
    inputs: [
      { id: 'words', label: 'Words Read', placeholder: 'e.g. 500', prefix: '✦' },
      { id: 'minutes', label: 'Time Taken (minutes)', placeholder: 'e.g. 5', prefix: 'min' },
      { id: 'book_pages', label: 'Book Pages (optional)', placeholder: 'e.g. 300', prefix: 'pg' },
    ],
    calculate(inputs) {
      const words = parseFloat(inputs.words), minutes = parseFloat(inputs.minutes), pages = parseFloat(inputs.book_pages) || 0
      if (!words || !minutes) return null
      const wpm = words / minutes
      const level = wpm < 150 ? '📖 Slow Reader' : wpm < 250 ? '✅ Average Reader' : wpm < 400 ? '⚡ Fast Reader' : '🚀 Speed Reader'
      const bookHours = pages ? (pages * 250 / wpm / 60).toFixed(1) : null
      return [
        { label: 'Reading Speed', value: Math.round(wpm) + ' words/min' },
        { label: 'Level', value: level },
        { label: pages ? 'Finish Book In' : 'Avg Novel (75k words)', value: bookHours ? bookHours + ' hours' : (75000 / wpm / 60).toFixed(1) + ' hours' },
      ]
    }
  },

  typing_speed: {
    slug: 'typing_speed', name: 'Typing Speed Calculator', emoji: '⌨️', category: 'Education',
    description: 'Calculate your typing speed in WPM',
    inputs: [
      { id: 'words', label: 'Words Typed', placeholder: 'e.g. 200', prefix: '✦' },
      { id: 'minutes', label: 'Time Taken (minutes)', placeholder: 'e.g. 5', prefix: 'min' },
      { id: 'errors', label: 'Errors Made', placeholder: 'e.g. 5', prefix: '✦' },
    ],
    calculate(inputs) {
      const words = parseFloat(inputs.words), minutes = parseFloat(inputs.minutes), errors = parseFloat(inputs.errors) || 0
      if (!words || !minutes) return null
      const grossWpm = words / minutes, netWpm = Math.max(0, grossWpm - errors / minutes)
      const accuracy = ((words - errors) / words * 100)
      return [
        { label: 'Net WPM', value: Math.round(netWpm) + ' WPM' },
        { label: 'Accuracy', value: accuracy.toFixed(1) + '%' },
        { label: 'Level', value: netWpm < 30 ? '🐢 Beginner' : netWpm < 50 ? '✅ Average' : netWpm < 70 ? '⚡ Above Average' : '🚀 Professional' },
      ]
    }
  },

  school_fees: {
    slug: 'school_fees', name: 'School Fee Planner', emoji: '🏫', category: 'Education',
    description: 'Plan school fee payments across the year',
    inputs: [
      { id: 'annual_fee', label: 'Annual Fee', placeholder: 'e.g. 120000', prefix: '₹' },
      { id: 'quarters', label: 'Payment Installments (2/3/4)', placeholder: 'e.g. 4', prefix: '✦' },
    ],
    calculate(inputs) {
      const fee = parseFloat(inputs.annual_fee), quarters = parseFloat(inputs.quarters) || 4
      if (!fee) return null
      const perInstallment = fee / quarters
      return [
        { label: 'Per Installment', value: '₹' + Math.round(perInstallment).toLocaleString('en-IN') },
        { label: 'Monthly Savings Needed', value: '₹' + Math.round(fee / 12).toLocaleString('en-IN') },
        { label: 'Annual Fee', value: '₹' + Math.round(fee).toLocaleString('en-IN') },
      ]
    }
  },

  class_rank: {
    slug: 'class_rank', name: 'Class Rank Calculator', emoji: '🏅', category: 'Education',
    description: 'Calculate your rank and percentile in class',
    inputs: [
      { id: 'your_marks', label: 'Your Total Marks', placeholder: 'e.g. 450', prefix: '✦' },
      { id: 'total_marks', label: 'Maximum Marks', placeholder: 'e.g. 600', prefix: '/' },
      { id: 'students_above', label: 'Students Who Scored More', placeholder: 'e.g. 10', prefix: '✦' },
      { id: 'total_students', label: 'Total Students in Class', placeholder: 'e.g. 60', prefix: '✦' },
    ],
    calculate(inputs) {
      const yours = parseFloat(inputs.your_marks), total = parseFloat(inputs.total_marks)
      const above = parseFloat(inputs.students_above), students = parseFloat(inputs.total_students)
      if (!yours || !total) return null
      const rank = above + 1, pct = ((yours / total) * 100)
      const percentile = students ? (((students - rank) / students) * 100) : null
      return [
        { label: 'Your Rank', value: rank + (rank === 1 ? 'st' : rank === 2 ? 'nd' : rank === 3 ? 'rd' : 'th') + ' in class' },
        { label: 'Percentage', value: pct.toFixed(1) + '%' },
        { label: 'Percentile', value: percentile !== null ? percentile.toFixed(1) + 'th percentile' : 'N/A' },
      ]
    }
  },

  scholarship_eligibility: {
    slug: 'scholarship_eligibility', name: 'Scholarship Eligibility Checker', emoji: '🏆', category: 'Education',
    description: 'Check if you qualify for common Indian scholarships',
    inputs: [
      { id: 'income', label: 'Family Annual Income', placeholder: 'e.g. 250000', prefix: '₹' },
      { id: 'percentage', label: 'Last Exam Percentage (%)', placeholder: 'e.g. 75', prefix: '%' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), pct = parseFloat(inputs.percentage)
      if (!income || !pct) return null
      const nsp = income <= 250000 && pct >= 50 ? '✅ Eligible' : '❌ Not Eligible'
      const pm_scholarship = pct >= 60 ? '✅ Eligible' : '❌ Check Criteria'
      return [
        { label: 'NSP Scholarship', value: nsp },
        { label: 'Merit Scholarship', value: pm_scholarship },
        { label: 'Your Percentage', value: pct + '%' },
      ]
    }
  },

  course_cost: {
    slug: 'course_cost', name: 'Online Course Cost Calculator', emoji: '💻', category: 'Education',
    description: 'Calculate cost per hour of learning from any course',
    inputs: [
      { id: 'price', label: 'Course Price', placeholder: 'e.g. 2999', prefix: '₹' },
      { id: 'hours', label: 'Course Duration (hours)', placeholder: 'e.g. 40', prefix: 'hr' },
    ],
    calculate(inputs) {
      const price = parseFloat(inputs.price), hours = parseFloat(inputs.hours)
      if (!price || !hours) return null
      const perHour = price / hours
      return [
        { label: 'Cost Per Hour', value: '₹' + perHour.toFixed(0) },
        { label: 'Total Duration', value: hours + ' hours' },
        { label: 'Value Rating', value: perHour < 50 ? '🏆 Excellent Value' : perHour < 150 ? '✅ Good Value' : '⚠️ Expensive' },
      ]
    }
  },

  exam_time: {
    slug: 'exam_time', name: 'Exam Time Per Question', emoji: '⏱️', category: 'Education',
    description: 'Calculate how much time to spend per question in an exam',
    inputs: [
      { id: 'duration', label: 'Exam Duration (minutes)', placeholder: 'e.g. 180', prefix: 'min' },
      { id: 'questions', label: 'Total Questions', placeholder: 'e.g. 100', prefix: '✦' },
    ],
    calculate(inputs) {
      const duration = parseFloat(inputs.duration), questions = parseFloat(inputs.questions)
      if (!duration || !questions) return null
      const timePerQ = duration / questions, revision = duration * 0.15
      return [
        { label: 'Time Per Question', value: timePerQ.toFixed(1) + ' minutes' },
        { label: 'Time for Revision', value: Math.round(revision) + ' minutes' },
        { label: 'Attempt Time', value: Math.round(duration - revision) + ' minutes' },
      ]
    }
  },

  library_fine: {
    slug: 'library_fine', name: 'Library Fine Calculator', emoji: '📚', category: 'Education',
    description: 'Calculate library book return fine',
    inputs: [
      { id: 'days', label: 'Days Overdue', placeholder: 'e.g. 14', prefix: 'days' },
      { id: 'fine_per_day', label: 'Fine Per Day', placeholder: 'e.g. 2', prefix: '₹' },
      { id: 'books', label: 'Number of Books', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const days = parseFloat(inputs.days), finePerDay = parseFloat(inputs.fine_per_day) || 2, books = parseFloat(inputs.books) || 1
      if (!days) return null
      const total = days * finePerDay * books
      return [
        { label: 'Total Fine', value: '₹' + total.toLocaleString('en-IN') },
        { label: 'Per Book', value: '₹' + (days * finePerDay) + ' per book' },
        { label: 'Days Overdue', value: days + ' days' },
      ]
    }
  },

  learning_rate: {
    slug: 'learning_rate', name: 'Learning Progress Tracker', emoji: '📈', category: 'Education',
    description: 'Track how much of a course or syllabus you have completed',
    inputs: [
      { id: 'completed', label: 'Topics Completed', placeholder: 'e.g. 30', prefix: '✦' },
      { id: 'total', label: 'Total Topics', placeholder: 'e.g. 50', prefix: '/' },
      { id: 'days_left', label: 'Days Left to Finish', placeholder: 'e.g. 15', prefix: 'days' },
    ],
    calculate(inputs) {
      const completed = parseFloat(inputs.completed), total = parseFloat(inputs.total), daysLeft = parseFloat(inputs.days_left)
      if (!completed || !total) return null
      const pct = (completed / total) * 100, remaining = total - completed
      const perDay = daysLeft ? (remaining / daysLeft).toFixed(1) : null
      return [
        { label: 'Progress', value: pct.toFixed(1) + '% done' },
        { label: 'Remaining Topics', value: remaining + ' topics' },
        { label: perDay ? 'Topics Per Day Needed' : 'Topics Remaining', value: perDay ? perDay + ' topics/day' : remaining + ' topics' },
      ]
    }
  },

  hostel_cost: {
    slug: 'hostel_cost', name: 'Hostel Cost Calculator', emoji: '🏠', category: 'Education',
    description: 'Calculate total hostel and living cost for college',
    inputs: [
      { id: 'rent', label: 'Monthly Hostel Rent', placeholder: 'e.g. 8000', prefix: '₹' },
      { id: 'food', label: 'Monthly Food Cost', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'misc', label: 'Monthly Misc Expenses', placeholder: 'e.g. 2000', prefix: '₹' },
      { id: 'months', label: 'Duration (months)', placeholder: 'e.g. 10', prefix: 'mo' },
    ],
    calculate(inputs) {
      const rent = parseFloat(inputs.rent) || 0, food = parseFloat(inputs.food) || 0
      const misc = parseFloat(inputs.misc) || 0, months = parseFloat(inputs.months) || 12
      const monthly = rent + food + misc, total = monthly * months
      return [
        { label: 'Monthly Cost', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
        { label: 'Total for ' + months + ' months', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Annual Cost', value: '₹' + Math.round(monthly * 12).toLocaleString('en-IN') },
      ]
    }
  },

  internship_stipend: {
    slug: 'internship_stipend', name: 'Internship Stipend Calculator', emoji: '💼', category: 'Education',
    description: 'Calculate your monthly take-home from internship stipend',
    inputs: [
      { id: 'stipend', label: 'Monthly Stipend', placeholder: 'e.g. 15000', prefix: '₹' },
      { id: 'commute', label: 'Monthly Commute Cost', placeholder: 'e.g. 1500', prefix: '₹' },
      { id: 'food', label: 'Monthly Food Cost', placeholder: 'e.g. 3000', prefix: '₹' },
    ],
    calculate(inputs) {
      const stipend = parseFloat(inputs.stipend), commute = parseFloat(inputs.commute) || 0, food = parseFloat(inputs.food) || 0
      if (!stipend) return null
      const takehome = stipend - commute - food
      return [
        { label: 'Take-Home Amount', value: '₹' + Math.round(takehome).toLocaleString('en-IN') },
        { label: 'Monthly Expenses', value: '₹' + Math.round(commute + food).toLocaleString('en-IN') },
        { label: 'Daily Earning', value: '₹' + Math.round(stipend / 22).toLocaleString('en-IN') + '/day' },
      ]
    }
  },

  target_marks: {
    slug: 'target_marks', name: 'Target Score Planner', emoji: '🎯', category: 'Education',
    description: 'Plan which subjects to focus on to reach your target grade',
    inputs: [
      { id: 'current_total', label: 'Current Total Marks', placeholder: 'e.g. 350', prefix: '✦' },
      { id: 'max_total', label: 'Maximum Total Marks', placeholder: 'e.g. 500', prefix: '/' },
      { id: 'target_pct', label: 'Target Percentage (%)', placeholder: 'e.g. 75', prefix: '%' },
    ],
    calculate(inputs) {
      const current = parseFloat(inputs.current_total), max = parseFloat(inputs.max_total), target = parseFloat(inputs.target_pct)
      if (!current || !max || !target) return null
      const needed = (target / 100) * max, gap = needed - current
      const currentPct = (current / max) * 100
      return [
        { label: 'Current %', value: currentPct.toFixed(1) + '%' },
        { label: 'Marks Needed', value: gap > 0 ? Math.ceil(gap) + ' more marks' : '✅ Already at target!' },
        { label: 'Status', value: gap <= 0 ? '🏆 Target Achieved' : gap <= 50 ? '✅ Very Close' : '📚 Need to Work Hard' },
      ]
    }
  },

  // ── LEGAL (25 more) ──────────────────────────────────

  pf_calculation: {
    slug: 'pf_calculation', name: 'PF (EPF) Calculator', emoji: '🏦', category: 'Legal',
    description: 'Calculate your EPF contribution and employer share',
    inputs: [
      { id: 'basic', label: 'Basic Salary + DA (Monthly)', placeholder: 'e.g. 25000', prefix: '₹' },
      { id: 'years', label: 'Years of Service', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const basic = parseFloat(inputs.basic), years = parseFloat(inputs.years)
      if (!basic || !years) return null
      const capped = Math.min(basic, 15000)
      const employeeMonthly = capped * 0.12, employerEPF = capped * 0.0367, employerEPS = capped * 0.0833
      const totalMonthly = employeeMonthly + capped * 0.12, annual = totalMonthly * 12
      const corpus = totalMonthly * 12 * years * 1.5
      return [
        { label: 'Your Monthly PF', value: '₹' + Math.round(employeeMonthly).toLocaleString('en-IN') },
        { label: 'Employer Monthly PF', value: '₹' + Math.round(employerEPF + employerEPS).toLocaleString('en-IN') },
        { label: 'Est. Corpus (' + years + ' yrs)', value: '₹' + Math.round(corpus).toLocaleString('en-IN') },
      ]
    }
  },

  esic: {
    slug: 'esic', name: 'ESIC Contribution Calculator', emoji: '🏥', category: 'Legal',
    description: 'Calculate ESIC deduction from salary',
    inputs: [
      { id: 'gross', label: 'Gross Monthly Salary', placeholder: 'e.g. 18000', prefix: '₹' },
    ],
    calculate(inputs) {
      const gross = parseFloat(inputs.gross)
      if (!gross) return null
      if (gross > 21000) return [{ label: 'Status', value: 'Not applicable above ₹21,000 gross' }, { label: 'Gross Salary', value: '₹' + gross.toLocaleString('en-IN') }, { label: 'ESIC Limit', value: '₹21,000' }]
      const employee = gross * 0.0075, employer = gross * 0.0325
      return [
        { label: 'Employee ESIC (0.75%)', value: '₹' + Math.round(employee).toLocaleString('en-IN') },
        { label: 'Employer ESIC (3.25%)', value: '₹' + Math.round(employer).toLocaleString('en-IN') },
        { label: 'Total ESIC', value: '₹' + Math.round(employee + employer).toLocaleString('en-IN') },
      ]
    }
  },

  professional_tax: {
    slug: 'professional_tax', name: 'Professional Tax Calculator', emoji: '💼', category: 'Legal',
    description: 'Calculate professional tax based on your salary',
    inputs: [
      { id: 'monthly_salary', label: 'Monthly Gross Salary', placeholder: 'e.g. 40000', prefix: '₹' },
    ],
    calculate(inputs) {
      const salary = parseFloat(inputs.monthly_salary)
      if (!salary) return null
      let pt = 0
      if (salary <= 7500) pt = 0
      else if (salary <= 10000) pt = 175
      else pt = 200
      return [
        { label: 'Monthly Prof. Tax', value: '₹' + pt },
        { label: 'Annual Prof. Tax', value: '₹' + (pt * 12).toLocaleString('en-IN') },
        { label: 'Salary', value: '₹' + salary.toLocaleString('en-IN') + '/month' },
      ]
    }
  },

  rent_agreement: {
    slug: 'rent_agreement', name: 'Rent Agreement Cost', emoji: '📄', category: 'Legal',
    description: 'Estimate cost of rent agreement registration',
    inputs: [
      { id: 'monthly_rent', label: 'Monthly Rent', placeholder: 'e.g. 20000', prefix: '₹' },
      { id: 'duration', label: 'Agreement Duration (months)', placeholder: 'e.g. 11', prefix: 'mo' },
      { id: 'deposit', label: 'Security Deposit', placeholder: 'e.g. 60000', prefix: '₹' },
    ],
    calculate(inputs) {
      const rent = parseFloat(inputs.monthly_rent), months = parseFloat(inputs.duration) || 11, deposit = parseFloat(inputs.deposit) || 0
      if (!rent) return null
      const totalRent = rent * months, stampDuty = months <= 12 ? 100 : totalRent * 0.01
      return [
        { label: 'Total Rent Value', value: '₹' + Math.round(totalRent).toLocaleString('en-IN') },
        { label: 'Est. Stamp Duty', value: '₹' + Math.round(stampDuty).toLocaleString('en-IN') },
        { label: 'Security Deposit', value: '₹' + Math.round(deposit).toLocaleString('en-IN') },
      ]
    }
  },

  capital_gains: {
    slug: 'capital_gains', name: 'Capital Gains Tax Calculator', emoji: '📈', category: 'Legal',
    description: 'Calculate capital gains tax on property or stocks sale',
    inputs: [
      { id: 'buy_price', label: 'Purchase Price', placeholder: 'e.g. 1000000', prefix: '₹' },
      { id: 'sell_price', label: 'Selling Price', placeholder: 'e.g. 1500000', prefix: '₹' },
      { id: 'holding', label: 'Holding Period (years)', placeholder: 'e.g. 3', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const buy = parseFloat(inputs.buy_price), sell = parseFloat(inputs.sell_price), years = parseFloat(inputs.holding)
      if (!buy || !sell || !years) return null
      const gain = sell - buy
      const isLTCG = years >= 2
      const taxRate = isLTCG ? 0.20 : 0.30
      const tax = Math.max(0, gain * taxRate)
      return [
        { label: 'Capital Gain', value: '₹' + Math.round(gain).toLocaleString('en-IN') },
        { label: 'Tax (' + (isLTCG ? 'LTCG 20%' : 'STCG 30%') + ')', value: '₹' + Math.round(tax).toLocaleString('en-IN') },
        { label: 'Net Profit', value: '₹' + Math.round(gain - tax).toLocaleString('en-IN') },
      ]
    }
  },

  superannuation: {
    slug: 'superannuation', name: 'Superannuation Calculator', emoji: '🧓', category: 'Legal',
    description: 'Calculate superannuation fund amount',
    inputs: [
      { id: 'basic', label: 'Basic Salary (Monthly)', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'years', label: 'Years of Service', placeholder: 'e.g. 15', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const basic = parseFloat(inputs.basic), years = parseFloat(inputs.years)
      if (!basic || !years) return null
      const monthly = basic * 0.15, annual = monthly * 12, total = annual * years * 1.2
      return [
        { label: 'Monthly Contribution', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
        { label: 'Annual Contribution', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Est. Corpus', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  bonus_tax: {
    slug: 'bonus_tax', name: 'Bonus Tax Calculator', emoji: '🎁', category: 'Legal',
    description: 'Calculate tax on your annual bonus',
    inputs: [
      { id: 'bonus', label: 'Bonus Amount', placeholder: 'e.g. 100000', prefix: '₹' },
      { id: 'tax_slab', label: 'Your Tax Slab (%)', placeholder: 'e.g. 20', prefix: '%' },
    ],
    calculate(inputs) {
      const bonus = parseFloat(inputs.bonus), slab = parseFloat(inputs.tax_slab)
      if (!bonus || !slab) return null
      const tax = (bonus * slab / 100), cess = tax * 0.04, total = tax + cess
      return [
        { label: 'Tax on Bonus', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Take-Home Bonus', value: '₹' + Math.round(bonus - total).toLocaleString('en-IN') },
        { label: 'Effective Rate', value: ((total / bonus) * 100).toFixed(1) + '%' },
      ]
    }
  },

  patent_fee: {
    slug: 'patent_fee', name: 'Patent Filing Fee Estimator', emoji: '📜', category: 'Legal',
    description: 'Estimate patent filing fee in India',
    inputs: [
      { id: 'entity', label: 'Entity Type (1=Individual 2=Startup 3=Company)', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'claims', label: 'Number of Claims', placeholder: 'e.g. 10', prefix: '✦' },
    ],
    calculate(inputs) {
      const entity = parseFloat(inputs.entity) || 1, claims = parseFloat(inputs.claims) || 10
      if (!claims) return null
      const baseFee = entity === 1 ? 1600 : entity === 2 ? 4000 : 8000
      const extraClaims = Math.max(0, claims - 10) * (entity === 1 ? 160 : entity === 2 ? 400 : 800)
      const total = baseFee + extraClaims
      return [
        { label: 'Filing Fee', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Base Fee', value: '₹' + baseFee.toLocaleString('en-IN') },
        { label: 'Entity Type', value: entity === 1 ? 'Individual' : entity === 2 ? 'Startup' : 'Large Company' },
      ]
    }
  },

  legal_notice: {
    slug: 'legal_notice', name: 'Legal Notice Cost Estimator', emoji: '⚖️', category: 'Legal',
    description: 'Estimate cost of sending a legal notice in India',
    inputs: [
      { id: 'notice_type', label: 'Notice Type (1=Simple 2=Complex 3=Court)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const type = parseFloat(inputs.notice_type) || 1
      const lawyer = type === 1 ? 2000 : type === 2 ? 5000 : 15000
      const misc = type === 1 ? 500 : type === 2 ? 1000 : 3000
      return [
        { label: 'Lawyer Fee (est.)', value: '₹' + lawyer.toLocaleString('en-IN') },
        { label: 'Misc + Stamps', value: '₹' + misc.toLocaleString('en-IN') },
        { label: 'Total Estimate', value: '₹' + (lawyer + misc).toLocaleString('en-IN') },
      ]
    }
  },

  property_tax: {
    slug: 'property_tax', name: 'Property Tax Estimator', emoji: '🏠', category: 'Legal',
    description: 'Estimate annual property tax on your property',
    inputs: [
      { id: 'area', label: 'Property Area (sq ft)', placeholder: 'e.g. 1200', prefix: 'sqft' },
      { id: 'rate', label: 'Tax Rate (₹ per sqft per year)', placeholder: 'e.g. 5', prefix: '₹' },
    ],
    calculate(inputs) {
      const area = parseFloat(inputs.area), rate = parseFloat(inputs.rate)
      if (!area || !rate) return null
      const annual = area * rate, monthly = annual / 12
      return [
        { label: 'Annual Property Tax', value: '₹' + Math.round(annual).toLocaleString('en-IN') },
        { label: 'Quarterly Payment', value: '₹' + Math.round(annual / 4).toLocaleString('en-IN') },
        { label: 'Monthly Provision', value: '₹' + Math.round(monthly).toLocaleString('en-IN') },
      ]
    }
  },

  mutation_charges: {
    slug: 'mutation_charges', name: 'Property Mutation Charges', emoji: '📋', category: 'Legal',
    description: 'Estimate property mutation charges in India',
    inputs: [
      { id: 'property_value', label: 'Property Value', placeholder: 'e.g. 5000000', prefix: '₹' },
    ],
    calculate(inputs) {
      const value = parseFloat(inputs.property_value)
      if (!value) return null
      const mutation = Math.min(value * 0.001, 15000), registration = value * 0.01, stampDuty = value * 0.05
      return [
        { label: 'Mutation Charges', value: '₹' + Math.round(mutation).toLocaleString('en-IN') },
        { label: 'Registration Fee (1%)', value: '₹' + Math.round(registration).toLocaleString('en-IN') },
        { label: 'Stamp Duty (5%)', value: '₹' + Math.round(stampDuty).toLocaleString('en-IN') },
      ]
    }
  },

  court_fee: {
    slug: 'court_fee', name: 'Court Fee Calculator', emoji: '🏛️', category: 'Legal',
    description: 'Estimate court fee for civil cases in India',
    inputs: [
      { id: 'claim_amount', label: 'Claim Amount (₹)', placeholder: 'e.g. 500000', prefix: '₹' },
    ],
    calculate(inputs) {
      const amount = parseFloat(inputs.claim_amount)
      if (!amount) return null
      let fee = 0
      if (amount <= 50000) fee = amount * 0.04
      else if (amount <= 200000) fee = 2000 + (amount - 50000) * 0.03
      else fee = 6500 + (amount - 200000) * 0.02
      return [
        { label: 'Court Fee', value: '₹' + Math.round(fee).toLocaleString('en-IN') },
        { label: 'Claim Amount', value: '₹' + Math.round(amount).toLocaleString('en-IN') },
        { label: 'Fee %', value: ((fee / amount) * 100).toFixed(2) + '%' },
      ]
    }
  },

  gst_input_credit: {
    slug: 'gst_input_credit', name: 'GST Input Tax Credit', emoji: '🧾', category: 'Legal',
    description: 'Calculate GST ITC benefit for your business',
    inputs: [
      { id: 'purchases', label: 'Monthly Purchases (with GST)', placeholder: 'e.g. 200000', prefix: '₹' },
      { id: 'gst_rate', label: 'GST Rate on Purchases (%)', placeholder: 'e.g. 18', prefix: '%' },
      { id: 'sales_gst', label: 'GST Collected on Sales', placeholder: 'e.g. 40000', prefix: '₹' },
    ],
    calculate(inputs) {
      const purchases = parseFloat(inputs.purchases), rate = parseFloat(inputs.gst_rate), salesGST = parseFloat(inputs.sales_gst)
      if (!purchases || !rate || !salesGST) return null
      const itc = (purchases * rate) / (100 + rate), netGST = Math.max(0, salesGST - itc)
      return [
        { label: 'ITC Available', value: '₹' + Math.round(itc).toLocaleString('en-IN') },
        { label: 'Net GST Payable', value: '₹' + Math.round(netGST).toLocaleString('en-IN') },
        { label: 'Cash Savings', value: '₹' + Math.round(Math.min(itc, salesGST)).toLocaleString('en-IN') },
      ]
    }
  },

  pension: {
    slug: 'pension', name: 'Government Pension Calculator', emoji: '👴', category: 'Legal',
    description: 'Estimate government employee pension (Old Pension Scheme)',
    inputs: [
      { id: 'last_basic', label: 'Last Basic Salary', placeholder: 'e.g. 80000', prefix: '₹' },
      { id: 'years_service', label: 'Total Years of Service', placeholder: 'e.g. 30', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const basic = parseFloat(inputs.last_basic), years = parseFloat(inputs.years_service)
      if (!basic || !years) return null
      const pension = (basic * Math.min(years, 33)) / 66
      const gratuity = (basic * years * 15) / 26
      return [
        { label: 'Monthly Pension', value: '₹' + Math.round(pension).toLocaleString('en-IN') },
        { label: 'Gratuity', value: '₹' + Math.round(gratuity).toLocaleString('en-IN') },
        { label: 'Pension % of Basic', value: ((pension / basic) * 100).toFixed(1) + '%' },
      ]
    }
  },

  labour_law_fine: {
    slug: 'labour_law_fine', name: 'Labour Law Penalty Estimator', emoji: '⚠️', category: 'Legal',
    description: 'Estimate penalty for common labour law violations',
    inputs: [
      { id: 'violation', label: 'Violation (1=PF default 2=ESI 3=Min wage)', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'amount', label: 'Amount in Default (₹)', placeholder: 'e.g. 50000', prefix: '₹' },
    ],
    calculate(inputs) {
      const violation = parseFloat(inputs.violation) || 1, amount = parseFloat(inputs.amount) || 0
      const penalty = violation === 1 ? amount * 0.12 + 5000 : violation === 2 ? amount * 0.10 + 3000 : 10000
      const interest = amount * 0.015
      return [
        { label: 'Est. Penalty', value: '₹' + Math.round(penalty).toLocaleString('en-IN') },
        { label: 'Interest (1.5%/mo)', value: '₹' + Math.round(interest).toLocaleString('en-IN') },
        { label: 'Total Liability', value: '₹' + Math.round(penalty + interest).toLocaleString('en-IN') },
      ]
    }
  },

  income_tax_new_vs_old: {
    slug: 'income_tax_new_vs_old', name: 'New vs Old Tax Regime', emoji: '🔄', category: 'Legal',
    description: 'Compare New vs Old income tax regime to pick the best',
    inputs: [
      { id: 'income', label: 'Annual Gross Income', placeholder: 'e.g. 1000000', prefix: '₹' },
      { id: 'deductions', label: 'Total Deductions (80C+HRA+etc.)', placeholder: 'e.g. 250000', prefix: '₹' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income), deductions = parseFloat(inputs.deductions) || 0
      if (!income) return null
      const oldTaxable = Math.max(0, income - deductions - 50000)
      let oldTax = 0
      if (oldTaxable > 1000000) oldTax = 112500 + (oldTaxable - 1000000) * 0.30
      else if (oldTaxable > 500000) oldTax = 12500 + (oldTaxable - 500000) * 0.20
      else if (oldTaxable > 250000) oldTax = (oldTaxable - 250000) * 0.05
      oldTax *= 1.04
      let newTax = 0
      if (income > 1500000) newTax = 150000 + (income - 1500000) * 0.30
      else if (income > 1200000) newTax = 90000 + (income - 1200000) * 0.20
      else if (income > 900000) newTax = 45000 + (income - 900000) * 0.15
      else if (income > 600000) newTax = 15000 + (income - 600000) * 0.10
      else if (income > 300000) newTax = (income - 300000) * 0.05
      newTax *= 1.04
      return [
        { label: 'Old Regime Tax', value: '₹' + Math.round(oldTax).toLocaleString('en-IN') },
        { label: 'New Regime Tax', value: '₹' + Math.round(newTax).toLocaleString('en-IN') },
        { label: 'Better Choice', value: oldTax < newTax ? '✅ Old Regime saves ₹' + Math.round(newTax - oldTax).toLocaleString('en-IN') : '✅ New Regime saves ₹' + Math.round(oldTax - newTax).toLocaleString('en-IN') },
      ]
    }
  },

  rti_fee: {
    slug: 'rti_fee', name: 'RTI Application Fee', emoji: '📝', category: 'Legal',
    description: 'Calculate Right to Information application fee',
    inputs: [
      { id: 'pages', label: 'Number of Pages Requested', placeholder: 'e.g. 10', prefix: '✦' },
      { id: 'bpl', label: 'BPL Card Holder? (1=Yes 0=No)', placeholder: 'e.g. 0', prefix: '✦' },
    ],
    calculate(inputs) {
      const pages = parseFloat(inputs.pages), bpl = parseFloat(inputs.bpl)
      if (!pages) return null
      if (bpl === 1) return [{ label: 'RTI Fee', value: '₹0 (Free for BPL)' }, { label: 'Pages', value: pages + ' pages' }, { label: 'Copy Fee', value: '₹0 (exempted)' }]
      const appFee = 10, copyFee = pages * 2
      return [
        { label: 'Application Fee', value: '₹' + appFee },
        { label: 'Copy Charges', value: '₹' + copyFee + ' (₹2 per page)' },
        { label: 'Total', value: '₹' + (appFee + copyFee) },
      ]
    }
  },

  consumer_forum: {
    slug: 'consumer_forum', name: 'Consumer Forum Fee', emoji: '🛒', category: 'Legal',
    description: 'Calculate filing fee for consumer court complaint',
    inputs: [
      { id: 'claim', label: 'Claim Amount (₹)', placeholder: 'e.g. 500000', prefix: '₹' },
    ],
    calculate(inputs) {
      const claim = parseFloat(inputs.claim)
      if (!claim) return null
      let fee = 0, forum = ''
      if (claim <= 100000) { fee = 100; forum = 'District Forum' }
      else if (claim <= 2000000) { fee = 200; forum = 'State Commission' }
      else { fee = 5000; forum = 'National Commission' }
      return [
        { label: 'Filing Fee', value: '₹' + fee },
        { label: 'Appropriate Forum', value: forum },
        { label: 'Claim Value', value: '₹' + Math.round(claim).toLocaleString('en-IN') },
      ]
    }
  },

  trademark_fee: {
    slug: 'trademark_fee', name: 'Trademark Filing Fee', emoji: '™️', category: 'Legal',
    description: 'Estimate trademark registration fee in India',
    inputs: [
      { id: 'entity', label: 'Entity (1=Individual/Startup 2=Company)', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'classes', label: 'Number of Classes', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const entity = parseFloat(inputs.entity) || 1, classes = parseFloat(inputs.classes) || 1
      const feePerClass = entity === 1 ? 4500 : 9000
      const total = feePerClass * classes
      return [
        { label: 'Filing Fee', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Per Class', value: '₹' + feePerClass.toLocaleString('en-IN') },
        { label: 'Processing Time', value: '18-24 months typically' },
      ]
    }
  },

  salary_slip: {
    slug: 'salary_slip', name: 'Salary Slip Generator', emoji: '🧾', category: 'Legal',
    description: 'Calculate all salary components from CTC',
    inputs: [
      { id: 'ctc', label: 'Annual CTC', placeholder: 'e.g. 600000', prefix: '₹' },
    ],
    calculate(inputs) {
      const ctc = parseFloat(inputs.ctc)
      if (!ctc) return null
      const monthly = ctc / 12
      const basic = monthly * 0.40, hra = basic * 0.50, special = monthly - basic - hra
      const pf = basic * 0.12, pt = monthly > 10000 ? 200 : 0
      const takehome = monthly - pf - pt
      return [
        { label: 'Basic + HRA', value: '₹' + Math.round(basic).toLocaleString('en-IN') + ' + ₹' + Math.round(hra).toLocaleString('en-IN') },
        { label: 'PF + Prof. Tax', value: '₹' + Math.round(pf).toLocaleString('en-IN') + ' + ₹' + pt },
        { label: 'Monthly Take-Home', value: '₹' + Math.round(takehome).toLocaleString('en-IN') },
      ]
    }
  },

  gst_reverse: {
    slug: 'gst_reverse', name: 'Reverse GST Calculator', emoji: '🔁', category: 'Legal',
    description: 'Extract original price and GST from GST-inclusive amount',
    inputs: [
      { id: 'total', label: 'GST-Inclusive Amount', placeholder: 'e.g. 11800', prefix: '₹' },
      { id: 'rate', label: 'GST Rate (%)', placeholder: 'e.g. 18', prefix: '%' },
    ],
    calculate(inputs) {
      const total = parseFloat(inputs.total), rate = parseFloat(inputs.rate)
      if (!total || !rate) return null
      const original = total / (1 + rate / 100), gst = total - original
      return [
        { label: 'Original Price (excl. GST)', value: '₹' + Math.round(original).toLocaleString('en-IN') },
        { label: 'GST Amount', value: '₹' + Math.round(gst).toLocaleString('en-IN') },
        { label: 'GST Rate', value: rate + '%' },
      ]
    }
  },

  // ── ASTROLOGY (14 more) ──────────────────────────────

  rashi: {
    slug: 'rashi', name: 'Rashi Calculator', emoji: '🌟', category: 'Astrology',
    description: 'Find your Vedic Rashi (Moon Sign) by birth details',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month)
      if (!day || !month) return null
      const rashis = ['Makar (Capricorn)','Kumbha (Aquarius)','Meena (Pisces)','Mesha (Aries)','Vrishabha (Taurus)','Mithuna (Gemini)','Karka (Cancer)','Simha (Leo)','Kanya (Virgo)','Tula (Libra)','Vrishchika (Scorpio)','Dhanu (Sagittarius)']
      const lords = ['Saturn','Saturn','Jupiter','Mars','Venus','Mercury','Moon','Sun','Mercury','Venus','Mars','Jupiter']
      const limits = [19,18,20,19,20,20,22,22,22,22,21,21]
      const idx = day <= limits[month-1] ? month-1 : month % 12
      return [
        { label: 'Your Rashi', value: rashis[idx] },
        { label: 'Ruling Planet', value: lords[idx] },
        { label: 'Element', value: [0,3,7,11].includes(idx) ? '🔥 Fire (Agni)' : [1,5,9].includes(idx) ? '🌍 Earth (Prithvi)' : [2,6,10].includes(idx) ? '💨 Air (Vayu)' : '💧 Water (Jal)' },
      ]
    }
  },

  nakshatra: {
    slug: 'nakshatra', name: 'Nakshatra Calculator', emoji: '✨', category: 'Astrology',
    description: 'Find your birth Nakshatra',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const nakshatras = ['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati']
      const idx = Math.abs((day * 3 + month * 7 + year)) % 27
      const lords = ['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury']
      return [
        { label: 'Birth Nakshatra', value: nakshatras[idx] },
        { label: 'Ruling Planet', value: lords[idx % 9] },
        { label: 'Pada', value: ((day % 4) + 1) + 'th Pada' },
      ]
    }
  },

  lucky_color: {
    slug: 'lucky_color', name: 'Lucky Color by Birthday', emoji: '🎨', category: 'Astrology',
    description: 'Find your lucky color based on numerology',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      const digits = String(day + month + year).split('').reduce((a, b) => a + parseInt(b), 0) % 9 || 9
      const colors = { 1: '🔴 Red & Gold', 2: '🟠 Orange & Cream', 3: '💛 Yellow & Purple', 4: '🟢 Green & Blue', 5: '⚪ Silver & White', 6: '💙 Blue & Pink', 7: '🟣 Violet & White', 8: '⚫ Black & Dark Blue', 9: '🔴 Red & Maroon' }
      const gems = { 1: 'Ruby', 2: 'Pearl', 3: 'Yellow Sapphire', 4: 'Emerald', 5: 'Emerald', 6: 'Diamond', 7: 'Cat\'s Eye', 8: 'Blue Sapphire', 9: 'Red Coral' }
      return [
        { label: 'Lucky Colors', value: colors[digits] },
        { label: 'Lucky Gemstone', value: gems[digits] },
        { label: 'Numerology Number', value: String(digits) },
      ]
    }
  },

  birth_chart_element: {
    slug: 'birth_chart_element', name: 'Birth Element Calculator', emoji: '🔥', category: 'Astrology',
    description: 'Find your dominant element based on birth date',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month)
      if (!day || !month) return null
      const elements = ['🔥 Fire','🌍 Earth','💨 Air','💧 Water']
      const traits = ['Passionate, Bold, Energetic','Grounded, Reliable, Patient','Curious, Intellectual, Social','Intuitive, Emotional, Empathetic']
      const idx = ((month - 1) % 4)
      return [
        { label: 'Your Element', value: elements[idx] },
        { label: 'Traits', value: traits[idx] },
        { label: 'Compatible With', value: elements[(idx + 1) % 4] + ' & ' + elements[(idx + 3) % 4] },
      ]
    }
  },

  vastu_number: {
    slug: 'vastu_number', name: 'Vastu House Number', emoji: '🏠', category: 'Astrology',
    description: 'Check if your house number is Vastu compatible',
    inputs: [
      { id: 'house_number', label: 'House/Flat Number', placeholder: 'e.g. 42', prefix: '✦' },
    ],
    calculate(inputs) {
      const num = inputs.house_number ? String(inputs.house_number).split('').filter(c => !isNaN(c)).reduce((a, b) => a + parseInt(b), 0) : 0
      if (!num) return null
      const single = num > 9 ? String(num).split('').reduce((a, b) => a + parseInt(b), 0) : num
      const meanings = { 1: '✅ Leadership & Success', 2: '✅ Harmony & Balance', 3: '✅ Creativity & Joy', 4: '⚠️ Stability (some say avoid)', 5: '✅ Change & Growth', 6: '🏆 Love & Abundance', 7: '✅ Wisdom & Spirituality', 8: '⚠️ Power (needs balance)', 9: '🏆 Completion & Blessings' }
      return [
        { label: 'Vastu Number', value: String(single) },
        { label: 'Meaning', value: meanings[single] || '✅ Good' },
        { label: 'Planet', value: ['','Sun','Moon','Jupiter','Rahu','Mercury','Venus','Ketu','Saturn','Mars'][single] },
      ]
    }
  },

  auspicious_date: {
    slug: 'auspicious_date', name: 'Auspicious Day Finder', emoji: '📅', category: 'Astrology',
    description: 'Find auspicious days in a month for important events',
    inputs: [
      { id: 'month', label: 'Month', placeholder: 'e.g. 3', prefix: 'MM' },
      { id: 'year', label: 'Year', placeholder: 'e.g. 2026', prefix: 'YY' },
    ],
    calculate(inputs) {
      const month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!month || !year) return null
      const auspicious = [2, 5, 7, 10, 11, 13, 15]
      const dates = auspicious.map(d => new Date(year, month - 1, d).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })).join(', ')
      return [
        { label: 'Auspicious Dates', value: dates },
        { label: 'Best Days', value: 'Monday, Wednesday, Thursday' },
        { label: 'Avoid', value: 'Tuesday for new starts, Saturday for travel' },
      ]
    }
  },

  planet_position: {
    slug: 'planet_position', name: 'Planetary Period (Dasha)', emoji: '🪐', category: 'Astrology',
    description: 'Estimate your current Vedic Dasha period',
    inputs: [
      { id: 'birth_year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
      { id: 'birth_month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
    ],
    calculate(inputs) {
      const year = parseInt(inputs.birth_year), month = parseInt(inputs.birth_month)
      if (!year || !month) return null
      const dashaOrder = ['Sun (6yr)','Moon (10yr)','Mars (7yr)','Rahu (18yr)','Jupiter (16yr)','Saturn (19yr)','Mercury (17yr)','Ketu (7yr)','Venus (20yr)']
      const age = new Date().getFullYear() - year
      const idx = Math.floor(age / 6) % 9
      return [
        { label: 'Current Dasha', value: dashaOrder[idx] },
        { label: 'Next Dasha', value: dashaOrder[(idx + 1) % 9] },
        { label: 'Your Age', value: age + ' years' },
      ]
    }
  },

  gem_recommendation: {
    slug: 'gem_recommendation', name: 'Gemstone Recommender', emoji: '💎', category: 'Astrology',
    description: 'Get gemstone recommendation by your zodiac sign',
    inputs: [
      { id: 'sign', label: 'Zodiac Sign (1=Aries...12=Pisces)', placeholder: 'e.g. 5', prefix: '✦' },
    ],
    calculate(inputs) {
      const sign = parseInt(inputs.sign)
      if (!sign || sign > 12) return null
      const gems = ['','Red Coral 🔴','Diamond 💎','Emerald 💚','Pearl 🤍','Ruby ❤️','Emerald 💚','Diamond 💎','Red Coral 🔴','Yellow Sapphire 💛','Blue Sapphire 💙','Blue Sapphire 💙','Yellow Sapphire 💛']
      const signs = ['','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
      const metals = ['','Gold','Silver','Gold','Silver','Gold','Gold','Silver','Gold','Gold','Gold','Silver','Gold']
      return [
        { label: 'Recommended Gem', value: gems[sign] },
        { label: 'Ideal Metal', value: metals[sign] },
        { label: 'For Sign', value: signs[sign] },
      ]
    }
  },

  tarot_number: {
    slug: 'tarot_number', name: 'Tarot Birth Card', emoji: '🃏', category: 'Astrology',
    description: 'Find your Tarot birth card by numerology',
    inputs: [
      { id: 'day', label: 'Birth Day', placeholder: 'e.g. 15', prefix: 'DD' },
      { id: 'month', label: 'Birth Month', placeholder: 'e.g. 8', prefix: 'MM' },
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day), month = parseInt(inputs.month), year = parseInt(inputs.year)
      if (!day || !month || !year) return null
      let sum = day + month + String(year).split('').reduce((a, b) => a + parseInt(b), 0)
      while (sum > 22) sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0)
      const cards = ['','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit','Wheel of Fortune','Justice','The Hanged Man','Death (Transformation)','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World','The Fool']
      return [
        { label: 'Tarot Birth Card', value: cards[sum] },
        { label: 'Card Number', value: String(sum) },
        { label: 'Energy', value: sum <= 7 ? '🌱 New Beginnings' : sum <= 14 ? '⚖️ Balance & Growth' : '🌟 Higher Purpose' },
      ]
    }
  },

  feng_shui_number: {
    slug: 'feng_shui_number', name: 'Feng Shui Kua Number', emoji: '☯️', category: 'Astrology',
    description: 'Calculate your Feng Shui Kua number for lucky directions',
    inputs: [
      { id: 'year', label: 'Birth Year', placeholder: 'e.g. 1995', prefix: 'YY' },
      { id: 'gender', label: 'Gender (1=Male 2=Female)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const year = parseInt(inputs.year), gender = parseInt(inputs.gender) || 1
      if (!year) return null
      const lastTwo = year % 100
      let digits = String(lastTwo).split('').reduce((a, b) => a + parseInt(b), 0)
      while (digits > 9) digits = String(digits).split('').reduce((a, b) => a + parseInt(b), 0)
      const kua = gender === 1 ? (10 - digits) % 9 || 9 : (5 + digits) % 9 || 9
      const group = kua <= 4 ? 'East Group' : 'West Group'
      const lucky = kua === 1 ? 'North, South, East, Southeast' : kua === 2 ? 'Southwest, West, Northwest, Northeast' : 'Varies by Kua'
      return [
        { label: 'Kua Number', value: String(kua) },
        { label: 'Group', value: group },
        { label: 'Lucky Directions', value: lucky },
      ]
    }
  },

  dosha_calculator: {
    slug: 'dosha_calculator', name: 'Ayurvedic Dosha Calculator', emoji: '🌿', category: 'Astrology',
    description: 'Find your dominant Ayurvedic dosha — Vata, Pitta or Kapha',
    inputs: [
      { id: 'build', label: 'Body Build (1=Thin 2=Medium 3=Heavy)', placeholder: 'e.g. 2', prefix: '✦' },
      { id: 'skin', label: 'Skin Type (1=Dry 2=Oily 3=Thick)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const build = parseFloat(inputs.build) || 2, skin = parseFloat(inputs.skin) || 2
      if (!build || !skin) return null
      const score = build + skin
      const dosha = score <= 3 ? 'Vata 🌬️' : score <= 5 ? 'Pitta 🔥' : 'Kapha 🌊'
      const traits = { 'Vata 🌬️': 'Creative, Quick, Enthusiastic', 'Pitta 🔥': 'Sharp, Focused, Driven', 'Kapha 🌊': 'Calm, Loyal, Nurturing' }
      const foods = { 'Vata 🌬️': 'Warm, Oily, Sweet foods', 'Pitta 🔥': 'Cool, Bitter, Astringent foods', 'Kapha 🌊': 'Light, Spicy, Bitter foods' }
      return [
        { label: 'Your Dosha', value: dosha },
        { label: 'Traits', value: traits[dosha] },
        { label: 'Ideal Diet', value: foods[dosha] },
      ]
    }
  },

  muhurat: {
    slug: 'muhurat', name: 'Muhurat Time Checker', emoji: '🕐', category: 'Astrology',
    description: 'Check auspicious time periods (Muhurats) for today',
    inputs: [
      { id: 'day_of_week', label: 'Day (1=Mon 2=Tue...7=Sun)', placeholder: 'e.g. 3', prefix: '✦' },
    ],
    calculate(inputs) {
      const day = parseInt(inputs.day_of_week) || 1
      const muhurats = {
        1: { good: '6:00-8:00 AM, 12:00-1:30 PM', avoid: '3:00-4:30 PM' },
        2: { good: '7:30-9:00 AM', avoid: 'Whole day (inauspicious for starts)' },
        3: { good: '7:00-9:00 AM, 2:00-4:00 PM', avoid: '10:30-12:00 PM' },
        4: { good: '6:00-9:00 AM, 11:00 AM-1:00 PM', avoid: '2:00-3:30 PM' },
        5: { good: 'All morning, 11:00 AM-2:00 PM', avoid: 'After 4 PM' },
        6: { good: '7:00-9:00 AM', avoid: 'Most of day (inauspicious)' },
        7: { good: '9:00-11:00 AM', avoid: '4:00-6:00 PM' },
      }
      const m = muhurats[day]
      const days = ['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
      return [
        { label: 'Day', value: days[day] },
        { label: 'Auspicious Times', value: m.good },
        { label: 'Avoid', value: m.avoid },
      ]
    }
  },

  name_numerology: {
    slug: 'name_numerology', name: 'Name Numerology', emoji: '📛', category: 'Astrology',
    description: 'Discover the hidden meaning of your name through numbers',
    inputs: [{ id: 'name', label: 'Enter Your Name', placeholder: 'e.g. Rahul Kumar', prefix: '✦' }],
    calculate(inputs) {
      const name = (inputs.name || '').toUpperCase().replace(/[^A-Z]/g, '')
      if (!name) return null
      const chaldean = { A:1,B:2,C:3,D:4,E:5,F:8,G:3,H:5,I:1,J:1,K:2,L:3,M:4,N:5,O:7,P:8,Q:1,R:2,S:3,T:4,U:6,V:6,W:6,X:5,Y:1,Z:7 }
      let sum = name.split('').reduce((a, c) => a + (chaldean[c] || 0), 0)
      while (sum > 9) sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0)
      const meanings = ['','Independent Leader','Intuitive Peacemaker','Joyful Communicator','Practical Builder','Freedom Seeker','Nurturing Caregiver','Spiritual Seeker','Ambitious Powerhouse','Compassionate Humanitarian']
      return [
        { label: 'Name Number', value: String(sum) },
        { label: 'Personality', value: meanings[sum] },
        { label: 'Lucky Day', value: ['','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Saturday','Tuesday'][sum] },
      ]
    }
  },

  // ── GENERAL (20 more) ────────────────────────────────

  emi_vs_cash: {
    slug: 'emi_vs_cash', name: 'EMI vs Cash Purchase', emoji: '💳', category: 'General',
    description: 'Should you pay EMI or cash? Find the real cost difference',
    inputs: [
      { id: 'price', label: 'Product Price', placeholder: 'e.g. 50000', prefix: '₹' },
      { id: 'emi', label: 'Monthly EMI', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'months', label: 'EMI Months', placeholder: 'e.g. 12', prefix: 'mo' },
    ],
    calculate(inputs) {
      const price = parseFloat(inputs.price), emi = parseFloat(inputs.emi), months = parseFloat(inputs.months)
      if (!price || !emi || !months) return null
      const totalEmi = emi * months, extra = totalEmi - price
      return [
        { label: 'Total EMI Cost', value: '₹' + Math.round(totalEmi).toLocaleString('en-IN') },
        { label: 'Extra You Pay', value: '₹' + Math.round(extra).toLocaleString('en-IN') },
        { label: 'Recommendation', value: extra > price * 0.1 ? '💰 Cash is better' : '✅ EMI is reasonable' },
      ]
    }
  },

  electricity_bill: {
    slug: 'electricity_bill', name: 'Electricity Bill Calculator', emoji: '⚡', category: 'General',
    description: 'Estimate your monthly electricity bill',
    inputs: [
      { id: 'units', label: 'Units Consumed (kWh)', placeholder: 'e.g. 200', prefix: 'kWh' },
      { id: 'rate', label: 'Rate per Unit (₹)', placeholder: 'e.g. 6', prefix: '₹' },
    ],
    calculate(inputs) {
      const units = parseFloat(inputs.units), rate = parseFloat(inputs.rate)
      if (!units || !rate) return null
      const bill = units * rate, fixed = 100, total = bill + fixed
      return [
        { label: 'Energy Charges', value: '₹' + Math.round(bill).toLocaleString('en-IN') },
        { label: 'Fixed + Taxes (est.)', value: '₹' + fixed },
        { label: 'Total Bill', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  water_bill: {
    slug: 'water_bill', name: 'Water Bill Estimator', emoji: '🚰', category: 'General',
    description: 'Estimate your monthly water bill',
    inputs: [
      { id: 'members', label: 'Family Members', placeholder: 'e.g. 4', prefix: '👤' },
      { id: 'rate', label: 'Rate per 1000L', placeholder: 'e.g. 10', prefix: '₹' },
    ],
    calculate(inputs) {
      const members = parseFloat(inputs.members), rate = parseFloat(inputs.rate)
      if (!members || !rate) return null
      const liters = members * 150 * 30, bill = (liters / 1000) * rate
      return [
        { label: 'Est. Usage', value: Math.round(liters).toLocaleString('en-IN') + ' litres/month' },
        { label: 'Water Bill', value: '₹' + Math.round(bill).toLocaleString('en-IN') },
        { label: 'Per Person', value: '₹' + Math.round(bill / members).toLocaleString('en-IN') },
      ]
    }
  },

  mobile_data: {
    slug: 'mobile_data', name: 'Mobile Data Usage Calculator', emoji: '📱', category: 'General',
    description: 'Track if your daily data usage fits your plan',
    inputs: [
      { id: 'plan_gb', label: 'Plan Data (GB per month)', placeholder: 'e.g. 1.5', prefix: 'GB' },
      { id: 'days', label: 'Days in Month', placeholder: 'e.g. 30', prefix: 'days' },
    ],
    calculate(inputs) {
      const plan = parseFloat(inputs.plan_gb), days = parseFloat(inputs.days) || 30
      if (!plan) return null
      const daily = plan / days, hourly = daily / 24
      return [
        { label: 'Daily Allowance', value: (daily * 1024).toFixed(0) + ' MB/day' },
        { label: 'Hourly Allowance', value: (hourly * 1024).toFixed(0) + ' MB/hour' },
        { label: 'Monthly Total', value: plan + ' GB' },
      ]
    }
  },

  petrol_vs_ev: {
    slug: 'petrol_vs_ev', name: 'Petrol vs EV Cost', emoji: '🚗', category: 'General',
    description: 'Compare yearly running cost of petrol car vs EV',
    inputs: [
      { id: 'km_per_day', label: 'Daily Drive (km)', placeholder: 'e.g. 40', prefix: 'km' },
      { id: 'petrol_price', label: 'Petrol Price (per litre)', placeholder: 'e.g. 105', prefix: '₹' },
    ],
    calculate(inputs) {
      const km = parseFloat(inputs.km_per_day), petrol = parseFloat(inputs.petrol_price)
      if (!km || !petrol) return null
      const annualKm = km * 365
      const petrolCost = (annualKm / 15) * petrol
      const evCost = annualKm * 0.8
      return [
        { label: 'Petrol Car (Annual)', value: '₹' + Math.round(petrolCost).toLocaleString('en-IN') },
        { label: 'EV (Annual, ₹0.8/km)', value: '₹' + Math.round(evCost).toLocaleString('en-IN') },
        { label: 'EV Saves Per Year', value: '₹' + Math.round(petrolCost - evCost).toLocaleString('en-IN') },
      ]
    }
  },

  marriage_age: {
    slug: 'marriage_age', name: 'Marriage Age Calculator', emoji: '💍', category: 'General',
    description: 'Calculate how many years until legal marriage age',
    inputs: [
      { id: 'dob_year', label: 'Birth Year', placeholder: 'e.g. 2005', prefix: 'YY' },
      { id: 'gender', label: 'Gender (1=Male 2=Female)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const year = parseInt(inputs.dob_year), gender = parseInt(inputs.gender) || 1
      if (!year) return null
      const currentAge = new Date().getFullYear() - year
      const legalAge = gender === 2 ? 18 : 21
      const yearsLeft = Math.max(0, legalAge - currentAge)
      return [
        { label: 'Current Age', value: currentAge + ' years' },
        { label: 'Legal Marriage Age', value: legalAge + ' years (' + (gender === 2 ? 'Female' : 'Male') + ')' },
        { label: yearsLeft > 0 ? 'Years Until Eligible' : 'Status', value: yearsLeft > 0 ? yearsLeft + ' years' : '✅ Eligible for marriage' },
      ]
    }
  },

  stamp_paper_cost: {
    slug: 'stamp_paper_cost', name: 'Stamp Paper Cost', emoji: '📄', category: 'General',
    description: 'Find the cost of stamp paper for agreements in India',
    inputs: [
      { id: 'type', label: 'Document (1=Affidavit 2=Agreement 3=Bond)', placeholder: 'e.g. 2', prefix: '✦' },
      { id: 'state', label: 'State (1=MH 2=DL 3=KA 4=Other)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const type = parseFloat(inputs.type) || 2, state = parseFloat(inputs.state) || 4
      const values = [[100, 200, 100, 50], [200, 100, 200, 100], [500, 500, 500, 200]]
      const cost = values[type - 1]?.[state - 1] || 100
      return [
        { label: 'Stamp Paper Value', value: '₹' + cost },
        { label: 'Notary Charges', value: '₹100 - ₹500 extra' },
        { label: 'Total Estimate', value: '₹' + (cost + 200) + ' - ₹' + (cost + 500) },
      ]
    }
  },

  internet_speed: {
    slug: 'internet_speed', name: 'Internet Speed Calculator', emoji: '🌐', category: 'General',
    description: 'Calculate download time for files at your internet speed',
    inputs: [
      { id: 'file_gb', label: 'File Size (GB)', placeholder: 'e.g. 2', prefix: 'GB' },
      { id: 'speed_mbps', label: 'Internet Speed (Mbps)', placeholder: 'e.g. 50', prefix: 'Mbps' },
    ],
    calculate(inputs) {
      const file = parseFloat(inputs.file_gb), speed = parseFloat(inputs.speed_mbps)
      if (!file || !speed) return null
      const seconds = (file * 1024 * 8) / speed
      const minutes = Math.floor(seconds / 60), secs = Math.round(seconds % 60)
      return [
        { label: 'Download Time', value: minutes + ' min ' + secs + ' sec' },
        { label: 'File Size', value: (file * 1024).toFixed(0) + ' MB' },
        { label: 'Speed', value: speed + ' Mbps' },
      ]
    }
  },

  cooking_converter: {
    slug: 'cooking_converter', name: 'Cooking Measurement Converter', emoji: '🍳', category: 'General',
    description: 'Convert cups, tablespoons, teaspoons and grams',
    inputs: [
      { id: 'cups', label: 'Cups', placeholder: 'e.g. 2', prefix: 'cup' },
    ],
    calculate(inputs) {
      const cups = parseFloat(inputs.cups)
      if (!cups) return null
      return [
        { label: 'Tablespoons', value: (cups * 16).toFixed(0) + ' tbsp' },
        { label: 'Teaspoons', value: (cups * 48).toFixed(0) + ' tsp' },
        { label: 'Millilitres', value: (cups * 240).toFixed(0) + ' ml' },
      ]
    }
  },

  paint_calculator: {
    slug: 'paint_calculator', name: 'Paint Calculator', emoji: '🎨', category: 'General',
    description: 'Calculate how many litres of paint you need',
    inputs: [
      { id: 'length', label: 'Room Length (ft)', placeholder: 'e.g. 15', prefix: 'ft' },
      { id: 'width', label: 'Room Width (ft)', placeholder: 'e.g. 12', prefix: 'ft' },
      { id: 'height', label: 'Wall Height (ft)', placeholder: 'e.g. 10', prefix: 'ft' },
    ],
    calculate(inputs) {
      const l = parseFloat(inputs.length), w = parseFloat(inputs.width), h = parseFloat(inputs.height)
      if (!l || !w || !h) return null
      const wallArea = 2 * (l + w) * h, ceilingArea = l * w
      const totalArea = wallArea + ceilingArea, litres = totalArea / 120
      return [
        { label: 'Paint Needed', value: litres.toFixed(1) + ' litres' },
        { label: 'For 2 Coats', value: (litres * 2).toFixed(1) + ' litres' },
        { label: 'Total Wall Area', value: totalArea.toFixed(0) + ' sq ft' },
      ]
    }
  },

  flooring_calculator: {
    slug: 'flooring_calculator', name: 'Flooring Area Calculator', emoji: '🏠', category: 'General',
    description: 'Calculate tiles or flooring needed for your room',
    inputs: [
      { id: 'length', label: 'Room Length (ft)', placeholder: 'e.g. 15', prefix: 'ft' },
      { id: 'width', label: 'Room Width (ft)', placeholder: 'e.g. 12', prefix: 'ft' },
      { id: 'tile_size', label: 'Tile Size (inches)', placeholder: 'e.g. 24', prefix: 'in' },
    ],
    calculate(inputs) {
      const l = parseFloat(inputs.length), w = parseFloat(inputs.width), tile = parseFloat(inputs.tile_size) || 12
      if (!l || !w) return null
      const area = l * w, tileSqFt = (tile / 12) * (tile / 12), tiles = Math.ceil(area / tileSqFt * 1.1)
      return [
        { label: 'Room Area', value: area.toFixed(0) + ' sq ft' },
        { label: 'Tiles Needed', value: tiles + ' tiles (incl. 10% waste)' },
        { label: 'Boxes (12 tiles)', value: Math.ceil(tiles / 12) + ' boxes (approx)' },
      ]
    }
  },

  road_trip: {
    slug: 'road_trip', name: 'Road Trip Planner', emoji: '🗺️', category: 'General',
    description: 'Calculate total cost and time for a road trip',
    inputs: [
      { id: 'distance', label: 'Total Distance (km)', placeholder: 'e.g. 500', prefix: 'km' },
      { id: 'speed', label: 'Average Speed (km/h)', placeholder: 'e.g. 80', prefix: 'km/h' },
      { id: 'mileage', label: 'Vehicle Mileage (km/L)', placeholder: 'e.g. 15', prefix: 'km/L' },
      { id: 'fuel_price', label: 'Fuel Price (per litre)', placeholder: 'e.g. 105', prefix: '₹' },
    ],
    calculate(inputs) {
      const dist = parseFloat(inputs.distance), speed = parseFloat(inputs.speed), mileage = parseFloat(inputs.mileage), price = parseFloat(inputs.fuel_price)
      if (!dist || !speed) return null
      const hours = dist / speed, fuel = mileage ? dist / mileage : 0, cost = fuel * (price || 0)
      return [
        { label: 'Travel Time', value: Math.floor(hours) + 'h ' + Math.round((hours % 1) * 60) + 'min' },
        { label: 'Fuel Needed', value: fuel.toFixed(1) + ' litres' },
        { label: 'Fuel Cost', value: '₹' + Math.round(cost).toLocaleString('en-IN') },
      ]
    }
  },

  gift_budget: {
    slug: 'gift_budget', name: 'Gift Budget Calculator', emoji: '🎁', category: 'General',
    description: 'Plan your gifting budget for festivals and occasions',
    inputs: [
      { id: 'people', label: 'Number of People to Gift', placeholder: 'e.g. 10', prefix: '👤' },
      { id: 'budget_per', label: 'Budget Per Gift', placeholder: 'e.g. 500', prefix: '₹' },
    ],
    calculate(inputs) {
      const people = parseFloat(inputs.people), budget = parseFloat(inputs.budget_per)
      if (!people || !budget) return null
      const total = people * budget
      return [
        { label: 'Total Gift Budget', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Per Person', value: '₹' + Math.round(budget).toLocaleString('en-IN') },
        { label: 'Monthly Savings (12mo)', value: '₹' + Math.round(total / 12).toLocaleString('en-IN') },
      ]
    }
  },

  party_cost: {
    slug: 'party_cost', name: 'Party Cost Calculator', emoji: '🎉', category: 'General',
    description: 'Estimate total cost for hosting a party or event',
    inputs: [
      { id: 'guests', label: 'Number of Guests', placeholder: 'e.g. 50', prefix: '👤' },
      { id: 'cost_per', label: 'Cost Per Person (food + drinks)', placeholder: 'e.g. 500', prefix: '₹' },
      { id: 'venue', label: 'Venue Cost', placeholder: 'e.g. 10000', prefix: '₹' },
    ],
    calculate(inputs) {
      const guests = parseFloat(inputs.guests), cost = parseFloat(inputs.cost_per), venue = parseFloat(inputs.venue) || 0
      if (!guests || !cost) return null
      const food = guests * cost, total = food + venue
      return [
        { label: 'Food & Drinks', value: '₹' + Math.round(food).toLocaleString('en-IN') },
        { label: 'Venue Cost', value: '₹' + Math.round(venue).toLocaleString('en-IN') },
        { label: 'Total Cost', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  taxi_fare: {
    slug: 'taxi_fare', name: 'Taxi Fare Estimator', emoji: '🚕', category: 'General',
    description: 'Estimate Ola/Uber fare for any distance',
    inputs: [
      { id: 'distance', label: 'Distance (km)', placeholder: 'e.g. 10', prefix: 'km' },
      { id: 'type', label: 'Cab Type (1=Auto 2=Mini 3=Sedan 4=SUV)', placeholder: 'e.g. 2', prefix: '✦' },
    ],
    calculate(inputs) {
      const dist = parseFloat(inputs.distance), type = parseFloat(inputs.type) || 2
      if (!dist) return null
      const base = [25, 50, 75, 100][type - 1], perKm = [8, 12, 16, 20][type - 1]
      const fare = base + (Math.max(0, dist - 2) * perKm)
      return [
        { label: 'Estimated Fare', value: '₹' + Math.round(fare) + ' - ₹' + Math.round(fare * 1.3) },
        { label: 'Base Fare', value: '₹' + base },
        { label: 'Per KM Rate', value: '₹' + perKm + '/km' },
      ]
    }
  },

  mobile_recharge: {
    slug: 'mobile_recharge', name: 'Mobile Recharge Planner', emoji: '📲', category: 'General',
    description: 'Find the best mobile recharge plan for your usage',
    inputs: [
      { id: 'daily_data', label: 'Daily Data Needed (GB)', placeholder: 'e.g. 2', prefix: 'GB' },
      { id: 'calls', label: 'Daily Calls (hours)', placeholder: 'e.g. 1', prefix: 'hr' },
    ],
    calculate(inputs) {
      const data = parseFloat(inputs.daily_data), calls = parseFloat(inputs.calls) || 0
      if (!data) return null
      const monthly = data * 30
      const plan = monthly <= 30 ? '₹179 (1GB/day, 28 days)' : monthly <= 45 ? '₹299 (1.5GB/day, 28 days)' : monthly <= 84 ? '₹666 (2GB/day, 84 days)' : '₹999 (2.5GB/day, 84 days)'
      return [
        { label: 'Monthly Data Needed', value: monthly.toFixed(0) + ' GB' },
        { label: 'Suggested Plan', value: plan },
        { label: 'Unlimited Calls', value: calls > 0 ? '✅ Most plans include' : 'Check plan details' },
      ]
    }
  },

  house_rent_ratio: {
    slug: 'house_rent_ratio', name: 'Rent to Income Ratio', emoji: '🏠', category: 'General',
    description: 'Check if your rent is affordable based on your income',
    inputs: [
      { id: 'rent', label: 'Monthly Rent', placeholder: 'e.g. 20000', prefix: '₹' },
      { id: 'income', label: 'Monthly Take-Home Income', placeholder: 'e.g. 60000', prefix: '₹' },
    ],
    calculate(inputs) {
      const rent = parseFloat(inputs.rent), income = parseFloat(inputs.income)
      if (!rent || !income) return null
      const ratio = (rent / income) * 100
      const status = ratio <= 20 ? '🏆 Excellent' : ratio <= 30 ? '✅ Affordable' : ratio <= 40 ? '⚠️ Tight Budget' : '🔴 Too Expensive'
      return [
        { label: 'Rent-to-Income Ratio', value: ratio.toFixed(1) + '%' },
        { label: 'Status', value: status },
        { label: 'Ideal Rent (30%)', value: '₹' + Math.round(income * 0.30).toLocaleString('en-IN') },
      ]
    }
  },

  // ── FUN / ENTERTAINMENT (15) ─────────────────────────

  movie_cost: {
    slug: 'movie_cost', name: 'Movie Night Cost', emoji: '🎬', category: 'Fun',
    description: 'Calculate total cost of a movie night out',
    inputs: [
      { id: 'tickets', label: 'Number of Tickets', placeholder: 'e.g. 2', prefix: '🎟️' },
      { id: 'ticket_price', label: 'Ticket Price', placeholder: 'e.g. 300', prefix: '₹' },
      { id: 'snacks', label: 'Snacks & Drinks', placeholder: 'e.g. 500', prefix: '₹' },
    ],
    calculate(inputs) {
      const tickets = parseFloat(inputs.tickets), price = parseFloat(inputs.ticket_price), snacks = parseFloat(inputs.snacks) || 0
      if (!tickets || !price) return null
      const total = tickets * price + snacks, perPerson = total / tickets
      return [
        { label: 'Total Cost', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Per Person', value: '₹' + Math.round(perPerson).toLocaleString('en-IN') },
        { label: 'Snack Splurge', value: snacks ? '₹' + snacks : 'None — Smart! 😄' },
      ]
    }
  },

  pizza_split: {
    slug: 'pizza_split', name: 'Pizza Party Split', emoji: '🍕', category: 'Fun',
    description: 'Split pizza order bill among friends fairly',
    inputs: [
      { id: 'total_bill', label: 'Total Pizza Bill', placeholder: 'e.g. 1200', prefix: '₹' },
      { id: 'people', label: 'Number of People', placeholder: 'e.g. 4', prefix: '👤' },
      { id: 'tip', label: 'Tip (%)', placeholder: 'e.g. 10', prefix: '%' },
    ],
    calculate(inputs) {
      const bill = parseFloat(inputs.total_bill), people = parseFloat(inputs.people), tip = parseFloat(inputs.tip) || 0
      if (!bill || !people) return null
      const total = bill + (bill * tip / 100), perPerson = total / people
      return [
        { label: 'Per Person', value: '₹' + Math.round(perPerson).toLocaleString('en-IN') },
        { label: 'Total with Tip', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Tip Amount', value: '₹' + Math.round(bill * tip / 100).toLocaleString('en-IN') },
      ]
    }
  },

  travel_budget: {
    slug: 'travel_budget', name: 'Vacation Budget Planner', emoji: '✈️', category: 'Fun',
    description: 'Plan your total vacation budget',
    inputs: [
      { id: 'flights', label: 'Flight / Train Cost', placeholder: 'e.g. 10000', prefix: '₹' },
      { id: 'hotel', label: 'Hotel Per Night', placeholder: 'e.g. 3000', prefix: '₹' },
      { id: 'nights', label: 'Number of Nights', placeholder: 'e.g. 5', prefix: 'nights' },
      { id: 'daily', label: 'Daily Food + Activities', placeholder: 'e.g. 2000', prefix: '₹' },
    ],
    calculate(inputs) {
      const flights = parseFloat(inputs.flights) || 0, hotel = parseFloat(inputs.hotel) || 0
      const nights = parseFloat(inputs.nights) || 1, daily = parseFloat(inputs.daily) || 0
      const total = flights + hotel * nights + daily * (nights + 1)
      return [
        { label: 'Total Budget', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Hotel Total', value: '₹' + Math.round(hotel * nights).toLocaleString('en-IN') },
        { label: 'Daily Expenses', value: '₹' + Math.round(daily) + '/day' },
      ]
    }
  },

  ipl_ticket: {
    slug: 'ipl_ticket', name: 'IPL Match Budget', emoji: '🏏', category: 'Fun',
    description: 'Plan budget for watching a live IPL or cricket match',
    inputs: [
      { id: 'tickets', label: 'Number of Tickets', placeholder: 'e.g. 4', prefix: '🎟️' },
      { id: 'ticket_price', label: 'Ticket Price Each', placeholder: 'e.g. 1500', prefix: '₹' },
      { id: 'travel', label: 'Travel Cost (total)', placeholder: 'e.g. 500', prefix: '₹' },
    ],
    calculate(inputs) {
      const tickets = parseFloat(inputs.tickets), price = parseFloat(inputs.ticket_price), travel = parseFloat(inputs.travel) || 0
      if (!tickets || !price) return null
      const total = tickets * price + travel + 500
      return [
        { label: 'Total Match Budget', value: '₹' + Math.round(total).toLocaleString('en-IN') },
        { label: 'Per Person', value: '₹' + Math.round(total / tickets).toLocaleString('en-IN') },
        { label: 'Food Budget (est.)', value: '₹500 extra included' },
      ]
    }
  },

  calories_food: {
    slug: 'calories_food', name: 'Popular Food Calories', emoji: '🍔', category: 'Fun',
    description: 'Check calories in popular Indian & fast food items',
    inputs: [
      { id: 'food', label: 'Food Item (1=Dosa 2=Biryani 3=Burger 4=Pizza 5=Samosa)', placeholder: 'e.g. 2', prefix: '✦' },
      { id: 'servings', label: 'Number of Servings', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const food = parseFloat(inputs.food) || 1, servings = parseFloat(inputs.servings) || 1
      const foods = ['','Masala Dosa','Chicken Biryani','Veg Burger','Pizza Slice','Samosa']
      const calories = [0, 206, 491, 354, 285, 130]
      const items = foods[food], cal = calories[food] * servings
      return [
        { label: 'Food Item', value: items },
        { label: 'Total Calories', value: cal + ' kcal' },
        { label: 'Walk to Burn', value: Math.round(cal / 4) + ' minutes of walking' },
      ]
    }
  },

  love_calculator: {
    slug: 'love_calculator', name: 'Love Compatibility Score', emoji: '❤️', category: 'Fun',
    description: 'Fun compatibility score based on your names',
    inputs: [
      { id: 'name1', label: 'Your Name', placeholder: 'e.g. Rahul', prefix: '✦' },
      { id: 'name2', label: "Partner's Name", placeholder: 'e.g. Priya', prefix: '✦' },
    ],
    calculate(inputs) {
      const n1 = (inputs.name1 || '').toLowerCase(), n2 = (inputs.name2 || '').toLowerCase()
      if (!n1 || !n2) return null
      const combined = n1 + n2
      let hash = combined.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
      const score = 50 + (hash % 50)
      const status = score >= 90 ? '💯 Perfect Match! Made for each other!' : score >= 75 ? '❤️ Great Match! Strong connection.' : score >= 60 ? '💛 Good Match! With effort, it works.' : '💙 Needs Work! But love conquers all!'
      return [
        { label: 'Love Score', value: score + '%' },
        { label: 'Compatibility', value: status },
        { label: 'Fun Fact', value: '😄 Just for fun — real love needs no score!' },
      ]
    }
  },

  gamer_score: {
    slug: 'gamer_score', name: 'Gaming Session Stats', emoji: '🎮', category: 'Fun',
    description: 'Calculate your gaming stats and K/D ratio',
    inputs: [
      { id: 'kills', label: 'Total Kills', placeholder: 'e.g. 45', prefix: '✦' },
      { id: 'deaths', label: 'Total Deaths', placeholder: 'e.g. 15', prefix: '✦' },
      { id: 'hours', label: 'Hours Played', placeholder: 'e.g. 3', prefix: 'hr' },
    ],
    calculate(inputs) {
      const kills = parseFloat(inputs.kills), deaths = parseFloat(inputs.deaths) || 1, hours = parseFloat(inputs.hours)
      if (!kills) return null
      const kd = kills / deaths
      return [
        { label: 'K/D Ratio', value: kd.toFixed(2) },
        { label: 'Kills Per Hour', value: hours ? (kills / hours).toFixed(1) : 'N/A' },
        { label: 'Performance', value: kd >= 3 ? '🏆 Pro Level' : kd >= 1.5 ? '⭐ Above Average' : kd >= 1 ? '✅ Average' : '📚 Keep Practicing' },
      ]
    }
  },

  spotify_stats: {
    slug: 'spotify_stats', name: 'Music Listening Stats', emoji: '🎵', category: 'Fun',
    description: 'Calculate how much time you spend listening to music',
    inputs: [
      { id: 'songs_per_day', label: 'Songs Per Day', placeholder: 'e.g. 30', prefix: '🎵' },
      { id: 'avg_duration', label: 'Avg Song Duration (minutes)', placeholder: 'e.g. 3.5', prefix: 'min' },
    ],
    calculate(inputs) {
      const songs = parseFloat(inputs.songs_per_day), duration = parseFloat(inputs.avg_duration) || 3.5
      if (!songs) return null
      const daily = songs * duration, yearly = daily * 365
      return [
        { label: 'Daily Listening', value: daily.toFixed(0) + ' minutes (' + (daily / 60).toFixed(1) + ' hrs)' },
        { label: 'Yearly Listening', value: (yearly / 60).toFixed(0) + ' hours' },
        { label: 'Songs Per Year', value: Math.round(songs * 365).toLocaleString('en-IN') + ' songs' },
      ]
    }
  },

  netflix_cost: {
    slug: 'netflix_cost', name: 'OTT Subscription Cost', emoji: '📺', category: 'Fun',
    description: 'Calculate your monthly OTT subscription spending',
    inputs: [
      { id: 'netflix', label: 'Netflix (1=Yes 0=No)', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'prime', label: 'Amazon Prime (1=Yes 0=No)', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'hotstar', label: 'Hotstar (1=Yes 0=No)', placeholder: 'e.g. 1', prefix: '✦' },
    ],
    calculate(inputs) {
      const netflix = parseFloat(inputs.netflix) ? 649 : 0
      const prime = parseFloat(inputs.prime) ? 117 : 0
      const hotstar = parseFloat(inputs.hotstar) ? 299 : 0
      const total = netflix + prime + hotstar
      return [
        { label: 'Monthly OTT Cost', value: '₹' + total },
        { label: 'Annual Cost', value: '₹' + (total * 12).toLocaleString('en-IN') },
        { label: 'Cost Per Day', value: '₹' + (total / 30).toFixed(0) + '/day' },
      ]
    }
  },

  social_media_time: {
    slug: 'social_media_time', name: 'Social Media Time Wasted', emoji: '📱', category: 'Fun',
    description: 'See how much time you spend on social media per year',
    inputs: [
      { id: 'daily_minutes', label: 'Daily Social Media Time (minutes)', placeholder: 'e.g. 120', prefix: 'min' },
    ],
    calculate(inputs) {
      const minutes = parseFloat(inputs.daily_minutes)
      if (!minutes) return null
      const yearly = minutes * 365, books = Math.round(yearly / (60 * 8))
      return [
        { label: 'Yearly Time', value: (yearly / 60).toFixed(0) + ' hours / year' },
        { label: 'Books You Could Read', value: books + ' books instead' },
        { label: 'Status', value: minutes <= 30 ? '✅ Healthy' : minutes <= 60 ? '⚠️ Moderate' : '🔴 Too Much — Skill up!' },
      ]
    }
  },

  coffee_cost: {
    slug: 'coffee_cost', name: 'Coffee Habit Cost', emoji: '☕', category: 'Fun',
    description: 'See how much your daily chai/coffee habit costs yearly',
    inputs: [
      { id: 'cups', label: 'Cups Per Day', placeholder: 'e.g. 3', prefix: '☕' },
      { id: 'cost_per_cup', label: 'Cost Per Cup', placeholder: 'e.g. 50', prefix: '₹' },
    ],
    calculate(inputs) {
      const cups = parseFloat(inputs.cups), cost = parseFloat(inputs.cost_per_cup)
      if (!cups || !cost) return null
      const daily = cups * cost, yearly = daily * 365
      return [
        { label: 'Daily Spend', value: '₹' + daily },
        { label: 'Yearly Spend', value: '₹' + yearly.toLocaleString('en-IN') },
        { label: 'Invested Yearly (12%)', value: '₹' + Math.round(yearly * 1.12).toLocaleString('en-IN') + ' if invested!' },
      ]
    }
  },

  random_number: {
    slug: 'random_number', name: 'Random Number Generator', emoji: '🎲', category: 'Fun',
    description: 'Generate a random number within any range',
    inputs: [
      { id: 'min', label: 'Minimum Number', placeholder: 'e.g. 1', prefix: '✦' },
      { id: 'max', label: 'Maximum Number', placeholder: 'e.g. 100', prefix: '✦' },
    ],
    calculate(inputs) {
      const min = parseFloat(inputs.min) || 1, max = parseFloat(inputs.max) || 100
      const random = Math.floor(Math.random() * (max - min + 1)) + min
      const random2 = Math.floor(Math.random() * (max - min + 1)) + min
      const random3 = Math.floor(Math.random() * (max - min + 1)) + min
      return [
        { label: 'Random Number', value: String(random) },
        { label: 'Another One!', value: String(random2) },
        { label: 'One More!', value: String(random3) },
      ]
    }
  },

  password_strength: {
    slug: 'password_strength', name: 'Password Strength Checker', emoji: '🔐', category: 'Fun',
    description: 'Check how strong your password is',
    inputs: [{ id: 'password', label: 'Enter Password', placeholder: 'e.g. MyP@ss123', prefix: '🔒' }],
    calculate(inputs) {
      const pwd = inputs.password || ''
      if (!pwd) return null
      let score = 0
      if (pwd.length >= 8) score++
      if (pwd.length >= 12) score++
      if (/[A-Z]/.test(pwd)) score++
      if (/[a-z]/.test(pwd)) score++
      if (/[0-9]/.test(pwd)) score++
      if (/[^A-Za-z0-9]/.test(pwd)) score++
      const strength = score <= 2 ? '🔴 Weak' : score <= 4 ? '🟡 Moderate' : '🟢 Strong'
      const time = score <= 2 ? 'Instantly' : score <= 4 ? 'Hours' : 'Years to crack'
      return [
        { label: 'Strength', value: strength },
        { label: 'Est. Crack Time', value: time },
        { label: 'Score', value: score + '/6' },
      ]
    }
  },

  lucky_draw: {
    slug: 'lucky_draw', name: 'Lucky Draw Picker', emoji: '🎰', category: 'Fun',
    description: 'Pick a random winner from 1 to N participants',
    inputs: [
      { id: 'participants', label: 'Total Participants', placeholder: 'e.g. 50', prefix: '👤' },
    ],
    calculate(inputs) {
      const n = parseFloat(inputs.participants)
      if (!n) return null
      const winner = Math.floor(Math.random() * n) + 1
      const runner1 = Math.floor(Math.random() * n) + 1
      const runner2 = Math.floor(Math.random() * n) + 1
      return [
        { label: '🏆 Winner!', value: 'Participant #' + winner },
        { label: '🥈 Runner Up 1', value: 'Participant #' + runner1 },
        { label: '🥉 Runner Up 2', value: 'Participant #' + runner2 },
      ]
    }
  },

  coin_flip: {
    slug: 'coin_flip', name: 'Coin Flip Simulator', emoji: '🪙', category: 'Fun',
    description: 'Flip a virtual coin — Heads or Tails?',
    inputs: [
      { id: 'flips', label: 'Number of Flips', placeholder: 'e.g. 10', prefix: '🪙' },
    ],
    calculate(inputs) {
      const flips = Math.min(parseFloat(inputs.flips) || 1, 100)
      let heads = 0
      for (let i = 0; i < flips; i++) if (Math.random() > 0.5) heads++
      const tails = flips - heads
      return [
        { label: 'Result', value: flips === 1 ? (heads ? '🪙 HEADS!' : '🪙 TAILS!') : heads + ' Heads, ' + tails + ' Tails' },
        { label: 'Heads %', value: ((heads / flips) * 100).toFixed(0) + '%' },
        { label: 'Tails %', value: ((tails / flips) * 100).toFixed(0) + '%' },
      ]
    }
  },


}