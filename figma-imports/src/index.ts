import * as dotenv from "dotenv";

dotenv.config();
import { importSvgs } from "./icons";
import { checkEnvFile } from "./utils/checkEnvFile";


const main = async () => {
  checkEnvFile();
  await importSvgs();
};

main().catch( ( err ) => {
  console.error( "Unhandled rejection", err );
} );
