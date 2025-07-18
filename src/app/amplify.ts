'use client'

import { Amplify } from 'aws-amplify'

let amplifyConfig: any = {}

// Try to load the actual amplify_outputs.json
try {
  amplifyConfig = require('../../amplify_outputs.json')
} catch (error) {
  console.warn('amplify_outputs.json not found. Please run `npx amplify sandbox` to generate it.')
  // Set a placeholder config to prevent errors
  amplifyConfig = {
    auth: {
      user_pool_id: 'placeholder',
      aws_region: 'us-east-1',
      user_pool_client_id: 'placeholder',
      identity_pool_id: 'placeholder',
    },
    data: {
      url: 'https://placeholder.appsync-api.us-east-1.amazonaws.com/graphql',
      aws_region: 'us-east-1',
      default_authorization_type: 'identityPool',
    },
  }
}

Amplify.configure(amplifyConfig)