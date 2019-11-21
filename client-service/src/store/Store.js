import React, {useState} from 'react';

export const LoadingContext = React.createContext(true);

const Store = ({children}) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
        {children}
    </LoadingContext.Provider>
  );
};

export default Store;
