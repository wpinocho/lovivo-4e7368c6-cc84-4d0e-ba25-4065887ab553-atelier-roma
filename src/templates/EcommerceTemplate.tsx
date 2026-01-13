/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Simplified wrapper for brand pages.
 */

import { ReactNode } from 'react'

interface EcommerceTemplateProps {
  children: ReactNode
}

export const EcommerceTemplate = ({ children }: EcommerceTemplateProps) => {
  return <div className="min-h-screen antialiased">{children}</div>
}