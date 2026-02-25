import React from 'react'
import { createRoot } from 'react-dom/client'

export default function createApp() {
  const el = document.createElement('div')
  document.body.appendChild(el)

  const root = createRoot(el)
  root.render(<div></div>)
}

;('undefined' != typeof wx && wx.getDeviceInfo) || createApp()
