"use client";
import { createContext, useContext } from 'react';

const DataContext = createContext(null); // 建立一個 context

export const useData = () => useContext(DataContext); // 自定義一個 hook 使用這個 context

export function DataProvider({ children, value }) { // 提供這個 context
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}