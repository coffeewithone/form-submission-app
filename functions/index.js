const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));

app.post('/submit', async (req, res) => {
  const { name, email, mode } = req.body;

  // Process the data (e.g., validation, data transformation, etc.)

  try {
    await db.collection('submissions').add({
      name,
      email,
      mode,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send({ message: 'Submission saved to Firestore' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).send({ message: 'Error saving submission' });
  }
});

exports.api = functions.https.onRequest(app);
