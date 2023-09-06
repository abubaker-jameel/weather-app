import { nanoid } from "nanoid";

function getUniqueKey() {
  return nanoid();
}

export default getUniqueKey