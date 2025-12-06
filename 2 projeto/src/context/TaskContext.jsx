"use client"

import { createContext, useContext, useState, useEffect } from "react"

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    // Carregar tarefas do localStorage
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks")
      return savedTasks ? JSON.parse(savedTasks) : []
    }
    return []
  })

  // Salvar no localStorage sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask, toggleTask }}>{children}</TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("useTasks deve ser usado dentro de um TaskProvider")
  }
  return context
}
