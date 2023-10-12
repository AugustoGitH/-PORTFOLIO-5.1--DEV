import { ReactNode } from 'react'

export interface IAlertDialogProps {
  show: boolean
  icon?: ReactNode
  title?: string
  message: string
  buttons?: {
    close?: {
      placeholder: string
      on: () => void
    }
    action?: {
      placeholder: string
      on: () => void
    }
  }
}
