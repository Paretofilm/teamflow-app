You are setting up GitHub Actions integration for Claude Code with deployment-aware workflows.

CONTEXT AWARENESS:
- This is a TeamFlow application built with AWS Amplify Gen 2
- Deployment timing is critical (2-5 minutes for infrastructure changes)
- Hooks automatically format code, run tests, and update GitHub issues
- Integration should respect existing development workflow

GITHUB ACTIONS SETUP PROCESS:
1. RESEARCH THE CURRENT REPOSITORY STATE
   - Check existing GitHub Actions workflows
   - Review current branch structure and permissions
   - Understand deployment patterns

2. CREATE COMPREHENSIVE GITHUB ACTIONS INTEGRATION:
   - **claude-code-integration.yml** - Basic @claude implementation workflow
   - **claude-github-app.yml** - Full GitHub App with multiple commands
   - **SETUP.md** - Complete configuration and troubleshooting guide

3. AVAILABLE @CLAUDE COMMANDS TO IMPLEMENT:
   - `@claude implement this feature` - Automated feature implementation
   - `@claude review` - Code review assistance and guidance
   - `@claude test` - Testing guidance and implementation
   - `@claude fix` - Debugging and issue resolution
   - `@claude deploy` - Deployment status and guidance

4. DEPLOYMENT-AWARE FEATURES:
   - Respect Amplify Gen 2 deployment timing (2-5 minutes)
   - Handle schema changes and type regeneration
   - Integrate with existing hooks and monitoring
   - Create feature branches automatically
   - Generate pull requests with detailed context

5. AUTOMATICALLY CREATE PULL REQUEST:
   - Create feature branch for GitHub Actions setup
   - Add all workflow files and documentation
   - Create comprehensive PR with setup instructions
   - Include testing strategy and integration benefits

WORKFLOW INTEGRATION:
- Enable `@claude` comment automation in issues
- Automatic branch creation and PR generation
- Progress tracking and issue updates
- Team collaboration through PR-based workflow

EXECUTE THIS WORKFLOW:
1. Create GitHub Actions workflow files
2. Add comprehensive documentation
3. Update project documentation (CLAUDE.md)
4. Create feature branch and commit changes
5. Generate pull request with setup instructions
6. Provide next steps for repository secrets configuration

The setup should be deployment-aware and integrate seamlessly with existing Amplify Gen 2 patterns.