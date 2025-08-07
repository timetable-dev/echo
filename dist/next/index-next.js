import { serve } from '@hono/node-server';
import { Hono } from 'hono';
const app = new Hono();
app.get('/', (c) => {
    return c.text('This is an example timetable data API to use in development and testing.');
});
app.get('/groups/:facultyId/:educationMode', (c) => {
    const facultyId = c.req.param('facultyId');
    const educationMode = c.req.param('educationMode');
    let groups = [];
    return c.json(groups);
});
app.get('/teachers', (c) => {
    let teachers = [];
    return c.json(teachers);
});
app.get('/data/:entityType/:entityId/:week', (c) => {
    const entityType = c.req.param('entityType');
    const entityId = c.req.param('entityId');
    const week = c.req.param('week');
    const timetableData = {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
    };
    return c.json(timetableData);
});
app.notFound((c) => {
    return c.text('Not Found', 404);
});
app.onError((err, c) => {
    console.error(err);
    return c.text('Internal Server Error', 500);
});
serve({
    fetch: app.fetch,
    port: 3000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
