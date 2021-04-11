import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [busca, setBusca] = useState(null);
  const [starShips, setStarships] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        busca,
        setBusca,
        starShips,
        setStarships,
        showModal,
        setShowModal,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
