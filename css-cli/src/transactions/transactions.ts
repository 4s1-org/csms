import { sleep } from '@yellowgarbagebag/common-lib'
import { TransactionE01S1 } from './transaction-e01-s1'
import { TransactionE01S2 } from './transaction-e01-s2'
import { TransactionE01S3 } from './transaction-e01-s3'
import { TransactionE01S4 } from './transaction-e01-s4'
import { TransactionE01S5 } from './transaction-e01-s5'
import { TransactionE01S6 } from './transaction-e01-s6'

async function main(): Promise<void> {
  await new TransactionE01S1().simulate()
  await sleep(200)
  await new TransactionE01S2().simulate()
  await sleep(200)
  await new TransactionE01S3().simulate()
  await sleep(200)
  await new TransactionE01S4().simulate()
  await sleep(200)
  await new TransactionE01S5().simulate()
  await sleep(200)
  await new TransactionE01S6().simulate()
}

main().catch(console.error)
