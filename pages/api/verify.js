const ids = {};
const verified = {};

export default function handler(req, res) {
  const { verify, waitfor } = req.query;

  if (waitfor) {
    // Already verified? Respond immediately
    if (verified[waitfor]) {
      return res.status(200).json({ verified: 1 });
    }

    // Store callback
    ids[waitfor] = () => {
      res.status(200).json({ verified: 1 });
    };

    // Cleanup after 5 mins
    setTimeout(() => {
      delete ids[waitfor];
    }, 5 * 60 * 1000);

  } else if (verify) {
    if (ids[verify]) {
      // Mark as verified
      verified[verify] = true;

      // Call the waiting response
      ids[verify]();

      // Cleanup
      delete ids[verify];

      res.status(200).send(`<script>window.close()</script>`);
    } else {
      // Maybe it was already verified or expired
      res.status(400).send('Verification failed or expired.');
    }
  } else {
    res.status(400).send('Invalid request.');
  }
}
