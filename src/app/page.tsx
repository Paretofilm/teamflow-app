'use client'

import { Authenticator } from '@aws-amplify/ui-react'
import AuthenticatedLayout from '../components/AuthenticatedLayout'
import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <Authenticator>
      {() => (
        <AuthenticatedLayout>
          <TodoList />
        </AuthenticatedLayout>
      )}
    </Authenticator>
  )
}