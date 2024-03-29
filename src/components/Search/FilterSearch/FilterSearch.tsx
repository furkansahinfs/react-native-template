import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './FilterSearch.style';

export const FilterSearch = (props: IFilterSearch) => {
  const { unfilteredList, setFilteredList, containerStyle, textStyle, searchKeys } = props;

  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setFilteredList(unfilteredList);
  }, []);

  const getFilter = (unfilteredListParam: any, input: any) => {
    const trimmedInput: string = input.split(' ').join('').toLocaleLowerCase('TR');
    const filteredList = unfilteredListParam.filter(function (el: any) {
      if (!searchKeys) {
        const stringToBeSearched = el.split(' ').join('').toLocaleLowerCase('TR');
        return (
          stringToBeSearched.startsWith(trimmedInput) || stringToBeSearched.includes(trimmedInput)
        );
      } else {
        let stringToBeSearched = '';
        for (let i = 0; i < searchKeys.length; i++) {
          if (el[searchKeys[i]]) {
            stringToBeSearched = stringToBeSearched + el[searchKeys[i]];
          }
        }
        stringToBeSearched = stringToBeSearched.split(' ').join('').toLocaleLowerCase('TR');
        return (
          stringToBeSearched.startsWith(trimmedInput) || stringToBeSearched.includes(trimmedInput)
        );
      }
    });
    setFilteredList(filteredList);
  };

  if (unfilteredList.length !== 0) {
    return (
      <View style={containerStyle ?? styles.container}>
        <TextInput
          placeholder={'Ara..'}
          autoCapitalize={'characters'}
          onChangeText={text => {
            setSearchText(text);
            getFilter(unfilteredList, text);
          }}
          style={textStyle ?? styles.input}
          placeholderTextColor={textStyle?.[1].color ? textStyle?.[1].color : 'blue'}
          value={searchText}
        />
      </View>
    );
  }
  return <View />;
};

interface IFilterSearch {
  unfilteredList: any[];
  setFilteredList: (val: any) => void;
  containerStyle?: any;
  textStyle?: any;
  searchKeys?: any[];
}
