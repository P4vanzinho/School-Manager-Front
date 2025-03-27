import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/table/Pagination";
import Table from "@/app/components/table/Table";
import TableSearch from "@/app/components/table/TableSearch";
import { StudentListPageColumns } from "@/app/constants/columns";
import { role } from "@/lib/data";
import Image from "next/image";
import { useStudents } from "@/app/hooks/useStudents";
import StudentRow from "@/app/components/table/rows/StudentRow";
import { catchQueryParams } from "@/app/utils/catchQueryParams";

const StudentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { studentsData, studentsCount } = await useStudents(searchParams);
  const { page } = catchQueryParams(searchParams);
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Estudantes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>
      <Table
        columns={StudentListPageColumns}
        renderRow={(item) => <StudentRow item={item} key={item.id} />}
        data={studentsData}
      />
      <Pagination page={page} count={studentsCount} />
    </div>
  );
};

export default StudentListPage;
