import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'
import Leads from './leads'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get leads() {
    return this.getOrSet('leads', Leads)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }
}
