export type TableType =
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";

export type FormType = "create" | "update" | "delete";


export type FormModalProps = {
    table: TableType;
    type: FormType;
    data?: any;
    id?: string | number;
};

export type DynamicFormProps = {
    type: FormType;
    table: TableType;
    data?: any;
    id?: string | number;
};

export type DeleteConfirmationFormProps = {
    table: TableType;
    id?: string | number;
}; 