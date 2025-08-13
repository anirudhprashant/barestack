# Logo Assets

This directory contains all logo files used across the BareStack website.

## Current Logos

- `barestack-logo.svg` - Main BareStack logo (SVG format for scalability)

## Usage Guidelines

### File Naming Convention
- Use lowercase with hyphens for separation
- Include descriptive names (e.g., `barestack-logo-white.svg`, `barestack-icon-only.svg`)
- Prefer SVG format for scalability and smaller file sizes

### Implementation

To use logos in components:

```jsx
<img 
  src="/assets/images/logos/barestack-logo.svg" 
  alt="BareStack Logo" 
  className="h-8 w-auto"
/>
```

### Logo Variants

Consider creating these variants as needed:
- Main logo (current)
- White/light version for dark backgrounds
- Icon-only version
- Horizontal and vertical layouts
- Different sizes for specific use cases

## Adding New Logos

1. Place logo files in this directory
2. Use descriptive filenames
3. Update this README with new logo information
4. Test logos across different backgrounds and sizes
5. Ensure proper alt text for accessibility