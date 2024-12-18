const fs = require('fs');
const { google } = require('googleapis');

export default async function createGoogleMeet(date, time) {
  try {
    // Load credentials from the JSON file
    const credentials = JSON.parse(fs.readFileSync('credentials.json'));

    const { client_id, client_secret, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]
    );

    // Load token from file or obtain it
    const token = JSON.parse(fs.readFileSync('token.json'));
    oAuth2Client.setCredentials(token);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    const startTime = new Date(`${date}T${time}:00`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1-hour duration

    const event = {
      summary: 'Google Meet Appointment',
      description: 'Scheduled meeting with Google Meet link.',
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'UTC',
      },
      conferenceData: {
        createRequest: {
          requestId: `${startTime.getTime()}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    const meetLink = response.data.hangoutLink;
    console.log('Google Meet created successfully:', meetLink);
    return meetLink;

  } catch (error) {
    console.error('Error creating Google Meet:', error);
    return null;
  }
}

// const date = '2024-12-31';
// const time = '14:00';

// createGoogleMeet(date, time);
