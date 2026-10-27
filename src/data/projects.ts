export type Project = {
  slug: string
  name: string
  index: string
  mark: string
  kind: string
  repositoryUrl: string
  siteUrl?: string
}

export const projects: Project[] = [
  {
    slug: "churchmanager",
    name: "ChurchManager",
    index: "01",
    mark: "CM",
    kind: "architecture",
    repositoryUrl: "https://github.com/joots28/ChurchMennager",
  },
  {
    // Preserve o slug antigo para não quebrar links já compartilhados.
    slug: "eleinexus",
    name: "EleiNex",
    index: "02",
    mark: "EN",
    kind: "orbit",
    repositoryUrl: "https://github.com/joots28/portifolio/tree/eleinexus-site/eleinexus",
    siteUrl: "https://eleinexus-civico.onrender.com/",
  },
]
