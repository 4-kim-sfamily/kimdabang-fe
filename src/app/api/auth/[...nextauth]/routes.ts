import nextAuth from "next-auth";

import { options } from "./options";

const handler = nextAuth(options);

export { handler as GET, handler as POST };
