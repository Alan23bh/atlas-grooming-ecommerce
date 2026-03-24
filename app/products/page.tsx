// "use client";
// import { useState, useMemo, useEffect } from "react";
// import AddToCartButton from "../products/[id]/AddToCartButton";
// import { Product } from "../types/Product";

// import {
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   Box,
//   Paper,
//   List,
//   ListItemButton,
//   ListItemText,
//   Skeleton,
//   Alert,
// } from "@mui/material";

// import { useRouter } from "next/navigation";
// import { getProducts } from "../lib/api";

// const categories = [
//   { label: "All products", value: "all" },
//   { label: "Skincare", value: "skincare" },
//   { label: "Beard", value: "beard" },
//   { label: "Hair", value: "hair" },
//   { label: "Kits", value: "kits" },
// ];
// export default function ProductsPage() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState<string>("all");
//   const [products, setProducts] = useState<Product[]>([]);
//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [error, setError] = useState<string>("");

//   // const products: Product[] = productsData;

//   const fetchAllProducts = async () => {
//     setStatus("loading");
//     setError("");

//     try {
//       const data = await getProducts();
//       setProducts(data);
//       setStatus("success");
//     } catch (e: any) {
//       setStatus("error");
//       setError(e?.message || "Something went wrong loading products.");
//     }
//   };

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const filteredProducts = useMemo(
//     () =>
//       selectedCategory === "all"
//         ? products
//         : products.filter((p) => p.category === selectedCategory),
//     [products, selectedCategory],
//   );

//   function ProductsGridSkeleton() {
//     return (
//       <Box
//         sx={{
//           flexGrow: 1,
//           borderRadius: 5,
//           background: "linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%)",
//           backdropFilter: "blur(6px)",
//           border: "1px solid rgba(15, 23, 42, 0.06)",
//           p: { xs: 2, md: 4 },
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(2, 1fr)",
//           },
//           gap: { xs: 2, sm: 3 },
//           alignItems: "stretch",
//         }}
//       >
//         {Array.from({ length: 6 }).map((_, i) => (
//           <Card
//             key={i}
//             sx={{
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               borderRadius: 5,
//               boxShadow: 5,
//             }}
//           >
//             <Skeleton variant="rectangular" height={160} />
//             <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
//               <Skeleton width="85%" sx={{ mx: "auto", mb: 1 }} />
//               <Skeleton width="55%" sx={{ mx: "auto" }} />
//             </CardContent>
//             <Box sx={{ px: 2, pb: 2 }}>
//               <Skeleton variant="rounded" height={36} />
//             </Box>
//           </Card>
//         ))}
//       </Box>
//     );
//   }

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         py: { xs: 3, md: 6 },
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h1"
//         gutterBottom
//         sx={{ textAlign: "center", mb: { xs: 2, md: 4 } }}
//       >
//         Products
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: { xs: 2, md: 3 },
//           alignItems: { xs: "stretch", md: "flex-start" },
//         }}
//       >
//         {/* Sidebar */}
//         <Paper
//           elevation={5}
//           sx={{
//             color: "text.primary",
//             background: "background.paper",
//             width: { xs: "100%", md: 220 },
//             flexShrink: 0,
//             p: 2,
//             borderRadius: 3,
//             position: { xs: "static", md: "sticky" },
//             top: 90,
//           }}
//         >
//           <Typography
//             variant="h6"
//             gutterBottom
//             sx={{ textAlign: "center", fontSize: { xs: 16, md: 18 } }}
//           >
//             Categories
//           </Typography>

//           <List
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "row", md: "column" },
//               gap: { xs: 1, md: 0 },
//               flexWrap: { xs: "wrap", md: "nowrap" },
//               justifyContent: { xs: "center", md: "center" },
//               alignItems: { xs: "center", md: "center" },
//               overflowX: { xs: "visible", md: "visible" },
//               pb: { xs: 1, md: 0 },
//               px: { xs: 1.25, md: 2 },
//               py: { xs: 0.5, md: 1 },
//               "&::-webkit-scrollbar": { display: "none" },
//             }}
//           >
//             {categories.map((cat) => (
//               <ListItemButton
//                 key={cat.value}
//                 selected={selectedCategory === cat.value}
//                 onClick={() => setSelectedCategory(cat.value)}
//                 sx={{
//                   borderRadius: 2,
//                   mb: { xs: 0, md: 0.5 },
//                   flexShrink: 0,
//                   px: { xs: 1.5, md: 2 },
//                   py: { xs: 0.75, md: 1 },
//                 }}
//               >
//                 <ListItemText
//                   sx={{ textAlign: "center" }}
//                   primary={cat.label}
//                   primaryTypographyProps={{
//                     noWrap: true,
//                     fontSize: { xs: 14, md: 15 },
//                   }}
//                 />
//               </ListItemButton>
//             ))}
//           </List>
//         </Paper>

