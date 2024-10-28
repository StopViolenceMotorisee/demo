var p = null;

export function getCount() {
  if (p == null) {
    p = fetch("https://api.brevo.com/v3/contacts/lists/2", {
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
    })
      .then((r) => r.json())
      .then((data) => data.uniqueSubscribers)
      .then((raw) => raw.toLocaleString());
  }
  return p;
}
