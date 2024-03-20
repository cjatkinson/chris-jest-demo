import axios from 'axios';

export function forEach(items: any, callback: any) {
  for (const item of items) {
    callback(item);
  }
}

export async function apiCall(id: number): Promise<object> {
  return new Promise((resolve, reject) => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        const data = response.data;
        const item = data.find((item: any) => item.id === id);
        if (item) {
          resolve(item);
        } else {
          reject(new Error(`Item with ID ${id} not found`));
        }
      })
      .catch((error) => {
        reject(new Error(`Error fetching data: ${error}`));
      });
  });
}
