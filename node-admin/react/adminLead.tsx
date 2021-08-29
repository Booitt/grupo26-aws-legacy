import React, { FC, useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"
import axios from 'axios'
import { List } from "./components/List";
import { Header } from "./components/Header";

interface Lead {
  nome: string
  telefone: string
  email: string
  id: string
  clientSince: boolean | number
  prospectSince: number
}

const AdminLead: FC = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [clients, setClients] = useState(false)
  
  useEffect(() => {
    axios.get('https://7slql6j8i0.execute-api.us-east-2.amazonaws.com/leads')
      .then((resp) => setLeads([...resp.data.Items, {
        id:'teste',
        nome:'teste',
        email:'teste',
        telefone:'21999999',
        prospectSince:1630106120828,
        clientSince: false
      }]))
      .catch((_) => setLeads([]))
      .finally(() => setLoading(false))
  }, [])

  const handleToggleClient = (e: any) => {
    if (e.target.id === 'prospecto') {
      setClients(false)
    } else {
      setClients(true)
    }
  }

  return (
    <Layout>
      <PageBlock
        title="Leads"
        subtitle="Lista de leads"
        variation="full"
      >
    {
      loading ? (
        <p>Obtendo Leads</p>
      ) : (
        <>
          <h1>Leads do grupo 26</h1>
          <Header>
            <p onClick={handleToggleClient}  id="prospecto" className={`${!clients ? 'active' : ''}`}>Prospectos</p>
            <p onClick={handleToggleClient} id="cliente" className={`${clients ? 'active' : ''}`}>Clientes</p>
          </Header>
          <List>
            {!clients 
              ? leads
                  .filter(lead => lead.clientSince === false)
                  .map(lead => (
                    <li key={lead.id}>
                      <div>
                        <p>Nome: {lead.nome}</p>
                        <p>Email: {lead.email}</p>
                        {lead.telefone && (<p>Telefone: {lead.telefone}</p>)}
                      </div>
                      <p>Data de cadastro: {new Date(lead.prospectSince).toLocaleDateString('pt-BR')}</p>
                    </li>
                  )) 
              : leads
                  .filter(lead => lead.clientSince !== false)
                  .map(lead => (
                    <li key={lead.id}>
                      <div>
                        <p>Nome: {lead.nome}</p>
                        <p>Email: {lead.email}</p>
                        {lead.telefone && (<p>Telefone: {lead.telefone}</p>)}
                      </div>
                      <div>
                        <p>Data de cadastro: {new Date(lead.prospectSince).toLocaleDateString('pt-BR')}</p>
                        <p>Data de conversão: {new Date(lead.clientSince as number).toLocaleDateString('pt-BR')}</p>
                      </div>
                    </li>
                  ))
            }
          </List>
        </>
      )
    }
    </PageBlock>
  </Layout>
  );
};

export default AdminLead