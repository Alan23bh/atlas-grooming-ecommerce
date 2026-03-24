"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Paper,
  Stack,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNotification } from "../context/NotificationContext";

type FormValues = {
  email: string;
  fullName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { state, clearCart } = useCart();
  const { notify } = useNotification();

  const [form, setForm] = useState<FormValues>({
    email: "",
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const subtotal = useMemo(
    () =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items],
  );

  const shipping = state.items.length > 0 ? 6.99 : 0;
  const total = subtotal + shipping;

  const handleChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const isValid =
    form.email.trim() &&
    form.fullName.trim() &&
    form.address.trim() &&
    form.city.trim() &&
    form.state.trim() &&
    form.zip.trim();

  const handlePlaceOrder = () => {
    if (state.items.length === 0) {
      notify("Your cart is empty.", "error");
      return;
    }

    if (!isValid) {
      notify("Please complete all checkout fields.", "error");
      return;
    }

    clearCart();
    notify("Order placed successfully.", "success");
    router.push("/checkout/success");
  };

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
            fontSize: { xs: "2.2rem", md: "3rem" },
            fontWeight: 800,
            color: "#142038",
            letterSpacing: "-0.03em",
            mt: 1,
          }}
        >
          Checkout
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.85fr" },
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
            p: { xs: 2.5, md: 3 },
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
            Shipping details
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Email"
              value={form.email}
              onChange={handleChange("email")}
              fullWidth
            />

            <TextField
              label="Full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              fullWidth
            />

            <TextField
              label="Address"
              value={form.address}
              onChange={handleChange("address")}
              fullWidth
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 0.8fr" },
                gap: 2,
              }}
            >
              <TextField
                label="City"
                value={form.city}
                onChange={handleChange("city")}
                fullWidth
              />

              <TextField
                label="State"
                value={form.state}
                onChange={handleChange("state")}
                fullWidth
              />

              <TextField
                label="ZIP"
                value={form.zip}
                onChange={handleChange("zip")}
                fullWidth
              />
            </Box>
          </Stack>
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

          <Stack spacing={1.5} sx={{ mb: 2.5 }}>
            {state.items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#142038",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5E6B7E",
                      fontSize: 14,
                      mt: 0.4,
                    }}
                  >
                    Qty {item.quantity}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#142038",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <Stack spacing={1.25}>
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
            onClick={handlePlaceOrder}
          >
            Place order
          </Button>

          <Typography
            sx={{
              mt: 2,
              color: "#5E6B7E",
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            Demo checkout only. Payment is not being processed yet.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
