#!/bin/bash

# Create issue branch script
# Usage: ./scripts/create-issue-branch.sh <issue-number>

set -e

if [ $# -eq 0 ]; then
    echo "Usage: $0 <issue-number>"
    exit 1
fi

ISSUE_NUMBER=$1
BRANCH_NAME="issue-${ISSUE_NUMBER}"

echo "Creating branch for issue #${ISSUE_NUMBER}..."

# Ensure we're on main branch and up to date
git checkout main
git pull origin main

# Create and checkout new branch
git checkout -b "${BRANCH_NAME}"

echo "✅ Created and switched to branch: ${BRANCH_NAME}"
echo "Ready to work on issue #${ISSUE_NUMBER}!"

# Push the branch to remote
git push -u origin "${BRANCH_NAME}"

echo "✅ Branch pushed to remote"
