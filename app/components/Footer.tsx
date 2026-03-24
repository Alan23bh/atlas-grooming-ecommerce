// "use client";

// import {
//   Box,
//   Container,
//   Stack,
//   Typography,
//   IconButton,
//   Link as MuiLink,
// } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <Box
//       component="footer"
//       sx={{
//         mt: "auto",
//         py: 2.5,
//         borderTop: "1px solid",
//         borderColor: "divider",
//         bgcolor: "primary.main",
//         color: "primary.contrastText",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Stack
//           direction={{ xs: "column", sm: "row" }}
//           alignItems="center"
//           justifyContent="space-between"
//           spacing={1.5}
//         >
//           <Typography
//             variant="body2"
//             sx={{ opacity: 0.9, textAlign: "center", fontSize: 18 }}
//           >
//             © {year} Next-Shop · Built with Next.js, TypeScript & MUI
//           </Typography>

//           <Stack direction="row" spacing={1}>
//             <IconButton
//               size="small"
//               component={MuiLink}
//               href="https://github.com/Alan23bh"
//               target="_blank"
//               rel="noopener"
//               sx={{ color: "inherit" }}
//             >
//               <GitHubIcon fontSize="small" />
//             </IconButton>

//             <IconButton
//               size="small"
//               component={MuiLink}
//               href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
//               target="_blank"
//               rel="noopener"
//               sx={{ color: "inherit" }}
//             >
//               <LinkedInIcon fontSize="small" />
//             </IconButton>

//             <IconButton
//               size="small"
//               component={MuiLink}
//               href="mailto:alan23bh@gmail.com.com"
//               sx={{ color: "inherit" }}
//             >
//               <MailOutlineIcon fontSize="small" />
//             </IconButton>
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }
"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: { xs: 4, md: 5 },
        bgcolor: "#5F6F65",
        color: "#F8FAF8",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            spacing={3}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  mb: 0.75,
                }}
              >
                Atlas Grooming
              </Typography>

              <Typography
                sx={{
                  maxWidth: 520,
                  color: "rgba(248,250,248,0.78)",
                  lineHeight: 1.8,
                }}
              >
                Premium grooming essentials for skin, beard, and hair — designed
                with a modern, clean, everyday approach.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                component={MuiLink}
                href="https://github.com/Alan23bh"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "inherit",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.14)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                component={MuiLink}
                href="https://www.linkedin.com/in/alan-hernandez-aa8458326/"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "inherit",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.14)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                size="small"
                component={MuiLink}
                href="mailto:alan23bh@gmail.com"
                sx={{
                  color: "inherit",
                  bgcolor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.14)",
                  },
                }}
              >
                <MailOutlineIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              pt: 2.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(248,250,248,0.72)",
                fontSize: 14,
              }}
            >
              © {year} Atlas Grooming. Built with Next.js, TypeScript, MUI, and
              Supabase.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
