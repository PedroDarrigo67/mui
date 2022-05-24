// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// eslint-disable-next-line import/no-unresolved
import MKBox from "components/MKBox";
// eslint-disable-next-line import/no-unresolved
import MKTypography from "components/MKTypography";

// Presentation page components
import HorizontalTeamCard from "../../../examples/Cards/TeamCards/HorizontalTeamCard";

// Data
// import data from "pages/Presentation/sections/data/designBlocksData";
import { usePosts } from "../../../context/postContext";
import image1 from "../../../image/casa1.gif";

function DesignBlocks() {
  const { posts } = usePosts();

  return (
    <MKBox component="section" my={1} py={1}>
      <MKTypography variant="h4" fontWeight="bold" my={1} py={1}>
        Listado de Propiedades
      </MKTypography>
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <Grid container key={post._id}>
          <HorizontalTeamCard
            image={image1}
            image1={image1}
            name={post.title}
            position={{
              color: "info",
              label: "nomvre",
            }}
            description={post.description}
          />
        </Grid>
      ))}{" "}
    </MKBox>
  );
}

export default DesignBlocks;
