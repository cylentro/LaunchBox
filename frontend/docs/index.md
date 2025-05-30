---
layout: fullpage # Or a custom layout that removes VitePress default chrome
aside: false
# You might need to add custom CSS to VitePress or a custom layout 
# to make the page truly bare and allow NaitChat to take over.
# For now, VitePress default theme might still add its own nav/sidebar.
# We can address that by creating a truly blank layout later.
---
<script setup>
import NaitChat from './components/NaitChat.vue'
</script>

<NaitChat />
