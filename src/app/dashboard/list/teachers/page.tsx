import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/table/Pagination";
import Table from "@/app/components/table/Table";
import TableSearch from "@/app/components/table/TableSearch";
import { TeacherListPageColumns } from "@/app/constants/columns";
import { role } from "@/lib/data";
import Image from "next/image";
import { useTeachers } from "@/app/hooks/useTeachers";
import TeacherRow from "@/app/components/table/rows/TeacherRow";
import { catchQueryParams } from "@/app/utils/catchQueryParams";

const TeacherListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { data, count } = await useTeachers(searchParams);
  const { page } = catchQueryParams(searchParams);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Professores</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      <Table
        columns={TeacherListPageColumns}
        renderRow={(item) => <TeacherRow item={item} key={item.id} />}
        data={data}
      />
      <Pagination page={page} count={count} />
    </div>
  );
};

export default TeacherListPage;
