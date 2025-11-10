#!/bin/bash

# Extract command from stdin
COMMAND=$(cat | jq -r '.tool_input.command // empty' 2>/dev/null || cat)

# Blocked directory patterns
BLOCKED="node_modules|\.env|__pycache__|\.git/objects|\.git/logs|dist/|build/|\.next/|coverage/"

# Check if command contains blocked patterns
if echo "$COMMAND" | grep -qE "$BLOCKED"; then
    # Return JSON response to deny permission
    cat << 'EOF'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Blocked: Command contains restricted directory pattern (node_modules, .env, .git internals, or build artifacts). Use direct file paths or configure .gitignore."
  }
}
EOF
    exit 0
fi

# Allow command
exit 0
