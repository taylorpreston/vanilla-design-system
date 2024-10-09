import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles, Sprinkles } from '../../sprinkles.css'

const base = style([
  sprinkles({
    display: 'block',
  }),
  {
    boxSizing: 'border-box',
  },
])

export const box = recipe({
  base,
})

export type BoxVariants = RecipeVariants<typeof box>
export type BoxProps = BoxVariants &
  Sprinkles & { as?: keyof JSX.IntrinsicElements; children: React.ReactNode }
