export type Project = {
  slug: string
  name: string
  index: string
  mark: string
  kind: string
}

export const projects: Project[] = [
  {
    slug: "churchmanager",
    name: "ChurchManager",
    index: "01",
    mark: "CM",
    kind: "architecture",
  },
  {
    slug: "eleinexus",
    name: "EleiNexus",
    index: "02",
    mark: "EN",
    kind: "orbit",
  },
]