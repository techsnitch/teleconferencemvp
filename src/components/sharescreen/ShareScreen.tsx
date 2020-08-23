import React, { Component } from "react";


declare var chrome: any;
const EXTENSION_ID = 'fdboflfklebhcbjhhleldodlcajhhdcp';
const request = { sources: ['window', 'screen', 'tab'] };

export default class  GetScreen extends Component{
    stream: MediaStream;

    constructor(props: any) {
        super(props);
        this.stream = new MediaStream();
    }

    componentDidMount(){ }

    render(){
        return(
            
            <div>  
            <video autoPlay id="screen-view" width="50%"></video>
            <button id="get-screen" onClick={(event: React.MouseEvent) => this.shareScreen(event)}>Share Screen</button>
            <button id="stop-screen" style={{display:"none"}} onClick={(event: React.MouseEvent) => this.stopScreen(event)}>Stop Share</button>
            
            {/* <ScriptTag type="text/javascript" src="./share.js" /> */}
            </div>
                
    
        );
    }

    shareScreen(evt: React.MouseEvent) {
        const shareBtn = evt.target as HTMLButtonElement;
        const video = document.getElementById('screen-view') as HTMLVideoElement;
        const stopScreen = document.getElementById('stop-screen') as HTMLButtonElement;

        const context = this;

        if ((navigator.userAgent.indexOf('Chrome') || navigator.userAgent.indexOf('Edge')) !== -1){
            chrome.runtime.sendMessage(EXTENSION_ID, request, (response: any) => {
                if(response && response.type === 'success') {
                    navigator.mediaDevices.getUserMedia({
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: response.streamId,
                            }
                        }
                    } as any).then(returnedStream => {
                        stopScreen.style.display = "inline";
                        shareBtn.style.display = "none";
                        context.stream = returnedStream;
                        video.srcObject = context.stream;
                    }).catch(err => {
                        console.error('Could not get stream: ', err);
                    });
                } else {
                    console.error('Could not get stream');
                }
            });
        } else {
            navigator.mediaDevices.getUserMedia({
                video: {
                    mediaSource: 'screen'
                }
            } as any).then(returnedStream => {
                shareBtn.style.display = 'none';
                stopScreen.style.display = 'inline';
                context.stream = returnedStream;
                video.srcObject = context.stream;
            }).catch(err => {
                console.error('Could not get stream: ', err);
            });
        }
    }

    stopScreen(evt: React.MouseEvent) {
        const stopBtn = evt.target as HTMLButtonElement;
        const video = document.getElementById('screen-view') as HTMLVideoElement;
        const getScreen = document.getElementById('get-screen') as HTMLButtonElement;

        this.stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stopBtn.style.display = "none";
        getScreen.style.display = "inline";
    }
}