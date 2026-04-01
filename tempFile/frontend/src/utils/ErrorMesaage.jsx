import React from 'react'

export const getErrorMesaage = (err) => {
    const msg = (err.response && err.response.data && err.response.data.message)
  return msg
}
