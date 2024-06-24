export const getAllTasks = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  return response.json();
}

export const createTask = async (data: Task) => {
  const response = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
}

export const deleteTask = async (id: string) => {
  const response = await fetch('http://localhost:3000/tasks/' + id, {
    method: 'DELETE',
  });
  return response.json();
}

export const getTask = async (id: string) => {
  const response = await fetch('http://localhost:3000/tasks/' + id);
  return response.json();
}

export const editTask = async (id: string, data: Task) => {
  const response = await fetch('http://localhost:3000/tasks/' + id, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return response.json();
}
