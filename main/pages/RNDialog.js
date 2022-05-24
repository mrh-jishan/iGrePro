import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { hideMessage, showMessage } from '../redux/actions/modalAction';

class RNDialog extends Component {
    render() {
        return (
            <Portal>
                <Dialog visible={this.props.visible} onDismiss={this.props.hideMessage}>
                    <Dialog.Title>Message</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{this.props.message}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button mode='contained' onPress={this.props.hideMessage}
                            style={styles.button}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
    }
});


export default RNDialog;