import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/table/Pagination";
import Table from "@/app/components/table/Table";
import TableSearch from "@/app/components/table/TableSearch";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";
import { LessonListPageProps } from "../../types";
import { LessonListPageColumns } from "@/app/constants/columns";
import LessonRow from "@/app/components/table/rows/LessonRow";
import { catchQueryParams } from "@/app/utils/catchQueryParams";
import { useLessons } from "@/app/hooks/useLessons";

const LessonListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { lessonsData, lessonsCount } = await useLessons(searchParams);
  const { page } = catchQueryParams(searchParams);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Matérias</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="lesson" type="create" />}
          </div>
        </div>
      </div>
      <Table
        columns={LessonListPageColumns}
        renderRow={(item) => <LessonRow item={item} key={item.id} />}
        data={lessonsData}
      />
      <Pagination page={page} count={lessonsCount} />
    </div>
  );
};

export default LessonListPage;
