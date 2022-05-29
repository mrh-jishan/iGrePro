import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { AuthContext } from './../authContext';


const RNDialog = ({ message, visible }) => {

    const { toggleDialog } = useContext(AuthContext);

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={toggleDialog}>
                <Dialog.Title>Message</Dialog.Title>

                <Dialog.Content>
                    <Paragraph>{message}</Paragraph>
                </Dialog.Content>

                <Dialog.Actions>
                    <Button mode='contained' onPress={toggleDialog} style={styles.button}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
    }
});


export default RNDialog;