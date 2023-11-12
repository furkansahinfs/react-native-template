import React from 'react';
import { View } from 'react-native';
import { SearchBar as SearchBarUI } from '@rneui/themed';
import { DefaultIcon } from '@src/components';
import { i18next } from '@src/locales';
import { useTheme } from '@src/theme';
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
    <SearchBarUI
      cancelButtonTitle={i18next.t('searchBar.cancel')}
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
      placeholder={i18next.t('searchBar.search')}
      value={searchText}
      searchIcon={
        <View style={styles.searchIcon}>
          <DefaultIcon name="search" onPress={() => onEndEditing(searchText)} color={colors.icon} />
        </View>
      }
    />
  );
};

export default SearchBar;
