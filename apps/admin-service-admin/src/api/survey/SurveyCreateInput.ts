import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyCreateInput = {
  completed?: boolean | null;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
