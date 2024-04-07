export const POST = async <R, P>(url: string, body?: P): Promise<R> => {
  const tokens = localStorage.getItem('Tokens Data')
  const accessToken = tokens ? JSON.parse(tokens).accessToken : ''

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
    },
  })
  const data = response.json()
  return data
}

export const GET = async <R>(url: string): Promise<R> => {
  const tokens = localStorage.getItem('Tokens Data')
  const accessToken = tokens ? JSON.parse(tokens).accessToken : ''
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
    },
  })
  const data = await res.json()
  return data
}

export const PUT = async <R, P>(url: string, body: P): Promise<R> => {
  const tokens = localStorage.getItem('Tokens Data')
  const accessToken = tokens ? JSON.parse(tokens).accessToken : ''
  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
    },
  })
  const data = await res.json()
  return data
}

export const DELETE = async <R>(url: string): Promise<R> => {
  const tokens = localStorage.getItem('Tokens Data')
  const accessToken = tokens ? JSON.parse(tokens).accessToken : ''

  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      ...(accessToken && { authorization: `Bearer ${accessToken}` }),
    },
  })
  const data = await res.json()
  return data
}
