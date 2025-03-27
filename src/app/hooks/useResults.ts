import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useResults = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.ResultWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "studentId":
                        query.studentId = value;
                        break;
                    case "search":
                        query.OR = [
                            { exam: { title: { contains: value, mode: "insensitive" } } },
                            { student: { name: { contains: value, mode: "insensitive" } } },
                            { exam: { lesson: { teacher: { name: { contains: value, mode: "insensitive" } } } } },
                            { exam: { lesson: { teacher: { surname: { contains: value, mode: "insensitive" } } } } },
                            { exam: { lesson: { class: { name: { contains: value, mode: "insensitive" } } } } }

                        ];
                        break;
                    default:
                        break;
                }
            }
        }
    }

    try {
        const [dataRes, count] = await prisma.$transaction([
            prisma.result.findMany({
                where: query,
                include: {
                    student: { select: { name: true, surname: true } },
                    exam: {
                        include: {
                            lesson: {
                                select: {
                                    class: { select: { name: true } },
                                    teacher: { select: { name: true, surname: true } },
                                },
                            },
                        },
                    },
                    assignment: {
                        include: {
                            lesson: {
                                select: {
                                    class: { select: { name: true } },
                                    teacher: { select: { name: true, surname: true } },
                                },
                            },
                        },
                    },
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.result.count({ where: query }),
        ]);

        const data = dataRes.map((item) => {
            const assessment = item.exam || item.assignment;

            if (!assessment) return null;

            const isExam = "startTime" in assessment;

            return {
                id: item.id,
                title: assessment.title,
                studentName: item.student.name,
                studentSurname: item.student.surname,
                teacherName: assessment.lesson.teacher.name,
                teacherSurname: assessment.lesson.teacher.surname,
                score: item.score,
                className: assessment.lesson.class.name,
                startTime: isExam ? assessment.startTime : assessment.startDate,
            };
        });

        return { resultsData: data, resultsCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 