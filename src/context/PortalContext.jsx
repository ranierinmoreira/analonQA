/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import {
  initialNotifications,
  initialProjects,
  initialTests,
} from '../data/mockData'

const PortalContext = createContext(null)

export function PortalProvider({ children }) {
  const [projects, setProjects] = useState(initialProjects)
  const [tests, setTests] = useState(initialTests)
  const [notifications, setNotifications] = useState(initialNotifications)

  const unreadCount = notifications.filter((item) => item.unread).length

  const addProject = useCallback((project) => {
    setProjects((current) => [
      {
        id: `p${Date.now()}`,
        status: 'planning',
        coverage: 0,
        tests: 0,
        updatedAt: 'agora',
        ...project,
      },
      ...current,
    ])
  }, [])

  const runTest = useCallback((id) => {
    setTests((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, status: 'running', duration: '—', lastRun: 'agora' }
          : item
      )
    )
    window.setTimeout(() => {
      setTests((current) =>
        current.map((item) =>
          item.id === id
            ? {
                ...item,
                status: Math.random() > 0.2 ? 'passed' : 'failed',
                duration: `${Math.floor(Math.random() * 2) + 1}m ${Math.floor(Math.random() * 50)}s`,
                lastRun: 'agora',
              }
            : item
        )
      )
    }, 1400)
  }, [])

  const markAllRead = useCallback(() => {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false })))
  }, [])

  const value = useMemo(
    () => ({
      projects,
      tests,
      notifications,
      unreadCount,
      addProject,
      runTest,
      markAllRead,
    }),
    [projects, tests, notifications, unreadCount, addProject, runTest, markAllRead]
  )

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
}

export function usePortal() {
  const context = useContext(PortalContext)
  if (!context) {
    throw new Error('usePortal precisa estar dentro de PortalProvider')
  }
  return context
}
