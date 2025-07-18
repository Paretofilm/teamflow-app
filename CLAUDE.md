# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TeamFlow application built with AWS Amplify Gen 2. It's a backend-only project currently focused on setting up the infrastructure with authentication and data management capabilities.

## Architecture

### AWS Amplify Gen 2 Structure
- **Backend Definition**: `amplify/backend.ts` - Main backend configuration that imports auth and data resources
- **Authentication**: `amplify/auth/resource.ts` - Email-based authentication using AWS Cognito
- **Data Layer**: `amplify/data/resource.ts` - GraphQL API with a Todo model, uses guest authorization for unauthenticated access
- **Authorization**: Currently configured for guest access, uses Identity Pool as default authorization mode

### Key Components
- **Todo Model**: Simple model with `content` field (string), allows guest CRUD operations
- **Auth Configuration**: Email-based login with AWS Cognito
- **TypeScript**: Full TypeScript support with ES2022 target and module resolution

## Development Commands

Since this is an Amplify Gen 2 project, use these commands:

```bash
# Install dependencies
npm install

# Deploy/update backend (requires AWS CLI configured)
npx amplify sandbox

# Generate types after schema changes
npx amplify generate

# Delete sandbox environment
npx amplify sandbox delete
```

## File Structure

```
teamflow-app/
├── amplify/                 # Amplify backend configuration
│   ├── backend.ts          # Main backend definition
│   ├── auth/resource.ts    # Authentication resource
│   ├── data/resource.ts    # Data/GraphQL schema
│   ├── package.json        # ESM module config
│   └── tsconfig.json       # TypeScript config with path mapping
├── package.json            # Main project dependencies
└── package-lock.json       # Dependency lock file
```

## Important Notes

- This is a backend-only project - no frontend code exists yet
- The project uses CommonJS in root but ESM in the amplify directory
- TypeScript path mapping is configured for `$amplify/*` to reference generated types
- Guest authorization is enabled on the Todo model for unauthenticated access
- The project appears to be in early development stage with minimal implementation
## Deployment-Aware Development Workflow

This project uses Claude Code hooks with Amplify Gen 2 deployment awareness:

### Active Hooks with Deployment Intelligence
- **Auto-formatting**: TypeScript/React files formatted on every edit
- **Deployment Monitoring**: Infrastructure changes trigger log monitoring
- **Smart Testing**: Tests run when not actively deploying
- **GitHub Integration**: Issues updated with deployment status
- **Quality Gates**: Deployment-aware warnings and recommendations
- **Error Handling**: Automatic deployment error detection and reporting

### Amplify Gen 2 Deployment Behavior
- Infrastructure changes: 2-5 minutes deployment time
- Schema changes trigger automatic type regeneration
- Frontend changes: Immediate (no deployment wait)
- Log monitoring: All deployments tracked in ./logs/ampx.json
- Hooks respect deployment timing and provide appropriate feedback

### Realistic Development Timeline
- Plan for deployment wait times in estimates
- Infrastructure features: 10-15 minutes including deployment
- Frontend-only features: Immediate development
- Testing runs automatically when safe (not during deployment)

### Error Recovery
- Deployment errors automatically detected and reported
- Common fixes suggested based on log analysis
- Rollback strategies provided for failed deployments
- Quality gates prevent deployment conflicts

## GitHub Actions Integration

### Claude Code Automation
The project includes GitHub Actions workflows for automated feature implementation:

**Workflow**: `.github/workflows/claude-code-integration.yml`
- **Trigger**: `@claude implement this feature` comment on issues
- **Action**: Automatically implements features using Claude Code
- **Output**: Creates feature branch and pull request

### Required Setup
1. **Repository Secrets**: Add `ANTHROPIC_API_KEY` to GitHub repository secrets
2. **Permissions**: Enable "Read and write permissions" for GitHub Actions
3. **PR Creation**: Allow GitHub Actions to create pull requests

### Usage Flow
1. Create issue with `/project:feature-spec-deployment-aware [feature]`
2. Comment `@claude implement this feature` on the issue
3. GitHub Actions automatically:
   - Creates feature branch (`feature/issue-{number}`)
   - Implements the feature using Claude Code
   - Creates pull request with implementation
   - Updates issue with progress and links

### Integration Benefits
- **Deployment-Aware**: Respects Amplify Gen 2 deployment timing
- **Automatic**: No manual Claude Code execution needed
- **Traceable**: All implementations linked to issues and PRs
- **Collaborative**: Team can review before merging

See `.github/SETUP.md` for detailed configuration instructions.
