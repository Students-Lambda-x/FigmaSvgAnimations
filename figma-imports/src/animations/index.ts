import DashArray from './dashArray'

export const animations = {
  'dash-array': new DashArray()
}

export const animationEvents = () => {
  const events = []
  Object.values(animations).forEach(animation => {
    events.push()
  })
}

