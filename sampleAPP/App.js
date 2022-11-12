import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import { matrixTransform } from 'react-native-svg/lib/typescript/elements/Shape';
const App = () => {
  const [fill, setFill] = useState(30);
  return (
    <ScrollView style={styles.mainBackground}>
      <ImageBackground
        style={styles.headerStyle}
        source={require('./assets/Images/header.png')}>
        <View style={styles.headerSubView}>
          <Text style={styles.lessStyle}>Less Stress Journey</Text>
          <TouchableOpacity>
            <Image
              style={styles.refreshImg}
              source={require('./assets/Images/refresh.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subTxt}>
          Working on wellbeing skills: Needs & Boundaries
        </Text>
      </ImageBackground>
      <View style={styles.card}>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#95C28C"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#F5D786"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
        <View>
          <AnimatedCircularProgress
            size={80}
            width={6}
            fill={fill}
            tintColor="#DF836F"
            backgroundColor="#F6F6F6">
            {fill => <Text>{fill}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.daysLeft}>Days Left</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.todayBtn}>
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allButton}>
          <Text style={styles.allText}>Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.day}>Day 2</Text>
        <View style={styles.breathingCard}>
          <View style={styles.subContent}>
            <Image
              source={require('./assets/Images/breathing.png')}
              style={styles.breathingImg}
            />
            <View style={styles.textView}>
              <View style={styles.cardSubView}>
                <Text style={styles.breathingTxt}>Breath Works 1 :</Text>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/Images/star.png')}
                    style={styles.star}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.desc}>
                This breathing technique is great for relaxing your mind
              </Text>
              <View style={styles.iconsView}>
                <View style={styles.iconSubView}>
                  <Image
                    style={styles.heart}
                    source={require('./assets/Images/heart.png')}
                  />
                  <Text>Care</Text>
                </View>
                <View style={styles.iconSubView}>
                  <Image
                    style={styles.time}
                    source={require('./assets/Images/time.png')}
                  />
                  <Text>7 mins</Text>
                </View>
                <View style={styles.iconSubView}>
                  <Text>level :</Text>
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <ProgressBar
            style={{borderRadius: 1111, marginTop: 25}}
            progress={0.8}
            color={'#997A92'}
          />
        </View>

        <View style={styles.walkView}>
          <View style={styles.subWalkView}>
            <Text style={styles.walkViewText}> Go for a 20 minute walk</Text>
            <TouchableOpacity style={styles.completeBtn} >
              <Text style={styles.completeTxt} >Complete</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.breathingCard}>
          <View style={styles.subContent}>
            <Image
              source={require('./assets/Images/breathing.png')}
              style={styles.breathingImg}
            />
            <View style={styles.textView}>
              <View style={styles.cardSubView}>
                <Text style={styles.breathingTxt}>Breath Works 1 :</Text>
                <TouchableOpacity>
                  <Image
                    source={require('./assets/Images/star.png')}
                    style={styles.star}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.desc}>
                This breathing technique is great for relaxing your mind
              </Text>
              <View style={styles.iconsView}>
                <View style={styles.iconSubView}>
                  <Image
                    style={styles.heart}
                    source={require('./assets/Images/heart.png')}
                  />
                  <Text>Care</Text>
                </View>
                <View style={styles.iconSubView}>
                  <Image
                    style={styles.time}
                    source={require('./assets/Images/time.png')}
                  />
                  <Text>7 mins</Text>
                </View>
                <View style={styles.iconSubView}>
                  <Text>level :</Text>
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                  <Image
                    style={styles.circle}
                    source={require('./assets/Images/circle.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          <ProgressBar
            style={{borderRadius: 1111, marginTop: 25}}
            progress={0.8}
            color={'#997A92'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#F5F5F5',
  },
  headerStyle: {
    height: 224,
  },
  lessStyle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  headerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  refreshImg: {
    height: 16,
    width: 16,
  },
  subTxt: {
    fontWeight: '500',
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    position: 'absolute',
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indicator: {
    height: 80,
    width: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  daysLeft: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'white',
    width: '90%',
    marginTop: 90,
    alignSelf: 'center',
    borderRadius: 1111,
    flexDirection: 'row',
  },
  todayBtn: {
    padding: 15,
    backgroundColor: '#997A92',
    borderRadius: 1111,
    width: '50%',
  },
  todayText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  allButton: {
    padding: 15,
    borderRadius: 1111,
    width: '50%',
  },
  allText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6D768E',
    textAlign: 'center',
  },
  day: {
    fontWeight: '700',
    fontSize: 20,
    color: '#222222',
    marginTop: 25,
  },
  bodyView: {
    paddingHorizontal: 30,
  },
  breathingCard: {
    padding: 15,
    backgroundColor: 'white',
    marginTop: 25,
    borderRadius: 16,
  },
  subContent: {
    flexDirection: 'row',
  },
  breathingImg: {
    height: 95,
    width: 105,
  },
  textView: {
    paddingHorizontal: 15,
    width: '70%',
  },
  breathingTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222222',
  },
  star: {
    height: 17,
    width: 17,
  },
  cardSubView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6D768E',
    marginTop: 10,
    width: '90%',
  },
  iconsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heart: {
    width: 12,
    height: 11,
    marginHorizontal: 2,
  },
  iconSubView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  time: {
    height: 14,
    width: 14,
    marginHorizontal: 2,
  },
  circle: {
    marginHorizontal: 2,
    height: 8,
    width: 8,
  },
  walkView:{
    backgroundColor:"white",
    padding:15,
    marginTop:25,
    borderRadius:11,
   
  },
  subWalkView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  walkViewText:{
    fontWeight:'500',
    fontSize:16,
    color:"black",
    textAlign:'center'
  },
  completeBtn:{
    backgroundColor:"#997A92",
    paddingHorizontal:20,
    paddingVertical:10,
    alignSelf:'center',
    borderRadius:1111
  },
  completeTxt:{
    fontSize:14,
    fontWeight:"500",
    color:"white"
  }
});
