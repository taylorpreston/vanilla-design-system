import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
})