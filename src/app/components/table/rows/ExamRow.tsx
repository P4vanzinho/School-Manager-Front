"use client";

import Image from "next/image";
import { ExamListPageProps, LessonListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface ExamRowProps {
  item: ExamListPageProps;
}

const ExamRow = ({ item }: ExamRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4 w-full">
        {item.lesson.subject.name}
      </td>
      <td className="w-1/5">{item.lesson.class.name}</td>
      <td className="hidden md:table-cell w-1/5">
        {item.lesson.teacher.name + " " + item.lesson.teacher.surname}
      </td>
      <td className="hidden md:table-cell w-1/5">
        {new Intl.DateTimeFormat("pt-br").format(item.startTime)}
      </td>
      <td className="w-1/5">
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="exam" type="update" data={item} />
              <FormModal table="exam" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ExamRow;
