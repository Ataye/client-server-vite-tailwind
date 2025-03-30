import { Alert } from "flowbite-react"
import Layout from "../layout/Layout"
import PageRouter from '../modules/PageRouter'

function Index() {

  return (
    <Layout>
        <Alert type="success" title="Welcome to Flowbite React!">
          This is a simple alert component from Flowbite React.
        </Alert>
    </Layout>
  )
}

export default Index
