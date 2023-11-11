import { useSelector } from 'react-redux';
import { IRootState } from 'src/store/store';
import { MyDarkTheme, MyDefaultTheme } from './themes';

const useTheme = () => {
  const themeState = useSelector((state: IRootState) => state.theme);

  return themeState.theme === 'LIGHT' ? MyDefaultTheme : MyDarkTheme;
};

export default useTheme;
