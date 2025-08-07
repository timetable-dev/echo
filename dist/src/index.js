import { serve } from '@hono/node-server';
import { Hono } from 'hono';
const app = new Hono();
app.get('/', (c) => {
    return c.text('This is an example timetable data API imitating MSLU server to use in development and testing.');
});
app.get('/getGroups', (c) => {
    const facultyId = c.req.query('facultyId');
    const educationMode = c.req.query('educationMode');
    console.log(`Request: groups: facultyId = ${facultyId}, educationMode = ${educationMode}`);
    if (!facultyId || !educationMode) {
        return c.text('Missing facultyId or educationMode', 400);
    }
    let data = {
        data: [
            {
                IdGroup: 1111,
                Name: `101/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1112,
                Name: `101/2 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1113,
                Name: `201/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1114,
                Name: `201/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1115,
                Name: `301/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1116,
                Name: `301/2 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1117,
                Name: `401/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1118,
                Name: `401/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1119,
                Name: `501/1 (${facultyId}, ${educationMode})`,
            },
            {
                IdGroup: 1110,
                Name: `501/1 (${facultyId}, ${educationMode})`,
            },
        ]
    };
    return c.json(data);
});
app.get('/getTeachers', (c) => {
    console.log(`Request: teachers`);
    let data = {
        data: [
            {
                IdTeacher: 201,
                FIO_teacher: `Alice`,
            },
            {
                IdTeacher: 202,
                FIO_teacher: `Bod`,
            },
            {
                IdTeacher: 203,
                FIO_teacher: `Charlie`,
            },
            {
                IdTeacher: 204,
                FIO_teacher: `Dimon`,
            },
        ]
    };
    return c.json(data);
});
app.get('/backend', (c) => {
    const groupId = c.req.query("groupId");
    const weekType = c.req.query("weekType");
    console.log(`Request: data: groupId = ${groupId}, weekType = ${weekType}`);
    if (!groupId || !weekType) {
        return c.text('Missing entityId or weekType', 400);
    }
    let data = {
        data: [{
                Classroom: 'А101',
                DateIn: '2025-09-01',
                DateOut: '2025-09-01',
                Day: 'Понедельник',
                DayNumber: 1,
                Discipline: `Практ. фонет. (${groupId})`,
                Discipline_Type: 'Практ',
                FIO_teacher: 'Alice',
                Faculty: 'ФАЯ',
                Group: '101/1',
                IdGroup: '1111',
                IdSchedule: 1,
                Lesson: 1,
                TimeIn: '13:00',
                TimeOut: '14:20',
            },
            {
                Classroom: 'В207',
                DateIn: '2025-09-02',
                DateOut: '2025-09-02',
                Day: 'Вторник',
                DayNumber: 2,
                Discipline: `ПУПР (${weekType})`,
                Discipline_Type: 'Практ',
                FIO_teacher: 'Преподаватель с очень-очень-очень длинным именем',
                Faculty: 'ФАЯ',
                Group: '101/1',
                IdGroup: '1111',
                IdSchedule: 1,
                Lesson: 2,
                TimeIn: '13:00',
                TimeOut: '14:20',
            },
            {
                Classroom: 'Б307',
                DateIn: '2025-09-03',
                DateOut: '2025-09-03',
                Day: 'Среда',
                DayNumber: 3,
                Discipline: 'Алгоритмизация и программирование лингвистических задач',
                Discipline_Type: 'Сем',
                FIO_teacher: 'День прощания',
                Faculty: 'ФАЯ',
                Group: '101/1',
                IdGroup: '1111',
                IdSchedule: 1,
                Lesson: 3,
                TimeIn: '16:00',
                TimeOut: '17:20',
            },
            {
                Classroom: 'Д410',
                DateIn: '2025-09-03',
                DateOut: '2025-09-03',
                Day: 'Среда',
                DayNumber: 3,
                Discipline: 'Философия',
                Discipline_Type: 'Лек',
                FIO_teacher: 'Dmitry',
                Faculty: 'ФАЯ',
                Group: '101/1',
                IdGroup: '1111',
                IdSchedule: 1,
                Lesson: 4,
                TimeIn: '17:30',
                TimeOut: '18:50',
            },
        ]
    };
    return c.json(data);
});
app.get('/backend/teachers', (c) => {
    const teacherId = c.req.query("teacherId");
    const weekType = c.req.query("weekType");
    console.log(`Request: data: teacherId = ${teacherId}, weekType = ${weekType}`);
    if (!teacherId || !weekType) {
        return c.text('Missing entityId or weekType', 400);
    }
    let data = {
        data: [{
                Classroom: 'А101',
                DateIn: '2025-09-01',
                DateOut: '2025-09-01',
                Day: 'Понедельник',
                DayNumber: 1,
                Discipline: `Практ. фонет. (${teacherId})`,
                Discipline_Type: 'Практ',
                Faculty: 'ФАЯ',
                Group: '201/1',
                IdGroup: '2111',
                IdSchedule: 1,
                Lesson: 1,
                TimeIn: '13:00',
                TimeOut: '14:20',
            },
            {
                Classroom: 'В207',
                DateIn: '2025-09-02',
                DateOut: '2025-09-02',
                Day: 'Вторник',
                DayNumber: 2,
                Discipline: `Практ. фонет. (${weekType})`,
                Discipline_Type: 'Практ',
                Faculty: 'ФАЯ',
                Group: '201/1',
                IdGroup: '2111',
                IdSchedule: 1,
                Lesson: 2,
                TimeIn: '14:30',
                TimeOut: '15:50',
            },
            {
                Classroom: 'Б307',
                DateIn: '2025-09-02',
                DateOut: '2025-09-02',
                Day: 'Вторник',
                DayNumber: 2,
                Discipline: 'Теор. фонет. (1)',
                Discipline_Type: 'Лек',
                Faculty: 'ФАЯ',
                Group: '301/1',
                IdGroup: '3111',
                IdSchedule: 1,
                Lesson: 3,
                TimeIn: '16:00',
                TimeOut: '17:20',
            },
            {
                Classroom: 'Д410',
                DateIn: '2025-09-03',
                DateOut: '2025-09-03',
                Day: 'Суббота',
                DayNumber: 6,
                Discipline: 'Теор. фонет. (1)',
                Discipline_Type: 'Сем',
                Faculty: 'ФАЯ',
                Group: '301/1',
                IdGroup: '3111',
                IdSchedule: 1,
                Lesson: 4,
                TimeIn: '16:00',
                TimeOut: '17:20',
            },
        ]
    };
    return c.json(data);
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
    port: Number(process.env.PORT)
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
