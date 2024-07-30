import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyUpdateInput = {
  completed?: boolean | null;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
