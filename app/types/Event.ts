/**
 * Eventのinterface
 * @package types
 */
import React from 'react'

/**
 * Event
 */
export interface EventType {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClickButton: (event: React.MouseEvent<HTMLButtonElement>) => void
}
