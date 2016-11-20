import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { ICounterProps } from "../../interfaces/screens";

function mapStateToProps(state: any) {
  return { counter2: state.counter2, app: state.app };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { actions : bindActionCreators(actions, dispatch) };
}

class Counter2 extends Component<any, void> {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };

  constructor(props: any) {
      super(props);
      console.log(props);
  }

  public nextScreen() {
    this.props.navigator.push({
      screen: "screen.Counter",
      title: "New title"
    });
  }

  public showLightbox() {
    this.props.navigator.showLightBox({
        screen: "modals.LightBoxScreen", // unique ID registered with Navigation.registerScreen
        passProps: {}, // simple serializable object that will pass as props to the lightbox (optional)
        style: {
          backgroundBlur: "none", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
          backgroundColor: "#FFFFFF" // tint color for the background, you can specify alpha here (optional)
        }
    });
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
            {this.props.counter2.counter}
        </Text>
        <Text style={styles.welcome}>
          {this.props.app.appName}
        </Text>
        <TouchableOpacity
            style={styles.button}
            onPress={this.props.actions.increaseItemC2}>
            <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={this.nextScreen.bind(this)}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={this.props.actions.appInitialized}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={this.showLightbox.bind(this)}>
        <Text style={styles.buttonText}>Lightbox</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003340",
  } as React.ViewStyle,
  button: {
    width: 100,
    height: 30,
    backgroundColor: "#092228",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#06566b",
    borderWidth: 1,
    borderRadius: 5
  } as React.ViewStyle,
  buttonText: {
      color: "white"
  } as React.TextStyle,
  counter: {
      fontSize: 100,
      color: "#2c5e6a",
      textAlign: "center"
  } as React.TextStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "lightgrey"
  } as React.TextStyle
});