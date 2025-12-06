"use client"

import { useNavigate } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import Header from "../components/Header"
import TaskForm from "../components/TaskForm"

export default function AddTask() {
  const navigate = useNavigate()
  const { addTask } = useTasks()

  const handleSubmit = (taskData) => {
    addTask(taskData)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <button
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar
            </button>
            <h2 className="text-3xl font-bold text-gray-800">Adicionar Nova Tarefa</h2>
          </div>
          <TaskForm onSubmit={handleSubmit} submitLabel="Adicionar Tarefa" />
        </div>
      </main>
    </div>
  )
}
