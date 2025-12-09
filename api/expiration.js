export default function handler(req, res) {
  const data = {
    year: 2025,
    month: 12,
    day: 31,
    hour: 23,
    minute: 59
  };
  
  res.status(200).json(data);
}
