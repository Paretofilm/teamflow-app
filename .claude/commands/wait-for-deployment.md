Monitor Amplify Gen 2 deployment and only proceed when complete: $ARGUMENTS

DEPLOYMENT MONITORING PROCESS:
1. Check if ./logs/ampx.json exists
2. Monitor for success/error indicators:
   - Success: "Deployment completed", "GraphQL endpoint ready", "Successfully deployed"
   - Error: "ERROR", "FAILED", "ValidationException"
3. Parse specific error messages for actionable feedback
4. Wait up to 5 minutes for deployment completion
5. Report status and any errors found

BEFORE PROCEEDING:
- Infrastructure changes require deployment completion
- Frontend changes can proceed immediately
- Schema changes need type regeneration wait

ERROR HANDLING:
- Parse deployment errors from log file
- Provide specific fixes for common Amplify Gen 2 issues
- Suggest rollback strategies for failed deployments

Only continue with next task after deployment confirmation.
