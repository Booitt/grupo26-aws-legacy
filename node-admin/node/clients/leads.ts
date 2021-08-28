import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'


export default class Leads extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://7slql6j8i0.execute-api.us-east-2.amazonaws.com', context, options)
  }

  public async convertLead(email: string): Promise<any> {
    return this.http.put('/convert', null, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      params: {
        email: email
      }
    })
  }
}