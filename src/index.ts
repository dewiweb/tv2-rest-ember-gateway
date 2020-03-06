import { MainThreadHandlers } from './MainThreadHandler'
import { EmberClientConnection } from 'utils/EmberClientConnection'
import { EmberServerConnection } from 'utils/EmberServerConnection'
const processArgs = require('minimist')(process.argv.slice(2))

declare global {
  namespace NodeJS {
      interface Global {
          mainThreadHandler: MainThreadHandlers
          emberClientConnection: EmberClientConnection
          emberServerConnection: EmberServerConnection
          emberServerReady: boolean
          emberClientStore: any
          emberIp: string
          emberPort: string | number
          emberFile: string
      }
  }
}
// Set ember env vars: (Logger env´s are handled in utils/logget.ts)
global.emberIp = process.env.emberIp || processArgs.emberIp || "0.0.0.0"
global.emberPort = process.env.emberPort || processArgs.emberPort || "9000"
global.emberFile = process.env.emberFile || processArgs.emberFile || "embertree.json"


global.emberServerReady = false
global.mainThreadHandler = new MainThreadHandlers()