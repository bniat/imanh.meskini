/** The site owner as written in publications; rendered in bold. */
export const selfAuthor = 'Meskini, Iman H.';

/** ORCID iDs of known co-authors, keyed by the name as written in publications. */
export const authorOrcids: Record<string, string> = {};

export const orcidUrl = (id: string) => `https://orcid.org/${id}`;
