import React from 'react';

import Share from './Share';
import { firebaseAuth } from '../../config/firebase';

import './style.css';

const ShareContainer = () => <Share uid={firebaseAuth.currentUser.uid} />;

export default ShareContainer;
