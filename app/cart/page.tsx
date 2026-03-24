// "use client";
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Stack,
//   Button,
//   Avatar,
//   ListItemAvatar,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useCart } from "../context/CartContext";
// import { Add, Remove } from "@mui/icons-material";
// import { useNotification } from "../context/NotificationContext";

// export default function CartPage() {
//   const { state, removeFromCart, clearCart, increment, decrement } = useCart();
//   const { notify } = useNotification();

//   const total = state.items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom textAlign={"center"}>
//         Cart
//       </Typography>

//       {state.items.length === 0 ? (
//         <Typography sx={{ pt: 4, textAlign: "center", fontSize: 18 }}>
//           Your cart is empty.
//         </Typography>
//       ) : (
//         <>
//           <List>
//             {state.items.map((item) => (
//               <ListItem
//                 key={item.id}
//                 secondaryAction={
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <IconButton size="small" onClick={() => decrement(item.id)}>
//                       <Remove fontSize="small" />
//                     </IconButton>

//                     <Typography>{item.quantity}</Typography>

//                     <IconButton size="small" onClick={() => increment(item.id)}>
//                       <Add fontSize="small" />
//                     </IconButton>

//                     <IconButton
//                       edge="end"
//                       aria-label="delete"
//                       onClick={() => {
//                         (removeFromCart(item.id),
//                           notify("Item removed from cart", "error"));
//                       }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </Stack>
//                 }
//               >
//                 {/* IMAGE */}
//                 <ListItemAvatar>
//                   <Avatar
//                     variant="square"
//                     src={item.image_url}
//                     alt={item.name}
//                     sx={{
//                       width: 48,
//                       height: 48,
//                       mr: 1,
//                       bgcolor: "transparent",
//                       borderRadius: 1,
//                     }}
//                   />
//                 </ListItemAvatar>

//                 {/* title + price */}

//                 <ListItemText
//                   primary={item.name}
//                   secondary={`$${(item.price * item.quantity).toFixed(2)}`}
//                 />
//               </ListItem>
//             ))}
//           </List>

//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             justifyContent="space-between"
//             alignItems={{ xs: "flex-start", sm: "center" }}
//             gap={2}
//             mt={2}
//           >
//             <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
//             <Button
//               variant="outlined"
//               onClick={() => {
//                 clearCart();
//                 notify("Cart cleared", "error");
//               }}
//             >
//               Clear cart
//             </Button>
//           </Stack>
//         </>
//       )}
//     </Container>
//   );
// }
"use client";

