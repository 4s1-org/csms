import fs from 'fs'
import path from 'path'
import { ClassGenerator } from './class-generator'
import { SchemaRoot } from './schema-elements/schema-root'

async function main(): Promise<void> {
  const dir = path.join(__dirname, '..', '..', 'src', 'third-party', 'ocpp', '2.0.1')
  const files = fs.readdirSync(dir)

  for (const file of files) {
    console.log(`*** ${file} ***`)
    // if (file !== "NotifyEVChargingNeedsResponse.json") {
    //   continue
    // }

    const pathWithFilename = path.join(dir, file)
    const content: any = JSON.parse(fs.readFileSync(pathWithFilename).toString())
    const filenameWithoutExt = file.substr(0, file.length - 5)

    ClassGenerator.instance.addJsonSchema(
      filenameWithoutExt,
      path.relative(path.join(__dirname, '..', '..', 'src', 'generated'), pathWithFilename),
    )

    const item = new SchemaRoot(filenameWithoutExt, content)
    item.init()
  }

  ClassGenerator.instance.generateFiles()
}

main()
  .then()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
