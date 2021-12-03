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
    illustration:
      'https://image.freepik.com/free-vector/kids-children-boys-girl-abc-school-illustration_215960-53.jpg',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/A%20Lettere%20Adesive%20Occhietti72.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/B%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/C%20Lettere%20Adesive%20Occhietti4.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/D%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/E%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/F%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/G%20Lettere%20Adesive%20Occhietti1.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/H%20Lettere%20Adesive%20Occhietti1.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/I%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/J%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/K%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/L%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/M%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/N%20Lettere%20Adesive%20Occhietti9.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/O%20Lettere%20Adesive%20Occhietti2.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/P%20Lettere%20Adesive%20Occhietti9.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Q%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/R%20Lettere%20Adesive%20Occhietti5.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/S%20Lettere%20Adesive%20Occhietti8.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/T%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/U%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/V%20Lettere%20Adesive%20Occhietti6.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/W%20Lettere%20Adesive%20Occhietti3.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/X%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Y%20Lettere%20Adesive%20Occhietti7.png',
  },
  {
    illustration:
      'https://www.beccoblustickers.com/images/stories/virtuemart/product/Z%20Lettere%20Adesive%20Occhietti8.png',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Slider_Alp = props => {
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

export default Slider_Alp;

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
