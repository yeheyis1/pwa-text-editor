import { openDB } from 'idb';

const initdb = async () => {
  console.log('Initializing database');
  const db = await openDB('jate', 2, {  // Use version 2 consistently
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      } else {
        console.log('jate database already exists');
      }
    },
  });
};

// Initialize the database when the app loads
initdb();

// Method to add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Open the database with version 2
  const db = await openDB('jate', 2);

  // Start a transaction and specify the object store
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  // Use put to save content with a fixed id of 1 (update existing record)
  const request = store.put({ id: 1, value: content });

  // Await the transaction and confirm in console
  const result = await request;
  console.log('Data saved to the database', result);
  return result;
};

// Method to get content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Open the database with version 2
  const db = await openDB('jate', 2);

  // Start a transaction and specify the object store
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  // Use `get` to retrieve the content with id 1
  const request = store.get(1);

  // Await the transaction result and return the content
  const result = await request;
  console.log('Data retrieved from the database', result?.value);
  return result?.value;
};
