import { InputJsonValue } from "../../types";
import { SurveyCreateNestedManyWithoutUsersInput } from "./SurveyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  surveys?: SurveyCreateNestedManyWithoutUsersInput;
  username: string;
};