import Link from "next/link";
import {
  Container,
  Typography,
  List,
  ListItem,
  IconButton,
  Stack,
  Button,
  Avatar,
  ListItemAvatar,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../context/CartContext";
import { useNotification } from "../context/NotificationContext";

export default function CartPage() {
  const { state, removeFromCart, clearCart, increment, decrement } = useCart();
  const { notify } = useNotification();

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = state.items.length > 0 ? 6.99 : 0;
  const total = subtotal + shipping;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
        <Typography
          variant="overline"
          sx={{
            color: "#5E6B7E",
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          Atlas Checkout
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.3rem", md: "3rem" },
            fontWeight: 800,
            color: "#142038",
            letterSpacing: "-0.03em",
            mt: 1,
          }}
        >
          Cart
        </Typography>
      </Box>

      {state.items.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            maxWidth: 760,
            mx: "auto",
            p: { xs: 4, md: 6 },
            textAlign: "center",
            borderRadius: 6,
            bgcolor: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(20, 32, 56, 0.06)",
            boxShadow: "0 18px 40px rgba(25, 35, 52, 0.05)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 700,
              color: "#142038",
              mb: 1,
            }}
          >
            Your cart is empty.
          </Typography>

          <Typography
            sx={{
              color: "#5E6B7E",
              lineHeight: 1.8,
              maxWidth: 480,
              mx: "auto",
              mb: 3,
            }}
          >
            Explore the Atlas collection and add a few essentials to start your
            routine.
          </Typography>

          <Button
            component={Link}
            href="/products"
            variant="contained"
            sx={{
              px: 3,
              py: 1.25,
              bgcolor: "#1E2A3A",
              "&:hover": {
                bgcolor: "#111A2C",
              },
            }}
          >
            Shop products
          </Button>
        </Paper>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.5fr 0.9fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: 6,
              bgcolor: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(20, 32, 56, 0.06)",
              boxShadow: "0 18px 40px rgba(25, 35, 52, 0.05)",
              overflow: "hidden",
            }}
          >
            <Box sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#142038",
                  mb: 2,
                }}
              >
                Items in your cart
              </Typography>

              <List disablePadding>
                {state.items.map((item, index) => (
                  <Box key={item.id}>
                    <ListItem
                      disableGutters
                      sx={{
                        py: 2,
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <ListItemAvatar sx={{ minWidth: "auto" }}>
                        <Avatar
                          variant="rounded"
                          src={item.image_url || "/products/fallback.jpg"}
                          alt={item.name}
                          imgProps={{
                            onError: (e) => {
                              e.currentTarget.src = "/products/fallback.jpg";
                            },
                          }}
                          sx={{
                            width: 88,
                            height: 88,
                            mr: 0,
                            bgcolor: "#E8ECE8",
                            borderRadius: 3,
                          }}
                        />
                      </ListItemAvatar>

                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: "#142038",
                            fontSize: { xs: 16, md: 18 },
                            mb: 0.5,
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#5E6B7E",
                            fontSize: 14,
                            mb: 1,
                          }}
                        >
                          ${item.price.toFixed(2)} each
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                          <IconButton
                            size="small"
                            onClick={() => decrement(item.id)}
                            sx={{
                              border: "1px solid rgba(20, 32, 56, 0.08)",
                            }}
                          >
                            <Remove fontSize="small" />
                          </IconButton>

                          <Typography
                            sx={{
                              minWidth: 20,
                              textAlign: "center",
                              fontWeight: 700,
                              color: "#142038",
                            }}
                          >
                            {item.quantity}
                          </Typography>

                          <IconButton
                            size="small"
                            onClick={() => increment(item.id)}
                            sx={{
                              border: "1px solid rgba(20, 32, 56, 0.08)",
                            }}
                          >
                            <Add fontSize="small" />
                          </IconButton>
                        </Stack>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                          minHeight: 88,
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            removeFromCart(item.id);
                            notify("Item removed from cart", "error");
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>

                        <Typography
                          sx={{
                            fontWeight: 800,
                            color: "#142038",
                            fontSize: "1.05rem",
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </ListItem>

                    {index < state.items.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              borderRadius: 6,
              bgcolor: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(20, 32, 56, 0.06)",
              boxShadow: "0 18px 40px rgba(25, 35, 52, 0.05)",
              p: { xs: 2.5, md: 3 },
              position: { xs: "static", lg: "sticky" },
              top: 92,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#142038",
                mb: 2.5,
              }}
            >
              Order summary
            </Typography>

            <Stack spacing={1.5}>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#5E6B7E" }}>Subtotal</Typography>
                <Typography sx={{ color: "#142038", fontWeight: 600 }}>
                  ${subtotal.toFixed(2)}
                </Typography>
              </Stack>

              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "#5E6B7E" }}>Shipping</Typography>
                <Typography sx={{ color: "#142038", fontWeight: 600 }}>
                  ${shipping.toFixed(2)}
                </Typography>
              </Stack>

              <Divider sx={{ my: 1 }} />

              <Stack direction="row" justifyContent="space-between">
                <Typography
                  sx={{
                    color: "#142038",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  sx={{
                    color: "#142038",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                  }}
                >
                  ${total.toFixed(2)}
                </Typography>
              </Stack>
            </Stack>

            <Button
              component={Link}
              href="/checkout"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.35,
                bgcolor: "#1E2A3A",
                "&:hover": {
                  bgcolor: "#111A2C",
                },
              }}
            >
              Proceed to checkout
            </Button>

            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 1.5 }}
              onClick={() => {
                clearCart();
                notify("Cart cleared", "error");
              }}
            >
              Clear cart
            </Button>

            <Typography
              sx={{
                mt: 2,
                color: "#5E6B7E",
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              Taxes and final shipping options can be calculated during
              checkout.
            </Typography>
          </Paper>
        </Box>
      )}
    </Container>
  );
}
