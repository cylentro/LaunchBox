// frontend/docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'
// @ts-ignore
import NaitBubble from '../../components/assistant/NaitBubble.vue'
import Timeline from '../../components/Timeline.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('NaitBubble', NaitBubble)
    app.component('Timeline', Timeline)
  }
}