# UI Components

Reusable UI component library untuk Hotel Indigo Bali Seminyak website.

## Struktur Folder Components

```
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx        # Button component dengan berbagai variant
│   ├── Heading.tsx       # Heading component untuk h1-h6
│   ├── Text.tsx          # Text/paragraph component
│   ├── Card.tsx          # Card layout component
│   ├── Container.tsx     # Container wrapper component
│   └── index.ts          # Exports semua UI components
├── sections/             # Page sections yang reusable
│   ├── IntroSection.tsx
│   ├── AccommodationSection.tsx
│   ├── DiningSection.tsx
│   ├── EventsSection.tsx
│   ├── WellnessSection.tsx
│   ├── OffersSection.tsx
│   └── ReviewsSection.tsx
├── layout/               # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MobileBottomNav.tsx
├── features/             # Feature components
│   ├── HeroSection.tsx
│   ├── GallerySection.tsx
│   ├── InstagramSection.tsx
│   ├── LocationSection.tsx
│   ├── LenisScroll.tsx
│   └── LoadingScreen.tsx
├── HomePageContent.tsx   # Main page content component
└── index.ts             # Main exports file

```

## UI Components Guide

### Button

Component untuk membuat button dengan berbagai variant dan ukuran.

#### Props:
- `href?` - Link destination (opsional, jika ada akan render sebagai Link)
- `children` - Button text/content
- `variant?` - 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size?` - 'sm' | 'md' | 'lg' (default: 'md')
- `className?` - Additional Tailwind classes
- `target?` - Link target attribute
- `rel?` - Link rel attribute
- `onClick?` - Click handler
- `type?` - 'button' | 'submit' | 'reset' (default: 'button')

#### Usage:
```tsx
import { Button } from "@/components/ui";

// Sebagai link
<Button href="/about" variant="primary" size="lg">
  Learn More
</Button>

// Sebagai button
<Button type="submit" variant="secondary" onClick={handleClick}>
  Submit
</Button>

// External link
<Button 
  href="https://example.com" 
  target="_blank"
  rel="noopener noreferrer"
>
  Visit
</Button>
```

### Heading

Component untuk membuat heading dengan berbagai ukuran.

#### Props:
- `level` - 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `children` - Heading text
- `size?` - 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'lg')
- `className?` - Additional Tailwind classes

#### Usage:
```tsx
import { Heading } from "@/components/ui";

<Heading level="h1" size="xl">
  Welcome to Hotel Indigo
</Heading>

<Heading level="h2" size="lg">
  About Us
</Heading>
```

### Text

Component untuk text/paragraph dengan berbagai styling options.

#### Props:
- `children` - Text content
- `size?` - 'xs' | 'sm' | 'base' | 'lg' | 'xl' (default: 'base')
- `color?` - 'primary' | 'secondary' | 'body' | 'white' | 'gray' (default: 'body')
- `weight?` - 'light' | 'normal' | 'medium' | 'semibold' | 'bold' (default: 'normal')
- `align?` - 'left' | 'center' | 'right' (default: 'left')
- `className?` - Additional Tailwind classes

#### Usage:
```tsx
import { Text } from "@/components/ui";

<Text size="lg" color="primary" weight="bold">
  Important message
</Text>

<Text size="sm" color="gray" align="center">
  Description text
</Text>
```

### Container

Component untuk container/wrapper dengan berbagai ukuran.

#### Props:
- `children` - Container content
- `size?` - 'default' | 'sm' | 'lg' | 'full' (default: 'default')
- `className?` - Additional Tailwind classes

#### Usage:
```tsx
import { Container } from "@/components/ui";

<Container size="lg">
  {/* Content inside */}
</Container>

<Container size="full" className="bg-gray-100">
  {/* Full width content */}
</Container>
```

### Card

Component untuk card layout dengan berbagai variant.

#### Props:
- `children` - Card content
- `variant?` - 'default' | 'elevated' | 'outlined' (default: 'default')
- `className?` - Additional Tailwind classes

#### Usage:
```tsx
import { Card } from "@/components/ui";

<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## Import Shortcuts

Karena ada `index.ts` di setiap folder, Anda bisa import langsung dari folder:

```tsx
// Dari ui folder
import { Button, Heading, Text } from "@/components/ui";

// Dari sections folder
import { IntroSection, ReviewsSection } from "@/components/sections";

// Dari layout folder
import { Header, Footer } from "@/components/layout";

// Dari features folder
import { HeroSection, GallerySection } from "@/components/features";

// Atau dari main components
import { Button, Header, IntroSection } from "@/components";
```

## Best Practices

1. **Gunakan UI Components** - Jangan hardcode styling, gunakan reusable components
2. **Konsistensi** - Gunakan variant dan size yang sama di seluruh aplikasi
3. **Accessibility** - Pastikan semantic HTML dan ARIA labels
4. **Type Safety** - Leverage TypeScript untuk prop validation
5. **DRY** - Jika ada styling yang diulang, buat component baru

## Cara Menambah UI Component Baru

1. Buat file di `components/ui/NamaComponent.tsx`
2. Define props interface dengan TypeScript
3. Export di `components/ui/index.ts`
4. Update `components/index.ts`
5. Add documentation di README ini
