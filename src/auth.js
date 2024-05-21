import { writable } from "svelte/store";

export const auth = writable(false);

const refreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const res = await fetchWithAuth(
    import.meta.env.VITE_HOST + '/auth/refresh-token', 
    'PATCH',
    { refreshToken },
    accessToken,
  );
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  }
  if (data.statusCode === 401) auth.set(false);
  else throw new Error(data.message);
};

const fetchWithAuth = async (url, method, body, accessToken) => {
  return fetch(url, {
    method,
    headers: { 
      'Content-Type': 'application/json' ,
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify(body),
  });
};

export const safeFetch = async (url, method, body) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await fetchWithAuth(url, method, body, accessToken);
  const data = await response.json();

  if (response.ok) return data;

  if (data.statusCode === 401) {
    await refreshToken().catch(err => {
      throw err;
    });
    const response = await fetchWithAuth(url, method, body, accessToken);
    return await response.json();
  } else {
    throw new Error(data.message);
  }
};