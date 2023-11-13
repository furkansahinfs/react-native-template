import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, CheckBox, DefaultIcon, FilterSearch } from '@src/components';
import { i18next } from '@src/locales';
import { useTheme } from '@src/theme';
import { styles } from './DropdownMenu.style';

//TODO NEED BIG Refactoring

const DropdownMenu = (props: IDropdownMenu) => {
  const {
    choices,
    currentChoice,
    dropdownTitle,
    setChoice,
    closeOnSelection,
    multipleChoice,
    itemKey,
    titleKey,
    multipleChoiceDropdownTitle,
    loading,
    searchBar,
  } = props;
  const [expandState, setExpandState] = useState<any>(false);
  const [renderAgain, setRenderAgain] = useState<any>(false);
  const [selectedChoices, setSelectedChoices] = useState<any>({});
  const [choiceTitles, setChoiceTitles] = useState<any>({});
  const [renderSearchBar, setRenderSearchBar] = useState<any>(searchBar);
  const [filteredChoices, setFilteredChoices] = useState<any>([]);
  const { colors } = useTheme();

  useEffect(() => {
    initChoiceStatus();
    setRenderSearchBar(searchBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choices]);

  const initChoiceStatus = useCallback(() => {
    let currentChoices = selectedChoices;
    let titles = choiceTitles;

    for (let i = 0; i < choices.length; i++) {
      const key = itemKey ? choices[i][itemKey] : choices[i];
      titles[key] = titleKey ? choices[i][titleKey] : choices[i];
      currentChoices[key] = false;
    }
    if (currentChoice instanceof Array) {
      for (let j = 0; j < currentChoice.length; j++) {
        currentChoices[currentChoice[j][itemKey]] = true;
      }
    }

    setSelectedChoices(currentChoices);
    setChoiceTitles(titles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choices]);

  const setChoiceStatus = (item: any, key: any, newValue: any) => {
    let currentChoices = selectedChoices;
    currentChoices[key] = newValue;

    const trueKeys = Object.keys(currentChoices)
      .filter(function (k) {
        return currentChoices[k];
      })
      .map(String);

    const newSelectedChoices: Array<any> = [];
    choices.map((mapItem: any) => {
      if (trueKeys.includes(mapItem[itemKey])) {
        newSelectedChoices.push(mapItem);
      }
    });
    setChoice(newSelectedChoices);
    setSelectedChoices(currentChoices);
    setRenderAgain(!renderAgain);
  };

  const getTitle = () => {
    if (multipleChoice) {
      if (currentChoice && currentChoice?.length > 0) {
        let title = '';
        for (let i = 0; i < currentChoice.length; i++) {
          title += titleKey ? currentChoice[i][titleKey] + ', ' : currentChoice[i][itemKey] + ', ';
        }
        title = title.slice(0, -2);
        return title;
      } else {
        return multipleChoiceDropdownTitle ? multipleChoiceDropdownTitle : dropdownTitle;
      }
    } else {
      if (currentChoice) {
        const key = titleKey
          ? currentChoice[titleKey]
          : itemKey
          ? currentChoice[itemKey]
          : currentChoice;
        return key;
      } else {
        return dropdownTitle;
      }
    }
  };

  const renderChoices = () => {
    const choiceList = renderSearchBar ? filteredChoices : choices;

    if (choiceList.length !== 0) {
      return (
        expandState && (
          <View>
            {choiceList.map((choice: any, i: number) => {
              return (
                <View key={i} style={styles.multipleChoiceContainer}>
                  <CheckBox
                    checked={currentChoice === choice || currentChoice[itemKey] === choice[itemKey]}
                    onPress={() => {
                      if (currentChoice === choice) {
                        setChoice(null);
                      } else {
                        setChoice(choice);
                      }
                      closeOnSelection && setExpandState(false);
                    }}
                    title={titleKey ? choice[titleKey] : itemKey ? choice[itemKey] : choice}
                    fit={false}
                  />
                </View>
              );
            })}
          </View>
        )
      );
    } else {
      return (
        expandState && (
          <Text style={styles.choiceStyle}>{i18next.t('components.dropdownMenu.noChoice')}</Text>
        )
      );
    }
  };

  const renderMultipleChoices = () => {
    const choiceList = renderSearchBar ? filteredChoices : choices;
    if (choiceList.length !== 0) {
      return (
        expandState && (
          <View>
            {choiceList.map((choice: any, i: number) => {
              const key = itemKey ? choice[itemKey] : choice;
              return (
                <View key={i} style={styles.multipleChoiceContainer}>
                  <CheckBox
                    checked={selectedChoices[key]}
                    onPress={() => setChoiceStatus(choice, key, !selectedChoices[key])}
                    title={titleKey ? choice[titleKey] : itemKey ? choice[itemKey] : choice}
                    fit={false}
                  />
                </View>
              );
            })}
          </View>
        )
      );
    } else {
      return (
        expandState && (
          <Text style={styles.choiceStyle}>{i18next.t('components.dropdownMenu.noChoice')}</Text>
        )
      );
    }
  };

  const renderSearchBarComponent = () => {
    return (
      expandState && (
        <View>
          {itemKey ? (
            <FilterSearch
              setFilteredList={filtered => setFilteredChoices(filtered)}
              unfilteredList={choices}
              searchKeys={[titleKey ?? 'name', 'fullName']}
              containerStyle={styles.searchBarContainer}
              textStyle={[styles.searchBarText, { color: colors.text }]}
            />
          ) : (
            <FilterSearch
              setFilteredList={filtered => setFilteredChoices(filtered)}
              unfilteredList={choices}
              containerStyle={styles.searchBarContainer}
              textStyle={[styles.searchBarText, { color: colors.text }]}
            />
          )}
        </View>
      )
    );
  };

  const renderContent = () => {
    if (!loading) {
      return (
        <View>
          {renderSearchBar && renderSearchBarComponent()}
          {multipleChoice ? renderMultipleChoices() : renderChoices()}
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  };

  return (
    <View>
      <TouchableOpacity
        disabled={loading}
        style={[styles.categoryHeaderStyle, { borderColor: colors.border }]}
        onPress={() => setExpandState(!expandState)}
        activeOpacity={1}>
        {dropdownTitle && <Text style={{ color: colors.text }}>{dropdownTitle}</Text>}
        <View style={styles.titleView}>
          <Text style={[styles.categoryNameStyle, { color: colors.text }]}>{getTitle()}</Text>
          <DefaultIcon name={expandState ? 'angle-up' : 'angle-down'} color={colors.icon} />
        </View>
      </TouchableOpacity>
      {renderContent()}
    </View>
  );
};

interface IDropdownMenu {
  choices: Array<any>;
  currentChoice: any;
  dropdownTitle?: string;
  setChoice: (choice: any) => any;
  closeOnSelection?: boolean;
  multipleChoice?: boolean;
  multipleChoiceDropdownTitle?: string;
  itemKey: any;
  titleKey?: any;
  loading?: boolean;
  searchBar?: boolean;
}

export default DropdownMenu;
