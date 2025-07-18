'use client'

import { useState, useEffect } from 'react'
import { client } from '../lib/amplify'
import type { Schema } from '$amplify/data/resource'

type Todo = Schema['Todo']['type']

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [newTodo, setNewTodo] = useState('')

  // Fetch todos on component mount
  useEffect(() => {
    fetchTodos()
    
    // Set up real-time subscription
    const subscription = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos(items)
      },
      error: (error) => {
        console.error('Subscription error:', error)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchTodos = async () => {
    try {
      const { data } = await client.models.Todo.list()
      setTodos(data)
    } catch (error) {
      console.error('Error fetching todos:', error)
    } finally {
      setLoading(false)
    }
  }

  const createTodo = async () => {
    if (!newTodo.trim()) return
    
    try {
      await client.models.Todo.create({
        content: newTodo,
      })
      
      setNewTodo('')
    } catch (error) {
      console.error('Error creating todo:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      await client.models.Todo.delete({ id })
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Tasks</h2>
        
        {/* Add Todo Form */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && createTodo()}
          />
          <button
            onClick={createTodo}
            disabled={!newTodo.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Add Task
          </button>
        </div>

        {/* Todo List */}
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading tasks...</p>
          </div>
        ) : todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p>No tasks yet. Add one above to get started!</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 flex-1">{todo.content}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors ml-4 px-3 py-1 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}