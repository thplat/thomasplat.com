export interface Project {
    type: string,
    title: string,
    offlineMessage?: string,
    description: string,
    link?: {
        name: string,
        url: string,
    },
    highlight?: boolean
}

export interface CvBasicItem {
    label: string,
    value: string
}

export interface WorkHistoryEntry {
    type: 'school' | 'work',
    from: number,
    to?: number,
    location: string,
    description?: string,
}

export interface Skill {
    category: string,
    logos?: string[],
    description: string,
}

export interface RouteDefinition {
    path: string,
    name: string,
}

export type ScrollBehavior = ({ top: number} | { left: number }) & { behavior: string }
  