import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/table/Pagination";
import Table from "@/app/components/table/Table";
import TableSearch from "@/app/components/table/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import { catchQueryParams } from "@/app/utils/catchQueryParams";
import ClassRow from "@/app/components/table/rows/ClassRow";
import { useClasses } from "@/app/hooks/useClasses";
import { ClassListPageColumns } from "@/app/constants/columns";

const ClassListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { classesData, classesCount } = await useClasses(searchParams);
  const { page } = catchQueryParams(searchParams);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table
        columns={ClassListPageColumns}
        renderRow={(item) => <ClassRow item={item} key={item.id} />}
        data={classesData}
      />
      {/* PAGINATION */}
      <Pagination page={page} count={classesCount} />
    </div>
  );
};

export default ClassListPage;
