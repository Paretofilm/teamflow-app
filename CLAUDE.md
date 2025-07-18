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