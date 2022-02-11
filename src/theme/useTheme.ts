import { MyDarkTheme, MyDefaultTheme } from './themes';
import { useSelector } from 'react-redux';
import { IRootState } from '../store/store';

const useTheme = () => {
  const themeState = useSelector((state: IRootState) => state.theme);

  return themeState.theme === 'LIGHT' ? MyDefaultTheme : MyDarkTheme;
};

export default useTheme;
