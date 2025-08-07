import { serve } from '@hono/node-server'
import { Hono } from 'hono'

export interface MsluScheduleItem {
  Classroom: string;
  DateIn: string;
  DateOut: string;
  Day: string;
  DayNumber: number;
  Discipline: string;
  Discipline_Type: string;
  FIO_teacher?: string; // Absent for teachers
  Faculty: string;
  Group: string;
  IdGroup: string;
  IdSchedule: number;
  Lesson: number;
  TimeIn: string;
  TimeOut: string;
}

const app = new Hono()

app.get('/', (c) => {
  return c.text('This is an example timetable data API imitating MSLU server to use in development and testing.')
})

app.get('/backend/buttonClicked', (c) => {
  const facultyId = c.req.query('facultyId')
  const educationMode = c.req.query('educationForm')

  console.log(`Request: groups: facultyId = ${facultyId}, educationForm = ${educationMode}`)

  if (!facultyId || !educationMode) {
    return c.text('Missing facultyId or educationForm', 400)
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
        Name: `Очень-очень-очень длинный номер какой-то группы`,
      },
      {
        IdGroup: 1114,
        Name: `Очень.очень.очень.длинный.номер.группы.без.пробелов`,
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
  }

  return c.json(data)
})

app.get('/backend/getTeacherNames', (c) => {

  console.log(`Request: teachers`)

  let data = {
    data: [
      {
        IdTeacher: 201,
        FIO_teacher: `Alice`,
      },
      {
        IdTeacher: 202,
        FIO_teacher: `Преподаватель с очень-очень-очень длинным именем`,
      },
      {
        IdTeacher: 203,
        FIO_teacher: `Преподаватель.с.очень.очень.длинным.именем.без.пробелов`,
      },
      {
        IdTeacher: 204,
        FIO_teacher: `Dimon`,
      },
    ]
  }

  return c.json(data)
})

