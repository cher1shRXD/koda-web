# Coding Style Taxonomy

Comprehensive classification of all dimensions that define a developer's coding style.  
This specification is intended for analysis engines, developer profiling systems, and AI code modeling.

---

# 1. Syntax Style
Visual and syntactic formatting preferences.

- Semicolon usage
- Quote style (' vs ")
- Trailing comma usage
- Arrow function vs function declaration
- Implicit return usage
- Template literal preference
- Optional chaining usage
- Nullish coalescing usage
- Destructuring frequency
- Spread operator usage
- Ternary operator usage tendency
- Early return usage
- Default parameter usage

---

# 2. Naming Convention

## Variables
- camelCase
- snake_case
- PascalCase
- Hungarian notation
- Abbreviation usage

## Functions
- Verb-first naming
- get/set prefix usage
- handle prefix usage
- on prefix usage

## Files
- kebab-case
- PascalCase
- Index file preference
- Feature-based vs type-based naming

## Folders
- Feature-based structure
- Layer-based structure
- Domain-based structure

---

# 3. Structural Style

- Functions per file
- Average file length
- Component splitting criteria
- Utility extraction criteria
- Service layer presence
- DTO separation
- Type declaration location
- interface vs type preference
- Barrel export usage
- Absolute import usage

---

# 4. Organization Patterns

- Import ordering style
- Import grouping
- Dependency depth
- Circular dependency tolerance
- Alias usage
- Configuration file placement rules

---

# 5. Error Handling Style

- try/catch frequency
- throw vs return error preference
- Custom error class usage
- Logging placement
- Error wrapping usage
- Fail-fast preference

---

# 6. Async Style

- async/await vs promise chains
- Parallel execution preference
- Promise.all usage frequency
- Race condition prevention patterns
- Retry logic presence
- Timeout handling strategy

---

# 7. Abstraction Preference

- Function extraction tendency
- DRY strictness level
- Inline code tolerance
- Generic usage frequency
- Utility function creation criteria
- Reusability vs clarity priority

---

# 8. Comment Style

- Comment density
- Sentence-style vs keyword-style
- JSDoc usage
- TODO habit
- FIXME usage
- Section comment usage

---

# 9. Type Philosophy

- Strict typing usage
- any allowance
- unknown preference
- Type inference reliance
- Explicit typing frequency
- enum vs union preference
- readonly usage

---

# 10. State Management Pattern

- Global state preference
- Local state preference
- State separation criteria
- Mutation tolerance
- Selector pattern usage
- Derived state calculation location

---

# 11. UI / Component Style

- Component length
- Hook extraction criteria
- Presentational vs container separation
- Styling approach
  - CSS
  - CSS Modules
  - Styled Components
  - Tailwind
- Inline style allowance

---

# 12. Testing Style

- Test usage frequency
- Test file placement
- Test naming convention
- Mock usage frequency
- Snapshot testing usage
- E2E vs Unit preference

---

# 13. Git Style

- Commit message format
- Prefix usage (feat, fix, chore, etc.)
- Commit size
- Squash preference
- Branch naming rules
- PR description length

---

# 14. Performance Philosophy

- Premature optimization tolerance
- Memoization usage frequency
- Caching strategy preference
- Lazy loading criteria
- Debounce/throttle usage tendency

---

# 15. Security Style

- Validation location
- Sanitization usage
- Environment separation strategy
- Secret management method
- Rate limiting consideration

---

# 16. Dependency Philosophy

- Library usage tolerance
- Build vs buy preference
- Dependency count tolerance
- Bundle size sensitivity

---

# 17. Meta Coding Philosophy

High-level decision tendencies that define developer identity.

- Readability vs brevity
- Explicitness vs implicitness
- Stability vs speed
- Type safety vs development speed
- Structural rigidity vs flexibility

---

# Summary

Coding style is not formatting.

Coding style is a behavioral fingerprint.

Any system attempting to model developers must analyze:
- syntax
- structure
- architecture
- decision patterns
- philosophy

All five layers are required for accurate developer modeling.
