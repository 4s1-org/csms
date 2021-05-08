import { sleep } from '@yellowgarbagebag/common-lib'
import { TransactionE01S1 } from './transaction-e01-s1'
import { TransactionE01S2 } from './transaction-e01-s2'
import { TransactionE01S3 } from './transaction-e01-s3'
import { TransactionE01S4 } from './transaction-e01-s4'
import { TransactionE01S5 } from './transaction-e01-s5'
import { TransactionE01S6 } from './transaction-e01-s6'
import { TransactionE02 } from './transaction-e02'
import { TransactionE03 } from './transaction-e03'
import { TransactionE06S1 } from './transaction-e06-s1'
import { TransactionE06S2 } from './transaction-e06-s2'
import { TransactionE06S3 } from './transaction-e06-s3'
import { TransactionE06S4 } from './transaction-e06-s4'
import { TransactionE06S5 } from './transaction-e06-s5'
import { TransactionE06S6 } from './transaction-e06-s6'
import { TransactionE07 } from './transaction-e07'
import { TransactionE08 } from './transaction-e08'
import { TransactionE09 } from './transaction-e09'
import { TransactionE10 } from './transaction-e10'
import { TransactionE11 } from './transaction-e11'
import { TransactionE12 } from './transaction-e12'

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
  await sleep(200)
  await new TransactionE02().simulate()
  await sleep(200)
  await new TransactionE03().simulate()
  await sleep(200)
  await new TransactionE01S5().simulate()
  await sleep(200)
  await new TransactionE06S1().simulate()
  await sleep(200)
  await new TransactionE06S2().simulate()
  await sleep(200)
  await new TransactionE06S3().simulate()
  await sleep(200)
  await new TransactionE06S4().simulate()
  await sleep(200)
  await new TransactionE06S5().simulate()
  await sleep(200)
  await new TransactionE06S6().simulate()
  await sleep(200)
  await new TransactionE07().simulate()
  await sleep(200)
  await new TransactionE08().simulate()
  await sleep(200)
  await new TransactionE09().simulate()
  await sleep(200)
  await new TransactionE10().simulate()
  await sleep(200)
  await new TransactionE11().simulate()
  await sleep(200)
  await new TransactionE12().simulate()
}

main().catch(console.error)
