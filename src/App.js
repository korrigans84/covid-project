import React, { useContext } from 'react'
import { firebaseAuth} from "./provider/AuthProvider";

export default function App() {
    const {user} = useContext(firebaseAuth)
  return (
      <h1>It Works !</h1>
  );
}
