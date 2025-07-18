You are creating a new GitHub repository under the Paretofilm organization with proper setup.

ORGANIZATION CONTEXT:
- **Default Organization**: Paretofilm
- **Repository Location**: All repositories should be created under github.com/Paretofilm/
- **Team Access**: Repositories under organization enable team collaboration
- **Consistent Context**: Maintains organizational structure for all projects

REPOSITORY CREATION PROCESS:
1. ANALYZE REPOSITORY REQUIREMENTS
   - Repository name (kebab-case format)
   - Description and purpose
   - Visibility (public/private)
   - Initial setup requirements

2. CREATE REPOSITORY UNDER PARETOFILM ORGANIZATION:
   ```bash
   gh repo create Paretofilm/[repo-name] --public --description "[description]"
   ```

3. CLONE AND SETUP:
   ```bash
   git clone https://github.com/Paretofilm/[repo-name].git
   cd [repo-name]
   ```

4. INITIALIZE PROJECT STRUCTURE:
   - Add CLAUDE.md with Paretofilm organization configuration
   - Set up .gitignore appropriate for project type
   - Initialize package.json or relevant project files
   - Add README.md with project description

5. CONFIGURE ORGANIZATION SETTINGS:
   - Enable GitHub Actions if needed
   - Set up repository secrets (ANTHROPIC_API_KEY if applicable)
   - Configure branch protection rules
   - Set up team access permissions

PARETOFILM ORGANIZATION STANDARDS:
- Repository names use kebab-case format
- All repositories include proper documentation
- GitHub Actions workflows use organization context
- Team collaboration enabled by default
- Consistent project structure across repositories

EXECUTE THIS WORKFLOW:
1. Create repository under Paretofilm organization
2. Clone and set up local development environment
3. Initialize project structure with organization standards
4. Configure GitHub settings and permissions
5. Provide next steps for development

Repository name: $ARGUMENTS