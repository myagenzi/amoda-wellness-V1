# Fix the ecosystem section's sticky column

I measured the live section in the browser before writing this, and went through your four checks in order. Here is what is actually true right now:

1. **`self-start` — already there.** The left column already carries `lg:self-start` next to `lg:sticky lg:top-[...]`, and its computed height is 471px inside a 3273px grid row, so it is not stretching. Not the cause.
2. **A non-visible ancestor overflow — this is the bug.** Walking up from the sticky column to `<body>`, exactly one ancestor has non-visible overflow: the section itself, which carries `overflow-hidden` (computed `overflow-x: hidden; overflow-y: hidden`). That turns the section into the sticky element's scroll container, so it never sticks to the viewport and rides the page instead. Everything above it (`main`, the layout wrapper, `body`) is `visible`.
3. **Section height is already content-driven.** Section height 3657px = right column 3273px + the section's own `lg:py-48` (12rem top and bottom = 384px). There is no `min-h-screen` or fixed height on the wrapper. The dead space you are seeing is that 12rem of padding, made obvious because the short left column no longer pins beside the tall card list.
4. **No `lg:h-screen` anywhere in this section** — not on the sticky element and not on its parent. Nothing to unwind.

## The fix

- Drop `overflow-hidden` from the section. It was only there out of habit for the background layers; the two absolute layers are `inset-0` and clip to nothing, so removing it changes no visuals and restores sticky against the viewport.
- Trim the section's vertical padding from `py-20 md:py-40 lg:py-48` to `py-20 md:py-28 lg:py-32`, so the pinned column releases into Section 4 without a tall empty tail.
- Keep `lg:self-start` and the `top: header + 2rem` offset as they are.

Result: scrolling down pins the eyebrow/headline/nav, the six cards pass one at a time with the nav pill tracking the active one, and after the last card the section hands off to "Who we serve" with no dead space and no stretched background.
