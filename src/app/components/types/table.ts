export type TableColumn = {
    header: string;
    accessor: string;
    className?: string;
};

export type TableProps = {
    columns: TableColumn[];
    renderRow: (item: any) => React.ReactNode;
    data: any[];
}; 