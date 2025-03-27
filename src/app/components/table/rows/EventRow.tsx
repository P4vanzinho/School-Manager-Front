"use client";

import { EventListPageProps } from "@/app/dashboard/types";
import FormModal from "../../FormModal";
import { role } from "@/lib/data";

interface EventRowProps {
  item: EventListPageProps;
}

const EventRow = ({ item }: EventRowProps) => {
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class.name}</td>
      <td className="hidden md:table-cell">
        {" "}
        {new Intl.DateTimeFormat("pt-br").format(item.startTime)}
      </td>
      <td className="hidden md:table-cell">
        {item.startTime.toLocaleTimeString("pr-br", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </td>
      <td className="hidden md:table-cell">
        {item.endTime.toLocaleTimeString("pr-br", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="event" type="update" data={item} />
              <FormModal table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default EventRow;
