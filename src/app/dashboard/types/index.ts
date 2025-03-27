import { Announcement, Assignment, Class, Event, Exam, Lesson, Parent, Student, Subject, Teacher } from "@prisma/client";

export type AnnouncementListPageProps = Announcement & { class: Class }
export type AssignmentListPageProps = Assignment & {
    lesson: {
        subject: Subject,
        class: Class,
        teacher: Teacher
    }
}

export type ClassListProps = Class & { supervisor: Teacher }

export type EventListPageProps = Event & { class: Class }

export type ExamListPageProps = Exam & {
    lesson: {
        subject: Subject,
        class: Class,
        teacher: Teacher
    }
}

export type LessonListPageProps = Lesson & { subject: Subject } & { class: Class } & {
    teacher: Teacher;
};

export type ParentListPageProps = Parent & { students: Student[] }

export type ResultListPageProps = {
    id: number;
    title: string;
    studentName: string;
    studentSurname: string;
    teacherName: string;
    teacherSurname: string;
    score: number;
    className: string;
    startTime: Date;
};

export type StudentListPageProps = Student & { class: Class };

export type SubjectListPageProps = Subject & { teachers: Teacher[] }

export type TeacherListPageProps = Teacher & {
    subjects: Subject[];
    classes: Class[];
};