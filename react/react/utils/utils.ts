export const phoneMask = (prevValue: string, newValue: string) => {
  if (newValue.length < prevValue.length) return newValue
  if (newValue.length > 16) return prevValue
  if (newValue.length < 15) {
      return newValue
          .replace(/\D/g, '')
          .replace(/(\d{2})/, '($1) ')
          .replace(/(\d{4})/, '$1-')
  } else {
      return newValue.replace(/\D/g, '').replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
  }
}

export const validateEmail = (email: string) => {
  const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
