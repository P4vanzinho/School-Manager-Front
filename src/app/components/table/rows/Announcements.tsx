"use client";

import { AnnouncementListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface AnnouncementRowProps {
  item: AnnouncementListPageProps;
}

const AnnouncementRow = ({ item }: AnnouncementRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class.name}</td>
      <td className="hidden md:table-cell">
        {new Intl.DateTimeFormat("pt-br").format(item.date)}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default AnnouncementRow;
