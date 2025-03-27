"use client";

import Image from "next/image";
import { LessonListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface LessonRowProps {
  item: LessonListPageProps;
}

const LessonRow = ({ item }: LessonRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4 w-full">
        {item.subject.name}
      </td>
      <td className="w-1/4">{item.class.name}</td>
      <td className="hidden md:table-cell w-1/4">
        {item.teacher.name + " " + item.teacher.surname}
      </td>
      <td className="w-1/4">
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default LessonRow;
