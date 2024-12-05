import React from 'react';
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { useNavigate } from 'react-router-dom';

import '@stream-io/video-react-sdk/dist/css/styles.css';
// import dotenv from 'dotenv';

// dotenv.config();
// Replace these with your actual Stream.io credentials
const apiKey = '';
const token = '';
const userId = '';
const callId = '';

const user = {
  id: userId,
  name: 'Your Name', // Replace with actual user name
  image: 'https://getstream.io/random_svg/?id=your-id&name=YourName',
};

const VideoCallPage = () => {
    const navigate = useNavigate();
  // Create client and call outside the component to prevent re-creation
  const client = new StreamVideoClient({ 
    apiKey, 
    user, 
    token,
    audio: {
      noiseCancellation: true
    }
  });

  const call = client.call('default', callId);
  call.join({ create: true });

  const MyUILayout = () => {
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) {
        return (
          <div className="flex justify-center items-center h-screen w-full bg-gray-900 text-white flex-col">
            <div className="text-2xl mb-4">Joining call...</div>
            <button
              onClick={() => navigate('/notary')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Go back to Appointments
            </button>
          </div>
        );
      }
      

    return (
      <StreamTheme>
        <div className="video-call-container w-full h-screen flex flex-col bg-gray-900 text-white">
          <div className="flex-grow flex">
            <SpeakerLayout 
              participantsBarPosition="right"
              showParticipantsList={true}
              participantsListWidth={300}
            />
          </div>
          <div className="controls-container p-4 bg-gray-800 fixed bottom-0 left-0 right-0">
            <CallControls 
              enableScreenShare={true}
              enableAudioModeration={true}
              enableVideoModeration={true}
            />
          </div>
        </div>
      </StreamTheme>
    );
  };

  return (
    <div className="video-call-wrapper w-full h-screen bg-gray-900 text-white">
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyUILayout />
        </StreamCall>
      </StreamVideo>
    </div>
  );
};

export default VideoCallPage;