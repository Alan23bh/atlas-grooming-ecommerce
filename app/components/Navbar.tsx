// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Badge,
//   Box,
//   Button,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useCart } from "../context/CartContext";

// export default function Navbar() {
//   const { state } = useCart();
//   const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <AppBar position="sticky">
//       <Toolbar
//         sx={{
//           color: "primary.contrastText",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
//               <Image
//                 src="/logo-white.svg"
//                 alt="Next-Shop"
//                 width={120}
//                 height={28}
//                 priority
//               />
//             </Box>
//           </Link>

//           <Button
//             component={Link}
//             href="/products"
//             sx={{
//               letterSpacing: "0.3px",
//               fontSize: 17,
//               textTransform: "none",
//               fontWeight: 600,
//               px: 2.5,
//               py: 0.75,
//               borderRadius: 999,
//               backgroundColor: "rgba(255,255,255,0.15)",
//               color: "white",
//               transition: "background-color 0.2s ease",
//               "&:hover": {
//                 backgroundColor: "rgba(255,255,255,0.25)",
//               },
//             }}
//           >
//             Products
//           </Button>
//         </Box>
//         <Box sx={{ flexGrow: 1 }} />

//         <Link href="/cart">
//           <IconButton size="large" color="inherit">
//             <Badge badgeContent={totalItems} color="secondary">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Link>
//       </Toolbar>
//     </AppBar>
//   );
// }
"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#5F6F65",
        color: "#F8FAF8",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 30px rgba(24, 31, 28, 0.12)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 76,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(6px)",
                }}
              >
                A
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                  }}
                >
                  Atlas Grooming
                </Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.72)",
                    mt: 0.35,
                  }}
                >
                  Modern essentials
                </Typography>
              </Box>
            </Box>
          </Link>

          <Button
            component={Link}
            href="/products"
            sx={{
              ml: { xs: 0.5, md: 2 },
              letterSpacing: "0.02em",
              fontSize: 16,
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              py: 0.85,
              borderRadius: 999,
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            Shop
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Link href="/cart" style={{ color: "inherit" }}>
          <IconButton
            size="large"
            sx={{
              color: "#FFFFFF",
              bgcolor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.14)",
              },
            }}
          >
            <Badge
              badgeContent={totalItems}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#DDE5DE",
                  color: "#223127",
                  fontWeight: 700,
                },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
