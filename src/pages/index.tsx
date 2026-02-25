import React from 'react'

import { css } from '@linaria/core'
import { createRoot } from 'react-dom/client'

const className = css``

export default function createApp() {
  const el = document.createElement('div')
  document.body.appendChild(el)

  const root = createRoot(el)
  root.render(<div className={className}></div>)
}

;('undefined' != typeof wx && wx.getDeviceInfo) || createApp()
