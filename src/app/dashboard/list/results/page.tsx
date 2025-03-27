import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/table/Pagination";
import Table from "@/app/components/table/Table";
import TableSearch from "@/app/components/table/TableSearch";
import { role } from "@/lib/data";
import Image from "next/image";
import { resultsListPageColumns } from "@/app/constants/columns";
import { catchQueryParams } from "@/app/utils/catchQueryParams";
import ResultRow from "@/app/components/table/rows/ResultRow";
import { useResults } from "@/app/hooks/useResults";

const ResultListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { resultsData, resultsCount } = await useResults(searchParams);
  const { page } = catchQueryParams(searchParams);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Resultados</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" ||
              (role === "teacher" && (
                <FormModal table="result" type="create" />
              ))}
          </div>
        </div>
      </div>
      <Table
        columns={resultsListPageColumns}
        renderRow={(item) => <ResultRow item={item} key={item.id} />}
        data={resultsData}
      />
      <Pagination page={page} count={resultsCount} />
    </div>
  );
};

export default ResultListPage;
