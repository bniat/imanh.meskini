export const site = {
  name: 'Iman Hasnaoui Meskini',
  firstName: 'Iman',
  lastName: 'Hasnaoui Meskini',
  /** Initials for the favicon-style monogram shown while there is no profile photo. */
  initials: 'IHM',
  title: 'Cybersecurity Researcher & PhD Candidate',
  tagline: 'Adversarial AI & Cybersecurity Digital Twins',
  description:
    'Cybersecurity researcher and PhD candidate at NICS Lab, University of Málaga. Adversarial AI threats and countermeasures in critical infrastructures and cybersecurity digital twins.',
  email: 'imanb@uma.es',
  location: 'Málaga, Spain',
  /** Path of the downloadable CV in public/, e.g. '/pdf/cv.pdf'; download buttons are hidden while null. */
  cv: null as string | null,
};

export interface Social {
  name: string;
  icon: 'mail' | 'github' | 'linkedin' | 'orcid' | 'scholar' | 'researchgate' | 'x';
  href: string;
  label: string;
}

// Add ORCID, Google Scholar, LinkedIn… here as { name, icon, href, label }.
export const socials: Social[] = [
  { name: 'email', icon: 'mail', href: `mailto:${site.email}`, label: 'Email' },
];

export const nav = [
  { label: 'About', href: '/' },
  { label: 'Activities', href: '/activities' },
  { label: 'Publications', href: '/publications' },
  { label: 'CV', href: '/cv' },
];
