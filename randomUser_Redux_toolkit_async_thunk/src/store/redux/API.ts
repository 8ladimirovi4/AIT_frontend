export const getRandomUserAPI = async (rejectWithValue: (data: any) => {}) => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  if (!response.ok) {
    rejectWithValue(data);
  } else {
    return data;
  }
};
