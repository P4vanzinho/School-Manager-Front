export const announcementsColumns = [
    {
        header: "Título",
        accessor: "title",
    },
    {
        header: "Classe",
        accessor: "class",
    },
    {
        header: "Data",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const assignmentsColumns = [
    {
        header: "Matéria",
        accessor: "name",
    },
    {
        header: "Classe",
        accessor: "class",
    },
    {
        header: "Professor",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Término",
        accessor: "dueDate",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const EventListPageColumns = [
    {
        header: "Título",
        accessor: "title",
    },
    {
        header: "Classe",
        accessor: "class",
    },
    {
        header: "Data",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Início",
        accessor: "startTime",
        className: "hidden md:table-cell",
    },
    {
        header: "Fim",
        accessor: "endTime",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];
export const ClassListPageColumns = [
    {
        header: "Classe",
        accessor: "name",
    },
    {
        header: "Capacidade",
        accessor: "capacity",
        className: "hidden md:table-cell",
    },
    {
        header: "Série",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Supervisor",
        accessor: "supervisor",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];



export const ExamListPageColumns = [
    {
        header: "Matéria",
        accessor: "name",
    },
    {
        header: "Classe",
        accessor: "class",
    },
    {
        header: "Professor",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Data",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const LessonListPageColumns = [
    {
        header: "Matéria",
        accessor: "name",
    },
    {
        header: "Classe",
        accessor: "class",
    },
    {
        header: "Professor",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const parentListPageColumn = [
    {
        header: "Informações",
        accessor: "info",
    },
    {
        header: "Nome do estudante",
        accessor: "students",
        className: "hidden md:table-cell",
    },
    {
        header: "Telefone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Endereço",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const resultsListPageColumns = [
    {
        header: "Título",
        accessor: "title",
    },
    {
        header: "Estudante",
        accessor: "student",
    },
    {
        header: "Nota",
        accessor: "score",
        className: "hidden md:table-cell",
    },
    {
        header: "Professor",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Classe",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Data",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const StudentListPageColumns = [
    {
        header: "Informações",
        accessor: "info",
    },
    {
        header: "ID do estudante",
        accessor: "studentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Série",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Telefone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Endereço",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const SubjectListPageColumns = [
    {
        header: "Matéria",
        accessor: "name",
    },
    {
        header: "Professores",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

export const TeacherListPageColumns = [
    {
        header: "Informações",
        accessor: "info",
    },
    {
        header: "ID do professor",
        accessor: "teacherId",
        className: "hidden md:table-cell",
    },
    {
        header: "Matéria",
        accessor: "subjects",
        className: "hidden md:table-cell",
    },
    {
        header: "Aulas",
        accessor: "classes",
        className: "hidden md:table-cell",
    },
    {
        header: "Telefone",
        accessor: "phone",
        className: "hidden lg:table-cell",
    },
    {
        header: "Endereço",
        accessor: "address",
        className: "hidden lg:table-cell",
    },
    {
        header: "Ações",
        accessor: "action",
    },
];

