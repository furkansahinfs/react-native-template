import React from 'react';
import { View } from 'react-native';
import { SearchBar as NativeSearchBar } from 'react-native-elements';
import { I18N } from '../../locales';
import { useTheme } from '../../theme';
import { DefaultIcon } from '../Icon';
import { styles } from './SearchBar.styles';

interface ISearchBar {
  searchText: string;
  setSearchText: (text: string) => void;
  onEndEditing: (username: string) => void;
  onClearFunction?: () => void;
  extraStyle?: any;
}

const SearchBar = ({
  setSearchText,
  searchText,
  onEndEditing,
  onClearFunction,
  extraStyle,
}: ISearchBar) => {
  const { dark, colors } = useTheme();
  return (
    <NativeSearchBar
      cancelButtonTitle={I18N.t('searchBar.cancel')}
      containerStyle={[
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.background,
          borderTopColor: colors.background,
        },
        extraStyle,
      ]}
      round
      lightTheme={!dark}
      showLoading={false}
      onClear={() => {
        setSearchText('');
        if (onClearFunction !== undefined) {
          onClearFunction();
        }
      }}
      onChangeText={(text: string) => setSearchText(text)}
      onEndEditing={() => onEndEditing(searchText)}
      placeholder={I18N.t('searchBar.search')}
      value={searchText}
      noIcon={true}
      searchIcon={
        <View style={styles.searchIcon}>
          <DefaultIcon
            name="search"
            onPressFunction={() => onEndEditing(searchText)}
            color={colors.icon}
          />
        </View>
      }
    />
  );
};

export default SearchBar;
