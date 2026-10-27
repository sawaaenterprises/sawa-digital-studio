export const SITE = {
  name: "Sawaa Enterprises",
  tagline: "Bad website? Lose clients. Let’s fix it.",
  cta: "Your site is losing money. Fix it now.",
  email: "sawaaenterprises@gmail.com",
  owner: "Syed Abdul Wahab",
  founded: 2025,
  location: "Hyderabad, India",
};

export const TEAM = [
  { name: "Syed Abdul Wahab", role: "Founder & Owner" },
  { name: "Syed Basharath Ali", role: "Director" },
  { name: "Syed Ahmed Ali", role: "Co-Director" },
  { name: "Mohd Sufyaan Sayeed", role: "Co-Founder" },
];

export const WORK = [
  {
    title: "Raahe Hidayath",
    url: "https://raahehidayath.online",
    client: "Mohd Sufyaan Sayeed",
    kind: "Content & community website",
  },
  {
    title: "Islamic Authentic Knowledge",
    url: "https://www.islamicauthenticknowledge.online/",
    client: "Mohammed Ibrahim",
    kind: "Knowledge & learning platform",
  },
  {
    title: "Syed Abdul Wahab — Portfolio",
    url: "https://myportfolio-ten-rho-80.vercel.app/#work",
    client: "Syed Abdul Wahab",
    kind: "Personal portfolio",
  },
];

export const CERTS = ["Siasat", "Great Learning Academy", "freeCodeCamp", "Class Central", "LearnTube"];

export function mailto(subject = "Project enquiry") {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
