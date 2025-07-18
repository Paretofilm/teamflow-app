You are providing instructions for GitHub App installation that the user must complete manually outside of Claude Code.

IMPORTANT: GitHub App installation should NOT be done within Claude Code sessions.

CONTEXT AWARENESS:
- This is a TeamFlow application built with AWS Amplify Gen 2
- Deployment timing is critical (2-5 minutes for infrastructure changes)
- GitHub App installation requires manual user action for proper authentication
- Integration should respect existing development workflow

GITHUB APP INSTALLATION INSTRUCTIONS:
1. **STOP CLAUDE CODE SESSION**: Exit Claude Code before proceeding
2. **MANUAL INSTALLATION REQUIRED**: User must complete these steps outside Claude Code
3. **AUTHENTICATION**: Ensures proper GitHub authentication and permissions

INSTRUCTIONS TO PROVIDE TO USER:
```
🚨 MANUAL ACTION REQUIRED - Please complete OUTSIDE of Claude Code:

1. **Exit Claude Code**: Close this session first
2. **Install GitHub App**: Run these commands in your terminal:
   
   gh auth login --web
   
   Follow the prompts to:
   - Authenticate with GitHub
   - Grant necessary permissions
   - Install GitHub App for your organization

3. **Verify Installation**:
   gh auth status
   gh repo view

4. **Return to Claude Code**: Once installation is complete, you can resume

⚠️  Do NOT attempt this installation within Claude Code sessions
```

WHEN TO PROVIDE THESE INSTRUCTIONS:
- When user needs GitHub App functionality
- When authentication errors occur
- When repository permissions are insufficient
- When prompted to install GitHub App

FOLLOW-UP ACTIONS:
- After user completes manual installation
- Verify GitHub App is properly configured
- Test GitHub CLI functionality
- Resume normal Claude Code operations

EXECUTE THIS WORKFLOW:
1. Detect need for GitHub App installation
2. Provide clear manual installation instructions
3. Instruct user to exit Claude Code session
4. Wait for user to complete installation
5. Resume with verification and testing

The user must complete GitHub App installation manually for proper authentication and functionality.