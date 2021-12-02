/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Animated,
  ImageBackground,
} from 'react-native';
import {COLORS} from '../constants';
import phrasesData from './phrasesData/phrasesData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PhrasesQuiz = ({navigation}) => {
  const allQuestions = phrasesData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex].correct_option;
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{fontSize: 18, opacity: 0.6}}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            fontSize: 30,
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 1,
              borderColor:
                option === correctOption
                  ? COLORS.success
                  : option === currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                option === correctOption
                  ? COLORS.success + '20'
                  : option === currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 25}}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option === correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option === currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: '80%',
            backgroundColor: '#f5dc88',
            padding: 20,
            borderRadius: 15,
            marginLeft: 42,
          }}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          borderWidth: 0.1,
          backgroundColor: '#f5dc88',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#88b0d3',
            },
            {
              width: progressAnim,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          position: 'relative',
        }}>
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}>
          <ImageBackground
            source={require('../assets/images/background.jpg')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#e6f1f2',
                width: '75%',
                borderRadius: 50,
                padding: 25,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > allQuestions.length / 2
                        ? COLORS.success
                        : COLORS.error,
                  }}>
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                  }}>
                  / {allQuestions.length}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: '#f5dc88',
                    padding: 20,
                    width: '40%',
                    borderRadius: 20,
                    margin: 15,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                    }}>
                    Retry
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ActivityScreen')}
                  style={{
                    backgroundColor: '#f5dc88',
                    padding: 20,
                    width: '40%',
                    borderRadius: 20,
                    margin: 15,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                    }}>
                    Exit
                  </Text>
                </TouchableOpacity>
              </View>
              <Text />
              <Text />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                Get a Screenshot of Your Result
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  marginBottom: 30,
                }}>
                Add to Your Profile and Grow up Profile
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen')}
                style={{
                  backgroundColor: '#88b0d3',
                  padding: 20,
                  width: '90%',
                  borderRadius: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  Feed Profile
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default PhrasesQuiz;
