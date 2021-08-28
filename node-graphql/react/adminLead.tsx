import React, { FC, useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"
import axios from 'axios'
import { List } from "./components/List";

interface Lead {
  nome: string
  telefone: string
  email: string
  id: string
}

const AdminLead: FC = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  useEffect(() => {
    axios.get('https://7slql6j8i0.execute-api.us-east-2.amazonaws.com/leads')
      .then((resp) => setLeads(resp.data.Items))
      .catch((_) => setLeads([]))
  }, [])

  return (
    <Layout>
      <PageBlock
       title="Leads"
       subtitle="Pessoas cadastradas"
       variation="full"
      >
        <h1>Leads do grupo 26</h1>
        <List>
          {leads.map(lead => (
            <li key={lead.id}>
              <p>Nome: {lead.nome}</p>
              <p>Email: {lead.email}</p>
              <p>Telefone: {lead.telefone}</p>
            </li>
          ))}
        </List>
      </PageBlock>
    </Layout>
  );
};

export default AdminLead