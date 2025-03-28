export const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Início",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/teacher.png",
                label: "Professores",
                href: "/dashboard/list/teachers",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/student.png",
                label: "Estudantes",
                href: "/dashboard/list/students",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/parent.png",
                label: "Pais",
                href: "/dashboard/list/parents",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/subject.png",
                label: "Matérias",
                href: "/dashboard/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/dashboard/list/classes",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/lesson.png",
                label: "Lições",
                href: "/dashboard/list/lessons",
                visible: ["admin", "teacher"]
            },
            {
                icon: "/exam.png",
                label: "Provas",
                href: "/dashboard/list/exams",
                visible: ["admin", "teacher", "student", "parent"]

            },
            {
                icon: "/assignment.png",
                label: "Atribuições",
                href: "/dashboard/list/assignments",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/attendance.png",
                label: "Presenças",
                href: "/dashboard/list/attendance",
                visible: ["admin", "teacher", "student", "parent"]
            },

            {
                icon: "/result.png",
                label: "Resultados",
                href: "/dashboard/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },

            {
                icon: "/calendar.png",
                label: "Eventos",
                href: "/dashboard/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/message.png",
                label: "Mensagens",
                href: "/dashboard/list/messages",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/announcement.png",
                label: "Anúncios",
                href: "/dashboard/list/announcements ",
                visible: ["admin", "teacher", "student", "parent"]
            },



        ]
    },
    {
        title: "OUTROS",
        items: [
            {
                icon: "/profile.png",
                label: "Perfil",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"]
            }, {
                icon: "/setting.png",
                label: "Configurações",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon: "/logout.png",
                label: "Desconectar",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"]
            },

        ]
    }
]