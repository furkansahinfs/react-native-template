import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from '../..';
import { I18N } from '../../../locales';
import { useTheme } from '../../../theme';
import { styles } from './DropdownMenu.style';

//TODO Refactoring

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
  } = props;
  const [expandState, setExpandState] = useState<any>(false);
  const [renderAgain, setRenderAgain] = useState<any>(false);
  const [selectedChoices, setSelectedChoices] = useState<any>({});
  const [choiceTitles, setChoiceTitles] = useState<any>({});
  const { colors } = useTheme();

  useEffect(() => {
    initChoiceStatus();
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
    const choiceList = choices;

    if (choiceList.length !== 0) {
      return (
        expandState && (
          <View>
            {choices.map((choice: any, i: number) => {
              return (
                <View key={i} style={styles.multipleChoiceContainer}>
                  <CheckBox
                    checked={currentChoice === choice}
                    onPressFunction={() => {
                      if (currentChoice === choice) {
                        setChoice(null);
                      } else {
                        setChoice(choice);
                      }
                      closeOnSelection && setExpandState(false);
                    }}
                    title={titleKey ? choice[titleKey] : itemKey ? choice[itemKey] : choice}
                    widthFit={false}
                  />
                </View>
              );
            })}
          </View>
        )
      );
    } else {
      return (
        expandState && <Text style={styles.choiceStyle}>{I18N.t('dropdownMenu.noChoice')}</Text>
      );
    }
  };

  const renderMultipleChoices = () => {
    if (choices.length !== 0) {
      return (
        expandState && (
          <View>
            {choices.map((choice: any, i: number) => {
              const key = itemKey ? choice[itemKey] : choice;
              return (
                <View key={i} style={styles.multipleChoiceContainer}>
                  <CheckBox
                    checked={selectedChoices[key]}
                    onPressFunction={() => setChoiceStatus(choice, key, !selectedChoices[key])}
                    title={titleKey ? choice[titleKey] : itemKey ? choice[itemKey] : choice}
                    widthFit={false}
                  />
                </View>
              );
            })}
          </View>
        )
      );
    } else {
      return (
        expandState && <Text style={styles.choiceStyle}>{I18N.t('dropdownMenu.noChoice')}</Text>
      );
    }
  };

  const renderContent = () => {
    if (!loading) {
      return <>{multipleChoice ? renderMultipleChoices() : renderChoices()}</>;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={loading}
        style={[styles.categoryHeaderStyle, { borderColor: colors.border }]}
        onPress={() => setExpandState(!expandState)}
        activeOpacity={1}
      >
        <Text style={[styles.categoryNameStyle, { color: colors.text }]}>{getTitle()}</Text>
      </TouchableOpacity>
      {renderContent()}
    </View>
  );
};

interface IDropdownMenu {
  choices: Array<any>;
  currentChoice: any;
  dropdownTitle: string;
  setChoice: (choice: any) => any;
  closeOnSelection?: boolean;
  multipleChoice?: boolean;
  multipleChoiceDropdownTitle?: string;
  itemKey: any;
  titleKey?: any;
  loading?: boolean;
}

export default DropdownMenu;
