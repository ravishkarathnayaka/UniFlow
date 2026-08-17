# UniFlow

UniFlow is a student productivity hub designed to help manage university tasks, deadlines, learning activities, events, and weekly workload in one place.

This project is being built as a hands-on software engineering and Microsoft Azure learning journey, with a focus on understanding the technologies behind the application rather than simply following tutorials.

## Live Application

UniFlow is currently deployed to Microsoft Azure using Azure Static Web Apps.

**Live site:**  
https://red-ocean-088a0a000.7.azurestaticapps.net

The application is automatically built and deployed from the `main` branch through GitHub Actions.

## Current Status

**UniFlow v0.1 — Foundation**

Completed:

- React application created with Vite
- Local development environment
- Basic UniFlow dashboard
- Responsive dashboard layout
- Sample task and workload UI
- Git version control
- GitHub repository
- Azure Resource Group
- Azure Static Web Apps deployment
- GitHub Actions CI/CD workflow
- Automatic deployment from GitHub to Azure
- Public HTTPS production deployment

The current dashboard uses sample data and is not yet connected to persistent storage.

## Current Technology Stack

- React
- JavaScript
- Vite
- HTML
- CSS
- Git
- GitHub
- GitHub Actions
- Microsoft Azure
- Azure Static Web Apps

Additional Azure services will be introduced progressively as UniFlow develops.

## Current Dashboard

The current dashboard includes:

- Task overview
- Upcoming deadlines
- Learning activity overview
- Upcoming events
- Upcoming task list
- Task priorities
- Weekly workload overview

At this stage, the dashboard is primarily the frontend foundation for the application.

## Deployment & CI/CD

UniFlow currently uses the following deployment workflow:

```text
Local development
        ↓
Git commit
        ↓
Push to GitHub main branch
        ↓
GitHub Actions workflow
        ↓
Vite production build
        ↓
dist/
        ↓
Azure Static Web Apps
        ↓
Live production application
```

The Azure Static Web Apps deployment uses a secure GitHub Actions secret for deployment authentication rather than storing deployment credentials directly in the source code.

The current Azure Static Web Apps resource uses the **Free hosting plan**.

## Development Roadmap

### v0.2 — Real Task Management

Planned next:

- Create tasks
- Edit tasks
- Delete tasks
- Task priorities
- Deadlines
- Status management
- Filtering
- Improved React application structure

### Later Milestones

Future versions will progressively introduce:

- Azure Functions
- REST APIs
- Persistent cloud storage/database
- Microsoft Entra ID
- Authentication and authorization
- Azure Key Vault
- Secret management
- Application Insights
- Azure Monitor
- Improved GitHub Actions workflows
- Microsoft AI capabilities

AI functionality will only be introduced after the core application is working reliably.


