export const getAllTasks = async () => {
  const data = await fetch('http://localhost:3000/tasks');
  return data.json();
}
