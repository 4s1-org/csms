import fs from "fs"
import path from "path"
import { ClassGenerator } from "./class-generator"
import { SchemaRoot } from "./schema-elements/schema-root"

async function main(): Promise<void> {
  const dir = path.join(__dirname, "..", "..", "..", "HochschuleTrier", "Masterthesis", "Dokumente", "Technisch", "OCPP_2.0.1", "OCPP-2.0.1_part3_JSON_schemas")
  const files = fs.readdirSync(dir)
  //const files2 = [files[2]]

  for (const file of files) {
    console.log(`*** ${file} ***`)
    const content: any = JSON.parse(fs.readFileSync(path.join(dir, file)).toString())
    const item = new SchemaRoot(content)
    item.init()
  }

  ClassGenerator.generateFiles()
}


main().catch(console.error)
