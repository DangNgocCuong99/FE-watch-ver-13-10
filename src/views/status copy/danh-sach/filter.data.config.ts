import { ISearchParamUser } from "./types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";

export const dataConfig = (): FormSchemaModel<ISearchParamUser>[] => [
        {
            field: "name",
            label: "Tên người dùng",
        },
        {
            field: "email",
            label: "Email",
        },
        {
            field: "phoneNumber",
            label: "Số điện thoại",
        },
    ];
