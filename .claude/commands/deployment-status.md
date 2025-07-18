Check current Amplify Gen 2 deployment status and provide actionable feedback.

STATUS CHECK PROCESS:
1. Check if sandbox is running (process check)
2. Parse recent entries in ./logs/ampx.json
3. Identify current deployment phase
4. Report any errors with suggested fixes
5. Estimate completion time for pending deployments

OUTPUT FORMAT:
- 🟢 Ready for development
- 🟡 Deployment in progress (X minutes remaining)
- 🔴 Error detected (specific issue and fix)
- ⚪ Sandbox not running (restart needed)

LOG PARSING CAPABILITIES:
1. Extract deployment errors with context
2. Find GraphQL schema validation issues
3. Identify resource creation failures
4. Track deployment timing and phases
5. Extract useful error messages for debugging

This helps you know when it's safe to proceed with development.
