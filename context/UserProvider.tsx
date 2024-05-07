import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import { AuthContext } from './AuthContext';

export const UserProvider: React.FC<User> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const { user } = useContext(AuthContext);

  const API_BASE_URL = 'https://backend-practice.euriskomobility.me'; // API base URL

  const createAccount = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/signup`, {
        email,
        password,
      });
      // Handle response
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      // Handle response
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    // Depending on your API, you may need to send a request to sign out the user
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/getUser/${user?.uid}`);
      setUserData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        createAccount,
        signIn,
        signOut,
        name,
        setName,
        getUser,
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
