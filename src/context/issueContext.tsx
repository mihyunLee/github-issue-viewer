import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { IIssue, IIssueList } from '../types';

// Reducer action type
type ITodoAction =
  | { type: 'SET_ISSUE'; payload: IIssueList }
  | { type: 'ADD_ISSUE'; payload: IIssue };

// Context type
interface IIssueContext {
  state: IIssueList;
  dispatch: React.Dispatch<ITodoAction>;
}

// Reducer initial state
const initialState: IIssueList = [];

// Context 선언
const issueContext = createContext<IIssueContext | undefined>(undefined);

// Reducer 선언
export const issueReducer = (state: IIssueList, action: ITodoAction): IIssueList => {
  switch (action.type) {
    case 'SET_ISSUE':
      return action.payload;
    case 'ADD_ISSUE':
      return [...state, action.payload];
    default:
      return state;
  }
};

// Reducer를 감싸는 Context Provider
export const IssueProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  return <issueContext.Provider value={{ state, dispatch }}>{children}</issueContext.Provider>;
};

// type error 방지를 위해 wrapper 함수를 만들어준다.
export const useIssueContext = () => {
  const context = useContext(issueContext);

  if (!context) {
    throw new Error('useIssueContext must be used within a IssueProvider');
  }

  return context;
};
