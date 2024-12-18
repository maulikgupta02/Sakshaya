import fs from 'fs';
import { google } from 'googleapis';
import asyncHandler from 'express-async-handler';

// Function to validate and format date (YYYY-MM-DD)
const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    if (isNaN(dateObject)) {
      throw new Error('Invalid date string format. Use a valid date like "Sun Dec 03 2023".');
    }
    return dateObject.toISOString().split('T')[0]; // Extract YYYY-MM-DD
  };

// Function to validate and format time (HH:MM in 24-hour format)
const formatTime = (time) => {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Regex to match HH:MM format
  if (!regex.test(time)) {
    throw new Error('Invalid time format. Use HH:MM in 24-hour format.');
  }
  return time; // Valid time format
};

// Function to combine and validate date and time into a Date object
const formatDateTime = (date, time) => {
  const validDate = formatDate(date);
  const validTime = formatTime(time);
  const combinedDateTime = new Date(`${validDate}T${validTime}:00Z`);

  if (isNaN(combinedDateTime)) {
    throw new Error('Invalid date or time value.');
  }

  return combinedDateTime;
};

// Main function to create Google Meet event
export const meet = asyncHandler(async (req, res) => {
  const { date, time } = req.body; // Input from request body
  console.log('Input Date:', date, 'Input Time:', time);

  try {
    // Parse and format the input date and time
    const startTime = formatDateTime(date, time);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Duration: 1 hour

    // Load credentials from JSON file
    const credentials = JSON.parse(fs.readFileSync('credentials.json'));
    const { client_id, client_secret, redirect_uris } = credentials.installed;

    // OAuth2 Client Setup
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]
    );

    // Load token and set credentials
    const token = JSON.parse(fs.readFileSync('token.json'));
    oAuth2Client.setCredentials(token);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    // Define the event details
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

    // Insert event into Google Calendar
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    const meetLink = response.data.hangoutLink;
    console.log('Google Meet created successfully:', meetLink);

    // Return success response with the meet link
    res.status(200).json({ meetLink });

  } catch (error) {
    console.error('Error creating Google Meet:', error.message);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});