app.get('/backend', (c) => {
  const groupId = c.req.query("groupId")
  const weekType = c.req.query("weekType")

  console.log(`Request: data: groupId = ${groupId}, weekType = ${weekType}`)

  if (!groupId || !weekType) {
    return c.text('Missing entityId or weekType', 400)
  }

  let data: { data: MsluScheduleItem[] } = {
    data: [

    // Понедельник
    {
      Classroom: 'А101',
      DateIn: '2025-09-01',
      DateOut: '2025-09-01',
      Day: 'Понедельник',
      DayNumber: 1,
      Discipline: `Практ. фонет. (1)`,
      Discipline_Type: 'Практ',
      FIO_teacher: 'Преподаватель А. Б.',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: `${groupId}`,
      IdSchedule: 1,
      Lesson: 1,
      TimeIn: '13:00:00',
      TimeOut: '14:20:00',
    },
    {
      Classroom: 'Д410',
      DateIn: '2025-09-01',
      DateOut: '2025-09-01',
      Day: 'Понедельник',
      DayNumber: 1,
      Discipline: `Философия`,
      Discipline_Type: 'Лек',
      FIO_teacher: 'Преподаватель А. Б.',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: `${groupId}`,
      IdSchedule: 1,
      Lesson: 2,
      TimeIn: '14:30:00',
      TimeOut: '15:50:00',
    },
    {
      Classroom: 'В301',
      DateIn: '2025-09-01',
      DateOut: '2025-09-01',
      Day: 'Понедельник',
      DayNumber: 1,
      Discipline: `Метод. преп. ИЯ`,
      Discipline_Type: 'Сем',
      FIO_teacher: 'Преподаватель А. Б.',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: `${groupId}`,
      IdSchedule: 1,
      Lesson: 3,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
    },

    // Вторник
    {
      Classroom: 'В207',
      DateIn: '2025-09-02',
      DateOut: '2025-09-02',
      Day: 'Вторник',
      DayNumber: 2,
      Discipline: `Group: ${groupId}`,
      Discipline_Type: 'Лаб',
      FIO_teacher: `Week: ${weekType}`,
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 1,
      TimeIn: '08:15:00',
      TimeOut: '09:35:00',
    },
    {
      Classroom: 'В207',
      DateIn: '2025-09-02',
      DateOut: '2025-09-02',
      Day: 'Вторник',
      DayNumber: 2,
      Discipline: `Group: ${groupId}`,
      Discipline_Type: 'Очень интересная лабораторная работа',
      FIO_teacher: `Week: ${weekType}`,
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 2,
      TimeIn: '09:45:00',
      TimeOut: '11:05:00',
    },
    {
      Classroom: 'А 101 /1п спец. каб.',
      DateIn: '2025-09-02',
      DateOut: '2025-09-02',
      Day: 'Вторник',
      DayNumber: 2,
      Discipline: `Group: ${groupId}`,
      Discipline_Type: 'Сем',
      FIO_teacher: `Week: ${weekType}`,
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 3,
      TimeIn: '11:15:00',
      TimeOut: '12:35:00',
    },
    {
      Classroom: 'А101/1пСпец.Лаб.Каб',
      DateIn: '2025-09-02',
      DateOut: '2025-09-02',
      Day: 'Вторник',
      DayNumber: 2,
      Discipline: `Group: ${groupId}`,
      Discipline_Type: 'Сем',
      FIO_teacher: `Week: ${weekType}`,
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '13:00:00',
      TimeOut: '14:20:00',
    },

    // Среда
    {
      Classroom: 'Б307',
      DateIn: '2025-09-03',
      DateOut: '2025-09-03',
      Day: 'Среда',
      DayNumber: 3,
      Discipline: 'Алгоритмизация и программирование лингвистических и не очень задач',
      Discipline_Type: 'Сем',
      FIO_teacher: 'Преподаватель',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 3,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
    },
    {
      Classroom: 'Д410',
      DateIn: '2025-09-03',
      DateOut: '2025-09-03',
      Day: 'Среда',
      DayNumber: 3,
      Discipline: 'Пара',
      Discipline_Type: 'Сем',
      FIO_teacher: 'Преподаватель с очень-очень-очень длинным именем',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '17:30:00',
      TimeOut: '18:50:00',
    },

    // Пятница
    {
      Classroom: 'Б307',
      DateIn: '2025-09-05',
      DateOut: '2025-09-05',
      Day: 'Пятница',
      DayNumber: 5,
      Discipline: 'Алгоритмиз.и.программ.лингв.задач.и.прочего.всякого.такого.без.пробелов',
      Discipline_Type: 'Лек',
      FIO_teacher: 'Преподаватель',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 3,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
    },
    {
      Classroom: 'Д410',
      DateIn: '2025-09-05',
      DateOut: '2025-09-05',
      Day: 'Пятница',
      DayNumber: 5,
      Discipline: 'Пара',
      Discipline_Type: 'Лек',
      FIO_teacher: 'Препод.с.очень.очень.очень.длинным.именем.без.пробелов',
      Faculty: 'ФАЯ',
      Group: '101/1',
      IdGroup: '1111',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '17:30:00',
      TimeOut: '18:50:00',
    },
  ]}

  return c.json(data)
})

app.get('/backend/teachers', (c) => {
  const teacherId = c.req.query("teacherId")
  const weekType = c.req.query("weekType")

  console.log(`Request: data: teacherId = ${teacherId}, weekType = ${weekType}`)

  if (!teacherId || !weekType) {
    return c.text('Missing entityId or weekType', 400)
  }

  const data: { data: MsluScheduleItem[] } = {
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
      TimeIn: '13:00:00',
      TimeOut: '14:20:00',
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
      TimeIn: '14:30:00',
      TimeOut: '15:50:00',
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
      Group: '201/2',
      IdGroup: '2111',
      IdSchedule: 1,
      Lesson: 2,
      TimeIn: '14:30:00',
      TimeOut: '15:50:00',
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
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
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
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
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
      Group: '301/2',
      IdGroup: '3112',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
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
      Group: '302/1',
      IdGroup: '3113',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
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
      Group: '302/2',
      IdGroup: '3114',
      IdSchedule: 1,
      Lesson: 4,
      TimeIn: '16:00:00',
      TimeOut: '17:20:00',
    },
  ]}

  return c.json(data)
})

app.notFound((c) => {
  return c.text('Not Found', 404)
})

app.onError((err, c) => {
  console.error(err)
  return c.text('Internal Server Error', 500)
})

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