//         {/* Products area */}
//         {status === "loading" && <ProductsGridSkeleton />}

//         {status === "error" && (
//           <Box sx={{ flexGrow: 1 }}>
//             <Alert
//               severity="error"
//               action={
//                 <Button color="inherit" size="small" onClick={fetchAllProducts}>
//                   Retry
//                 </Button>
//               }
//               sx={{ borderRadius: 3 }}
//             >
//               {error || "Couldnt load products."}
//             </Alert>
//           </Box>
//         )}

//         {status === "success" && filteredProducts.length === 0 && (
//           <Box sx={{ flexGrow: 1 }}>
//             <Alert severity="info" sx={{ borderRadius: 3 }}>
//               No products found for this category.
//             </Alert>
//           </Box>
//         )}

//         {status === "success" && filteredProducts.length > 0 && (
//           <Box
//             sx={{
//               flexGrow: 1,
//               borderRadius: 5,
//               background: "rgba(255,255,255,0.7)",
//               backdropFilter: "blur(6px)",
//               border: "1px solid rgba(15, 23, 42, 0.06)",
//               p: { xs: 2, md: 4 },
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2, 1fr)",
//                 md: "repeat(2, 1fr)",
//               },
//               gap: { xs: 2, sm: 3 },
//               alignItems: "stretch",
//             }}
//           >
//             {filteredProducts.map((p) => (
//               <Card
//                 key={p.id}
//                 onClick={() => router.push(`/products/${p.id}`)}
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   transition: "transform 150ms ease, box-shadow 150ms ease",
//                   boxShadow: 5,
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: 4,
//                   },
//                   borderRadius: 5,
//                   cursor: "pointer",
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   image={p.image_url}
//                   alt={p.name}
//                   sx={{
//                     objectFit: "contain",
//                     height: { xs: 140, sm: 150 },
//                     p: 2,
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     color: "text.primary",
//                     flexGrow: 1,
//                     textAlign: "center",
//                     px: { xs: 1.5, md: 2 },
//                   }}
//                 >
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       display: "-webkit-box",
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                       mb: 1,
//                       minHeight: 40,
//                       fontSize: { xs: 13, sm: 14 },
//                     }}
//                   >
//                     {p.name}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{ fontWeight: 600, fontSize: { xs: 16, sm: 18 } }}
//                   >
//                     ${p.price.toFixed(2)}
//                   </Typography>
//                 </CardContent>

//                 <Box
//                   sx={{ px: 2, pb: 2, pt: 0 }}
//                   onClick={(e) => e.stopPropagation()} // prevents card click when pressing AddToCart
//                 >
//                   <AddToCartButton product={p} />
//                 </Box>
//               </Card>
//             ))}
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// }
"use client";

import { useState, useMemo, useEffect } from "react";
import AddToCartButton from "../products/[id]/AddToCartButton";
import { Product } from "../types/Product";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Skeleton,
  Alert,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { getProducts } from "../lib/api";

const categories = [
  { label: "All products", value: "all" },
  { label: "Skincare", value: "skincare" },
  { label: "Beard", value: "beard" },
  { label: "Hair", value: "hair" },
  { label: "Kits", value: "kits" },
];

