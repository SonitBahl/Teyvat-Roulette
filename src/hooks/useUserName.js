import { useState, useEffect } from 'react'

// Hook to get and manage user name
export function useUserName() {
  const [userName, setUserName] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get stored name from localStorage
    const storedName = localStorage.getItem('teyvat-roulette-user')
    
    if (storedName) {
      setUserName(storedName)
    }
    
    setIsLoaded(true)
  }, [])

  const updateUserName = (name) => {
    setUserName(name)
    localStorage.setItem('teyvat-roulette-user', name)
  }

  return {
    userName,
    isLoaded,
    updateUserName
  }
}
