import React, { createContext, ReactNode, useState } from 'react';

interface drawerContextInt {
  drawerState: boolean;
  setDrawerState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const initial = {
  drawerState: false,
  setDrawerState: undefined,
};

export const drawerContext = createContext<drawerContextInt>(initial);

export default function DrawerProvider({ children }: { children: ReactNode }) {
  const [drawer, setDrawer] = useState<boolean>(false);
  const value = { drawerState: drawer, setDrawer };

  return (
    <drawerContext.Provider value={value}>{children}</drawerContext.Provider>
  );
}
