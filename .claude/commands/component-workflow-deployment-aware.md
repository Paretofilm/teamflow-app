Component development workflow with deployment awareness: $ARGUMENTS

DEPLOYMENT-AWARE WORKFLOW:
1. **Pre-Implementation Check**:
   - Check if any infrastructure changes are pending
   - Monitor ./logs/ampx.json for active deployments
   - Wait for completion before schema-dependent changes

2. **Smart Implementation Order**:
   - Infrastructure changes first (with deployment wait)
   - Schema changes second (with type generation wait)
   - Frontend changes last (can proceed immediately)

3. **Implementation with Hooks Benefits**:
   - Code auto-formats on every save
   - Tests run automatically in background (when not deploying)
   - GitHub issue updates with progress and deployment status
   - Quality gates guide best practices

4. **Error Handling**:
   - Parse deployment errors from log file
   - Provide specific fixes for common Amplify Gen 2 issues
   - Suggest rollback strategies for failed deployments

5. **Progress Tracking**:
   - Update GitHub issue with deployment status
   - Note any errors encountered and solutions applied
   - Track time spent waiting for deployments

This ensures we don't make changes that depend on incomplete deployments.
