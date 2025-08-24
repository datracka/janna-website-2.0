#!/bin/bash

# Merge current PR script
# Usage: ./scripts/merge-current-pr.sh

set -e

# Get current branch name
CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" = "main" ]; then
    echo "❌ Cannot merge main branch"
    exit 1
fi

echo "Preparing to merge branch: ${CURRENT_BRANCH}"

# Ensure all changes are committed
if ! git diff-index --quiet HEAD --; then
    echo "❌ There are uncommitted changes. Please commit them first."
    exit 1
fi

# Push current branch
echo "📤 Pushing current branch..."
git push origin "${CURRENT_BRANCH}"

# Switch to main and update
echo "🔄 Switching to main branch..."
git checkout main
git pull origin main

# Merge the feature branch
echo "🔀 Merging ${CURRENT_BRANCH} into main..."
git merge "${CURRENT_BRANCH}" --no-ff -m "Merge branch '${CURRENT_BRANCH}'"

# Push main
echo "📤 Pushing main branch..."
git push origin main

# Delete the feature branch (local and remote)
echo "🗑️  Cleaning up branches..."
git branch -d "${CURRENT_BRANCH}"
git push origin --delete "${CURRENT_BRANCH}"

echo "✅ Successfully merged and cleaned up branch: ${CURRENT_BRANCH}"
