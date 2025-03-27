"use client";

import Image from "next/image";
import { SubjectListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface SubjectRowProps {
  item: SubjectListPageProps;
}

const SubjectRow = ({ item }: SubjectRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleLight p-2"
    >
      <td className="w-1/3 p-4">{item.name}</td>
      <td className="hidden md:table-cell w-1/3">
        {item.teachers.map((teacher) => teacher.name).join(",")}
      </td>
      <td className="w-1/3 ">
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SubjectRow;
