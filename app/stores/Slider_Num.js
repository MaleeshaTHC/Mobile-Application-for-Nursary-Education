import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    subtitle: 'Start From Here',
    illustration:
      'https://d24o39yp3ttic8.cloudfront.net/71CC77D2-3EA3-4A02-9A00-B9091CFC0E60/unzipped%2Fphoto1%2Fphoto1.jpg',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670235.jpg',
    subtitle: 'ONE',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670248.jpg',
    subtitle: 'TWO',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670259.jpg',
    subtitle: 'THREE',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670268.jpg',
    subtitle: 'FOUR',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/vector-illustration-set-school-kids-colorful-number-five-shaped-back-to-117688066.jpg',
    subtitle: 'FIVE',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671597.jpg',
    subtitle: 'SIX',
  },
  {
    illustration:
      'https://image.freepik.com/free-vector/flashcard-kindergarten-preschool-learning-counting-number-7-with-number-kids_283146-308.jpg',
    subtitle: 'SEVEN',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671629.jpg',
    subtitle: 'EIGHT',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671640.jpg',
    subtitle: 'NINE',
  },
  {
    illustration:
      'https://previews.123rf.com/images/kankhem/kankhem2008/kankhem200800049/153296259-flashcard-for-kindergarten-and-preschool-learning-to-counting-number-10-with-a-number-of-kids-.jpg',
    subtitle: 'TEN',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Slider_Num = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const goBackward = () => {
    carouselRef.current.snapToPrev();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <View container>
      <View style={styles.slider}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </View>
  );
};

export default Slider_Num;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 1,
    marginTop: 15,
  },
  navigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  item: {
    width: screenWidth - 65,
    height: screenWidth - 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 370,
  },
  image: {
    width: 100,
    height: 180,
  },
  slider_text1: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 15,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'auto',
  },
  card1: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#faecbf',
    borderRadius: 15,
    marginRight: 50,
  },
  card2: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#faecbf',
    borderRadius: 15,
  },
});
