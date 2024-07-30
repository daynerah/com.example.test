import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
