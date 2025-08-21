# [Project Name] - Design System

> Visual language reference for consistent UI. Essential for AI when generating frontend code.

---

## Color Palette

### Primary Colors
- **Primary**: `#[hex]` - Main actions, buttons
- **Primary Dark**: `#[hex]` - Hover states
- **Primary Light**: `#[hex]` - Backgrounds

### Status Colors
- **Success**: `#[hex]` ([color name]) - Positive feedback
- **Warning**: `#[hex]` ([color name]) - Cautions
- **Error**: `#[hex]` ([color name]) - Errors, destructive
- **Info**: `#[hex]` ([color name]) - Informational

### Neutral Scale
```
50    #[hex]  (Page background)
100   #[hex]  (Alt background)
200   #[hex]  (Borders)
300   #[hex]  (Disabled)
500   #[hex]  (Secondary text)
700   #[hex]  (Primary text)
900   #[hex]  (Headings)
```

### Dark Mode
```
Surface:    #[hex]  (Page background)
Muted:      #[hex]  (Alt background)
Border:     #[hex]  (Borders)
Primary:    #[hex]  (Primary text)
Secondary:  #[hex]  (Secondary text)
```

---

## Typography

### Font Stack
```css
--font-primary: '[Font Name]', sans-serif;
--font-mono: '[Mono Font]', monospace;
```

### Type Scale
| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Display | [X]px | Bold | Page headings |
| Title | [X]px | Semibold | Section headings |
| Body | [X]px | Regular | Main content |
| Caption | [X]px | Regular | Meta info, labels |
| Code | [X]px | Regular (mono) | Code snippets |

---

## Spacing Scale

```
1    4px
2    8px
3    12px
4    16px
6    24px
8    32px
12   48px
16   64px
```

---

## Components

### Buttons
```tsx
// Primary
className="bg-[primary] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[primary-dark]"

// Secondary
className="bg-[neutral-100] text-[neutral-900] px-4 py-2 rounded-lg hover:bg-[neutral-200]"

// Ghost
className="text-[neutral-600] px-4 py-2 rounded-lg hover:bg-[neutral-100]"
```

### Cards
```css
background: [surface];
border: 1px solid [border];
border-radius: 12px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
```

### Inputs
```css
background: [surface];
border: 1px solid [border];
border-radius: 8px;
padding: 8px 12px;
font-size: 14px;
/* Focus */
border-color: [primary];
box-shadow: 0 0 0 2px [primary-light];
```

---

## Accessibility

### Contrast Ratios
- Normal text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1

### Focus States
- 2px focus ring on all interactive elements
- Focus ring color: [primary-light]
- Use `focus-visible` for keyboard-only focus

### Motion
- Respect `prefers-reduced-motion`
- Default transitions: 150ms ease-in-out

---

## Iconography

- **Library**: [Icon library name] (e.g., Lucide React)
- **Default size**: [X]px
- **Stroke width**: [X]
- **Style**: [Outlined / Filled / etc.]
