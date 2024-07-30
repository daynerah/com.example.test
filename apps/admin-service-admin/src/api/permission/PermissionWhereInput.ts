import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PermissionWhereInput = {
  action?: StringNullableFilter;
  id?: StringFilter;
};
