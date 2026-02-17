export const EXAMPLE_CODE = `{
  "folder_structure": {
    "pattern": {
      "value": "Modular organization with Next.js App Router for routing, 'entities' for domain logic, 'shared' for common utilities, and 'widgets' for larger UI components.",
      "confidence": "high"
    },
    "depth": {
      "value": "moderate",
      "confidence": "high"
    }
  },
  "file_naming": {
    "component": {
      "value": "PascalCase for React components (e.g., Cursor.tsx, Intro.tsx)",
      "confidence": "high"
    },
    "utility": {
      "value": "kebab-case or camelCase for utility files (e.g., format-date.ts, useCheckMobile.ts)",
      "confidence": "medium"
    },
    "test": {
      "value": "not_detected",
      "confidence": "none"
    },
    "style": {
      "value": "kebab-case for global style files (e.g., globals.css, theme.css)",
      "confidence": "high"
    },
    "route_handler": {
      "value": "route.ts for API route handlers",
      "confidence": "high"
    },
    "page_file": {
      "value": "page.tsx for Next.js page components",
      "confidence": "high"
    },
    "layout_file": {
      "value": "layout.tsx for Next.js layout components",
      "confidence": "high"
    }
  },
  "folder_naming": {
    "case_style": {
      "value": "kebab-case",
      "confidence": "high"
    },
    "pattern": {
      "value": "Folders are named descriptively, often reflecting features or concerns.",
      "confidence": "high"
    }
  },
  "code_patterns": {
    "component_definition": {
      "value": "arrow function",
      "confidence": "high"
    },
    "export_style": {
      "value": "mixed (default for components, named for utilities/APIs)",
      "confidence": "medium"
    }
  },
  "global_naming": {
    "constants": {
      "value": "SCREAMING_SNAKE_CASE for global constants (e.g., EMAIL_REGEX)",
      "confidence": "high"
    },
    "functions": {
      "value": "camelCase for helper functions, PascalCase for Next.js page components",
      "confidence": "medium"
    },
    "classes": {
      "value": "not_detected",
      "confidence": "none"
    }
  },
  "architecture": {
    "style": {
      "value": "Modular (potentially Feature-Sliced Design inspired)",
      "confidence": "high"
    },
    "description": {
      "value": "Code is organized into 'app' for Next.js routing, 'entities' for domain-specific APIs and types, 'shared' for reusable utilities and foundational UI, and 'widgets' for larger, composable UI blocks.",
      "confidence": "high"
    }
  },
  "framework": {
    "primary": {
      "value": "Next.js",
      "confidence": "high"
    },
    "version": {
      "value": "16.1.6 with App Router",
      "confidence": "high"
    }
  },
  "styling": {
    "approach": {
      "value": "Tailwind CSS with global CSS imports for custom styles",
      "confidence": "high"
    },
    "convention": {
      "value": "Utility-first CSS via Tailwind, supplemented by custom global styles for theming and fonts.",
      "confidence": "high"
    }
  },
  "api": {
    "pattern": {
      "value": "RESTful API routes using Next.js App Router route handlers",
      "confidence": "high"
    },
    "client": {
      "value": "native-fetch for client-side API interactions",
      "confidence": "high"
    }
  },
  "components": {
    "organization": {
      "value": "Components are organized by feature or purpose within 'shared/ui' for foundational elements and 'widgets/*/ui' for larger, feature-specific UI blocks.",
      "confidence": "high"
    },
    "composition": {
      "value": "Composed of larger, feature-oriented 'widgets' and smaller 'shared' UI components.",
      "confidence": "medium"
    }
  },
  "state_management": {
    "solution": {
      "value": "Context (likely via Next.js and React hooks)",
      "confidence": "medium"
    },
    "pattern": {
      "value": "Relies on Next.js server components for data fetching and React's built-in state management for client-side interactions.",
      "confidence": "medium"
    }
  },
  "data_fetching": {
    "strategy": {
      "value": "mixed (Server Components for initial data, client-side fetch for interactive updates)",
      "confidence": "high"
    },
    "tools": {
      "value": "native-fetch (via Server Components and client-side utilities)",
      "confidence": "high"
    }
  },
  "env": {
    "usage": {
      "value": "Environment variables used for sensitive data and configuration (e.g., API keys, database IDs)",
      "confidence": "high"
    },
    "validation": {
      "value": "not_detected",
      "confidence": "none"
    }
  },
  "tooling": {
    "build": {
      "value": "Next.js internal build system",
      "confidence": "high"
    },
    "package_manager": {
      "value": "pnpm",
      "confidence": "high"
    }
  },
  "testing": {
    "framework": {
      "value": "not_detected",
      "confidence": "none"
    },
    "coverage": {
      "value": "not_detected",
      "confidence": "none"
    }
  },
  "formatting": {
    "formatter": {
      "value": "ESLint",
      "confidence": "high"
    },
    "config": {
      "value": "Configured via 'eslint.config.mjs' and 'eslint-config-next'",
      "confidence": "high"
    }
  },
  "typesystem": {
    "language": {
      "value": "TypeScript",
      "confidence": "high"
    },
    "strictness": {
      "value": "strict",
      "confidence": "high"
    }
  },
  "imports": {
    "style": {
      "value": "absolute",
      "confidence": "high"
    },
    "alias": {
      "value": "Aliases configured with '@/*' mapping to './src/'",
      "confidence": "high"
    }
  },
  "layer_rules": {
    "separation": {
      "value": "strict",
      "confidence": "high"
    },
    "description": {
      "value": "Clear separation of concerns into 'app' (routing), 'entities' (domain/data), 'shared' (cross-cutting concerns), and 'widgets' (feature-specific UI components).",
      "confidence": "high"
    }
  },
  "etc": {
    "unique_patterns": {
      "value": "Utilizes React Compiler for optimizing React components.",
      "confidence": "high"
    }
  }
}`;
