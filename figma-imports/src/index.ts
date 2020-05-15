import * as dotenv from "dotenv";
import { importSvgs } from "./icons";

dotenv.config();

const main = async () => {
  await importSvgs();
};

main().catch( ( err ) => {
  console.error( "Unhandled rejection", err );
} );
