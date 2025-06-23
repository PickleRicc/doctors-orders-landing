// Utility to combine class names (Tailwind best practice)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Add more utility functions as needed 