# TeamFlow App

A modern task management application built with Next.js 14, AWS Amplify Gen 2, and Tailwind CSS.

## Features

- **Next.js 14 with App Router** - Modern React framework with optimal performance
- **AWS Amplify Gen 2** - Fully managed backend with authentication and data
- **Amplify UI Components** - Pre-built authentication and UI components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Real-time Updates** - GraphQL subscriptions for live data sync

## Getting Started

### Prerequisites

- Node.js 18+ 
- AWS CLI configured with appropriate credentials
- AWS Amplify CLI installed

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Deploy the Amplify backend**
   ```bash
   npx amplify sandbox
   ```
   This will create your backend infrastructure and generate the `amplify_outputs.json` file.

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Visit [http://localhost:3000](http://localhost:3000) to see the app.

### Project Structure

```
teamflow-app/
├── amplify/                 # Amplify backend configuration
│   ├── auth/resource.ts    # Authentication setup
│   ├── data/resource.ts    # GraphQL schema and data models
│   └── backend.ts          # Backend configuration
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with Amplify provider
│   │   ├── page.tsx        # Main application page
│   │   └── globals.css     # Global styles and Tailwind
│   ├── components/         # React components
│   │   ├── AuthenticatedLayout.tsx
│   │   └── TodoList.tsx
│   └── lib/
│       └── amplify.ts      # Amplify client configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Commands

- `npx amplify sandbox` - Deploy backend to personal sandbox
- `npx amplify generate` - Generate types from GraphQL schema
- `npx amplify sandbox delete` - Delete sandbox environment

## Features Overview

### Authentication
- Email-based sign up and sign in
- Secure session management
- Protected routes

### Todo Management
- Create, read, update, delete todos
- Real-time updates across all clients
- Responsive design for mobile and desktop

### Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: AWS Amplify Gen 2, GraphQL, AWS AppSync
- **Authentication**: AWS Cognito
- **Database**: AWS DynamoDB
- **Real-time**: GraphQL subscriptions

## Development

The application is configured for development with:
- Hot reloading for fast development
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (via hooks)

## Deployment

To deploy to production:

1. **Deploy backend**
   ```bash
   npx amplify sandbox
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Deploy to Amplify Hosting** (optional)
   Connect your repository to AWS Amplify Hosting for automatic deployments.

## Support

For issues and questions:
- Check the [Amplify documentation](https://docs.amplify.aws/)
- Review the [Next.js documentation](https://nextjs.org/docs)
- Open an issue in this repository