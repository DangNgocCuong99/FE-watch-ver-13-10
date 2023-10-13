import { IUser } from "../../../danh-sach/types";
import { FormSchemaModel } from "/@/components/Form/src/types/form";
import { MODE } from "/@/utils";

export const dataConfig = (mode?: MODE): FormSchemaModel<IUser>[] => [
    {
        field: 'name',
        label: 'Tên người dùng',
    },
    {
        field: 'image',
        label: 'Ảnh đại diện',
    },
    {
        field: 'email',
        label: 'Email',
    },

    {
        field: 'phoneNumber',
        label: 'Số điện thoài',
    },


]