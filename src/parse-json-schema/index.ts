import fs from "fs"
import path from "path"
import { ClassGenerator } from "./class-generator"
import { SchemaRoot } from "./schema-elements/schema-root"

async function main(): Promise<void> {
  const dir = path.join(__dirname, "..", "..", "third-party", "ocpp", "2.0.1")
  const files = fs.readdirSync(dir)
  //const files2 = [files[2]]

  for (const file of files) {
    console.log(`*** ${file} ***`)
    const content: any = JSON.parse(fs.readFileSync(path.join(dir, file)).toString())
    const filenameWithoutExt = file.substr(0, file.length - 5)
    const item = new SchemaRoot(filenameWithoutExt, content)
    item.init()
  }

  ClassGenerator.instance.generateFiles()
}

main().catch(console.error)
