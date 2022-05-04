import { PhBugBeetle, PhLightbulb, PhChatsTeardrop } from 'phosphor-vue'

export type FeedbackOptionsType = {
  [key: string]: { title: string; icon: any }
}

export const feedbackOptions = {
  problem: {
    title: 'Problem',
    icon: PhBugBeetle
  },
  idea: {
    title: 'Idea',
    icon: PhLightbulb
  },
  other: {
    title: 'Other',
    icon: PhChatsTeardrop
  }
}

export type FeedbackTypes = keyof typeof feedbackOptions
