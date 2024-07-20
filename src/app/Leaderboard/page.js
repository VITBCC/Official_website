import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

//Add API here
const leaderboardData = [
  { name: "Alice Johnson", email: "alice@example.com", score: 95, rank: 1 },
  { name: "Bob Smith", email: "bob@example.com", score: 90, rank: 2 },
  { name: "Charlie Brown", email: "charlie@example.com", score: 85, rank: 3 },
  // Add more data as needed
];

const LeaderboardPage = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h2"
          color="white"
          textAlign="center"
          padding="50px"
        >
          LeaderBoard
        </Typography>
      </Box>
      <Container sx={{ padding: "20px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Rank</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.score}</TableCell>
                  <TableCell>{row.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default LeaderboardPage;
