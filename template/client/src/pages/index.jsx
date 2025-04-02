import { useState, useEffect } from "react"
import { Alert } from "flowbite-react"
import Layout from "../layout/Layout"
import UsersService from "../services/user.service"

function Index() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const data = await UsersService.fetchUsers()
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <Layout>
            <Alert type="success" title="Welcome to Flowbite React!">
                <div>This is a simple alert component from Flowbite React.</div>

                <ul>
                {users.map(user => {
                    return (
                        <li key={user.name}>
                            {user.name} {` age ${user.age}`}
                        </li>
                    )
                })}
                </ul>
            </Alert>
        </Layout>
    )
}

export default Index
