export type AchievementCategory =
  | 'Story'
  | 'Sidequest'
  | 'Collection'
  | 'Combat'
  | 'Miscellaneous'

export interface AchievementSubItem {
  id: string
  label: string
}

export type TreasureKind = 'chest' | 'hidden'

export interface Achievement {
  id: string
  name: string
  description: string
  category: AchievementCategory
  /** path to the achievement icon, relative to the site root */
  icon: string
  /** id of the walkthrough chapter where this achievement is first obtainable */
  chapterId?: string
  /** if set, this achievement auto-completes once bestiary completion reaches this percent, and can't be toggled manually */
  bestiaryThreshold?: number
  /**
   * if set, this achievement auto-completes once this percent of the chests (or hidden items) are
   * checked off on the Treasures page, and can't be toggled manually
   */
  treasureThreshold?: { kind: TreasureKind; percent: number }
  /** if set, this achievement auto-completes once every other achievement is complete (e.g. Master of IV) */
  requiresAllOthers?: boolean
  /**
   * if set, this achievement is made up of several individually-trackable parts (e.g. the four
   * secret summons, or the four sealed weapons) - it auto-completes once every part is checked off,
   * and can't be toggled manually as a whole
   */
  subItems?: AchievementSubItem[]
}

export interface BestiaryEntry {
  number: number
  name: string
  location: string
  notes?: string
  /** true for bosses (entries 158 and up) */
  boss?: boolean
  /** true if this entry can be permanently missed (one-visit dungeons) */
  missable?: boolean
  /** id of the walkthrough chapter where this monster is first encountered */
  chapterId?: string
  /** additional chapters where this monster also reappears and is worth noting */
  extraChapterIds?: string[]
}

export interface TreasureEntry {
  id: string
  kind: TreasureKind
  /** area name, e.g. "Mist Cave" or "Town of Baron - Inn" */
  location: string
  /** one string per chest/hidden item in this group - the group counts as contents.length toward the totals */
  contents: string[]
  /** short hint on where to find it */
  hint?: string
  /** true if a monster-in-a-box guards this chest */
  monsterInABox?: boolean
  /** true if this treasure is in a one-visit dungeon and can be permanently missed */
  missable?: boolean
  /** id of the walkthrough chapter where this treasure is collected */
  chapterId?: string
}

export interface WalkthroughStep {
  id: string
  text: string
  /** achievement ids relevant to this step, shown as inline callouts */
  achievementIds?: string[]
  /** specific sub-items of multi-part achievements (see Achievement.subItems) relevant to this step */
  subAchievementIds?: { achievementId: string; subItemId: string }[]
  /** urgent callout shown in red, e.g. marking a location as a one-time-only visit */
  warning?: string
}

export interface WalkthroughChapter {
  id: string
  title: string
  summary: string
  /** urgent callout shown in red under the summary, e.g. marking the chapter as a one-time-only visit */
  warning?: string
  steps: WalkthroughStep[]
}
