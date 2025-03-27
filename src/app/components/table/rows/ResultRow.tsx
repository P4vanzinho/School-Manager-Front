"use client";

import { ResultListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface ResultRowProps {
  item: ResultListPageProps;
}

const ResultRow = ({ item }: ResultRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.studentName + " " + item.studentSurname}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">
        {item.teacherName + " " + item.teacherSurname}
      </td>
      <td className="hidden md:table-cell">{item.className}</td>
      <td className="hidden md:table-cell">
        {new Intl.DateTimeFormat("pt-br").format(item.startTime)}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" ||
            (role === "teacher" && (
              <>
                <FormModal table="result" type="update" data={item} />
                <FormModal table="result" type="delete" id={item.id} />
              </>
            ))}
        </div>
      </td>
    </tr>
  );
};

export default ResultRow;
