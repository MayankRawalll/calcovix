import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Navbar
      nav_finance: 'Finance',
      nav_health: 'Health',
      nav_education: 'Education',
      nav_astrology: 'Astrology',
      nav_legal: 'Legal',
      nav_general: 'General',
      nav_fun: 'Fun',

      // Hero
      hero_badge: '200+ Free Calculators',
      hero_headline1: 'Calculate Anything,',
      hero_headline2: 'Instantly',
      hero_subtitle: 'Free calculators for Finance, Health, Education, Astrology & more',
      hero_search_placeholder: 'Search calculators... e.g. EMI, BMI, GST',
      hero_search_btn: 'Search',
      hero_stat1_val: '200+',
      hero_stat1_lbl: 'Calculators',
      hero_stat2_val: '7',
      hero_stat2_lbl: 'Categories',
      hero_stat3_val: '100%',
      hero_stat3_lbl: 'Free Forever',

      // Category Strip
      cat_all: 'All',

      // Featured Section
      featured_title: '🔥 Most Popular Tools',
      featured_see_all: 'See All →',
      featured_open: 'Open Calculator →',

      // Category Section
      browse_title: 'Browse by Category',
      browse_more: 'All 200+ Tools',
      browse_more_sub: 'View Full Library',

      // Finance Section
      finance_title: '💰 Finance Calculators',
      finance_see_all: 'See All 40 →',
      finance_more: '+40 More Finance →',

      // Calculator Page
      calc_home: 'Home',
      calc_calculate: '⚡ Calculate →',
      calc_reset: 'Reset',
      calc_results: '📊 Your Results',
      calc_error: '⚠️ Please fill in all fields with valid numbers.',

      // Footer
      footer_tagline: "India's #1 free calculator platform. 200+ tools for Finance, Health, Education & more.",
      footer_playstore: '▶ Play Store',
      footer_appstore: ' App Store',
      footer_soon: '· Soon',
      footer_quicklinks: 'Quick Links',
      footer_categories: 'Categories',
      footer_legal: 'Legal',
      footer_home: 'Home',
      footer_all_calc: 'All Calculators',
      footer_popular: 'Most Popular',
      footer_new: 'New Tools',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Use',
      footer_disclaimer: 'Disclaimer',
      footer_about: 'About Calcovix',
      footer_contact: 'Contact Us',
      footer_copy: '© 2026 Calcovix. All rights reserved.',
    }
  },
  hi: {
    translation: {
      // Navbar
      nav_finance: 'वित्त',
      nav_health: 'स्वास्थ्य',
      nav_education: 'शिक्षा',
      nav_astrology: 'ज्योतिष',
      nav_legal: 'कानूनी',
      nav_general: 'सामान्य',
      nav_fun: 'मनोरंजन',

      // Hero
      hero_badge: '200+ मुफ्त कैलकुलेटर',
      hero_headline1: 'कुछ भी कैलकुलेट करें,',
      hero_headline2: 'तुरंत',
      hero_subtitle: 'वित्त, स्वास्थ्य, शिक्षा, ज्योतिष और अधिक के लिए मुफ्त कैलकुलेटर',
      hero_search_placeholder: 'कैलकुलेटर खोजें... जैसे EMI, BMI, GST',
      hero_search_btn: 'खोजें',
      hero_stat1_val: '200+',
      hero_stat1_lbl: 'कैलकुलेटर',
      hero_stat2_val: '7',
      hero_stat2_lbl: 'श्रेणियाँ',
      hero_stat3_val: '100%',
      hero_stat3_lbl: 'हमेशा मुफ्त',

      // Category Strip
      cat_all: 'सभी',

      // Featured Section
      featured_title: '🔥 सबसे लोकप्रिय टूल',
      featured_see_all: 'सभी देखें →',
      featured_open: 'कैलकुलेटर खोलें →',

      // Category Section
      browse_title: 'श्रेणी के अनुसार देखें',
      browse_more: 'सभी 200+ टूल',
      browse_more_sub: 'पूरी लाइब्रेरी देखें',

      // Finance Section
      finance_title: '💰 वित्त कैलकुलेटर',
      finance_see_all: 'सभी 40 देखें →',
      finance_more: '+40 और वित्त →',

      // Calculator Page
      calc_home: 'होम',
      calc_calculate: '⚡ कैलकुलेट करें →',
      calc_reset: 'रीसेट',
      calc_results: '📊 आपके परिणाम',
      calc_error: '⚠️ कृपया सभी फ़ील्ड सही संख्याओं से भरें।',

      // Footer
      footer_tagline: 'भारत का नंबर 1 मुफ्त कैलकुलेटर प्लेटफॉर्म। वित्त, स्वास्थ्य, शिक्षा और अधिक के लिए 200+ टूल।',
      footer_playstore: '▶ प्ले स्टोर',
      footer_appstore: ' ऐप स्टोर',
      footer_soon: '· जल्द आ रहा है',
      footer_quicklinks: 'त्वरित लिंक',
      footer_categories: 'श्रेणियाँ',
      footer_legal: 'कानूनी',
      footer_home: 'होम',
      footer_all_calc: 'सभी कैलकुलेटर',
      footer_popular: 'सबसे लोकप्रिय',
      footer_new: 'नए टूल',
      footer_privacy: 'गोपनीयता नीति',
      footer_terms: 'उपयोग की शर्तें',
      footer_disclaimer: 'अस्वीकरण',
      footer_about: 'Calcovix के बारे में',
      footer_contact: 'संपर्क करें',
      footer_copy: '© 2026 Calcovix. सर्वाधिकार सुरक्षित।',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n