import { JsonValue } from "type-fest";
import { Survey } from "../survey/Survey";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  surveys?: Array<Survey>;
  updatedAt: Date;
  username: string;
};
