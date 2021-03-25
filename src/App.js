import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

window.location="https://discord.gg/zdvxQ3dr2x";
// -->
</script>
export default withAuthenticator(App, true);
