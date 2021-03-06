/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        window.emplite = {};
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.writeToConsole('hello');
        var self = this;
        FCMPlugin.getToken(
            function(token){
                console.log('GOOD TOKEN: ' + token);
            },
            function(err){
                console.log('error retrieving token: ' + err);
            }
        );
        var retval = FCMPlugin.subscribeToTopic('empirelights',
            function(token){
                self.writeToConsole('OKsubscribe - ' + token);
            },
            function(err){
                self.writeToConsole('ERRsubscribe - ' + token);
            }
                                               );
        FCMPlugin.onNotification(
            function(data){
                window.app.writeToConsole('Notification received');
            },
            function(msg){
                window.app.writeToConsole('onNotif OK: ' + msg);
            },
            function(err){
                self.writeToConsole('onNotif ERR: ' + err);
            });

        FCMPlugin.onDataValueChanged('/honor',
            function(data){
                window.app.writeToConsole('DATA-CHANGE received');
            },
            function(msg){
                window.app.writeToConsole('onDataC OK: ' + msg);
            },
            function(err){
                self.writeToConsole('onDataC ERR: ' + err);
            });
    },

    writeToConsole: function(txt) {
        $('#console').append('\n' + txt);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

window.app = app;
app.initialize();
