import React, { ReactNode, useContext, useReducer, useEffect, useMemo } from 'react';
import secureStorage from '../../utils/secureStorage';

// 定义状态类型
interface State {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

// 定义动作类型
type Action =
  | { type: 'RESTORE_TOKEN'; token: string | null }
  | { type: 'SIGN_IN'; token: string }
  | { type: 'SIGN_OUT' };

// 定义上下文类型
interface AuthContextType {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
  state: State;
}

// 初始状态
const initialState: State = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

// Reducer 函数
const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
  }
};

// 创建上下文
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// AuthProvider 组件
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 初始化时恢复用户令牌
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        // 从 Keychain 中获取令牌
        const token = await secureStorage.getItem('userToken');
        dispatch({ type: 'RESTORE_TOKEN', token });
      } catch (e) {
        console.error('Failed to restore token:', e);
      }
    };

    bootstrapAsync();
  }, []);

  // 定义上下文值
  const authApi = useMemo(
    () => ({
      signIn: async (data: any) => {
        console.log(data, 'signIn');
        // 模拟登录逻辑
        const token = 'dummy-auth-token';
        await secureStorage.setItem('userToken', token); // 存储令牌到 Keychain
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: async () => {
        await secureStorage.removeItem('userToken'); // 删除 Keychain 中的令牌
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data: any) => {
        console.log(data, 'signUp');
        // 模拟注册逻辑
        const token = 'dummy-auth-token';
        await secureStorage.setItem('userToken', token); // 存储令牌到 Keychain
        dispatch({ type: 'SIGN_IN', token });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...authApi, state }}>
      {children}
    </AuthContext.Provider>
  );
};

// 自定义 Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};