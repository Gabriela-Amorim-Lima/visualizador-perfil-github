export async function fetchGithubUser(userName) {
  const base_URL = 'https://api.github.com';
  const response = await fetch(`${base_URL}/users/${userName}`);
  if (!response.ok) {
    throw new Error('Usuário não encontrado.');
  }
  return await response.json();
}
