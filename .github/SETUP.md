# GitHub Actions Setup for Claude Code Integration

## Overview

This repository includes two GitHub Actions workflows for Claude Code integration:

1. **`claude-code-integration.yml`** - Basic feature implementation
2. **`claude-github-app.yml`** - Full GitHub App integration with multiple commands

## Required Repository Secrets

To enable the `@claude` comment workflow, you need to configure these repository secrets:

### 1. ANTHROPIC_API_KEY
- **Purpose**: Enables Claude Code to authenticate with Anthropic's API
- **How to get**: 
  1. Go to https://console.anthropic.com/
  2. Create an API key
  3. Copy the key (starts with `sk-ant-api...`)

### 2. GITHUB_TOKEN
- **Purpose**: Automatically configured by GitHub Actions
- **No action required**: This is automatically provided by GitHub

## Setup Instructions

### Step 1: Add Repository Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `ANTHROPIC_API_KEY` | `sk-ant-api-...` | Your Anthropic API key |

### Step 2: Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", ensure:
   - ✅ "Read and write permissions" is selected
   - ✅ "Allow GitHub Actions to create and approve pull requests" is checked

### Step 3: Test the Integration

1. Create a GitHub issue using `/project:feature-spec-deployment-aware`
2. Comment `@claude implement this feature` on the issue
3. The GitHub Action will:
   - Create a feature branch
   - Implement the feature using Claude Code
   - Create a pull request
   - Update the issue with progress

## Workflow Features

### Automatic Implementation
- **Trigger**: `@claude implement this feature` comment
- **Action**: Creates branch, implements feature, creates PR
- **Deployment-Aware**: Respects Amplify Gen 2 deployment timing

### Smart Branch Management
- **Naming**: `feature/issue-{number}`
- **Auto-creation**: Branch created from main/dev
- **PR Creation**: Automatic pull request with implementation

### Issue Integration
- **Progress Updates**: Comments on issue with implementation status
- **PR Linking**: Links pull request to original issue
- **Auto-close**: Closes issue when PR is merged

## Troubleshooting

### Common Issues

1. **Missing API Key**: Ensure `ANTHROPIC_API_KEY` is set correctly
2. **Permission Errors**: Check workflow permissions in repository settings
3. **Branch Conflicts**: Ensure main/dev branch is up to date

### Debug Steps

1. Check **Actions** tab for workflow run details
2. Review step logs for error messages
3. Verify secrets are configured correctly
4. Ensure repository has required permissions

## Usage Examples

### GitHub App Commands (claude-github-app.yml)

```bash
# Create feature issue
/project:feature-spec-deployment-aware Add user authentication system

# Available @claude commands:
@claude implement this feature  # Implement feature described in issue
@claude review                  # Request code review assistance
@claude test                    # Add tests to codebase
@claude fix                     # Debug and fix issues
@claude deploy                  # Get deployment status and help
```

### Basic Implementation (claude-code-integration.yml)

```bash
# Simple implementation trigger
@claude implement this feature
@claude implement
```

### Command Responses

The GitHub App provides intelligent responses:
- **Implementation**: Creates feature branch and PR
- **Review**: Guidance on code review setup
- **Testing**: Helps create comprehensive tests
- **Debugging**: Assists with issue resolution
- **Deployment**: Provides Amplify status and guidance

## Integration with Amplify Gen 2

The workflow is designed to work seamlessly with your Amplify Gen 2 setup:

- **Deployment Timing**: Respects infrastructure deployment wait times
- **Type Generation**: Handles automatic type regeneration
- **Hook Integration**: Works with existing Claude Code hooks
- **Log Monitoring**: Integrates with `./logs/ampx.json` monitoring

## Security Notes

- API keys are stored as encrypted secrets
- Workflow runs in isolated environments
- All actions are logged and auditable
- Permissions are scoped to necessary operations only