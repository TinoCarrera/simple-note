export const getAllTasks = async () => {
  const response = await fetch('http://localhost:3000/tasks');
  return response.json();
}

export const createTask = async (data: Task) => {
  const response = await fetch('http://localhost:3000/tasks', {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
}
