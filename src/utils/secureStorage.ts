import * as Keychain from 'react-native-keychain';

const KEYCHAIN_KEY = 'secureStorage';

export default {
  // 获取存储的值
  getItem: async (key?: string) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const secureStorage = JSON.parse(credentials ? credentials.password : '{}');
      return key ? secureStorage[key] : secureStorage;
    } catch (error) {
      console.error('Failed to get item from Keychain:', error);
      return null;
    }
  },

  // 设置存储的值
  setItem: async (key: string, value: any) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      const secureStorage = JSON.parse(credentials ? credentials.password : '{}');
      secureStorage[key] = value; // 更新指定键的值
      await Keychain.setGenericPassword(KEYCHAIN_KEY, JSON.stringify(secureStorage)); // 存储更新后的数据
    } catch (error) {
      console.error('Failed to set item in Keychain:', error);
    }
  },

  // 删除存储的值
  removeItem: async (key: string) => {
    try {
      if (key) {
        const credentials = await Keychain.getGenericPassword();
        const secureStorage = JSON.parse(credentials ? credentials.password : '{}');
        delete secureStorage[key]; // 删除指定键
        await Keychain.setGenericPassword(KEYCHAIN_KEY, JSON.stringify(secureStorage)); // 更新存储
      } else {
        await Keychain.resetGenericPassword(); // 删除所有数据
      }
    } catch (error) {
      console.error('Failed to remove item from Keychain:', error);
    }
  },
};