import { Stack, Chip } from "@mui/material";

function Category() {
  const handleCategory = () => {
    console.log("clicked");
  };

  return (
    <Stack ml={10} direction="row" spacing={7}>
      <Chip
        variant="outlined"
        label="Today"
        onClick={handleCategory}
        sx={{
          fontSize: 14,
          paddingX: 1,
        }}
      />
      <Chip
        variant="outlined"
        label="This Week"
        onClick={handleCategory}
        sx={{
          fontSize: 14,
          paddingX: 1,
        }}
      />
      <Chip
        variant="outlined"
        label="Past"
        onClick={handleCategory}
        sx={{
          fontSize: 14,
          paddingX: 1,
        }}
      />
    </Stack>
  );
}

export default Category;
