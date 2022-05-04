import html2canvas from 'html2canvas'
import { ref } from 'vue'

export const isTakingScreenshot = ref(false)

export async function takeScreenshot() {
  isTakingScreenshot.value = true

  const canvas = await html2canvas(document.querySelector('html')!)
  const base64image = canvas.toDataURL('image/png')

  isTakingScreenshot.value = false

  return base64image
}
