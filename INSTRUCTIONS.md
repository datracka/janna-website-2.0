# Claude Code Memory

## Project: Janna Ziesemer Professional Website

### Quick Commands
- **Merge workflow**: When user says "OK", "merge it", or "approve": run `./scripts/merge-current-pr.sh`
- **Issue workflow**: When user says "work on issue #X": run `./scripts/create-issue-branch.sh X`

### Project Structure
- **Frontend**: Astro + React + Tailwind
- **Analytics**: Google Analytics with Partytown (env: PUBLIC_GOOGLE_ANALYTICS_ID)
- **i18n**: Spanish (default) + English (/en)
- **Deployment**: Static site generation

### Development Workflow
1. Create issue branch: `./scripts/create-issue-branch.sh <issue-number>`
2. Implement feature
3. Test with: `npm run build`
4. Merge when approved: `./scripts/merge-current-pr.sh`

### Environment Variables
- `PUBLIC_GOOGLE_ANALYTICS_ID`: Google Analytics tracking ID
- Use `.env.example` as template

### Testing Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Lint: `npm run lint`

### GitHub Automation
- Auto-branch creation: Add `auto-branch` label to issues
- Auto-merge: Comment `/merge` on PR or approve review