const { app } = require('@azure/functions');

const tasks = [
    {
        id: 'task-1',
        title: 'Network Security Assignment',
        category: 'University Assignment',
        dueDate: '2026-08-12',
        priority: 'High',
        status: 'Not Started',
    },
    {
        id: 'task-2',
        title: 'Azure Learning Module',
        category: 'Learning',
        dueDate: '2026-08-15',
        priority: 'Medium',
        status: 'In Progress',
    },
    {
        id: 'task-3',
        title: 'Project Documentation',
        category: 'Personal Project',
        dueDate: '2026-08-18',
        priority: 'Low',
        status: 'Not Started',
    },
];

app.http('tasks', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`GET /api/tasks requested`);

        return {
            status: 200,
            jsonBody: tasks,
        };
    },
});