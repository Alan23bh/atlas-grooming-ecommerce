// "use client";

// import Link from "next/link";
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Stack,
//   Toolbar,
// } from "@mui/material";

// export default function HomePage() {
//   return (
//     <>
//       <Box
//         sx={{
//           minHeight: "calc(100vh - 64px)", // adjust if your Navbar height differs
//           display: "flex",
//           alignItems: "center",
//           background: "linear-gradient(180deg, #F7FAFF 0%, #EEF4FF 100%)",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Stack spacing={3} sx={{ maxWidth: 640 }}>
//             <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
//               Next-Shop
//             </Typography>

//             <Typography variant="h6" color="text.secondary">
//               Curated picks. Clean design. Fast checkout. Built with Next.js +
//               MUI.
//             </Typography>

//             <Stack direction="row" spacing={2}>
//               <Button
//                 component={Link}
//                 href="/products"
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   px: 3,
//                   color: "primary.contrastText",
//                 }}
//               >
//                 Shop Products
//               </Button>

//               <Button
//                 component={Link}
//                 href="/products"
//                 variant="outlined"
//                 size="large"
//                 sx={{ px: 3 }}
//               >
//                 Browse Categories
//               </Button>
//             </Stack>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

const featuredProducts = [
  {
    name: "Daily Face Cleanser",
    price: "$24",
    description:
      "A gentle everyday cleanser that removes buildup without drying the skin.",
    badge: "Best Seller",
    image: "/products/minimalskincare.jpg",
  },
  {
    name: "Matte Hair Clay",
    price: "$16",
    description:
      "Medium hold, natural finish, and easy texture for a clean modern look.",
    badge: "Barber Favorite",
    image: "/products/hair-clay.jpg",
  },
  {
    name: "Beard Oil — Cedarwood",
    price: "$18",
    description:
      "Softens coarse hair, reduces dryness, and leaves a subtle cedarwood finish.",
    badge: "New Arrival",
    image: "/products/beard-oil.jpg",
  },
];

const brandPoints = [
  {
    title: "Built for everyday routines",
    text: "Straightforward essentials designed for men who want simple, effective grooming.",
  },
  {
    title: "Premium feel, no guesswork",
    text: "Clean formulations, modern presentation, and products that feel believable and curated.",
  },
  {
    title: "From shave to skincare",
    text: "A focused collection for skin, beard, and hair care — all under one brand story.",
  },
];

export default function HomePage() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F4F7FB 0%, #EEF2F7 100%)",
      }}
    >
      <Box
        sx={{
          minHeight: { xs: "auto", md: "78vh" },
          display: "flex",
          alignItems: "center",
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3.5}>
                <Chip
                  label="Atlas Grooming"
                  sx={{
                    width: "fit-content",
                    fontWeight: 700,
                    bgcolor: "rgba(20, 32, 56, 0.08)",
                    color: "#1E2A3A",
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.05,
                    color: "#142038",
                    fontSize: { xs: "2.6rem", md: "4.4rem" },
                    letterSpacing: "-0.03em",
                    maxWidth: 620,
                  }}
                >
                  Men’s grooming essentials with a cleaner, more modern edge.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(20, 32, 56, 0.72)",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    maxWidth: 580,
                  }}
                >
                  Atlas Grooming is a premium daily-care brand focused on
                  skincare, beard care, and hair styling products that feel
                  elevated, useful, and easy to trust.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    href="/products"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 3.5,
                      py: 1.4,
                      borderRadius: 999,
                      textTransform: "none",
                      fontWeight: 700,
                      bgcolor: "#1E2A3A",
                      "&:hover": {
                        bgcolor: "#111A2C",
                      },
                    }}
                  >
                    Shop the Collection
                  </Button>

                  <Button
                    component={Link}
                    href="/products"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 3.5,
                      py: 1.4,
                      borderRadius: 999,
                      textTransform: "none",
                      fontWeight: 700,
                      borderColor: "rgba(20, 32, 56, 0.2)",
                      color: "#1E2A3A",
                    }}
                  >
                    Browse Best Sellers
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  minHeight: { xs: 320, md: 520 },
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg, #6C7C72 0%, #49584E 100%)",
                  boxShadow: "0 24px 60px rgba(25, 35, 52, 0.16)",
                  position: "relative",
                  overflow: "hidden",
                  p: 4,
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 32,
                    right: 32,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    filter: "blur(8px)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    left: -20,
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    filter: "blur(12px)",
                  }}
                />

                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 360,
                    color: "white",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      opacity: 0.8,
                      mb: 1.5,
                    }}
                  >
                    Atlas Signature Routine
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.1,
                      mb: 1.5,
                    }}
                  >
                    Designed to look sharp on the shelf and work hard in real
                    life.
                  </Typography>

                  <Typography
                    sx={{
                      opacity: 0.86,
                      lineHeight: 1.7,
                    }}
                  >
                    A more believable men’s grooming brand starts with better
                    storytelling, stronger presentation, and a tighter product
                    mix.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            spacing={2}
            sx={{ mb: 5 }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: "#5E6B7E",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                }}
              >
                Featured Products
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: "#142038", mt: 1 }}
              >
                Start with the essentials.
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/products"
              variant="text"
              sx={{
                textTransform: "none",
                fontWeight: 700,
                color: "#1E2A3A",
              }}
            >
              View all products
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {featuredProducts.map((product) => (
              <Grid key={product.name} size={{ xs: 12, md: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    overflow: "hidden",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(20, 32, 56, 0.06)",
                    boxShadow: "0 18px 40px rgba(25, 35, 52, 0.06)",
                  }}
                >
                  <Box
                    sx={{
                      height: 220,
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      p: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.28), transparent)",
                      }}
                    />

                    <Chip
                      label={product.badge}
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        bgcolor: "rgba(255,255,255,0.88)",
                        color: "#1E2A3A",
                        fontWeight: 700,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1.5}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#142038" }}
                      >
                        {product.name}
                      </Typography>

                      <Typography sx={{ color: "#5E6B7E", lineHeight: 1.75 }}>
                        {product.description}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: "#142038",
                          pt: 0.5,
                        }}
                      >
                        {product.price}
                      </Typography>

                      <Button
                        component={Link}
                        href="/products"
                        variant="contained"
                        sx={{
                          mt: 1,
                          borderRadius: 999,
                          textTransform: "none",
                          fontWeight: 700,
                          bgcolor: "#1E2A3A",
                          "&:hover": {
                            bgcolor: "#111A2C",
                          },
                        }}
                      >
                        Shop now
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ mb: 5 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#5E6B7E",
                fontWeight: 700,
                letterSpacing: "0.16em",
              }}
            >
              Why Atlas
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#142038",
              }}
            >
              A stronger brand story than just “products for sale.”
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {brandPoints.map((point) => (
              <Grid key={point.title} size={{ xs: 12, md: 4 }}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(20, 32, 56, 0.06)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#142038", mb: 1.25 }}
                    >
                      {point.title}
                    </Typography>
                    <Typography sx={{ color: "#5E6B7E", lineHeight: 1.8 }}>
                      {point.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