export default function ProductsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const fetchAllProducts = async () => {
    setStatus("loading");
    setError("");

    try {
      const data = await getProducts();
      setProducts(data);
      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Something went wrong loading products.");
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [products, selectedCategory],
  );

  function formatCategoryLabel(value: string) {
    if (value === "all") return "All products";
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function ProductsGridSkeleton() {
    return (
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: 6,
          background: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(20, 32, 56, 0.06)",
          p: { xs: 2, md: 3 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Card
            key={i}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              border: "1px solid rgba(20, 32, 56, 0.06)",
              boxShadow: "0 18px 40px rgba(25, 35, 52, 0.06)",
            }}
          >
            <Skeleton variant="rectangular" height={220} />
            <CardContent>
              <Skeleton width="55%" sx={{ mb: 1.5 }} />
              <Skeleton width="80%" sx={{ mb: 1 }} />
              <Skeleton width="45%" />
            </CardContent>
            <Box sx={{ px: 2, pb: 2 }}>
              <Skeleton variant="rounded" height={42} />
            </Box>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 4, md: 6 },
      }}
    >
      <Stack spacing={1.5} sx={{ mb: { xs: 3, md: 5 }, textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{
            color: "#5E6B7E",
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          Atlas Collection
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.3rem", md: "3.2rem" },
            fontWeight: 800,
            color: "#142038",
            letterSpacing: "-0.03em",
          }}
        >
          Products
        </Typography>

        <Typography
          sx={{
            maxWidth: 720,
            mx: "auto",
            color: "#5E6B7E",
            lineHeight: 1.8,
            fontSize: { xs: 15, md: 17 },
          }}
        >
          Everyday grooming essentials for skin, beard, hair, and complete
          routine kits.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, md: 3 },
          alignItems: { xs: "stretch", lg: "flex-start" },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: { xs: "100%", lg: 240 },
            flexShrink: 0,
            p: 2.25,
            borderRadius: 5,
            position: { xs: "static", lg: "sticky" },
            top: 92,
            bgcolor: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(20, 32, 56, 0.06)",
            boxShadow: "0 18px 40px rgba(25, 35, 52, 0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              color: "#142038",
              mb: 1.5,
            }}
          >
            Categories
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "row", lg: "column" },
              gap: 1,
              flexWrap: { xs: "wrap", lg: "nowrap" },
              justifyContent: { xs: "center", lg: "stretch" },
              p: 0,
            }}
          >
            {categories.map((cat) => {
              const selected = selectedCategory === cat.value;

              return (
                <ListItemButton
                  key={cat.value}
                  selected={selected}
                  onClick={() => setSelectedCategory(cat.value)}
                  sx={{
                    borderRadius: 999,
                    px: 2,
                    py: 1,
                    justifyContent: "center",
                    border: selected
                      ? "1px solid rgba(95, 111, 101, 0.22)"
                      : "1px solid transparent",
                    bgcolor: selected
                      ? "rgba(95, 111, 101, 0.12)"
                      : "transparent",
                    color: "#142038",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: selected
                        ? "rgba(95, 111, 101, 0.16)"
                        : "rgba(20, 32, 56, 0.04)",
                    },
                    "&.Mui-selected": {
                      bgcolor: "rgba(95, 111, 101, 0.12)",
                    },
                    "&.Mui-selected:hover": {
                      bgcolor: "rgba(95, 111, 101, 0.16)",
                    },
                  }}
                >
                  <ListItemText
                    primary={cat.label}
                    sx={{ textAlign: "center", m: 0 }}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: selected ? 700 : 500,
                      noWrap: true,
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Paper>

        {status === "loading" && <ProductsGridSkeleton />}

        {status === "error" && (
          <Box sx={{ flexGrow: 1 }}>
            <Alert
              severity="error"
              action={
                <Button color="inherit" size="small" onClick={fetchAllProducts}>
                  Retry
                </Button>
              }
              sx={{ borderRadius: 4 }}
            >
              {error || "Couldn't load products."}
            </Alert>
          </Box>
        )}

        {status === "success" && filteredProducts.length === 0 && (
          <Box sx={{ flexGrow: 1 }}>
            <Alert severity="info" sx={{ borderRadius: 4 }}>
              No products found for this category.
            </Alert>
          </Box>
        )}

        {status === "success" && filteredProducts.length > 0 && (
          <Box sx={{ flexGrow: 1 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={1.5}
              sx={{ mb: 2.5 }}
            >
              <Typography
                sx={{
                  color: "#5E6B7E",
                  fontWeight: 600,
                }}
              >
                Showing {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </Typography>

              <Chip
                label={formatCategoryLabel(selectedCategory)}
                sx={{
                  bgcolor: "rgba(20, 32, 56, 0.08)",
                  color: "#1E2A3A",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Box
              sx={{
                borderRadius: 6,
                background: "rgba(255,255,255,0.56)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(20, 32, 56, 0.06)",
                p: { xs: 2, md: 3 },
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                },
                gap: { xs: 2, md: 3 },
                alignItems: "stretch",
              }}
            >
              {filteredProducts.map((p) => (
                <Card
                  key={p.id}
                  onClick={() => router.push(`/products/${p.id}`)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                    border: "1px solid rgba(20, 32, 56, 0.06)",
                    boxShadow: "0 18px 40px rgba(25, 35, 52, 0.06)",
                    borderRadius: 5,
                    cursor: "pointer",
                    bgcolor: "#FFFFFF",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 24px 50px rgba(25, 35, 52, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: 250,
                      backgroundImage: `url(${p.image_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "#E8ECE8",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.12), transparent)",
                      }}
                    />

                    <Chip
                      label={
                        p.category.charAt(0).toUpperCase() + p.category.slice(1)
                      }
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        zIndex: 2,
                        bgcolor: "rgba(255,255,255,0.88)",
                        color: "#1E2A3A",
                        fontWeight: 700,
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      px: 2.25,
                      py: 2.25,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#142038",
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#5E6B7E",
                        fontSize: 15,
                        lineHeight: 1.75,
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: 52,
                      }}
                    >
                      {p.description}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "#142038",
                      }}
                    >
                      ${p.price.toFixed(2)}
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{ px: 2.25, pb: 2.25, pt: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <AddToCartButton product={p} />
                  </Box>
                </Card>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}
