// db.js
import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';

const db = SQLite.openDatabase('db.db');

export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql('DROP TABLE IF EXISTS users;', [], null, (_, error) => console.log('Error dropping table:', error));
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT NOT NULL, token TEXT);',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.log('Error creating table:', error)
    );
  });
};

export const loginUser = (email, password) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
      (_, { rows: { _array } }) => {
        if (_array.length > 0) {
          const user = _array[0];
          const token = generateSessionToken(); // You need to implement this function
          AsyncStorage.setItem('@session_token', token);
          tx.executeSql('UPDATE users SET token = ? WHERE id = ?', [token, user.id]);
        } else {
          console.log('Invalid email or password');
        }
      },
      (_, error) => console.log('Error logging in:', error)
    );
  });
};

export const getUserEmail = (id, setEmail) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT email FROM users WHERE id = ?',
      [id],
      (_, { rows: { _array } }) => {
        if (_array.length > 0) {
          const user = _array[0];
          setEmail(user.email);
        } else {
          console.log('No user found with this id');
        }
      },
      (_, error) => console.log('Error fetching email:', error)
    );
  });
};

export default db;