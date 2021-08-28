import { json } from 'co-body'

interface IData {
  email: string
}

export async function omsHook(ctx: Context, next: () => Promise<any>) {
  try {
    const { OrderId } = await json(ctx.req)
    console.log(OrderId)

    const {clientProfileData: {document: userId }} = await ctx.clients.oms.order(OrderId)
    
    const data:IData[] = await ctx.clients.masterdata.searchDocuments({

      dataEntity: 'CL',
      where: `document=${userId}`,
      fields: ['email'],
      pagination: {
        pageSize: 1,
        page: 1
      }
    })

    if (data.length !== 0) {
      const [{email}] = data
      console.log(email)
      
      await ctx.clients.leads.convertLead('email')

  
      ctx.body = 'OK'
      ctx.status = 200
      ctx.set('Cache-Control', 'no-cache no-store')
    } else {
      console.log('erro do allison')
      ctx.body = 'Not Found in Master Data'
      ctx.status = 404
    }

    await next()
  } catch (error) {
    // console.log(error)
    ctx.body = JSON.stringify({message: error?.response?.data?.message || 'Erro ao converter lead'})
    ctx.status = error?.response?.status || 500
    // ctx.status = 200
    ctx.set('Cache-Control', 'no-cache no-store')
    await next()
  }
}
