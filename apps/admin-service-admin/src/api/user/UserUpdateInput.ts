import { InputJsonValue } from "../../types";
import { SurveyUpdateManyWithoutUsersInput } from "./SurveyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  surveys?: SurveyUpdateManyWithoutUsersInput;
  username?: string;
};
