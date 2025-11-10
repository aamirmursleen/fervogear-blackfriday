# Claude Code - Token Optimization Instructions

## Critical Efficiency Rules

### NEVER Read These Directories (Massive Token Waste):
- ❌ `node_modules/` - Use package documentation instead
- ❌ `.next/` - Next.js build artifacts
- ❌ `dist/` or `build/` - Build output folders
- ❌ `.git/objects/` or `.git/logs/` - Git internals
- ❌ `__pycache__/` - Python cache files
- ❌ `coverage/` - Test coverage reports
- ❌ `vendor/` - Vendor dependencies (PHP, Go)
- ❌ `.venv/` or `venv/` - Python virtual environments

### Command Optimization

**Use These (Respect .gitignore):**
```bash
rg "pattern"              # Use ripgrep instead of grep
fd filename               # Use fd instead of find
bat filepath              # Use bat instead of cat (syntax highlighting)
jq '.key' file.json       # Use jq for JSON parsing
```

**Avoid These (Token Wasters):**
```bash
grep -r "pattern" .       # ❌ Scans everything
find . -name "file"       # ❌ Scans all directories
cat huge-file.txt         # ❌ Reads entire file
```

### Before ANY File Read:
1. **Check conversation buffer** - "Have I read this in last 10 messages?"
2. **If YES and no edits:** Use cached memory, do NOT re-read
3. **If uncertain:** Check git status or ask user
4. **Exception:** User explicitly says "check file again"

### Performance Rules:
- **One CLI command > Multiple tool calls** - Combine operations
- **Batch edits** - Use MultiEdit for multiple files
- **Direct paths** - If you know the path, use it directly
- **WebFetch** - Get docs from web instead of reading node_modules
- **Concise** - No preambles, minimal explanations unless asked

### File Search Strategy:
1. **Known path?** → Read directly
2. **Need to find?** → Use `fd` or `rg` with specific patterns
3. **Need docs?** → WebFetch official documentation
4. **Need types?** → Check TypeScript definitions, don't read node_modules

### Token-Saving Examples:

**❌ BAD (Wastes Tokens):**
```bash
grep -r "ComponentName" .
find . -name "*.tsx"
cat node_modules/package/index.js
```

**✅ GOOD (Efficient):**
```bash
rg "ComponentName" --type tsx
fd -e tsx ComponentName
# Read official docs via WebFetch instead
```

## Respect These Files:
- `.gitignore` - Always honor ignored files
- `.claudeignore` - Explicit Claude Code ignore file
- `.env.local` - Never read or expose secrets

## Project-Specific Notes:
Use `.claude/project-notes.md` for project-specific context (not this file).

---

**These rules apply to ALL projects to maximize efficiency and minimize token usage.**
