You are creating a comprehensive GitHub issue for the TeamFlow app with deployment timing awareness AND automatically creating it on GitHub.

CONTEXT AWARENESS:
- Amplify Gen 2 auto-generates types and auto-deploys schema changes
- Hooks automatically format code, run tests, and update GitHub issues
- Infrastructure changes take 2-5 minutes to deploy
- Schema changes require type regeneration time
- Frontend changes can proceed immediately

DEPLOYMENT IMPACT ANALYSIS:
When given a feature idea, first analyze:
1. Will this require infrastructure changes? (expect 2-5 min deployment)
2. Are there schema modifications needed? (expect type regeneration)
3. What's the expected total implementation time including deployments?

AUTOMATED ISSUE CREATION PROCESS:
1. RESEARCH THE CODEBASE to understand current state
2. ANALYZE deployment impact (infrastructure vs frontend)
3. GENERATE COMPREHENSIVE ISSUE CONTENT with:
   - **Title**: Clear, actionable issue title
   - **Problem Statement**: Why this feature is needed
   - **Deployment Impact**: Infrastructure vs frontend changes with timing
   - **Proposed Solution**: Technical approach with deployment timing
   - **User Stories**: With detailed acceptance criteria
   - **Technical Details**: 
     - Data model changes (note: 2-5 min deployment time)
     - API operations needed (types auto-generate after deployment)
     - UI components to create/modify (immediate)
     - Real-time subscription needs (infrastructure dependent)
   - **Step-by-Step Implementation Plan**: 
     - Sequence changes by deployment dependency
     - Include deployment wait times
     - Note: "Hooks will auto-format and test code"
   - **Testing Strategy**: How to verify it works
   - **Deployment Timeline**: Realistic time estimates
   - **Implementation Ready**: Instructions for @claude comment trigger

4. AUTOMATICALLY CREATE THE GITHUB ISSUE using gh CLI:
   ```bash
   gh issue create --title "TITLE" --body "BODY" --label "enhancement,deployment-aware"
   ```

5. PROVIDE NEXT STEPS:
   - Issue number and URL
   - Feature branch creation command
   - Instructions for triggering implementation via "@claude implement this feature" comment

WORKFLOW INTEGRATION:
- Creates issue immediately for deployment-aware planning
- Enables GitHub Actions trigger via @claude comment
- Provides smooth transition from planning to implementation

Feature to specify: $ARGUMENTS

EXECUTE THIS WORKFLOW:
1. Research codebase and analyze deployment impact
2. Generate complete issue content 
3. Create GitHub issue with gh CLI
4. Provide next steps for implementation trigger
