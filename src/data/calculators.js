export const calculators = {
  emi: {
    slug: 'emi',
    name: 'EMI Calculator',
    emoji: '🏦',
    category: 'Finance',
    description: 'Calculate your monthly EMI for any loan instantly',
    inputs: [
      { id: 'principal', label: 'Loan Amount', placeholder: 'e.g. 500000', prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (% per year)', placeholder: 'e.g. 8.5', prefix: '%' },
      { id: 'tenure', label: 'Loan Tenure (Years)', placeholder: 'e.g. 20', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.principal)
      const r = parseFloat(inputs.rate) / 12 / 100
      const n = parseFloat(inputs.tenure) * 12
      if (!P || !r || !n) return null
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const total = emi * n
      const interest = total - P
      return [
        { label: 'Monthly EMI', value: '₹' + Math.round(emi).toLocaleString('en-IN') },
        { label: 'Total Interest', value: '₹' + Math.round(interest).toLocaleString('en-IN') },
        { label: 'Total Amount', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  gst: {
    slug: 'gst',
    name: 'GST Calculator',
    emoji: '📊',
    category: 'Finance',
    description: 'Calculate GST on any amount instantly',
    inputs: [
      { id: 'amount', label: 'Original Amount', placeholder: 'e.g. 10000', prefix: '₹' },
      { id: 'rate', label: 'GST Rate (%)', placeholder: 'e.g. 18', prefix: '%' },
    ],
    calculate(inputs) {
      const amount = parseFloat(inputs.amount)
      const rate = parseFloat(inputs.rate)
      if (!amount || !rate) return null
      const gst = (amount * rate) / 100
      const total = amount + gst
      const cgst = gst / 2
      const sgst = gst / 2
      return [
        { label: 'GST Amount', value: '₹' + Math.round(gst).toLocaleString('en-IN') },
        { label: 'CGST (50%)', value: '₹' + Math.round(cgst).toLocaleString('en-IN') },
        { label: 'SGST (50%)', value: '₹' + Math.round(sgst).toLocaleString('en-IN') },
        { label: 'Total Amount', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  sip: {
    slug: 'sip',
    name: 'SIP Calculator',
    emoji: '📈',
    category: 'Finance',
    description: 'Plan your SIP investments and see future returns',
    inputs: [
      { id: 'monthly', label: 'Monthly Investment', placeholder: 'e.g. 5000', prefix: '₹' },
      { id: 'rate', label: 'Expected Return Rate (% per year)', placeholder: 'e.g. 12', prefix: '%' },
      { id: 'years', label: 'Time Period (Years)', placeholder: 'e.g. 10', prefix: 'Yr' },
    ],
    calculate(inputs) {
      const P = parseFloat(inputs.monthly)
      const r = parseFloat(inputs.rate) / 12 / 100
      const n = parseFloat(inputs.years) * 12
      if (!P || !r || !n) return null
      const total = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      const invested = P * n
      const returns = total - invested
      return [
        { label: 'Invested Amount', value: '₹' + Math.round(invested).toLocaleString('en-IN') },
        { label: 'Est. Returns', value: '₹' + Math.round(returns).toLocaleString('en-IN') },
        { label: 'Total Value', value: '₹' + Math.round(total).toLocaleString('en-IN') },
      ]
    }
  },

  incometax: {
    slug: 'incometax',
    name: 'Income Tax Calculator',
    emoji: '💵',
    category: 'Finance',
    description: 'Estimate your income tax for FY 2024-25 (New Regime)',
    inputs: [
      { id: 'income', label: 'Annual Income', placeholder: 'e.g. 800000', prefix: '₹' },
      { id: 'deductions', label: 'Deductions (80C, HRA etc.)', placeholder: 'e.g. 150000', prefix: '₹' },
    ],
    calculate(inputs) {
      const income = parseFloat(inputs.income)
      const deductions = parseFloat(inputs.deductions) || 0
      if (!income) return null
      const taxable = Math.max(0, income - deductions)
      let tax = 0
      if (taxable <= 300000) tax = 0
      else if (taxable <= 600000) tax = (taxable - 300000) * 0.05
      else if (taxable <= 900000) tax = 15000 + (taxable - 600000) * 0.10
      else if (taxable <= 1200000) tax = 45000 + (taxable - 900000) * 0.15
      else if (taxable <= 1500000) tax = 90000 + (taxable - 1200000) * 0.20
      else tax = 150000 + (taxable - 1500000) * 0.30
      const cess = tax * 0.04
      const totalTax = tax + cess
      const inHand = income - totalTax
      return [
        { label: 'Taxable Income', value: '₹' + Math.round(taxable).toLocaleString('en-IN') },
        { label: 'Total Tax', value: '₹' + Math.round(totalTax).toLocaleString('en-IN') },
        { label: 'In-Hand Income', value: '₹' + Math.round(inHand).toLocaleString('en-IN') },
      ]
    }
  },

  bmi: {
    slug: 'bmi',
    name: 'BMI Calculator',
    emoji: '❤️',
    category: 'Health',
    description: 'Calculate your Body Mass Index and check your health',
    inputs: [
      { id: 'weight', label: 'Weight (kg)', placeholder: 'e.g. 70', prefix: 'kg' },
      { id: 'height', label: 'Height (cm)', placeholder: 'e.g. 175', prefix: 'cm' },
    ],
    calculate(inputs) {
      const weight = parseFloat(inputs.weight)
      const height = parseFloat(inputs.height) / 100
      if (!weight || !height) return null
      const bmi = weight / (height * height)
      let category = ''
      if (bmi < 18.5) category = '😟 Underweight'
      else if (bmi < 25) category = '✅ Normal'
      else if (bmi < 30) category = '⚠️ Overweight'
      else category = '🔴 Obese'
      return [
        { label: 'Your BMI', value: bmi.toFixed(1) },
        { label: 'Category', value: category },
        { label: 'Ideal Weight', value: Math.round(18.5 * height * height) + '-' + Math.round(24.9 * height * height) + ' kg' },
      ]
    }
  },

  cgpa: {
    slug: 'cgpa',
    name: 'CGPA Calculator',
    emoji: '🎓',
    category: 'Education',
    description: 'Convert your CGPA to percentage and check your grade',
    inputs: [
      { id: 'cgpa', label: 'Your CGPA', placeholder: 'e.g. 8.5', prefix: '✦' },
      { id: 'scale', label: 'Grading Scale (out of)', placeholder: 'e.g. 10', prefix: '/' },
    ],
    calculate(inputs) {
      const cgpa = parseFloat(inputs.cgpa)
      const scale = parseFloat(inputs.scale)
      if (!cgpa || !scale) return null
      if (cgpa > scale) return null
      const percentage = (cgpa / scale) * 100
      let grade = ''
      if (percentage >= 90) grade = '🏆 Outstanding'
      else if (percentage >= 75) grade = '⭐ Distinction'
      else if (percentage >= 60) grade = '✅ First Class'
      else if (percentage >= 50) grade = '👍 Second Class'
      else grade = '⚠️ Pass'
      return [
        { label: 'Percentage', value: percentage.toFixed(2) + '%' },
        { label: 'Grade', value: grade },
        { label: 'Out of 100', value: percentage.toFixed(1) + ' / 100' },
      ]
    }
  },
}