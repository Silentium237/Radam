
import '../../App.css';

import React, { Component} from 'react';
import { FacebookProvider, MessengerCheckbox } from 'react-facebook';

export default class SignUp extends Component {
    render() {
        return (
            <FacebookProvider appId="100023996829612">
                <MessengerCheckbox messengerAppId="100023996829612" pageId="100023996829612"/>
            </FacebookProvider>
        );
    }
}