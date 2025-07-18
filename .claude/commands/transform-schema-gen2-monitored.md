Transform the Todo schema to TeamFlow models with deployment monitoring.

DEPLOYMENT-AWARE TRANSFORMATION:
1. This will trigger a 2-5 minute deployment process
2. Monitor ./logs/ampx.json for completion
3. Types will auto-generate when deployment completes
4. Hooks will handle formatting and monitoring

TRANSFORMATION REQUIREMENTS:
1. Replace Todo model with Team, TeamMember, and Task models
2. Use userPool authorization (not iam)
3. Store user emails as strings (not relationships)
4. Add proper indexes for performance
5. Let hooks handle deployment monitoring

AFTER TRANSFORMATION:
- Deployment will start automatically (hooks will monitor)
- Wait for completion before proceeding
- Verify types are generated correctly
- Check for any deployment errors

Transform the schema now, and let deployment monitoring handle the rest.
